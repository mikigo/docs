"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["7167"],{2338:function(e,n,s){s.r(n),s.d(n,{default:()=>c});var d=s(2676),i=s(453);function l(e){let n=Object.assign({h1:"h1",a:"a",blockquote:"blockquote",p:"p",h2:"h2",h3:"h3",ul:"ul",li:"li",code:"code",pre:"pre",strong:"strong",img:"img"},(0,i.ah)(),e.components);return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(n.h1,{id:"at-经验总结",children:["AT 经验总结",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#at-经验总结",children:"#"})]}),"\n",(0,d.jsxs)(n.blockquote,{children:["\n",(0,d.jsx)(n.p,{children:"欢迎所有人提交你在自动化测试方面的优秀实践经验，以帮助大家解决可能遇到的问题。"}),"\n"]}),"\n",(0,d.jsxs)(n.h2,{id:"用例调试技巧",children:["用例调试技巧",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#用例调试技巧",children:"#"})]}),"\n",(0,d.jsxs)(n.h3,{id:"1-日志",children:["1. 日志",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#1-日志",children:"#"})]}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:["一定要先看报错，看 ",(0,d.jsx)(n.code,{children:"error"})," 日志，通常能明确的告诉你具体哪里代码报错；"]}),"\n",(0,d.jsxs)(n.li,{children:["结合报错点前面的 ",(0,d.jsx)(n.code,{children:"error"}),"、 ",(0,d.jsx)(n.code,{children:"info"})," 和 ",(0,d.jsx)(n.code,{children:"debug"})," 日志看否是正常。"]}),"\n"]}),"\n",(0,d.jsxs)(n.h3,{id:"2-断点调试",children:["2. 断点调试",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#2-断点调试",children:"#"})]}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:["方法报错：","\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsx)(n.li,{children:"在方法库中找到对应的方法，单独调用，看是否能正常执行；"}),"\n",(0,d.jsxs)(n.li,{children:["通常单个方法的执行是比较简单的，如果单个方法报错，很快就能排查出问题；在方法内部打断点，使用 ",(0,d.jsx)(n.code,{children:"Debug"})," 运行，看方法内部数据传递是否存在问题；"]}),"\n",(0,d.jsxs)(n.li,{children:["如果单个方法调用没问题，那么在用例中报错的方法前面打断点，使用 ",(0,d.jsx)(n.code,{children:"Debug"})," 运行，看用例的业务逻辑和数据传递是否存在问题；"]}),"\n"]}),"\n"]}),"\n",(0,d.jsxs)(n.li,{children:["断言报错：","\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsx)(n.li,{children:"断言为数据断言，根据表达式进行断言语句进行修改；"}),"\n",(0,d.jsx)(n.li,{children:"文件生成类断言，查看是否需要加等待时间；"}),"\n",(0,d.jsxs)(n.li,{children:["图像断言，在断言语句处打断点，使用 ",(0,d.jsx)(n.code,{children:"Debug"})," 运行，用例运行到断言处会停止，查看此时断言的图片与用例执行的现场存在什么差异，此时也可以进行重新截图，从而替换新的图片；"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,d.jsxs)(n.h3,{id:"3-远程执行",children:["3. 远程执行",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#3-远程执行",children:"#"})]}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsx)(n.p,{children:"远程执行指的是编辑器通过指定远程解释器执行自动化代码；"}),"\n",(0,d.jsxs)(n.p,{children:["远程执行的好处是可以很方便的 ",(0,d.jsx)(n.code,{children:"Debug"})," 运行，不用在测试机上打开编辑器，用例执行速度更快；"]}),"\n",(0,d.jsx)(n.p,{children:"支持远程执行功能的编辑器："}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:["专业版 ",(0,d.jsx)(n.code,{children:"Pycharm"})]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"VScode"})," ，需要使用插件 ",(0,d.jsx)(n.code,{children:"Remote-SSH"})]}),"\n"]}),"\n"]}),"\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsx)(n.p,{children:"远程执行配置"}),"\n",(0,d.jsxs)(n.p,{children:["以 ",(0,d.jsx)(n.code,{children:"Pycharm"})," 为例："]}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.code,{children:"File"})," —> ",(0,d.jsx)(n.code,{children:"Settings"})," —> ",(0,d.jsx)(n.code,{children:"Project"})," —> ",(0,d.jsx)(n.code,{children:"Python Interpreter"})," —> ",(0,d.jsx)(n.code,{children:"右边设置按钮"})," —> ",(0,d.jsx)(n.code,{children:"Add..."})," —> ",(0,d.jsx)(n.code,{children:"SSH Interpreter"})," —> ",(0,d.jsx)(n.code,{children:"New server configuration(填入host和username)"})," —> ",(0,d.jsx)(n.code,{children:"Next"})," —> ",(0,d.jsx)(n.code,{children:"password（测试机密码）"})," —>  ",(0,d.jsx)(n.code,{children:"Interpreter(选择远程解释器)"})," —> ",(0,d.jsx)(n.code,{children:"Finish"})]}),"\n"]}),"\n"]}),"\n",(0,d.jsxs)(n.h3,{id:"4-环境清理",children:["4. 环境清理",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#4-环境清理",children:"#"})]}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:["如果用例里面的 ",(0,d.jsx)(n.code,{children:"teardown"})," 没有执行，大概率是因为 ",(0,d.jsx)(n.code,{children:"setup"})," 里面代码报错，这两个是一对的，",(0,d.jsx)(n.code,{children:"setup"})," 里面报错，",(0,d.jsx)(n.code,{children:"teardown"})," 里面的代码不会执行；"]}),"\n",(0,d.jsxs)(n.li,{children:["目前我们已经将各应用的 ",(0,d.jsx)(n.code,{children:"clean_all"})," 这个 ",(0,d.jsx)(n.code,{children:"fixture"})," 改成了终结器，确保始终能执行到这步，但是用例里面的 ",(0,d.jsx)(n.code,{children:"fixture"}),"，还是需要我们小心处理；"]}),"\n",(0,d.jsxs)(n.li,{children:["要执行 ",(0,d.jsx)(n.code,{children:"clean_all"})," 需要在编辑器运行参数加 ",(0,d.jsx)(n.code,{children:"--clean yes"}),"，写用例的时候请加上，不然你不确定用例执行之后的环境是否恢复；"]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"setup"})," 可以不要，将 ",(0,d.jsx)(n.code,{children:"setup"})," 放到用例里面是一种稳妥的做法，",(0,d.jsx)(n.code,{children:"teardown"})," 一定要。"]}),"\n"]}),"\n",(0,d.jsxs)(n.h3,{id:"5-元素定位不准坐标返回不对",children:["5. 元素定位不准（坐标返回不对）",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#5-元素定位不准坐标返回不对",children:"#"})]}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:["基于 ",(0,d.jsx)(n.code,{children:"UI"})," 定位的方法，可能受到窗口 ID 的变化，导致坐标返回不准，默认取最新的一个窗口用于定位，但如果实际需要定位的不是最新的窗口，那么在用例中需要重新实例化方法类对象，并在类中传入对应的窗口序号；"]}),"\n",(0,d.jsx)(n.li,{children:"基于属性定位的方法，目前遇到的笔记本上，由于屏幕缩放比例为 1.25，导致坐标返回不准，我们默认使用缩放比例为 1；"}),"\n",(0,d.jsx)(n.li,{children:"基于图像定位的方法，如果当前屏幕中存在多个相同的目标元素，可能出现定位不准；支持通过参数控制，返回多个坐标；"}),"\n",(0,d.jsx)(n.li,{children:"基于 OCR 定位的方法，如果当前屏幕中存在多个相同的文字元素，可能出现定位不准；同样支持通过参数控制，返回多个坐标；"}),"\n"]}),"\n",(0,d.jsxs)(n.h3,{id:"6-键鼠操作不准",children:["6. 键鼠操作不准",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#6-键鼠操作不准",children:"#"})]}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsx)(n.li,{children:"鼠标操作不生效，比如右键、双击无响应；"}),"\n",(0,d.jsx)(n.li,{children:"键盘操作不生效，或者延迟输入，比如用例需要输入“我是中国人”，实际只输入了“我国人”；"}),"\n"]}),"\n",(0,d.jsxs)(n.p,{children:["以上问题排除应用卡顿等问题，大概率是由于工具的问题，目前键鼠操作我们使用三个工具：",(0,d.jsx)(n.code,{children:"Dogtail"})," 提供的键鼠工具、",(0,d.jsx)(n.code,{children:"PyAutoGUI"}),"、",(0,d.jsx)(n.code,{children:"Xdotool"})," ；"]}),"\n",(0,d.jsx)(n.p,{children:"有同学可能要说为啥要用三个啊，用一个不就好了，简单讲就是各有优点各有缺点。"}),"\n",(0,d.jsxs)(n.p,{children:["如果你遇到键鼠的问题，可以试试通过不同的工具操作；键盘输入延迟的问题，一般是因为输入速度太快了，系统没反应过来，常见于 ",(0,d.jsx)(n.code,{children:"ARM"})," 和 ",(0,d.jsx)(n.code,{children:"MIPS"})," 上，修改参数 delay_time 的值，单位为毫秒；"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-python",children:'# mouse_key.py\n\n@classmethod\ndef input_message(cls, message, delay_time=300, interval=0.2):\n    """\n    输入字符串\n    :param message: 输入的内容\n    :param delay_time: 延迟时间\n    :param interval:\n    :return:\n    """\n'})}),"\n",(0,d.jsx)(n.p,{children:"如果不是方法的问题，则需要继续和开发一起排除，是否为应用接受键鼠信号处理的问题，这类情况我们也是遇到过的，具体问题具体分析。"}),"\n",(0,d.jsx)(n.p,{children:"比如影院就重写了一个右键的方法："}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-python",children:'# base_widget.py\n\n@classmethod\ndef right_click(cls, _x=None, _y=None):\n    """\n    重写底层单击鼠标右键\n    解决影院右键触发release事件的问题（右键主窗口会播放视频）\n    """\n    cls.mouse_down(_x, _y, button=3)\n    sleep(0.1)\n    cls.mouse_up(button=3)\n'})}),"\n",(0,d.jsxs)(n.h2,{id:"终结器",children:["终结器",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#终结器",children:"#"})]}),"\n",(0,d.jsx)(n.p,{children:"前置/后置步骤"}),"\n",(0,d.jsx)(n.p,{children:"Pytest 实现前置/后置步骤的方式有两种，yield 和终结函数；"}),"\n",(0,d.jsx)(n.p,{children:"yield 实现，yield前面为用例的前置步骤，yield 后面为用例的后置步骤。"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-python",children:'@pytest.fixture\ndef clean_env():\n    print("setup")\n    yield\n    print("teardown")\n'})}),"\n",(0,d.jsx)(n.p,{children:"终结函数实现，使用 request.addfinalizer 注册用例的后置步骤"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-python",children:'@pytest.fixture\ndef clean_env(request):\n    def clean():\n        print("teardown")\n    request.addfinalizer(clean)\n    print("setup")\n'})}),"\n",(0,d.jsx)(n.p,{children:"yield的优缺点："}),"\n",(0,d.jsx)(n.p,{children:"优点：代码简洁，直观，可使用yield在用例中获取前置步骤的返回值"}),"\n",(0,d.jsx)(n.p,{children:"缺点：若前置步骤中出现错误，则后置步骤不会执行"}),"\n",(0,d.jsx)(n.p,{children:"终结函数："}),"\n",(0,d.jsx)(n.p,{children:"优点：前置步骤失败的话，后置步骤仍会执行且可以注册多个后置步骤（前提：需要在代码报错之前注册后置步骤），支持灵活使用后置条件"}),"\n",(0,d.jsx)(n.p,{children:"缺点：代码较为复杂，无法获取前置步骤的返回值（本人目前未实现）"}),"\n",(0,d.jsx)(n.p,{children:"总结：在前置步骤保证绝对不会出错时，使用yield更佳简便，当前置步骤易出现问题时，推荐使用终结函数。"}),"\n",(0,d.jsx)(n.p,{children:"场景：保险箱用例，前置步骤中开启保险箱，后置步骤删除保险箱。"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-python",children:'@pytest.fixture(scope="session", autouse=True)\ndef vault_fixture(request):\n    DfmWidget.reset_vault_by_cmd()	# 1、重置保险箱\n    DdeDockPublicWidget().close_file_manager_by_cmd() # 2、关闭文管\n    DdeDockPublicWidget().open_file_manager_in_dock_by_attr() # 3、开启文管\n    vault = DfmWidget()\n    vault.create_file_vault()	# 4、创建保险箱\n\n    def delete_vault():	# 8、删除保险箱的后置步骤\n        sleep(2)\n        DdeDockPublicWidget().open_file_manager_in_dock_by_attr()\n        vault = DfmWidget()\n        vault.delete_file_vault()\n        DfmWidget.reset_vault_by_cmd()\n        DdeDockPublicWidget().close_file_manager_by_cmd()\n    request.addfinalizer(delete_vault)	# 5、注册后置步骤\n    DdeDockPublicWidget().close_file_manager_by_cmd()	# 6、关闭文管\n    sleep(1)\n    DdeDockPublicWidget().open_file_manager_in_dock_by_attr() # 7、开启文管\n'})}),"\n",(0,d.jsx)(n.p,{children:"代码按注释中的序号执行步骤："}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsx)(n.li,{children:"代码在步骤 1 - 4 任意位置报错，则不会执行步骤 8，因为未执行到步骤 5，步骤8还未注册；"}),"\n",(0,d.jsx)(n.li,{children:"代码在步骤 6 - 7 报错，仍会执行步骤 7，因为在步骤 5 中已经将步骤 7 注册；"}),"\n"]}),"\n",(0,d.jsx)(n.p,{children:"可以灵活注册后置步骤，能实现某个前置步骤执行之后，才会执行后置步骤。"}),"\n",(0,d.jsxs)(n.h2,{id:"启动应用的方式",children:["启动应用的方式",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#启动应用的方式",children:"#"})]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-shell",children:"# huangmingqiang@uniontech.com\n"})}),"\n",(0,d.jsx)(n.p,{children:"（1）命令行启动"}),"\n",(0,d.jsx)(n.p,{children:"在 AT 代码中使用命令行启动应用，举例："}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-python",children:'os.popen("deepin-music")\n'})}),"\n",(0,d.jsxs)(n.p,{children:["这种方式启动存在一个问题，就是当使用 ssh 远程执行用例时，",(0,d.jsx)(n.code,{children:"dogtail"})," 无法获取到元素。"]}),"\n",(0,d.jsx)(n.p,{children:"（2）通过 UI 操作启动"}),"\n",(0,d.jsxs)(n.p,{children:["通过任务栏、启动器、桌面等 UI 方式启动，比如双击打开、右键打开等，这种操作方式不存在 ssh 远程执行用例时 ",(0,d.jsx)(n.code,{children:"dogtail"})," 无法获取到元素的问题，也更加符合用户的操作行为。"]}),"\n",(0,d.jsxs)(n.h2,{id:"文件选择框属性定位偶现无法找到",children:["文件选择框属性定位偶现无法找到",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#文件选择框属性定位偶现无法找到",children:"#"})]}),"\n",(0,d.jsx)(n.p,{children:"文件选择框存在一个问题，在调用文件选择框时，有一定的概率出现，界面已经渲染出来了，但是属性树并没有写入，导致通过属性无法找到元素，目前也没有很好的解决方案，为了用例稳定性，文件选择框的操作建议使用 UI 或者图片定位的方式，可以通过搜索内容固定文件位置。"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-shell",children:"# litaoa@uniontech.com\n"})}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-python",children:'desk = DdeDesktopPublicWidget()\n# 选择视频目录\ndesk.click_videos_dir_in_desktop_plugs_by_ui()\nsleep(1)\ndesk.ctrl_f()\nsleep(1)\ndesk.input_message("元素名称")\nsleep(0.5)\ndesk.enter()\nsleep(1)\n# 选择第一个文件\ndesk.click_list_view_btn_in_desktop_plugs_by_ui()\nsleep(1)\ndesk.click_first_file_in_desktop_plugs_by_ui()\nsleep(1)\n# 文管插件中点击打开\ndesk.click_open_btn_in_desktop_plugs_by_ui()\n'})}),"\n",(0,d.jsxs)(n.h2,{id:"应用启动",children:["应用启动",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#应用启动",children:"#"})]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-shell",children:"# mikigo\n"})}),"\n",(0,d.jsx)(n.p,{children:"在UI自动化测试中，一切操作的都是从应用启动开始的，而在Linux桌面应用自动化测试中，我们启动应用的方法有多种，下面做一个简单的介绍："}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.strong,{children:"【使用dogtail启动】"})}),"\n",(0,d.jsx)(n.p,{children:"dogtail提供了应用启动的方法，在utils库中，使用run方法启动："}),"\n",(0,d.jsx)(n.p,{children:"首先导入方法："}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-python",children:"from dogtail.utils import *\n"})}),"\n",(0,d.jsx)(n.p,{children:"调用run方法"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-python",children:"run('deepin-music')\n"})}),"\n",(0,d.jsxs)(n.p,{children:["即可启动音乐\n",(0,d.jsx)(n.img,{src:"https://img2020.cnblogs.com/blog/1898113/202012/1898113-20201218162414410-1539488857.png",alt:"img"})]}),"\n",(0,d.jsx)(n.p,{children:"这种方法的优点是采用进程的方式直接启动，不依赖与UI，无论桌面或任务栏上是否存在应用图标，都可以正常启动。"}),"\n",(0,d.jsx)(n.p,{children:"但是在实际项目中，仍然存在一个问题，"}),"\n",(0,d.jsx)(n.p,{children:"如果使用ssh远程调用，或者 Jenkins 中执行测试脚本的时候，在 sniff 中会出现找不到应用，经过分析，可能是因为使用这种方法启动的时候，实际是采用一个子进程启动了应用，dogtail 无法识别到。"}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.strong,{children:"【从任务栏启动】"})}),"\n",(0,d.jsx)(n.p,{children:"使用dogtail点击任务栏上的应用图标"}),"\n",(0,d.jsx)(n.p,{children:"通常有两种方法："}),"\n",(0,d.jsx)(n.p,{children:"（1）使用dogtail点击任务栏上的应用图标。"}),"\n",(0,d.jsx)(n.p,{children:"（2）已知应用图标在任务栏上的位置，然后使用鼠标点击对应坐标。"}),"\n",(0,d.jsx)(n.p,{children:"第二种方法的缺点是位置必须固定，如果移动位置就不行了，而使用第一种方法，无论位置在哪里，只要图标在任务栏上存在即可。"}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.strong,{children:"【点击桌面图标启动】"})}),"\n",(0,d.jsx)(n.p,{children:"桌面图标目前是采用图像识别技术，定位到应用图标的坐标，然后通过pyauogui进行点击操作。"}),"\n",(0,d.jsx)(n.p,{children:"详细技术方案可以参考我的另外两篇博客:"}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.a,{href:"https://www.cnblogs.com/mikigo/p/13489143.html",target:"_blank",rel:"noopener noreferrer",children:"基于opencv的模板匹配实现图像识别，返回在屏幕中的坐标"})}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.a,{href:"https://www.cnblogs.com/mikigo/p/13182619.html",target:"_blank",rel:"noopener noreferrer",children:"Python三方库PyAutoGui的使用方法"})}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.strong,{children:"【从启动器启动（俗称开始菜单）】"})}),"\n",(0,d.jsx)(n.p,{children:"启动中启动的实现逻辑实际和任务栏上启动差不多。"}),"\n",(0,d.jsx)(n.p,{children:"首先，需要使用鼠标点击任务栏上的启动器图标，或者键盘super键，将启动器呼出来，"}),"\n",(0,d.jsx)(n.p,{children:"然后，在启动器中点击对应的图标，"}),"\n",(0,d.jsx)(n.p,{children:"但是这里有个问题，启动器中的应用列表，一页展示不完，所以如果我们要点击的应用图标不在第一页怎么办，通常解决方案有两种："}),"\n",(0,d.jsx)(n.p,{children:"（1）需要进行向下滑动，这里就涉及到相应的识别方案，判断如果不在第一页就往下滑动翻页。"}),"\n",(0,d.jsx)(n.p,{children:"（2）启动器提供搜索的功能，输入应用名称搜索，然后进行点击。"}),"\n",(0,d.jsx)(n.p,{children:"从实际操作中来看，采用第二种方法的效率会高一点。"}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.strong,{children:"【终端命令启动】"})}),"\n",(0,d.jsxs)(n.p,{children:["在 Python 中，使用 ",(0,d.jsx)(n.code,{children:"os.popen()"})," 或 ",(0,d.jsx)(n.code,{children:"os.system()"})," 或 ",(0,d.jsx)(n.code,{children:"subprocess.Popen()"}),"，实现命令行启动，比如："]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-python",children:"import os\nos.popen('deepin-music')\n"})}),"\n",(0,d.jsx)(n.p,{children:"这种方式启动是比较简单的，但是在实际项目中，仍然存在远程执行脚本的时候，dogtail 无法识别的问题。"}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.strong,{children:"【总结】"})}),"\n",(0,d.jsx)(n.p,{children:"以上几种方法，各有优缺点，在实际项目中："}),"\n",(0,d.jsx)(n.p,{children:"（1）如果需要在 Jenkins 中做持续集成，建议使用第二种任务栏启动的方法。"}),"\n",(0,d.jsx)(n.p,{children:"（2）如果不会采用远程执行的，建议采用第一种或者最后一种方案。"}),"\n",(0,d.jsx)(n.p,{children:"（3）第三种和第四种启动方法，通常在测试用例中会涉及到，所以偶尔会用。"}),"\n",(0,d.jsxs)(n.h2,{id:"其他不为人知的细节",children:["其他不为人知的细节",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#其他不为人知的细节",children:"#"})]}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsx)(n.li,{children:"在一段时间内尽量编写同一个应用或模块的用例，能对该用例已有方法熟悉，避免过多重复业务代码的封装；"}),"\n",(0,d.jsx)(n.li,{children:"相同的场景下，各架构等待时间不同，建议使用框架提供的 sleep，我们做了不同架构的倍数放大；"}),"\n",(0,d.jsx)(n.li,{children:"编写用例时，尽量考虑到每一步异常后的环境恢复，需要建议这种意识，随时要考虑到，这步操作有没有可能出错，出错了改怎么办；"}),"\n",(0,d.jsxs)(n.li,{children:["提交代码的时候注意不要把一些临时的测试资源提交进去了，比如测试了一个影片，有些同学习惯使用 ",(0,d.jsx)(n.code,{children:"git add ."})," ，然后就全部提交到代码仓库了，这样即使后期把大文件删了，",(0,d.jsx)(n.code,{children:".git"})," 文件里面也会很大，造成代码仓库变得十分臃肿。"]}),"\n"]})]})}function r(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,i.ah)(),e.components);return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(l,{...e})}):l(e)}let c=r;r.__RSPRESS_PAGE_META={},r.__RSPRESS_PAGE_META["blog%2F2024%2FAT%E7%BB%8F%E9%AA%8C%E6%80%BB%E7%BB%93.md"]={toc:[{text:"用例调试技巧",id:"用例调试技巧",depth:2},{text:"1. 日志",id:"1-日志",depth:3},{text:"2. 断点调试",id:"2-断点调试",depth:3},{text:"3. 远程执行",id:"3-远程执行",depth:3},{text:"4. 环境清理",id:"4-环境清理",depth:3},{text:"5. 元素定位不准（坐标返回不对）",id:"5-元素定位不准坐标返回不对",depth:3},{text:"6. 键鼠操作不准",id:"6-键鼠操作不准",depth:3},{text:"终结器",id:"终结器",depth:2},{text:"启动应用的方式",id:"启动应用的方式",depth:2},{text:"文件选择框属性定位偶现无法找到",id:"文件选择框属性定位偶现无法找到",depth:2},{text:"应用启动",id:"应用启动",depth:2},{text:"其他不为人知的细节",id:"其他不为人知的细节",depth:2}],title:"AT 经验总结",headingTitle:"AT 经验总结",frontmatter:{Author:"mikigo、litao"}}}}]);