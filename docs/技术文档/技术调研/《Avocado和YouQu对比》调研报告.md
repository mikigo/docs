---
Author: mikigo
---

# Avocado和YouQu对比调研报告

Avocado 是一个基于 Linux 的自动化测试框架，使用 Python 语言编写构建，具有许多特色功能；YouQu 也是基于 Linux 的自动化测试框架，同样也是使用 Python 语言编写构建。

本文主要探寻 Avocado 引以为傲的特色功能，与 YouQu 框架进行对比，看看哪个框架更加适合现代化的自动化测试。

以下将从几个方面分别对各功能进行对比：

## 驱动方式

### Avocado

Avocado 使用命令行方式驱动，使用子命令 `run` 执行用例；

```shell
avocado run 
```

远程执行也有插件支持。

### YouQu

这点和 YouQu 不谋而合，YouQu 也是命令行方式驱动，本机运行的子命令也是 `run` ；

```shell
youqu manage.py run
```

这里申明，YouQu 在设计时绝对没有参考 Avocado ，纯属巧合，只能说英雄所见略同。

 YouQu 除了 `run` 子命令，还支持其他的子命令，如： `remote, pmsctl, csvctl, startapp` ；

详细用法情况查看：[http://youqu.uniontech.com/框架功能介绍/执行管理器/](http://youqu.uniontech.com/框架功能介绍/执行管理器/)

### 小结

驱动方式都采用了类似的功能设计，都支持自定义扩展驱动功能。

## 多种格式的测试报告

### Avocado

Avocado 默认支持 XML、JSON 格式的测试报告，至于 HTML 格式的测试报告需要安装插件 `avocado-framework-plugin-result-html`；

Avocado 的 HTML 报告是这样的：

![](/avocado_assets/3.png)

### YouQu

YouQu 默认支持 XML、JSON、HTML格式的测试报告。

YouQu 的 HTML 报告是这样的：

![](/avocado_assets/1.png)

![](/avocado_assets/2.png)

### 小结

Avocado 官方是这样评价它的 HTML 报告的：

::: tip 截图自官网

![](/avocado_assets/4.png)

:::

。。😅

我只能说 Avocado 这个报告还有很大的进步空间，尊重并祝福。

YouQu 的测试报告除了 UI 界面好看、信息展示全，还加入了用例失败录屏、失败截图、用例执行日志等等，建议 Avocado 尽快使用 YouQu 的测试报告插件。

## 收集系统数据

Avocado 自带一个 sysinfo 插件，能自动收集一些系统运行数据，如：cpuinfo、meminfo等；

YouQu 自带一个 `--top` 参数，可以自动收集系统运行时的 top 命令的数据；

这个功能可以辅助做测试用例失败分析，但是个人认为自动化框架收集系统数据还是有局限，而使用 Prometheus、Zabbix、Grafana 等专业的监控工具更好。

所以，此功能我个人认为，聊胜于无吧，就不做展开分析了。

## 批量运行用例

### Avocado

Avocado 提供了通过标签筛选测试用例执行的功能；

#### 用例标签

用例标签的标注方式是在用例代码中`用例类说明`或`用例函数说明` 里面来标注，必须使用 `:avocado: tags=` 这样的范式写标签。

```python
class FastTest(Test):
    """
    :avocado: tags=fast
    """

    def test_fast(self):
        """
        :avocado: tags=net
        """

    def test_fast_other(self):
        """
        :avocado: tags=net
        """


class SlowTest(Test):
    """
    :avocado: tags=slow,disk
    """

    def test_slow(self):
        time.sleep(1)
        
        
class SlowUnsafeTest(Test):
    """
    :avocado: tags=slow,disk,unsafe
    """

    def test_slow_unsafe(self):
        time.sleep(1)
```

#### 筛选用例执行

使用 `--filter-by-tags` 参数指定标签的名称，支持多种逻辑组合；

- 执行包含某一个标签的用例： `--filter-by-tags=net`
- 执行包含不某一个标签的用例：`--filter-by-tags=-net`
- 执行同时包含多个标签的用例：`--filter-by-tags=disk,slow,unsafe`
- 执行包含 disk 标签或包含 net 标签的用例：`--filter-by-tags=disk --filter-by-tags=net`

### YouQu 

#### 用例标签

YouQu的用例标签是在一个 CSV 文件里面去写，方便维护者使用 Excel 打开进行编辑：

CSV 文件标签示例：

| 脚本ID | PMS用例ID | 用例级别 | 用例类型 | 设备类型 | 一二级bug自动化 | 上线对象 | 跳过原因 | 确认修复 | 废弃用例 | ...  |
| :----: | :-------: | :------: | :------: | :------: | :-------------: | :------: | :------: | :------: | :------: | :--- |
| 679537 |  679537   |    L1    |   FUNC   |   PPL    |       BUG       |   CICD   | skip-XXX |          |          |      |

标签支持无限扩展，标签支持自动生成和自动维护，维护起来非常方便，不需要到茫茫多的 py 用例脚本中去改标签，使用 Excel 打开就能快速的维护标签 。

#### 筛选用例执行

通过参数 `-t 或 --tags` 指定不同的标签进行用例筛选执行，而且标签支持使用 `and/or/not` 逻辑进行组合，比如：`-t 'L1 and FUNC'` 表示执行带有 L1 且 带有 FUNC 标签的用例，使用非常符合语义对吧。

而且还支持通过指定关键词进行用例筛选，使用参数 `-k 或 --keywords` 指定关键词，关键词也支持使用 `and/or/not` 逻辑组合，关键词有很多，比如：py 文件的名称、用例类名称、用例函数名称、名称中的部分字符等等都是关键词。

而且的而且，标签和关键词两个参数可以同时使用，可以组合出任意的用例集合，只有想不到没有办不到。

### 小结

Avocado 这样的标签管理方式是非常难以维护的，因为标签分布在各个脚本的注释中，如果后期要进行批量的修改，维护者将会非常痛苦而且非常耗时，你可以想象一下，在几千各 py 文件中，挨个打开修改一个注释，人都麻了。我只能说非常的 Old school。

而 Avocado 的用例筛选执行方式，官方文档用了大量的篇幅和示例来介绍其用法，基本能满足业务使用要求，但是使用比较麻烦，参数传递不够优雅。

YouQu 的用例标签化管理是独有的专利方案，所有的标签在一个 `CSV` 文件里面去维护，可维护性非常高，而且标签支持自动生成自动维护；

基于此标签化管理方案，YouQu  支持灵活的用例组织方式，而且标签参数支持使用 `and/or/not` 逻辑组合，非常符合语义，根本不需要对使用方法做大量文档说明，使用者就能立马 get 到它的用法。

## 高级日志记录功能

### Avocado

特点是能记录所有的日志，生成日志文件。

### YouQu

全自动日志系统，只需要一个装饰器，自动输出全部日志，并保存到日志文件。[《YouQu 日志系统》](http://youqu.uniontech.com/%E6%A1%86%E6%9E%B6%E5%8A%9F%E8%83%BD%E4%BB%8B%E7%BB%8D/%E6%97%A5%E5%BF%97%E7%B3%BB%E7%BB%9F/)

### 小结

Avocado 的日志模块看似平平无奇，实则司空见惯，而 YouQu 的日志系统，全自动输出日志系统。

## 配置

### Avocado

Avocado 存在多个配置文件：

- `/etc/avocado/avocado.conf` 这是一个系统级别的配置文件，对所有用户生效；
- `/etc/avocado/conf.d/*.conf` 这个目录下也可以放配置文件，也是一个系统级别的配置文件；
- `~/.config/avocado/avocado.conf` 用户级别的配置文件；

用户配置文件的配置项可以覆盖系统级别的配置文件的配置项。

测试执行时配置项的优先顺序：

命令行参数 > 用户配置文件 > 系统配置文件；

### YouQu

YouQu 的配置文件只有一个，`setting/globalconfig.ini` ，提供一个全局配置对象 `conf`，使用此对象可以访问全局配置里面的所有配置；

比如：

```python
from setting import conf

conf.ROOT_DIR
```

基于 YouQu 的子项目里面会有一个局部配置文件 `config.ini`，提供一个配置对象 `config`，使用此对象可以访问 `局部配置 + 全局配置` 的所有配置；

比如：

```python
from apps.autotest_dde_file_manager.config import config

config.ROOT_DIR
```

局部配置的值可以覆盖全局配置值；

测试执行时配置项的优先顺序：

命令行参数 > 局部配置 > 全局配置；

### 小结

两个框架的配置体系整体设计思想是类似的。

Avocado 的系统配置可能存在多个，看似可配置项很多，实际不好管理，YouQu 的配置理念是 All in One，简洁优雅永不过时。

## 自定义依赖项

### Avocado

Avocado 的依赖的概念实际上是用例前置条件（setup）的概念，简单讲就是这条用例执行之前可能需要处理以下依赖环境，比如装一些个三方包或者获取测试资源等等。

依赖项定义方式是在用例类说明里面写注释：

```python
from avocado import Test


class PassTest(Test):

    """
    Example test that passes.

    :avocado: dependency={"type": "package", "name": "hello"}
    """
```

固定格式 `:avocado: dependency=` ，和标签管理那里一样，维护性太差。

### YouQu

YouQu 的前置条件处理支持了非常灵活的写法，参考 [Pytest Fixture](http://youqu.uniontech.com/docs/%E8%87%AA%E5%8A%A8%E5%8C%96%E6%8A%80%E6%9C%AF/%E8%87%AA%E5%8A%A8%E5%8C%96%E6%B5%8B%E8%AF%95%E6%A1%86%E6%9E%B6/Pytest%E4%BB%8E%E5%85%A5%E9%97%A8%E5%88%B0%E8%B5%B7%E9%A3%9E.html#%E5%9B%9B%E3%80%81fixture) 写法，除了生孩子，你可以在前置条件里面做任何想做的事情；

除此之外，尽管 YouQu 致力于将用例需要的所有依赖项在环境部署阶段都初始化好，但 YouQu 仍然支持子项目对测试环境部署进行[定制依赖项](http://youqu.uniontech.com/%E6%A1%86%E6%9E%B6%E5%8A%9F%E8%83%BD%E4%BB%8B%E7%BB%8D/%E7%8E%AF%E5%A2%83%E9%83%A8%E7%BD%B2/#2) 。

### 小结

Avocado 对于依赖项的处理是用字符串硬编码，分布在各个用例脚本里面，而 YouQu 的环境依赖处理，在灵活性和易维护性上无可比拟；

## 总结

| 对比功能点         | Avocado <img width=200/> | YouQu <img width=200/> |
| ---------------- |:--------:|:------:|
| 驱动方式         | 😄       | 😄     |
| 测试报告         | ✗        | ✓ 略胜三筹 |
| 收集系统数据     | 😄       | 😄     |
| 批量运行用例     | ✗        | ✓ 略胜三筹 |
| 高级日志记录功能 | ✗        | ✓ 略胜三筹 |
| 配置             | 😄       | 😄     |
| 自定义依赖       | ✗        | ✓ 略胜三筹 |
| 插件 | ✗ | ✓ 略胜三筹 |

Avocado 基于 unitttest 来管理和驱动用例执行，YouQu 基于 Pytest 来管理和驱动用例执行，Pytest 比 unittest 本身具有技术优势，从技术上讲 YouQu 是天然兼容 Avocado 的用例的，反之则不然，再加上 YouQu 在此之上加入了许多自研功能，比如：用例标签化管理方案、全自动日志系统、用例失败录屏，在整体技术架构上不能说是更胜一筹，只能说是属于两个时代的产品。

Avocado 还支持一些内置插件和三方插件，但插件这块且不提 YouQu 有自己的生态插件，咱就说 Pytest 社区就有海量的[插件](https://github.com/mikigo/pytest-plugins)，Avocado 可以说完全不再一个级别，相当于是地球人遇到三体人。

Avocado 主打 Linux CLI 测试这块，底层方法模块在 Linux 内核、命令这块确有独到之处，底层方法基于 Python 与 Linux 进行交互，易于移植，但框架技术架构上没有任何优势；

YouQu 主打在 Linux 操作系统桌面应用 UI、接口自动化这块，添加一些 Linux CLI 相关底层功能很容易，在框架技术架构、 以及各功能方面几乎是**全面碾压 Avocado**。
