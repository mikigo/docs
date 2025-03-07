---
Author: 禄烨
---

# YouQu - 远程交互式控制

## 序言

在 youqu 中，master主机承担测试代码分发、执行控制。进行测试时，设备A作为测试环境中的控制端（master），进行代码执行，执行过程中，同步代码给设备B（client）去做实际的测试执行。测试过程中，设备B（client）将数据、结果，收集后返回数据到客户端A（master）。这部分是 youqu 的远程执行能力，在 youqu 官网中[执行管理器](https://youqu.uniontech.com/%E6%8C%87%E5%8D%97/%E6%A1%86%E6%9E%B6%E5%BF%85%E5%A4%87/%E6%89%A7%E8%A1%8C%E7%AE%A1%E7%90%86%E5%99%A8.html)有详细的使用说明



![](/YouQu-远程交互式控制_assets/1.png)

![](/YouQu-远程交互式控制_assets/2.png)

在自动化测试场景中，经常会涉及子设备对附属子设备的控制。所以 `YouQu` 同时实现附属子设备远程控制能力。可以在测试用例步骤中实现对子设备进行命令行操作、UI操作、图像识别等，并对其操作返回相应数据。接下来，让我们去了解下关于 `youqu` 自动化测试的远程交互式控制。



## ZeroRPC 

### 简介

`ZeroRPC`  是一个轻量级的远程过程调用（RPC）框架以简单的方式实现分布式应用间的通信，支持多种语言，Python 是其中之一。

```shell
# 安装
pip install zerorpc
```



通过一个简单实例，了解下两个设备互相通信的过程

**设备A**:

```python
"""
定义一个 Hello 类，其中有一个方法 hello，这个方法接受一个参数 name 并返回一条问候语
然后创建了一个 Server 实例，并将 Hello 类绑定到该服务上
最后，将服务器绑定到地址 0.0.0.0:4242 并启动
"""
from zerorpc import Server

class Hello(object):
    def hello(self, name):
        return f"Hello, {name}!"

server = Server(Hello())
server.bind("tcp://0.0.0.0:4242")
server.run()
```



**设备B**:

```python
"""
客户端代码创建一个 Client 实例并连接到设备A的地址，就可以像调用本地对象的方法一样调用远程服务的方法
并将设备A的数据返回到设备B
"""
from zerorpc import Client

client = Client()
client.connect("tcp://localhost:4242")

print(client.hello('world'))  # 输出: Hello, world!
```



### 不足

`ZeroRPC` 设计上主要用于传递基本数据类型和字符串等简单的对象，把对象，比如：类实例，直接传输会存在问题。

```python
# 测试对象
# 服务端
from zerorpc import Server
class Test1(object):
    def __init__(self, a):
        self.a = a
        
    def test1(self, name):
        return a

class Test2:
    def test2_1(self, a):
        return Test1(a)
    
    def test2_2(self, a):
        obj = Test1(a)
        return obj

server = Server(Test2())
server.bind("tcp://0.0.0.0:4242")
server.run()

# ================================================================
# 客户端
from zerorpc import Client

client = Client()
client.connect("tcp://localhost:4242")

print(client.test2_1(1))
"""
输出
……
  File "msgpack/_packer.pyx", line 291, in msgpack._cmsgpack.Packer._pack
TypeError: can not serialize 'Test1' object
"""
print(client.test2_2(1))
"""
输出
……
  File "msgpack/_packer.pyx", line 291, in msgpack._cmsgpack.Packer._pack
TypeError: can not serialize 'Test1' object
"""
```

## YouQu 远程方法绑定

### 实践

youqu 远程控制时，客户端实际执行的代码是服务端提前进行绑定的方法。所以在 youqu 中已经对公共方法（Src 和 DogtailUtils）进行了绑定，满足大部分测试场景，但是，实际测试中可能需要进行单独的方法绑定已满足测试需求。

```shell
# youqu 中远程控制部分
……
   |    src
   |    │
   |    ……
   |    ├── remotectl
   |    │   ├── _base.py # 底层实现（传输、控制服务启动等）
   |    │   ├── __init__.py
   |    │   ├── _remote_dogtail_ctl.py # 远程 dogtail 服务启动入口 
   |    │   ├── _remote_other_ctl.py # 其它 src 服务启动入口
   |    │   └── remote.py # 调用接口
……

```

在 `youqu` 中需要在代码中进行提前注册，注册的方式为：

1. 在原始类中增加供调用的方法
2. 在远程调用接口，新增通过远程调用的入口方法

```python
# 示例
# src/utils/dogtail_utils.py
……
class DogtailUtils(MouseKey):
    """
    通过属性进行元素定位和操作。
    """
    ……
    def element_click_by_brother_element(self, element):
        """通过相邻元素点击

        Args:
            element: 元素

        Returns:

        """
        self.app_element(element).get_parent().click()
          
……

# src/utils/remotectl/remote.py
……
class Remote(ShortCut, CmdCtl):
    def __init__(self, ip, user, password, transfer_appname=None, restart_service=False):
        ……
        
    @property
    def rdog(self) -> DogtailUtils:
        return remote_dogtail_ctl(
            user=self.user,
            ip=self.ip,
            password=self.password,
            restart_service=self.restart_service,
        )
    
    def click_element_by_brother(self, element):
        self.rdog.element_click_by_brother_element(element) 
……
```



由于 zerorpc 无法返回对象，又需要进行一些复杂的操作，只需要将所有操作都封装到方法内实现即可。

比如：在上面 dogtail ，默认封装的 dogtail 的 obj 对象不会指定应用对象，在进行一个元素定位时，可能需要10多秒，原因是寻找定位元素是从 DOM 的根节点开始寻找。如果想要在远程定位时，直接通过某个应用去点击其中某个元素的相邻元素，则可以修改注册方法：

```python
# 示例
# src/utils/dogtail_utils.py
……
class DogtailUtils(MouseKey):
    """
    通过属性进行元素定位和操作。
    """
    ……
    def element_click_by_brother(self, app=None, element=None):
        """通过相邻元素点击

        Args:
            app: 应用
            element: 元素

        Returns:

        """
        # 将类实例化需要的步骤进行方法内封装
        if app is None:
            obj = self.obj
        else:
            obj = root.application(app)
        ret = obj.child(element)
        ret.get_parent().click()        
……

# src/utils/remotectl/remote.py
……
class Remote(ShortCut, CmdCtl):
    def __init__(self, ip, user, password, transfer_appname=None, restart_service=False):
        ……
        
    @property
    def rdog(self) -> DogtailUtils:
        return remote_dogtail_ctl(
            user=self.user,
            ip=self.ip,
            password=self.password,
            restart_service=self.restart_service,
        )
    
    def click_element_by_brother(self, app_name, element):
        self.rdog.element_click_by_brother(app_name, element) 
……
```

### 调用过程

远程方法调用时，需要经过以下过程。在调用远程方法时，需要去判断是否需要发送当前项目文件（涉及一些本地测试资源），并且需要判断远程是否已经存在zerorpc 服务。并对其做出相应的逻辑处理。

![](/YouQu-远程交互式控制_assets/3.png)





### 调用步骤

在 `youqu` 中提供两种远程执行配置方式

```shell
# 命令行方式
python3 manage.py remote --clients uos@10.8.12.9:1 --slaves test@10.7.13.171:1 ……

# --clients 后的值即 远程机器的信息，多个设备用/分隔
# --slaves 后的值即 远程机器的的远程机器的信息，多个设备用/分隔
```

```ini
; 全局配置方式, youqu/setting/globalconfig.ini

;=============================== REMOTE CONFIG ===================================
[remote]
;发送代码到测试机（不含report目录）
SEND_CODE = yes

;搭建测试环境
;如果为yes，不管send_code是否为yes都会发送代码到测试机。
BUILD_ENV = no

;测试机密码
CLIENT_PASSWORD = 1

;yes表示所有测试机并行跑，执行相同的测试用例。
;no表示测试机分布式执行，服务端会根据收集到的测试用例自动分配给各个测试机执行。
PARALLEL = yes

;清理 report 目录
CLEAN_SERVER_REPORT_DIR = no
CLEAN_CLIENT_REPORT_DIR = yes

;测试机轮询次数
SCAN = 300

;远程执行测试机
;              ┌─ client ${user}@${ip}:${password}
; youqu-server ┼─ client mikigo@192.168.8.11:admin123
;              └─ client ${user}@${ip}
;如果${password}和前面配置项CLIENT_PASSWORD一样，可以不传：${user}@${ip}
;多个机器之间用斜线分割：${user}@${ip}:${password}/${user}@${ip}
CLIENTS =

;=============================== SLAVE CONFIG ===================================
;附属的测试机，用例步骤中与其他机器进行交互
;        ┌─ slave ${user}@${ip}:${password}
; master ┼─ slave mikigo@192.168.8.11:admin123
;        └─ slave ${user}@${ip}
;如果${password}和前面配置项PASSWORD一样，可以不传：${user}@${ip}
;多个机器之间用斜线分割：${user}@${ip}:${password}/${user}@${ip}
SLAVES = wgd@10.8.12.9:22222222
```

在用例中获取远程设备信息，需要从 fixture 中获取，在用例中直接调用，返回的是一个包含所有远程设备信息的列表。用例中使用方式，可查看 [远程交互式控制](https://youqu.uniontech.com/%E6%8C%87%E5%8D%97/%E7%89%B9%E8%89%B2%E5%8A%9F%E8%83%BD/%E8%BF%9C%E7%A8%8B%E4%BA%A4%E4%BA%92%E5%BC%8F%E6%8E%A7%E5%88%B6.html)

```python
# youqu/conftest.py
@pytest.fixture(scope="session")
def slaves(pytestconfig):
    _slaves = pytestconfig.getoption("slaves") or GlobalConfig.SLAVES
    s = []
    if _slaves:
        for slave in _slaves.split("/"):
            slave_info = re.findall(r"^(.+?)@(\d+\.\d+\.\d+\.\d+):{0,1}(.*?)$", slave)
            if slave_info:
                user, ip, password = slave_info[0]
                s.append(
                    {
                        "user": user,
                        "ip": ip,
                        "password": password or GlobalConfig.PASSWORD,
                    }
                )
    if not s:
        raise EnvironmentError("No slaves found")
    return s
```



## 常见问题

### zerorpc通信超时

1、报错信息

```python
……
self = <zerorpc.channel.BufferedChannel object at 0x7feb61978160>, timeout = 20

    def recv(self, timeout=None):
        # self._channel can be set to None by an 'on_close_if' callback if it
        # sees a suitable message from the remote end...
        #
        if self._verbose and self._channel:
            if self._input_queue_reserved < self._input_queue_size // 2:
                self._request_data()
        else:
            self._verbose = True
    
        try:
>           event = self._input_queue.get(timeout=timeout)

/home/lxs-pen/.local/lib/python3.7/site-packages/zerorpc/channel.py:255: 
_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ 

>   ???

src/gevent/queue.py:335: 

……

# 手动进行服务启动，无法启动
(youqu) 12345@uos-PC:~/youqu/src/remotectl$ python3 _remote_other_ctl.py 
No protocol specified
Unable to init server: Could not connect: Connection refused
No protocol specified
Unable to init server: 无法连接：Connection refused
No protocol specified

(_remote_other_ctl.py:21887): dbind-WARNING **: 10:00:10.002: Could not open X display
```

2、查看当前登录终端，发现有多个 x 服务在运行：

```shell
$ who
uos      tty1         2024-07-30 16:50 (:0)
12345    tty2         2024-07-30 17:04 (:1)
12345    pts/0        2024-07-31 09:59 (10.8.11.74)
```

3、注销 x 服务为 0 的用户，再次尝试依旧复现，查询后发现加域账户依旧虽然为第一个 x 服务，但是标识依旧是 :1

```shell
$ who
12345    tty2         2024-07-30 17:04 (:1)
12345    pts/0        2024-07-31 09:59 (10.8.11.74)
```

4、重启终端系统，再次运行，问题解决



### 客户端断言时，找不到资源

1、找不到资源，查看客户端 `youqu` 项目的自动化应用项目是否存在对应资源，发现整个 `youqu` 项目没有同步到客户端

2、执行前有进行过手动删除 `youqu` 的动作，重新执行时，调试发现没有进行重新发送

```python
# youqu/src/remotectl/_base.py
def _transfer_appname(ip, password, user, transfer_appname):
    os.system(
        f"sshpass -p '{password}' rsync -av -e ssh --exclude='__pycache__' "
        f"{conf.APPS_PATH}/{transfer_appname} {user}@{ip}:~/{client_project_path}/apps/"
    )
```

3、继续断点调试，发现逻辑为如果存在远端远程服务进程，则不进行文件同步

```python
# youqu/src/remotectl/_base.py
def check_rpc_started(filename):
			……
            if not tool_status:
                _transfer_to_client(ip, password, user)
                _start_client_service(ip, password, user, filename)
            if restart_service:
                _restart_client_service(ip, password, user, filename)
            res = func(*args, **kwargs)
			……
```

4、查看客户端服务进程，文件虽然不存在，但是进程依旧存在

```shell
$ ps aux|grep remote
12345     4648  0.5  2.2 725052 183048 ?       SLsl 10:03   0:14 /home/12345@udcp/youqu/.venv/bin/python _remote_other_ctl.py
12345     5123  0.0  1.9 700436 155644 ?       SLsl 10:03   0:02 /home/12345@udcp/youqu/.venv/bin/python _remote_dogtail_ctl.py
12345    18070  0.0  0.0  13820   888 pts/1    S+   10:52   0:00 grep remote
```

5、杀掉原进程，重新执行，报错消失
