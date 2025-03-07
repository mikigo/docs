---
Author: 海针
---

# youqu3中断任务续跑功能调研

## 1 问题

**背景现象：**

目前 `youqu3` 在进行测试过程当中会因为一些外在因素中断测试，例如：

* 异常中断：
  * 系统 Bug 导致随机出现系统待机、断电
  * 强制手动中断，例如连续触发 `ctrl+c`，框架未进行收尾动作

* 正常中断：
  * 流水线超时中断
  * 手动中断，等待框架进行收尾




**面临问题：**

* 继续测试：如果后续需要继续执行未执行的用例，要么全量重跑，要么则筛选未执行的用例继续执行。但当用例数量较大时，筛选用例显得 较为麻烦。
* 测试报告：
  * 异常中断：无法触发钩子生成测试汇总结果，需要手动统计较为麻烦。
  * 正常中断：有测试报告，但是第二次继续测试完成之后，需要手动收集两次测试结果并进行汇总。




## 2 现状

基于目前梳理出的问题，处理思路：

* 增加一个日志文件，实时记录用例执行过程，并在测试结束后汇总，独立于其他日志体系：
  * 当中断时能触发续跑，基于最后一条用例位置继续执行
  * 续跑完成后，统计测试结果汇总数据：总数/通过数/失败数/跳过数
* `youqu3 run` 命令后增加子参数，用于触发执行动作，目前计划实现3个子参数：
  * 参数1：开关参数，触发中断后续跑动作
  * 参数2：需传入`用例函数名`作为参数值，在该位置开始执行测试（与参数1互斥）
  * 参数3：需传入"`asc/desc`" 作为参数值，修改用例执行顺序，基于`用例编号`：升序/逆序执行

备注：参数2、参数3 作为实现参数1过程中的衍生参数，参数3 升序执行用例可使执行顺序与用例 py 文件顺序一致，调试时更为顺滑。



实现以上想法实现方案：

* 方案1：开发 `pytest` 插件，在 `youqu3` 环境依赖中增加，部署时自动安装，在关键位置进行调用。
* 方案2：基于 `pytest` 钩子函数，在`youqu3` 中各钩子内部直接实现功能。



以上均能达到目的，但从维护成本和实现效率的角度来说，现阶段直接在 `youqu3` 内部快速实现更为合理，而且以上功能可以归纳为用例执行控制相关功能，在框架内部实现也更合适。

退一步说，如果后续继续扩展的更丰富后，需要抽离成插件也可以，综合考虑所以最终决定采用方案2。



## 3 技术方案

方案在 `youqu3` 的执行流程如下：

![image1](/public/youqu3中断任务续跑功技术能调研_assets/image1.png)

<div style="text-align: center;">图1 执行流程</div>

### 3.1 整体设计

基于 `youqu3` 目前结构进行功能开发，主要涉及以下部分的修改：

1、命令行参数新增：基于新增功能，增加对应参数，涉及文件`cli.py`

2、参数异常校验：基于参数传递的值做异常判断，涉及文件`run.py`

3、钩子功能开发：在不同的钩子内部实现日志输出、用例列表重组、用例执行控制，涉及文件`plugin.py`



#### 3.1.1 命令行参数新增

在`cli.py` 增加3个参数，用于触发章节2中提到的对应功能，代码如下：

```python

......

@click.option("--start-case", default=None, type=click.STRING, help="从{用例函数名称}开始执行测试")
@click.option("--interrupt-continue", is_flag=True, default=False, type=click.BOOL, help="基于上一次中断的测试继续执行")
@click.option("--order-execution", default=None, type=click.STRING, help="基于测试用例编号位置执行测试 asc/desc")
def run(
        workdir,
        path,
        keywords,
        tags,
        setup_plan,
        slaves,
        txt,
        reruns,
        job_start,
        job_end,
        pytest_opt,
        record_failed_num,
        start_point,
        interrupt_continue,
        order_execution,
):
    """本地执行"""
    args = {
        "workdir": workdir,
        "path": path,
        "keywords": keywords,
        "tags": tags,
        "setup_plan": setup_plan,
        "slaves": slaves,
        "txt": txt,
        "reruns": reruns,
        "job_start": job_start,
        "job_end": job_end,
        "pytest_opt": pytest_opt,
        "record_failed_num": record_failed_num,
        "start_point": start_point,
        "interrupt_continue": interrupt_continue,
        "order_execution": order_execution,
    }
    from youqu3.driver.run import Run
    Run(**args).run()
```

以上代码实现增加 `youqu3` 命令行参数并增加 `help` 提示信息：

* 执行用例开始位置：--start-case {用例函数名称}
* 中断续跑：--interrupt-continue
* 执行用例顺序：--order_execution {升序/降序}



#### 3.1.2 参数异常校验

在`run.py`文件中在构造函数`__init__`中新增对象属性，同时在方法 `generate_cmd` 中进行命令组装，代码如下：

```python
    def generate_cmd(self):
        cmd = ["pytest"]
        
        ......
       
        if self.start_point:
            cmd.extend(["--start-case", f"{self.start_point}"])
        if self.interrupt_continue:
            cmd.extend(["--interrupt-continue"])
        if self.order_execution:
            cmd.extend(["--order-execution", f"{self.order_execution}"])
            
        ......
```

在 `run` 方法中增加参数值的异常校验，代码如下：

```python
    def run(self):
        
        ......
        
        if self.start_point is not None and self.interrupt_continue:
            raise FileNotFoundError("parameter mutual exclusion: --etsgo-start-point/--interrupt-continue")

        if self.order_execution is not None and self.interrupt_continue:
            raise FileNotFoundError("parameter mutual exclusion: --order-execution/--interrupt-continue")

        if self.order_execution is not None and self.order_execution not in ("asc", "desc"):
            raise ValueError("order-execution must be 'asc' or 'desc'")


        pytest.main(
            [i.strip("'") for i in self.generate_cmd()[1:]]
        )
        
        ......
```



以上便完成了参数相关的所有开发。



#### 3.1.3 钩子功能开发

在 `youqu3` 中钩子函数主要集中在文件`plugin.py` 中，所以后续的功能实现主要在这里完成。



##### 3.1.3.1 执行日志

该功能主要用于实时记录用例的执行结果，分别包括`setup`、`call`、`teardown` 三个阶段的结果，最小颗粒为函数。

也就是说在用例 `test_music_123456.py` 中存在多条用例：`test_music_123456_1`、 `test_music_123456_2`，在执行时都会被记录。



主要作用包括：

* 在测试中断后，能基于日志确定中断位置
* 基于日志能解析出最后一条执行的用例，并在续跑中当做标记，在执行前删除掉用例列表已经执行的部分
* 在续跑完成后，能整合之前中断的一次、多次续跑的测试结果，并给出汇总数据



完成以上功能开发，主要运用了以下钩子：

**pytest_addoption：** 定义新增的三个自定义参数

```python
def pytest_addoption(parser):
    parser.addoption("--noskip", action="store", default="", help="skip-xxx标签不生效")
    parser.addoption("--ifixed", action="store", default="", help="fixed-xxx标签不生效")
    parser.addoption("--start-case", action="store", default="", help="指定执行用例开始位置")
    parser.addoption("--interrupt-continue", action="store_true", default="", help="执行中断续跑")
    parser.addoption("--order-execution", action="store", default="", help="指定用例编号执行顺序")
```

**pytest_sessionstart：**日志文件初始化

```python
def pytest_sessionstart(session):
    logger("DEBUG")
    session.config.option.last_json_report_path = f"{session.fspath}/report/json/last_result.json"
    last_json_report = session.config.option.last_json_report_path
    case_order = session.config.getoption("--order-execution") or "pytest"
    start_case = session.config.getoption("--start-case") if session.config.getoption("--start-case") else "None"
    has_interrupt_continue = bool(session.config.getoption("--interrupt-continue"))

    start_time = datetime.now().strftime("%Y-%m-%d %H:%M:%S")

    log_data = {
        "user": getpass.getuser(),
        "ip": setting.HOST_IP ,
        "execution_order": case_order,
        "interrupt_continue": has_interrupt_continue,
        "start_case": start_case,
        "py_total_passed_failed_skipped": "",
        "fun_total_passed_failed_skipped": "",
        "start_time": start_time,
        "end_time": "",
        "test_cases": {}
    }

    os.makedirs(os.path.dirname(last_json_report), exist_ok=True)
    if has_interrupt_continue:
        if not exists(last_json_report):
            raise ValueError("中断续跑模式下，未找到上次执行结果日志文件，请检查！")
    else:
        with open(last_json_report, 'w', encoding="utf-8") as f:
            json.dump(log_data, f, indent=4)
```

**pytest_report_teststatus:** 实时记录用例执行结果

```python
def pytest_report_teststatus(report, config):
    last_json_report = config.option.last_json_report_path
    case_py_path = report.nodeid.split('::')[0]
    case_py = os.path.basename(case_py_path)

    case_fun = report.nodeid.split('::')[-1]
    case_when = report.when
    case_outcome = report.outcome

    with open(last_json_report, "r", encoding="utf-8") as f:
        data = json.load(f)

    py_case_log_text = {
        "py_path": case_py_path,
        "py_outcome": "",
        "case_fun_set": {}
    }

    if case_py not in data["test_cases"]:
        data["test_cases"][case_py] = py_case_log_text

    if case_fun not in data["test_cases"][case_py]["case_fun_set"]:
        data["test_cases"][case_py]["case_fun_set"][case_fun] = {}

    data["test_cases"][case_py]["case_fun_set"][case_fun][case_when] = case_outcome
    if case_when == "setup" and case_outcome == "skipped":
        data["test_cases"][case_py]["case_fun_set"][case_fun]["call"] = "skipped"
    elif case_when == "setup" and case_outcome == "failed":
        data["test_cases"][case_py]["case_fun_set"][case_fun]["call"] = "failed"

    if case_when == "teardown":
        setup_result = data["test_cases"][case_py]["case_fun_set"][case_fun]["setup"]
        call_result = data["test_cases"][case_py]["case_fun_set"][case_fun]["call"]
        teardown_result = data["test_cases"][case_py]["case_fun_set"][case_fun]["teardown"]

        fun_outcome = "failed"
        if setup_result == "skipped":
            fun_outcome = "skipped"
        if setup_result == "passed" and call_result == "passed" and teardown_result == "passed":
            fun_outcome = "passed"
        if teardown_result == "failed":
            if call_result == "passed":
                fun_outcome = "passed"
        data["test_cases"][case_py]["case_fun_set"][case_fun]["fun_outcome"] = fun_outcome

    with open(last_json_report, 'w', encoding="utf-8") as f:
        json.dump(data, f, indent=4)

```

**pytest_sessionfinish：** 测试完成基于日志，输出汇总数据：total、passed、failed、skipped

```python
def pytest_sessionfinish(session):
    last_json_report = session.config.option.last_json_report_path
    with open(last_json_report, "r", encoding="utf-8") as f:
        data = json.load(f)

    end_time = datetime.now().strftime("%Y-%m-%d %H:%M:%S")
    data["end_time"] = end_time

    for _, case_py in data["test_cases"].items():
        outcomes = [fun_outcome for fun_results in case_py["case_fun_set"].values() for fun_outcome in fun_results.values()]
        if "failed" in outcomes:
            case_py["py_outcome"] = "failed"
        elif "failed" not in outcomes and "skipped" in outcomes:
            case_py["py_outcome"] = "skipped"
        elif len(set(outcomes)) == 1 and "passed" in set(outcomes):
            case_py["py_outcome"] = "passed"

    py_test_results = [py_result["py_outcome"] for py_result in data["test_cases"].values()]
    fun_test_results = [fun_result["fun_outcome"] for py in data["test_cases"].values() for fun_result in
                        py["case_fun_set"].values()]

    py_total_num = len(py_test_results)
    py_passed_num = py_test_results.count("passed")
    py_failed_num = py_test_results.count("failed")
    py_skipped_num = py_test_results.count("skipped")

    fun_total_num = len(fun_test_results)
    fun_passed_num = fun_test_results.count("passed")
    fun_failed_num = fun_test_results.count("failed")
    fun_skipped_num = fun_test_results.count("skipped")

    data["py_total_passed_failed_skipped"] = f"{py_total_num}/{py_passed_num}/{py_failed_num}/{py_skipped_num}"
    data["fun_total_passed_failed_skipped"] = f"{fun_total_num}/{fun_passed_num}/{fun_failed_num}/{fun_skipped_num}"

    with open(last_json_report, "w", encoding="utf-8") as f:
        json.dump(data, f, indent=4)

    shutil.copy(last_json_report, f'{os.path.dirname(last_json_report)}/report_{setting.TIME_STRING}.json')
```



##### 3.1.3.2 中断续跑

该功能主要实现，测试中断之后的下一次测试会话，能继续执行未执行的用例，同时不会重复执行已执行的用例。

这里对`已执行`的定义是：完整执行了 `call`、`setup`、`teardown` 三个阶段的用例。



实现该功能的主要阶段是在`youqu3` 收集到所有需执行用例之后，对用例列表进行改写，基于 3.1.3.1 章节中实现的执行日志解析出最后一条执行的用例，以`下一条`用例作为起始点开始进行测试，主要在钩子`pytest_collection_modifyitems` 中实现。

```python
    has_interrupt_continue = config.getoption("--interrupt-continue")
    if has_interrupt_continue:
        with open(last_json_report, "r", encoding="utf-8") as f:
            data = json.load(f)
        order = data["execution_order"]
        if order == "desc" or order == "asc":
            sort_items_by_key(items, f"{order}")
        try:
            tmp_data = copy.deepcopy(data)
            last_case = tmp_data["test_cases"].popitem()[1]['case_fun_set'].popitem()[0]
        except KeyError:
            last_case = None
        if last_case:
            if f"<Function {last_case}>" == str(items[-1]):
                raise TypeError("最后一次测试未中断，无法进行续跑")
            else:
                section_items_by_case_function(items, last_case, 1)
        with open(last_json_report, "w", encoding="utf-8") as f:
            data["interrupt_continue"] = has_interrupt_continue
            json.dump(data, f, indent=4)
```

其中用例执行顺序是继承于最后一次测试，若解析出的用例与执行列表最后一条用例一致，则说明上一次的任务并未中断，则终止续跑。



##### 3.1.3.3 指定用例起始位置

该功能主要用于指定测试会话起始位置，基于传入的测试用例`函数名称`。

应介入阶段与`中断续跑`一致，所以同样在钩子`pytest_collection_modifyitems` 中实现。

```python
    start_case = config.getoption("--start-case")
    if start_case:
        section_items_by_case_function(items, start_case)
```

本章节与3.1.3.2章节在实现逻辑上相同，底层逻辑都是指定用例开始位置，只是不同功能开始的位置有所差异，所以均使用函数 `section_items_by_letsgo` 进行实现：

```python
def section_items_by_case_function(items, case_function, index_offset=None):
    """
    指定用例开始位置
    :param items: 用例列表
    :param case_function: 用例函数名称
    :param index_offset: id 偏移量
    :return: 修改后用例列表
    """
    index_to_remove = None
    index_offset = index_offset if index_offset is not None else 0
    for index, item in enumerate(items):
        if f"{case_function}>" in str(item):
            index_to_remove = index + index_offset
            break

    if index_to_remove is not None:
        items[:index_to_remove] = []
    else:
        raise ValueError(f"用例列表中未发现：{case_function}")
```

在指定开始位置后，若标记用例不存在与执行列表则会抛异常，终止测试。



需注意的是：用例 `test_music_123456.py` 中存在多条用例：`test_music_123456_1`、 `test_music_123456_2`

* 传值`test_music_123456_2` ：则只会执行`test_music_123456_2`
* 传值`test_music_123456`：报错，因为它并非函数名称，可替换为`test_music_123456_1`



##### 3.1.3.4 测试用例排序执行

该功能主要实现，将测试用例基于`用例编号` 为标记，升序 or 逆序执行，主要在钩子`pytest_collection_modifyitems` 中实现。

```python
    order_execution = config.getoption("--order-execution")
    if order_execution == "asc":
        sort_items_by_key(items, "asc")
    elif order_execution == "desc":
        sort_items_by_key(items, "desc")
```

函数`sort_items_by_letsgo` 用于接收`--order-execution`的值，对用例列表进行排序改写，函数代码如下：

```python
def sort_items_by_key(items, order="asc"):
    """
    对用例列表进行升序排列
    :param items: 用例列表
    :param order: asc/desc用例执行顺序
    :return: 排序后用例列表
    """

    def __get_case_id_and_count(item, _order=order):
        match = re.finditer(r'(\d+)', item.name)
        num = 0
        if match:
            num_list = []
            for i in match:
                num_list.append(i.group())
                num_str = ''.join(map(str, num_list))
                num = int(num_str)

        if match:
            if _order == "asc":
                return int(num)
            if _order == "desc":
                return -int(num)

    items.sort(key=__get_case_id_and_count)
```

该功能是其实只需要升序功能，因为升序之后测试结果与`pycharm` 中用例文件顺序一致，还可搭配指定位置进行批跑，在用例批量适配阶段定位和调试都非常顺滑。



## 4 实验验证

本章节将创建一个简易的 `youqu3` 工程，对新增参数进行实际效果验证，看是否满足预期。

### 4.1 创建工程与用例

用例目录结构如下：

```shell
......
├── mars
│   ├── case
│   │   ├── assert_res
│   │   │   └── README.md
│   │   ├── base_case.py
│   │   ├── __init__.py
│   │   ├── test_a.py             # setup通过、call通过、teardown通过
│   │   ├── test_b.py             # setup通过、call通过、teardown通过
│   │   ├── test_mycase_111.py    # setup失败、call失败、teardown通过
│   │   ├── test_mycase_11652.py  # setup通过、call通过、teardown失败
│   │   ├── test_mycase_11.py     # setup通过、call通过、teardown通过
│   │   ├── test_mycase_123.py    # setup跳过、call跳过、teardown通过
│   │   └── test_mycase_222.py    # 其中包含：
│   │									   # test_mycase_222_1 # setup跳过、call跳过、teardown通过
│   │									   # test_mycase_222_2 # setup通过、call失败、teardown通过
│   │									   # test_mycase_222_3 # setup通过、call通过、teardown通过
│   ├── __init__.py
│   └── method
......
```

该结构仅作为验证作用，覆盖了不同阶段的测试结果与顺序关系。



### 4.2 执行日志

执行命令：`youqu3 run -w mars`

查看日志 `report/logs/last_result.log` 内容:

```shell
{
    "user": "mars",
    "ip": "10.8.11.202",
    "execution_order": "pytest",
    "interrupt_continue": false,
    "start_case": "None",
    "py_total_passed_failed_skipped": "7/3/3/1",
    "fun_total_passed_failed_skipped": "9/5/2/2",
    "start_time": "2024-09-19 08:50:34",
    "end_time": "2024-09-19 08:51:24",
    "test_cases": {
        "test_a.py": {
            "py_path": "mars/case/test_a.py",
            "py_outcome": "passed",
            "case_fun_set": {
                "test_a": {
                    "setup": "passed",
                    "call": "passed",
                    "teardown": "passed",
                    "fun_outcome": "passed"
                }
            }
        },
        "test_b.py": {
            "py_path": "mars/case/test_b.py",
            "py_outcome": "passed",
            "case_fun_set": {
                "test_b": {
                    "setup": "passed",
                    "call": "passed",
                    "teardown": "passed",
                    "fun_outcome": "passed"
                }
            }
        },
        "test_mycase_11.py": {
            "py_path": "mars/case/test_mycase_11.py",
            "py_outcome": "passed",
            "case_fun_set": {
                "test_mycase_11": {
                    "setup": "passed",
                    "call": "passed",
                    "teardown": "passed",
                    "fun_outcome": "passed"
                }
            }
        },
        "test_mycase_111.py": {
            "py_path": "mars/case/test_mycase_111.py",
            "py_outcome": "failed",
            "case_fun_set": {
                "test_mycase_111": {
                    "setup": "failed",
                    "call": "failed",
                    "teardown": "passed",
                    "fun_outcome": "failed"
                }
            }
        },
        "test_mycase_11652.py": {
            "py_path": "mars/case/test_mycase_11652.py",
            "py_outcome": "failed",
            "case_fun_set": {
                "test_mycase_11652": {
                    "setup": "passed",
                    "call": "passed",
                    "teardown": "failed",
                    "fun_outcome": "passed"
                }
            }
        },
        "test_mycase_123.py": {
            "py_path": "mars/case/test_mycase_123.py",
            "py_outcome": "skipped",
            "case_fun_set": {
                "test_mycase_123": {
                    "setup": "skipped",
                    "call": "skipped",
                    "teardown": "passed",
                    "fun_outcome": "skipped"
                }
            }
        },
        "test_mycase_222.py": {
            "py_path": "mars/case/test_mycase_222.py",
            "py_outcome": "failed",
            "case_fun_set": {
                "test_mycase_222_1": {
                    "setup": "skipped",
                    "call": "skipped",
                    "teardown": "passed",
                    "fun_outcome": "skipped"
                },
                "test_mycase_222_2": {
                    "setup": "passed",
                    "call": "failed",
                    "teardown": "passed",
                    "fun_outcome": "failed"
                },
                "test_mycase_222_3": {
                    "setup": "passed",
                    "call": "passed",
                    "teardown": "passed",
                    "fun_outcome": "passed"
                }
            }
        }
    }
}
```

**行首：**标注了用例执行顺序， `pytest` 表示是默认执行顺序

**夹层：**用例执行结果：`passed/failed/sikpped`

**行尾：**用例汇总数据：总数/通过数/失败数/跳过数



其中用例执行结果和汇总数据都包含：

* 函数维度
* `py` 文件维度

```shell
    "py_total_passed_failed_skipped": "7/3/3/1",   # py维度 
    "fun_total_passed_failed_skipped": "9/5/2/2",  # 函数维度
    
    
	"test_a.py": {
            "py_path": "mars/case/test_a.py",
            "py_outcome": "passed",               # py维度 
            "case_fun_set": {
                "test_a": {
                    "setup": "passed",
                    "call": "passed",
                    "teardown": "passed",
                    "fun_outcome": "passed"       # 函数维度
                }
            }
        }
```



**特殊情况**

其中存在一些用例，`call` 阶段通过，但是在 `teardown` 阶段失败，这类用例定位很明确，理论上是通过的，所以需要快速处理 `teardown` 部分的问题。

所以在`函数维度`结果后方是`passed`，快速定位这类用例可搜索：

```python
                    "teardown": "failed",
                    "fun_outcome": "passed"
```



**留底追溯**

在本地测试环境下可能需要追溯之前测试的内容，所以在会话结束阶段 `last_result.log` 会以时间戳命名，在同级 `json` 目录进行留底：

```shell
...

│   ├── json
│   │   ├── last_result.json
│   │   ├── report_20240918214809.json
│   │   ├── report_20240918214826.json
│   │   ├── report_20240918215115.json

...
```





### 4.3 修改用例执行顺序

通过 4.2 章节可看出 `pytest` 默认执行顺序：

* `<Function test_a>`
* `<Function test_b>`
* `<Function test_mycase_11>`
* `<Function test_mycase_111>`
* `<Function test_mycase_11652>`
* `<Function test_mycase_123>`
* `<Function test_mycase_222>`

现在我们基于用例编号，对用例执行列表的排序进行修改，执行命令加入参数 `--order-execution` ，再查看用例执行顺序的变化



执行命令：`youqu3 run -w mars --order-execution "asc"`

查看日志 `report/logs/last_result.log` 内容:

```shell
{
    "user": "mars",
    "ip": "10.8.11.202",
    "execution_order": "asc",
    "interrupt_continue": false,
    "start_case": "None",
    "py_total_passed_failed_skipped": "",
    "fun_total_passed_failed_skipped": "",
    "start_time": "2024-09-19 09:01:12",
    "end_time": "",
    "test_cases": {
        "test_a.py": {
            "py_path": "mars/case/test_a.py",
            "py_outcome": "",
            "case_fun_set": {
                "test_a": {
                    "setup": "passed",
                    "call": "passed",
                    "teardown": "passed",
                    "fun_outcome": "passed"
                }
            }
        },
        "test_b.py": {
            "py_path": "mars/case/test_b.py",
            "py_outcome": "",
            "case_fun_set": {
                "test_b": {
                    "setup": "passed",
                    "call": "passed",
                    "teardown": "passed",
                    "fun_outcome": "passed"
                }
            }
        },
        "test_mycase_11.py": {
            "py_path": "mars/case/test_mycase_11.py",
            "py_outcome": "",
            "case_fun_set": {
                "test_mycase_11": {
                    "setup": "passed",
                    "call": "passed",
                    "teardown": "passed",
                    "fun_outcome": "passed"
                }
            }
        },
        "test_mycase_111.py": {
            "py_path": "mars/case/test_mycase_111.py",
            "py_outcome": "",
            "case_fun_set": {
                "test_mycase_111": {
                    "setup": "failed",
                    "call": "failed",
                    "teardown": "passed",
                    "fun_outcome": "failed"
                }
            }
        },
        "test_mycase_123.py": {
            "py_path": "mars/case/test_mycase_123.py",
            "py_outcome": "",
            "case_fun_set": {
                "test_mycase_123": {
                    "setup": "skipped",
                    "call": "skipped",
                    "teardown": "passed",
                    "fun_outcome": "skipped"
                }
            }
        },
        "test_mycase_222.py": {
            "py_path": "mars/case/test_mycase_222.py",
            "py_outcome": "",
            "case_fun_set": {
                "test_mycase_222_1": {
                    "setup": "skipped",
                    "call": "skipped",
                    "teardown": "passed",
                    "fun_outcome": "skipped"
                },
                "test_mycase_222_2": {
                    "setup": "passed",
                    "call": "failed",
                    "teardown": "passed",
                    "fun_outcome": "failed"
                },
                "test_mycase_222_3": {
                    "setup": "passed",
                    "call": "passed",
                    "teardown": "passed",
                    "fun_outcome": "passed"
                }
            }
        },
        "test_mycase_11652.py": {
            "py_path": "mars/case/test_mycase_11652.py",
            "py_outcome": "",
            "case_fun_set": {
                "test_mycase_11652": {
                    "setup": "passed",
                    "call": "passed",
                    "teardown": "rerun",
                    "fun_outcome": "failed"
                }
            }
        }
    }
}
```

执行命令：`youqu3 run -w mars --order-execution "desc"`

查看日志 `report/logs/last_result.log` 内容:

```shell
{
    "user": "mars",
    "ip": "10.8.11.202",
    "execution_order": "desc",
    "interrupt_continue": false,
    "start_case": "None",
    "py_total_passed_failed_skipped": "7/3/3/1",
    "fun_total_passed_failed_skipped": "9/5/2/2",
    "start_time": "2024-09-19 09:02:22",
    "end_time": "2024-09-19 09:03:13",
    "test_cases": {
        "test_mycase_11652.py": {
            "py_path": "mars/case/test_mycase_11652.py",
            "py_outcome": "failed",
            "case_fun_set": {
                "test_mycase_11652": {
                    "setup": "passed",
                    "call": "passed",
                    "teardown": "failed",
                    "fun_outcome": "passed"
                }
            }
        },
        "test_mycase_222.py": {
            "py_path": "mars/case/test_mycase_222.py",
            "py_outcome": "failed",
            "case_fun_set": {
                "test_mycase_222_3": {
                    "setup": "passed",
                    "call": "passed",
                    "teardown": "passed",
                    "fun_outcome": "passed"
                },
                "test_mycase_222_2": {
                    "setup": "passed",
                    "call": "failed",
                    "teardown": "passed",
                    "fun_outcome": "failed"
                },
                "test_mycase_222_1": {
                    "setup": "skipped",
                    "call": "skipped",
                    "teardown": "passed",
                    "fun_outcome": "skipped"
                }
            }
        },
        "test_mycase_123.py": {
            "py_path": "mars/case/test_mycase_123.py",
            "py_outcome": "skipped",
            "case_fun_set": {
                "test_mycase_123": {
                    "setup": "skipped",
                    "call": "skipped",
                    "teardown": "passed",
                    "fun_outcome": "skipped"
                }
            }
        },
        "test_mycase_111.py": {
            "py_path": "mars/case/test_mycase_111.py",
            "py_outcome": "failed",
            "case_fun_set": {
                "test_mycase_111": {
                    "setup": "failed",
                    "call": "failed",
                    "teardown": "passed",
                    "fun_outcome": "failed"
                }
            }
        },
        "test_mycase_11.py": {
            "py_path": "mars/case/test_mycase_11.py",
            "py_outcome": "passed",
            "case_fun_set": {
                "test_mycase_11": {
                    "setup": "passed",
                    "call": "passed",
                    "teardown": "passed",
                    "fun_outcome": "passed"
                }
            }
        },
        "test_a.py": {
            "py_path": "mars/case/test_a.py",
            "py_outcome": "passed",
            "case_fun_set": {
                "test_a": {
                    "setup": "passed",
                    "call": "passed",
                    "teardown": "passed",
                    "fun_outcome": "passed"
                }
            }
        },
        "test_b.py": {
            "py_path": "mars/case/test_b.py",
            "py_outcome": "passed",
            "case_fun_set": {
                "test_b": {
                    "setup": "passed",
                    "call": "passed",
                    "teardown": "passed",
                    "fun_outcome": "passed"
                }
            }
        }
    }
}
```



### 4.4 指定用例开始位置

为了更直观，这里结合参数 `--order-execution "asc"` 进行用例指定.

执行命令：`youqu3 run -w mars --order-execution "asc" --start-case "test_mycase_222_2"`

查看日志 `report/logs/last_result.log` 内容:

```shell
{
    "user": "mars",
    "ip": "10.8.11.202",
    "execution_order": "asc",
    "interrupt_continue": false,
    "start_case": "test_mycase_222_2",
    "py_total_passed_failed_skipped": "",
    "fun_total_passed_failed_skipped": "",
    "start_time": "2024-09-19 09:03:36",
    "end_time": "",
    "test_cases": {
        "test_mycase_222.py": {
            "py_path": "mars/case/test_mycase_222.py",
            "py_outcome": "",
            "case_fun_set": {
                "test_mycase_222_2": {
                    "setup": "passed",
                    "call": "failed",
                    "teardown": "passed",
                    "fun_outcome": "failed"
                },
                "test_mycase_222_3": {
                    "setup": "passed",
                    "call": "passed",
                    "teardown": "passed",
                    "fun_outcome": "passed"
                }
            }
        },
        "test_mycase_11652.py": {
            "py_path": "mars/case/test_mycase_11652.py",
            "py_outcome": "",
            "case_fun_set": {
                "test_mycase_11652": {
                    "setup": "passed",
                    "call": "passed",
                    "teardown": "rerun",
                    "fun_outcome": "failed"
                }
            }
        }
    }
}
```

??



### 4.5 中断续跑

这里手动模拟中断场景，再使用开关参数 `--interrupt-continue` 进行续跑。

执行命令：`youqu3 run -w mars --order-execution "asc"`，在执行用例时使用 `ctrl + c` 中断测试，终端输出：

```shell
====================================== test session starts =======================================
collected 9 items                                                                                
用例收集数量:   9 (剔除跳过: 7)
用例文件数量:   7 (剔除跳过: 6)

case/test_a.py::TestMyCase::test_a 
x86_64-202: 09/19 09:04:21 | INFO  | [pytest_runtest_setup]: 
========== test_a | None ========== [1/9]  11%
x86_64-202: 09/19 09:04:21 | INFO  | [pytest_runtest_call]: ========== case body ==========
x86_64-202: 09/19 09:04:21 | INFO  | [pytest_runtest_teardown]: ========== teardown ==========
PASSED
case/test_b.py::TestMyCase::test_b 
x86_64-202: 09/19 09:04:24 | INFO  | [pytest_runtest_setup]: 
========== test_b | None ========== [2/9]  22%
x86_64-202: 09/19 09:04:24 | INFO  | [pytest_runtest_call]: ========== case body ==========
x86_64-202: 09/19 09:04:24 | INFO  | [pytest_runtest_teardown]: ========== teardown ==========
^C

```

查看日志 `report/logs/last.log` 内容:

```shell
{
    "user": "mars",
    "ip": "10.8.11.202",
    "execution_order": "asc",
    "interrupt_continue": false,
    "start_case": "None",
    "py_total_passed_failed_skipped": "1/1/0/0",
    "fun_total_passed_failed_skipped": "1/1/0/0",
    "start_time": "2024-09-19 09:04:21",
    "end_time": "2024-09-19 09:04:24",
    "test_cases": {
        "test_a.py": {
            "py_path": "mars/case/test_a.py",
            "py_outcome": "passed",
            "case_fun_set": {
                "test_a": {
                    "setup": "passed",
                    "call": "passed",
                    "teardown": "passed",
                    "fun_outcome": "passed"
                }
            }
        }
    }
}
```

执行中断续跑命令：`youqu3 run -w mars --interrupt-continue`

在对用例列表前后增加了打印信息，终端输出：

```shell
====================================== test session starts =======================================
collecting ...

收集用例：
[<Function test_a>,<Function test_b>,<Function test_mycase_11>, <Function test_mycase_111>, <Function test_mycase_123>, <Function test_mycase_222_1>, <Function test_mycase_222_2>, <Function test_mycase_222_3>, <Function test_mycase_11652>]

执行用例：
[<Function test_b>,<Function test_mycase_11>, <Function test_mycase_111>, <Function test_mycase_123>, <Function test_mycase_222_1>, <Function test_mycase_222_2>, <Function test_mycase_222_3>, <Function test_mycase_11652>]
```

查看日志 `report/logs/last_result.log` 内容:

```shell
{
    "user": "mars",
    "ip": "10.8.11.202",
    "execution_order": "asc",
    "interrupt_continue": true,
    "start_case": "None",
    "py_total_passed_failed_skipped": "7/3/3/1",
    "fun_total_passed_failed_skipped": "9/5/2/2",
    "start_time": "2024-09-19 09:04:21",
    "end_time": "2024-09-19 09:05:48",
    "test_cases": {
        "test_a.py": {
            "py_path": "mars/case/test_a.py",
            "py_outcome": "passed",
            "case_fun_set": {
                "test_a": {
                    "setup": "passed",
                    "call": "passed",
                    "teardown": "passed",
                    "fun_outcome": "passed"
                }
            }
        },
        "test_b.py": {
            "py_path": "mars/case/test_b.py",
            "py_outcome": "passed",
            "case_fun_set": {
                "test_b": {
                    "setup": "passed",
                    "call": "passed",
                    "teardown": "passed",
                    "fun_outcome": "passed"
                }
            }
        },
        "test_mycase_11.py": {
            "py_path": "mars/case/test_mycase_11.py",
            "py_outcome": "passed",
            "case_fun_set": {
                "test_mycase_11": {
                    "setup": "passed",
                    "call": "passed",
                    "teardown": "passed",
                    "fun_outcome": "passed"
                }
            }
        },
        "test_mycase_111.py": {
            "py_path": "mars/case/test_mycase_111.py",
            "py_outcome": "failed",
            "case_fun_set": {
                "test_mycase_111": {
                    "setup": "failed",
                    "call": "failed",
                    "teardown": "passed",
                    "fun_outcome": "failed"
                }
            }
        },
        "test_mycase_123.py": {
            "py_path": "mars/case/test_mycase_123.py",
            "py_outcome": "skipped",
            "case_fun_set": {
                "test_mycase_123": {
                    "setup": "skipped",
                    "call": "skipped",
                    "teardown": "passed",
                    "fun_outcome": "skipped"
                }
            }
        },
        "test_mycase_222.py": {
            "py_path": "mars/case/test_mycase_222.py",
            "py_outcome": "failed",
            "case_fun_set": {
                "test_mycase_222_1": {
                    "setup": "skipped",
                    "call": "skipped",
                    "teardown": "passed",
                    "fun_outcome": "skipped"
                },
                "test_mycase_222_2": {
                    "setup": "passed",
                    "call": "failed",
                    "teardown": "passed",
                    "fun_outcome": "failed"
                },
                "test_mycase_222_3": {
                    "setup": "passed",
                    "call": "passed",
                    "teardown": "passed",
                    "fun_outcome": "passed"
                }
            }
        },
        "test_mycase_11652.py": {
            "py_path": "mars/case/test_mycase_11652.py",
            "py_outcome": "failed",
            "case_fun_set": {
                "test_mycase_11652": {
                    "setup": "passed",
                    "call": "passed",
                    "teardown": "failed",
                    "fun_outcome": "passed"
                }
            }
        }
    }
}
```

通过终端输出与日志输出可看到，中断续跑实际效果，完全满足特性：

* 仅续跑未执行过的用例
* 汇总多次测试结果



## 5 小结

通过章节4的验证，可看出目前已解决当前面临的问题，后续遇到测试中断的情况，可以基于`中断续跑`功能进行补测，并快速获取汇总的测试结果。

`日志汇总`虽然是作为`中断续跑`的支持功能，但标准的 `json` 格式输出可被其他功能或平台读取数据。



而在开发`中断续跑`与`日志汇总`两个功能过程当中，基于日常使用场景，顺势实现了`用例排序`、`指定测试起始位置`，后续基于顺序控制用例执行范围，还可以有更多的扩展，例如：

* 指定用例执行结束位置
* 指定用例执行顺序中特定范围
* ......

如果用例控制这一块 内容后续足够丰富后，也可以抽离出来做成 `pytest` 公共插件与框架解耦，在需要的时候进行安装调用。



## 6 参考资料

[pytest 官方文档](https://docs.pytest.org/en/stable/)
