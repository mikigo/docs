"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["5210"],{9527:function(e,n,s){s.r(n),s.d(n,{default:()=>a});var r=s(2676),l=s(453);function t(e){let n=Object.assign({h1:"h1",a:"a",h2:"h2",p:"p",img:"img",code:"code",h3:"h3",pre:"pre",strong:"strong",ol:"ol",li:"li"},(0,l.ah)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.h1,{id:"youqu---远程交互式控制",children:["YouQu - 远程交互式控制",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#youqu---远程交互式控制",children:"#"})]}),"\n",(0,r.jsxs)(n.h2,{id:"序言",children:["序言",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#序言",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:["在 youqu 中，master主机承担测试代码分发、执行控制。进行测试时，设备A作为测试环境中的控制端（master），进行代码执行，执行过程中，同步代码给设备B（client）去做实际的测试执行。测试过程中，设备B（client）将数据、结果，收集后返回数据到客户端A（master）。这部分是 youqu 的远程执行能力，在 youqu 官网中",(0,r.jsx)(n.a,{href:"https://youqu.uniontech.com/%E6%8C%87%E5%8D%97/%E6%A1%86%E6%9E%B6%E5%BF%85%E5%A4%87/%E6%89%A7%E8%A1%8C%E7%AE%A1%E7%90%86%E5%99%A8.html",target:"_blank",rel:"noopener noreferrer",children:"执行管理器"}),"有详细的使用说明"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:"/YouQu-%E8%BF%9C%E7%A8%8B%E4%BA%A4%E4%BA%92%E5%BC%8F%E6%8E%A7%E5%88%B6_assets/1.png",alt:""})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:"/YouQu-%E8%BF%9C%E7%A8%8B%E4%BA%A4%E4%BA%92%E5%BC%8F%E6%8E%A7%E5%88%B6_assets/2.png",alt:""})}),"\n",(0,r.jsxs)(n.p,{children:["在自动化测试场景中，经常会涉及子设备对附属子设备的控制。所以 ",(0,r.jsx)(n.code,{children:"YouQu"})," 同时实现附属子设备远程控制能力。可以在测试用例步骤中实现对子设备进行命令行操作、UI操作、图像识别等，并对其操作返回相应数据。接下来，让我们去了解下关于 ",(0,r.jsx)(n.code,{children:"youqu"})," 自动化测试的远程交互式控制。"]}),"\n",(0,r.jsxs)(n.h2,{id:"zerorpc",children:["ZeroRPC",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#zerorpc",children:"#"})]}),"\n",(0,r.jsxs)(n.h3,{id:"简介",children:["简介",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#简介",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"ZeroRPC"}),"  是一个轻量级的远程过程调用（RPC）框架以简单的方式实现分布式应用间的通信，支持多种语言，Python 是其中之一。"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"# 安装\npip install zerorpc\n"})}),"\n",(0,r.jsx)(n.p,{children:"通过一个简单实例，了解下两个设备互相通信的过程"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"设备A"}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:'"""\n定义一个 Hello 类，其中有一个方法 hello，这个方法接受一个参数 name 并返回一条问候语\n然后创建了一个 Server 实例，并将 Hello 类绑定到该服务上\n最后，将服务器绑定到地址 0.0.0.0:4242 并启动\n"""\nfrom zerorpc import Server\n\nclass Hello(object):\n    def hello(self, name):\n        return f"Hello, {name}!"\n\nserver = Server(Hello())\nserver.bind("tcp://0.0.0.0:4242")\nserver.run()\n'})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"设备B"}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:'"""\n客户端代码创建一个 Client 实例并连接到设备A的地址，就可以像调用本地对象的方法一样调用远程服务的方法\n并将设备A的数据返回到设备B\n"""\nfrom zerorpc import Client\n\nclient = Client()\nclient.connect("tcp://localhost:4242")\n\nprint(client.hello(\'world\'))  # 输出: Hello, world!\n'})}),"\n",(0,r.jsxs)(n.h3,{id:"不足",children:["不足",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#不足",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"ZeroRPC"})," 设计上主要用于传递基本数据类型和字符串等简单的对象，把对象，比如：类实例，直接传输会存在问题。"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:'# 测试对象\n# 服务端\nfrom zerorpc import Server\nclass Test1(object):\n    def __init__(self, a):\n        self.a = a\n        \n    def test1(self, name):\n        return a\n\nclass Test2:\n    def test2_1(self, a):\n        return Test1(a)\n    \n    def test2_2(self, a):\n        obj = Test1(a)\n        return obj\n\nserver = Server(Test2())\nserver.bind("tcp://0.0.0.0:4242")\nserver.run()\n\n# ================================================================\n# 客户端\nfrom zerorpc import Client\n\nclient = Client()\nclient.connect("tcp://localhost:4242")\n\nprint(client.test2_1(1))\n"""\n输出\n……\n  File "msgpack/_packer.pyx", line 291, in msgpack._cmsgpack.Packer._pack\nTypeError: can not serialize \'Test1\' object\n"""\nprint(client.test2_2(1))\n"""\n输出\n……\n  File "msgpack/_packer.pyx", line 291, in msgpack._cmsgpack.Packer._pack\nTypeError: can not serialize \'Test1\' object\n"""\n'})}),"\n",(0,r.jsxs)(n.h2,{id:"youqu-远程方法绑定",children:["YouQu 远程方法绑定",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#youqu-远程方法绑定",children:"#"})]}),"\n",(0,r.jsxs)(n.h3,{id:"实践",children:["实践",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#实践",children:"#"})]}),"\n",(0,r.jsx)(n.p,{children:"youqu 远程控制时，客户端实际执行的代码是服务端提前进行绑定的方法。所以在 youqu 中已经对公共方法（Src 和 DogtailUtils）进行了绑定，满足大部分测试场景，但是，实际测试中可能需要进行单独的方法绑定已满足测试需求。"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"# youqu 中远程控制部分\n……\n\xa0\xa0 | \xa0\xa0 src\n\xa0\xa0 | \xa0\xa0 │\n\xa0\xa0 | \xa0\xa0 ……\n\xa0\xa0 | \xa0\xa0 ├── remotectl\n\xa0\xa0 | \xa0\xa0 │\xa0\xa0 ├── _base.py # 底层实现（传输、控制服务启动等）\n\xa0\xa0 | \xa0\xa0 │\xa0\xa0 ├── __init__.py\n\xa0\xa0 | \xa0\xa0 │\xa0\xa0 ├── _remote_dogtail_ctl.py # 远程 dogtail 服务启动入口 \n\xa0\xa0 | \xa0\xa0 │\xa0\xa0 ├── _remote_other_ctl.py # 其它 src 服务启动入口\n\xa0\xa0 | \xa0\xa0 │\xa0\xa0 └── remote.py # 调用接口\n……\n\n"})}),"\n",(0,r.jsxs)(n.p,{children:["在 ",(0,r.jsx)(n.code,{children:"youqu"})," 中需要在代码中进行提前注册，注册的方式为："]}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"在原始类中增加供调用的方法"}),"\n",(0,r.jsx)(n.li,{children:"在远程调用接口，新增通过远程调用的入口方法"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:'# 示例\n# src/utils/dogtail_utils.py\n……\nclass DogtailUtils(MouseKey):\n    """\n    通过属性进行元素定位和操作。\n    """\n    ……\n    def element_click_by_brother_element(self, element):\n        """通过相邻元素点击\n\n        Args:\n            element: 元素\n\n        Returns:\n\n        """\n        self.app_element(element).get_parent().click()\n          \n……\n\n# src/utils/remotectl/remote.py\n……\nclass Remote(ShortCut, CmdCtl):\n    def __init__(self, ip, user, password, transfer_appname=None, restart_service=False):\n        ……\n        \n    @property\n    def rdog(self) -> DogtailUtils:\n        return remote_dogtail_ctl(\n            user=self.user,\n            ip=self.ip,\n            password=self.password,\n            restart_service=self.restart_service,\n        )\n    \n    def click_element_by_brother(self, element):\n        self.rdog.element_click_by_brother_element(element) \n……\n'})}),"\n",(0,r.jsx)(n.p,{children:"由于 zerorpc 无法返回对象，又需要进行一些复杂的操作，只需要将所有操作都封装到方法内实现即可。"}),"\n",(0,r.jsx)(n.p,{children:"比如：在上面 dogtail ，默认封装的 dogtail 的 obj 对象不会指定应用对象，在进行一个元素定位时，可能需要10多秒，原因是寻找定位元素是从 DOM 的根节点开始寻找。如果想要在远程定位时，直接通过某个应用去点击其中某个元素的相邻元素，则可以修改注册方法："}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:'# 示例\n# src/utils/dogtail_utils.py\n……\nclass DogtailUtils(MouseKey):\n    """\n    通过属性进行元素定位和操作。\n    """\n    ……\n    def element_click_by_brother(self, app=None, element=None):\n        """通过相邻元素点击\n\n        Args:\n            app: 应用\n            element: 元素\n\n        Returns:\n\n        """\n        # 将类实例化需要的步骤进行方法内封装\n        if app is None:\n            obj = self.obj\n        else:\n            obj = root.application(app)\n        ret = obj.child(element)\n        ret.get_parent().click()        \n……\n\n# src/utils/remotectl/remote.py\n……\nclass Remote(ShortCut, CmdCtl):\n    def __init__(self, ip, user, password, transfer_appname=None, restart_service=False):\n        ……\n        \n    @property\n    def rdog(self) -> DogtailUtils:\n        return remote_dogtail_ctl(\n            user=self.user,\n            ip=self.ip,\n            password=self.password,\n            restart_service=self.restart_service,\n        )\n    \n    def click_element_by_brother(self, app_name, element):\n        self.rdog.element_click_by_brother(app_name, element) \n……\n'})}),"\n",(0,r.jsxs)(n.h3,{id:"调用过程",children:["调用过程",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#调用过程",children:"#"})]}),"\n",(0,r.jsx)(n.p,{children:"远程方法调用时，需要经过以下过程。在调用远程方法时，需要去判断是否需要发送当前项目文件（涉及一些本地测试资源），并且需要判断远程是否已经存在zerorpc 服务。并对其做出相应的逻辑处理。"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:"/YouQu-%E8%BF%9C%E7%A8%8B%E4%BA%A4%E4%BA%92%E5%BC%8F%E6%8E%A7%E5%88%B6_assets/3.png",alt:""})}),"\n",(0,r.jsxs)(n.h3,{id:"调用步骤",children:["调用步骤",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#调用步骤",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:["在 ",(0,r.jsx)(n.code,{children:"youqu"})," 中提供两种远程执行配置方式"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"# 命令行方式\npython3 manage.py remote --clients uos@10.8.12.9:1 --slaves test@10.7.13.171:1 ……\n\n# --clients 后的值即 远程机器的信息，多个设备用/分隔\n# --slaves 后的值即 远程机器的的远程机器的信息，多个设备用/分隔\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ini",children:"; 全局配置方式, youqu/setting/globalconfig.ini\n\n;=============================== REMOTE CONFIG ===================================\n[remote]\n;发送代码到测试机（不含report目录）\nSEND_CODE = yes\n\n;搭建测试环境\n;如果为yes，不管send_code是否为yes都会发送代码到测试机。\nBUILD_ENV = no\n\n;测试机密码\nCLIENT_PASSWORD = 1\n\n;yes表示所有测试机并行跑，执行相同的测试用例。\n;no表示测试机分布式执行，服务端会根据收集到的测试用例自动分配给各个测试机执行。\nPARALLEL = yes\n\n;清理 report 目录\nCLEAN_SERVER_REPORT_DIR = no\nCLEAN_CLIENT_REPORT_DIR = yes\n\n;测试机轮询次数\nSCAN = 300\n\n;远程执行测试机\n;              ┌─ client ${user}@${ip}:${password}\n; youqu-server ┼─ client mikigo@192.168.8.11:admin123\n;              └─ client ${user}@${ip}\n;如果${password}和前面配置项CLIENT_PASSWORD一样，可以不传：${user}@${ip}\n;多个机器之间用斜线分割：${user}@${ip}:${password}/${user}@${ip}\nCLIENTS =\n\n;=============================== SLAVE CONFIG ===================================\n;附属的测试机，用例步骤中与其他机器进行交互\n;        ┌─ slave ${user}@${ip}:${password}\n; master ┼─ slave mikigo@192.168.8.11:admin123\n;        └─ slave ${user}@${ip}\n;如果${password}和前面配置项PASSWORD一样，可以不传：${user}@${ip}\n;多个机器之间用斜线分割：${user}@${ip}:${password}/${user}@${ip}\nSLAVES = wgd@10.8.12.9:22222222\n"})}),"\n",(0,r.jsxs)(n.p,{children:["在用例中获取远程设备信息，需要从 fixture 中获取，在用例中直接调用，返回的是一个包含所有远程设备信息的列表。用例中使用方式，可查看 ",(0,r.jsx)(n.a,{href:"https://youqu.uniontech.com/%E6%8C%87%E5%8D%97/%E7%89%B9%E8%89%B2%E5%8A%9F%E8%83%BD/%E8%BF%9C%E7%A8%8B%E4%BA%A4%E4%BA%92%E5%BC%8F%E6%8E%A7%E5%88%B6.html",target:"_blank",rel:"noopener noreferrer",children:"远程交互式控制"})]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:'# youqu/conftest.py\n@pytest.fixture(scope="session")\ndef slaves(pytestconfig):\n    _slaves = pytestconfig.getoption("slaves") or GlobalConfig.SLAVES\n    s = []\n    if _slaves:\n        for slave in _slaves.split("/"):\n            slave_info = re.findall(r"^(.+?)@(\\d+\\.\\d+\\.\\d+\\.\\d+):{0,1}(.*?)$", slave)\n            if slave_info:\n                user, ip, password = slave_info[0]\n                s.append(\n                    {\n                        "user": user,\n                        "ip": ip,\n                        "password": password or GlobalConfig.PASSWORD,\n                    }\n                )\n    if not s:\n        raise EnvironmentError("No slaves found")\n    return s\n'})}),"\n",(0,r.jsxs)(n.h2,{id:"常见问题",children:["常见问题",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#常见问题",children:"#"})]}),"\n",(0,r.jsxs)(n.h3,{id:"zerorpc通信超时",children:["zerorpc通信超时",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#zerorpc通信超时",children:"#"})]}),"\n",(0,r.jsx)(n.p,{children:"1、报错信息"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"……\nself = <zerorpc.channel.BufferedChannel object at 0x7feb61978160>, timeout = 20\n\n    def recv(self, timeout=None):\n        # self._channel can be set to None by an 'on_close_if' callback if it\n        # sees a suitable message from the remote end...\n        #\n        if self._verbose and self._channel:\n            if self._input_queue_reserved < self._input_queue_size // 2:\n                self._request_data()\n        else:\n            self._verbose = True\n    \n        try:\n>           event = self._input_queue.get(timeout=timeout)\n\n/home/lxs-pen/.local/lib/python3.7/site-packages/zerorpc/channel.py:255: \n_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ \n\n>   ???\n\nsrc/gevent/queue.py:335: \n\n……\n\n# 手动进行服务启动，无法启动\n(youqu) 12345@uos-PC:~/youqu/src/remotectl$ python3 _remote_other_ctl.py \nNo protocol specified\nUnable to init server: Could not connect: Connection refused\nNo protocol specified\nUnable to init server: 无法连接：Connection refused\nNo protocol specified\n\n(_remote_other_ctl.py:21887): dbind-WARNING **: 10:00:10.002: Could not open X display\n"})}),"\n",(0,r.jsx)(n.p,{children:"2、查看当前登录终端，发现有多个 x 服务在运行："}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"$ who\nuos      tty1         2024-07-30 16:50 (:0)\n12345    tty2         2024-07-30 17:04 (:1)\n12345    pts/0        2024-07-31 09:59 (10.8.11.74)\n"})}),"\n",(0,r.jsx)(n.p,{children:"3、注销 x 服务为 0 的用户，再次尝试依旧复现，查询后发现加域账户依旧虽然为第一个 x 服务，但是标识依旧是 :1"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"$ who\n12345    tty2         2024-07-30 17:04 (:1)\n12345    pts/0        2024-07-31 09:59 (10.8.11.74)\n"})}),"\n",(0,r.jsx)(n.p,{children:"4、重启终端系统，再次运行，问题解决"}),"\n",(0,r.jsxs)(n.h3,{id:"客户端断言时找不到资源",children:["客户端断言时，找不到资源",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#客户端断言时找不到资源",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:["1、找不到资源，查看客户端 ",(0,r.jsx)(n.code,{children:"youqu"})," 项目的自动化应用项目是否存在对应资源，发现整个 ",(0,r.jsx)(n.code,{children:"youqu"})," 项目没有同步到客户端"]}),"\n",(0,r.jsxs)(n.p,{children:["2、执行前有进行过手动删除 ",(0,r.jsx)(n.code,{children:"youqu"})," 的动作，重新执行时，调试发现没有进行重新发送"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"# youqu/src/remotectl/_base.py\ndef _transfer_appname(ip, password, user, transfer_appname):\n    os.system(\n        f\"sshpass -p '{password}' rsync -av -e ssh --exclude='__pycache__' \"\n        f\"{conf.APPS_PATH}/{transfer_appname} {user}@{ip}:~/{client_project_path}/apps/\"\n    )\n"})}),"\n",(0,r.jsx)(n.p,{children:"3、继续断点调试，发现逻辑为如果存在远端远程服务进程，则不进行文件同步"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"# youqu/src/remotectl/_base.py\ndef check_rpc_started(filename):\n			……\n            if not tool_status:\n                _transfer_to_client(ip, password, user)\n                _start_client_service(ip, password, user, filename)\n            if restart_service:\n                _restart_client_service(ip, password, user, filename)\n            res = func(*args, **kwargs)\n			……\n"})}),"\n",(0,r.jsx)(n.p,{children:"4、查看客户端服务进程，文件虽然不存在，但是进程依旧存在"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"$ ps aux|grep remote\n12345     4648  0.5  2.2 725052 183048 ?       SLsl 10:03   0:14 /home/12345@udcp/youqu/.venv/bin/python _remote_other_ctl.py\n12345     5123  0.0  1.9 700436 155644 ?       SLsl 10:03   0:02 /home/12345@udcp/youqu/.venv/bin/python _remote_dogtail_ctl.py\n12345    18070  0.0  0.0  13820   888 pts/1    S+   10:52   0:00 grep remote\n"})}),"\n",(0,r.jsx)(n.p,{children:"5、杀掉原进程，重新执行，报错消失"})]})}function i(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,l.ah)(),e.components);return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(t,{...e})}):t(e)}let a=i;i.__RSPRESS_PAGE_META={},i.__RSPRESS_PAGE_META["blog%2F2024%2FYouQu-%E8%BF%9C%E7%A8%8B%E4%BA%A4%E4%BA%92%E5%BC%8F%E6%8E%A7%E5%88%B6.md"]={toc:[{text:"序言",id:"序言",depth:2},{text:"ZeroRPC",id:"zerorpc",depth:2},{text:"简介",id:"简介",depth:3},{text:"不足",id:"不足",depth:3},{text:"YouQu 远程方法绑定",id:"youqu-远程方法绑定",depth:2},{text:"实践",id:"实践",depth:3},{text:"调用过程",id:"调用过程",depth:3},{text:"调用步骤",id:"调用步骤",depth:3},{text:"常见问题",id:"常见问题",depth:2},{text:"zerorpc通信超时",id:"zerorpc通信超时",depth:3},{text:"客户端断言时，找不到资源",id:"客户端断言时找不到资源",depth:3}],title:"YouQu - 远程交互式控制",headingTitle:"YouQu - 远程交互式控制",frontmatter:{Author:"禄烨"}}}}]);