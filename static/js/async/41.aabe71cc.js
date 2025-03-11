"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["41"],{6922:function(e,n,i){i.r(n),i.d(n,{default:()=>l});var r=i(2676),d=i(453);function s(e){let n=Object.assign({h1:"h1",a:"a",h2:"h2",p:"p",h3:"h3",pre:"pre",code:"code",ul:"ul",li:"li",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",strong:"strong"},(0,d.ah)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.h1,{id:"appium6小时入门版",children:["Appium—6小时入门版",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#appium6小时入门版",children:"#"})]}),"\n",(0,r.jsxs)(n.h2,{id:"简介",children:["简介",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#简介",children:"#"})]}),"\n",(0,r.jsx)(n.p,{children:"Appium 主要用于做 APP UI 自动化测试。"}),"\n",(0,r.jsxs)(n.h2,{id:"安装",children:["安装",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#安装",children:"#"})]}),"\n",(0,r.jsxs)(n.h3,{id:"安装-appium-应用",children:["安装 Appium 应用",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#安装-appium-应用",children:"#"})]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"npm i -g appium@next\n"})}),"\n",(0,r.jsx)(n.p,{children:"安装完之后把 appium 映射到环境变量里面："}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"sudo ln -s /opt/nodev18.16.1/bin/appium /usr/local/bin/appium\n"})}),"\n",(0,r.jsx)(n.p,{children:"最后在终端输入："}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"appium\n"})}),"\n",(0,r.jsx)(n.p,{children:"如果得到这样的输出："}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"uos@uos-PC:~$ appium \n[Appium] Welcome to Appium v2.0.0-rc.5\n....\n"})}),"\n",(0,r.jsx)(n.p,{children:"说明安装没问题。"}),"\n",(0,r.jsxs)(n.h3,{id:"安装驱动程序-uiautomator2",children:["安装驱动程序 UiAutomator2",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#安装驱动程序-uiautomator2",children:"#"})]}),"\n",(0,r.jsx)(n.p,{children:"Appium UiAutomator2 Driver 是 Android 设备的测试自动化框架。Appium UiAutomator2 Driver 可自动执行本机、混合和移动 Web 应用程序，并在模拟器和真实设备上进行测试。"}),"\n",(0,r.jsxs)(n.p,{children:["Github地址：",(0,r.jsx)(n.a,{href:"https://github.com/appium/appium-uiautomator2-driver",target:"_blank",rel:"noopener noreferrer",children:"https://github.com/appium/appium-uiautomator2-driver"})]}),"\n",(0,r.jsx)(n.p,{children:"1、安装 Android SDK 平台工具"}),"\n",(0,r.jsx)(n.p,{children:"Android SDK Platform-Tools 是 Android SDK 的一个组件。它包含与 Android 平台进行交互的工具，主要是 adb 和 fastboot。"}),"\n",(0,r.jsxs)(n.p,{children:["下载链接：",(0,r.jsx)(n.a,{href:"https://developer.android.com/studio/releases/platform-tools?hl=zh-cn",target:"_blank",rel:"noopener noreferrer",children:"https://developer.android.com/studio/releases/platform-tools?hl=zh-cn"})]}),"\n",(0,r.jsxs)(n.p,{children:["选择 Linux 版本下载即可得到一个压缩包：",(0,r.jsx)(n.code,{children:"platform-tools_r34.0.4-linux.zip"})," ；"]}),"\n",(0,r.jsxs)(n.p,{children:["我这里就直接放到 ",(0,r.jsx)(n.code,{children:"~/Downloads/"})," 下面："]}),"\n",(0,r.jsx)(n.p,{children:"解压后得到这样的文件："}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"platform-tools\n├── adb  # adb\n├── dmtracedump\n├── etc1tool\n├── fastboot  # fastboot\n├── hprof-conv\n├── lib64\n│\xa0\xa0 └── libc++.so\n├── make_f2fs\n├── make_f2fs_casefold\n├── mke2fs\n├── mke2fs.conf\n├── NOTICE.txt\n├── source.properties\n└── sqlite3\n"})}),"\n",(0,r.jsx)(n.p,{children:"2、设置环境变量"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"export ANDROID_HOME=~/Downloads\nexport PATH=$PATH:$ANDROID_HOME/tools:$ANDROID_HOME/tools/bin:$ANDROID_HOME/platform-tools\n"})}),"\n",(0,r.jsxs)(n.p,{children:["你可以在终端输入 ",(0,r.jsx)(n.code,{children:"env"})," 查看这两个环境变量是否存在。"]}),"\n",(0,r.jsx)(n.p,{children:"3、安装 Java JDK"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"sudo apt install openjdk-11-jdk\n"})}),"\n",(0,r.jsx)(n.p,{children:"4、Android设备必须启用USB调试；"}),"\n",(0,r.jsx)(n.p,{children:"5、安装"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"# 安卓\nappium driver install uiautomator2\n# IOS\nappium driver install xcuitest\n"})}),"\n",(0,r.jsxs)(n.h3,{id:"安装-appium-python-客户端",children:["安装 Appium Python 客户端",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#安装-appium-python-客户端",children:"#"})]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"pip install Appium-Python-Client\n"})}),"\n",(0,r.jsxs)(n.p,{children:["文档地址：",(0,r.jsx)(n.a,{href:"https://appium.github.io/python-client-sphinx/",target:"_blank",rel:"noopener noreferrer",children:"https://appium.github.io/python-client-sphinx/"})]}),"\n",(0,r.jsxs)(n.h2,{id:"appium基础",children:["Appium基础",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#appium基础",children:"#"})]}),"\n",(0,r.jsxs)(n.h3,{id:"adb工具",children:["adb工具",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#adb工具",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:["1.",(0,r.jsx)(n.code,{children:"android debug brige"})," 安卓调试桥接器。"]}),"\n",(0,r.jsxs)(n.p,{children:["2.",(0,r.jsx)(n.code,{children:"adb"})," 常用命令"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"adb devices"})," 查看链接的设备"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"adb pull/push"})," 在设备与 ",(0,r.jsx)(n.code,{children:"pc"})," 之间拷贝文件"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sh",children:"adb push E:/data/app \\data\\\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"adb install/uninstall"})," 安装/卸载"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sh",children:"adb install E:/app/baidu.apk\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"adb shell"})," 进入shell界面（支持Linux命令）"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"adb connect/disconnect"})," 链接某个设备"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sh",children:"adb connect 127.0.0.1:62001\n"})}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.h3,{id:"package和activity",children:["Package和Activity",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#package和activity",children:"#"})]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"package"})," 包，告知工具包名是什么；"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"Activity"})," 就是一个个的页面，要指定一个主 ",(0,r.jsx)(n.code,{children:"Activity"}),"，才能启动；"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["获取 ",(0,r.jsx)(n.code,{children:"package"})," 和 ",(0,r.jsx)(n.code,{children:"activity"})]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sh",children:"apt dump badging E:/app/baidu.apk\n"})}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.h3,{id:"控件布局",children:["控件布局",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#控件布局",children:"#"})]}),"\n",(0,r.jsx)(n.p,{children:"1.常见布局（Layout）"}),"\n",(0,r.jsxs)(n.p,{children:["（1）",(0,r.jsx)(n.code,{children:"LinearLoyout"})," 线性布局"]}),"\n",(0,r.jsxs)(n.p,{children:["（2）",(0,r.jsx)(n.code,{children:"RelativeLayout"})," 相对布局"]}),"\n",(0,r.jsxs)(n.p,{children:["（3）",(0,r.jsx)(n.code,{children:"FrameLayout"})," 框架布局"]}),"\n",(0,r.jsx)(n.p,{children:"2.常见控件"}),"\n",(0,r.jsxs)(n.p,{children:["（1）",(0,r.jsx)(n.code,{children:"TextView"})," 界面上的一段文字，但不允许用户修改"]}),"\n",(0,r.jsxs)(n.p,{children:["（2）",(0,r.jsx)(n.code,{children:"Button"})," 按钮"]}),"\n",(0,r.jsxs)(n.p,{children:["（3）",(0,r.jsx)(n.code,{children:"EditText"})," 相当于input输入框"]}),"\n",(0,r.jsxs)(n.p,{children:["（4）",(0,r.jsx)(n.code,{children:"ImageView"})," 展示图片的控件"]}),"\n",(0,r.jsx)(n.p,{children:"（5）ListView 就是一个列表的展示"}),"\n",(0,r.jsxs)(n.h2,{id:"appium脚本",children:["Appium脚本",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#appium脚本",children:"#"})]}),"\n",(0,r.jsxs)(n.h3,{id:"认识appium",children:["认识appium",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#认识appium",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:["1.安装 ",(0,r.jsx)(n.code,{children:"appium"})," 之后，点击打开"]}),"\n",(0,r.jsx)(n.p,{children:"2.界面有三个选项"}),"\n",(0,r.jsxs)(n.p,{children:["（1）",(0,r.jsx)(n.code,{children:"Simple"})," 默认配置"]}),"\n",(0,r.jsxs)(n.p,{children:["（2）",(0,r.jsx)(n.code,{children:"Advanced"})," 高级设置，可自定义配置"]}),"\n",(0,r.jsxs)(n.p,{children:["（3）",(0,r.jsx)(n.code,{children:"Presets"})," 修改高级设置中的配置项"]}),"\n",(0,r.jsxs)(n.h3,{id:"启动app的脚本",children:["启动APP的脚本",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#启动app的脚本",children:"#"})]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-py",children:"from appium import webdriver\n\ndesired_capabilities = {\n    # 平台\n    'platformName': 'Android',\n    # 设备\n    'deviceName': '127.0.0.1:62001',\n    # 系统版本\n    'platformVersion': '5.1.1',\n    # 包名\n    'appPackage': 'com.tencent.news',\n    # 主activity\n    'appActivity': 'com.tencent.news.activity.SplashActivity'\n}\ndriver = webdriver.Remote('http://localhost:4723/wd/hub', desired_capabilities)\n"})}),"\n",(0,r.jsxs)(n.h3,{id:"常用capability",children:["常用Capability",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#常用capability",children:"#"})]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"noReset"})," 默认每次都按第一次安装的状态启动"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:'"noReset": True\n'})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"newCommandTimeout"})," 等待发送新消息的时间，默认是60秒"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sh",children:'"newCommandTimeout": 70\n'})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"browserName"})," 指定浏览器的名称（Chrome、safari）"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sh",children:"\"browserName\" : 'Chrome'\n"})}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.h2,{id:"appium元素定位",children:["Appium元素定位",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#appium元素定位",children:"#"})]}),"\n",(0,r.jsxs)(n.h3,{id:"1元素探测工具-appium-inspector",children:["1、元素探测工具-appium-inspector",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#1元素探测工具-appium-inspector",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:["Github地址：",(0,r.jsx)(n.a,{href:"https://github.com/appium/appium-inspector",target:"_blank",rel:"noopener noreferrer",children:"https://github.com/appium/appium-inspector"})]}),"\n",(0,r.jsxs)(n.h3,{id:"2元素探测工具-uiautomatorviewer",children:["2、元素探测工具-UIAutomatorviewer",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#2元素探测工具-uiautomatorviewer",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:["（1）打开在 ",(0,r.jsx)(n.code,{children:"Android_sdk_windows/tools_xpaths/uiautomatorviewer.bat"})]}),"\n",(0,r.jsxs)(n.p,{children:["（2）点击左上角按钮，获取 ",(0,r.jsx)(n.code,{children:"APP"})," 快照"]}),"\n",(0,r.jsx)(n.p,{children:"（3）鼠标指定快照上的元素，右侧即会显示该元素的信息"}),"\n",(0,r.jsx)(n.p,{children:"（4）保存功能，可将页面快照和元素信息保存下来，方便下次查看。"}),"\n",(0,r.jsxs)(n.h3,{id:"3原生应用的定位",children:["3、原生应用的定位",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#3原生应用的定位",children:"#"})]}),"\n",(0,r.jsx)(n.p,{children:"定位的方式有以下几种"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["用过 ",(0,r.jsx)(n.code,{children:"id"}),"，但 ",(0,r.jsx)(n.code,{children:"id"})," 并不唯一"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-py",children:"driver.find_element_by_id('id').click()\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"通过class name定位"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-py",children:"driver.find_element_by_class_name('class')\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"通过xpath定位"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-py",children:"driver.find_element_by_xpath('xpath')\n"})}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"​    xpath轴"}),"\n",(0,r.jsx)(n.p,{children:"​    用法："}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"//*[@id='kw']/parent::span\n"})}),"\n",(0,r.jsxs)(n.table,{children:["\n",(0,r.jsxs)(n.thead,{children:["\n",(0,r.jsxs)(n.tr,{children:["\n",(0,r.jsx)(n.th,{children:"轴名称"}),"\n",(0,r.jsx)(n.th,{children:"结果"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.tbody,{children:["\n",(0,r.jsxs)(n.tr,{children:["\n",(0,r.jsx)(n.td,{children:"ancestor"}),"\n",(0,r.jsx)(n.td,{children:"选择当前节点的所有先辈（父、祖父等）"}),"\n"]}),"\n",(0,r.jsxs)(n.tr,{children:["\n",(0,r.jsx)(n.td,{children:"ancestor-or-self"}),"\n",(0,r.jsx)(n.td,{children:"选取对当前节点的所有先辈（父、祖父等）以及当前节点本身"}),"\n"]}),"\n",(0,r.jsxs)(n.tr,{children:["\n",(0,r.jsx)(n.td,{children:"attribute"}),"\n",(0,r.jsx)(n.td,{children:"选取当前节点的所有属性"}),"\n"]}),"\n",(0,r.jsxs)(n.tr,{children:["\n",(0,r.jsx)(n.td,{children:"child"}),"\n",(0,r.jsx)(n.td,{children:"选择当前节点的所有属性"}),"\n"]}),"\n",(0,r.jsxs)(n.tr,{children:["\n",(0,r.jsx)(n.td,{children:"descendant"}),"\n",(0,r.jsx)(n.td,{children:"选取当前节点的所有后代元素（子、孙等）"}),"\n"]}),"\n",(0,r.jsxs)(n.tr,{children:["\n",(0,r.jsx)(n.td,{children:"descendant-or-self"}),"\n",(0,r.jsx)(n.td,{children:"选取当前节点的所有后代元素以及当前节点本身"}),"\n"]}),"\n",(0,r.jsxs)(n.tr,{children:["\n",(0,r.jsx)(n.td,{children:"following"}),"\n",(0,r.jsx)(n.td,{children:"选取文档当前节点的结束标签之后的所有节点"}),"\n"]}),"\n",(0,r.jsxs)(n.tr,{children:["\n",(0,r.jsx)(n.td,{children:"namespace"}),"\n",(0,r.jsx)(n.td,{children:"选取当前节点的所有命名空间节点"}),"\n"]}),"\n",(0,r.jsxs)(n.tr,{children:["\n",(0,r.jsx)(n.td,{children:"parent"}),"\n",(0,r.jsx)(n.td,{children:"选取当前节点的父节点"}),"\n"]}),"\n",(0,r.jsxs)(n.tr,{children:["\n",(0,r.jsx)(n.td,{children:"preceding"}),"\n",(0,r.jsx)(n.td,{children:"选取文档中当前节点的开始标签之前的所有节点"}),"\n"]}),"\n",(0,r.jsxs)(n.tr,{children:["\n",(0,r.jsx)(n.td,{children:"preceding-sibling"}),"\n",(0,r.jsx)(n.td,{children:"选取当前节点之前的所有统计节点"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"（4）层级定位，就是元素再查找"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-py",children:" element = driver.find_element_by_id('id').find_element_by_xpath('path')\n"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"（5）引入By类"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-py",children:"  from appium.webdriver.common.mobileby import MobileBy as By\n"})}),"\n",(0,r.jsxs)(n.h3,{id:"4uiautomator",children:["4、UIAutomator",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#4uiautomator",children:"#"})]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-py",children:" driver.find_element(By.ANDROID_UIAUTOMATOR,'new UiSelector().resourceId(\"resourece-id\")')\n"})}),"\n",(0,r.jsxs)(n.p,{children:["① ",(0,r.jsx)(n.code,{children:'new UiSelector().text("text")'})]}),"\n",(0,r.jsxs)(n.p,{children:["② ",(0,r.jsx)(n.code,{children:'new UiSelector().classname("class")'})]}),"\n",(0,r.jsx)(n.p,{children:"​    层级关系定位"}),"\n",(0,r.jsx)(n.p,{children:"③当前类往下递归找符合条件的子级控件"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-py",children:'new UiSelector().resourceId("resourece-id").childSelector(new UiSelector().resourceId("resourece-id"))\n'})}),"\n",(0,r.jsx)(n.p,{children:"④从父类往下递归找符合条件的控件"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-py",children:'new UiSelector().resourceId("resourece-id").fromParent(new UiSelector().resourceId("resourece-id"))\n'})}),"\n",(0,r.jsx)(n.p,{children:"（6）获取元素列表"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-py",children:"find_elements\n"})}),"\n",(0,r.jsxs)(n.h3,{id:"5混合应用hybrid",children:["5、混合应用hybrid",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#5混合应用hybrid",children:"#"})]}),"\n",(0,r.jsx)(n.p,{children:"（1）Chrome 远程调试"}),"\n",(0,r.jsx)(n.p,{children:"①在浏览器中输入："}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"chrome://inspect/#devices\n"})}),"\n",(0,r.jsx)(n.p,{children:"②浏览器上会显示手机上所有APP的web网页的地址"}),"\n",(0,r.jsx)(n.p,{children:"③复制地址在浏览器中访问，即可对元素进行定位"}),"\n",(0,r.jsxs)(n.p,{children:["（2）",(0,r.jsx)(n.code,{children:"driver.contexts"})]}),"\n",(0,r.jsxs)(n.p,{children:["查看 ",(0,r.jsx)(n.code,{children:"context"})," 的情况"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-py",children:"driver.switch_to.context('NATIVE_APP') \n"})}),"\n",(0,r.jsxs)(n.p,{children:["跳转到原生应用的 ",(0,r.jsx)(n.code,{children:"context"})]}),"\n",(0,r.jsxs)(n.p,{children:["（3）",(0,r.jsx)(n.code,{children:"appium inspector"})," 定位"]}),"\n",(0,r.jsxs)(n.p,{children:["在 ",(0,r.jsx)(n.code,{children:"appium"})," 右上角点击放大镜符号，填入 ",(0,r.jsx)(n.code,{children:"desired_capabilities"})," 里面的参数"]}),"\n",(0,r.jsxs)(n.h3,{id:"6web应用",children:["6、web应用",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#6web应用",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:["通过 ",(0,r.jsx)(n.code,{children:"pc"})," 端 ",(0,r.jsx)(n.code,{children:"chrome"})," 操作"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-py",children:"from selenium import webdriver\nfrom time import sleep\n\nmobile_emulation = {'deviceName': 'Galaxy S5'}\nchrome_options = webdriver.ChromeOptions()\nchrome_options.add_experimental_option('mobileEmulation', mobile_emulation)\ndriver = webdriver.Chrome(chrome_options=chrome_options)\ndriver.get('http://www.baidu.com')\nsleep(20)\ndriver.quit()\n"})}),"\n",(0,r.jsxs)(n.h2,{id:"appium操作",children:["Appium操作",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#appium操作",children:"#"})]}),"\n",(0,r.jsxs)(n.h3,{id:"基本操作",children:["基本操作",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#基本操作",children:"#"})]}),"\n",(0,r.jsx)(n.p,{children:"1.点击"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-py",children:"click（）\n"})}),"\n",(0,r.jsx)(n.p,{children:"2.多点触摸"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-py",children:"driver.tap(positions, duration=None)\n"})}),"\n",(0,r.jsx)(n.p,{children:"3.清除文本"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-py",children:"driver.find_element_by_id('id').clear()\n"})}),"\n",(0,r.jsxs)(n.h3,{id:"滚动操作",children:["滚动操作",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#滚动操作",children:"#"})]}),"\n",(0,r.jsx)(n.p,{children:"1.元素滚动"}),"\n",(0,r.jsx)(n.p,{children:"按住不放，拖动"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-py",children:"driver.scroll(ele_1,ele_2) \n"})}),"\n",(0,r.jsx)(n.p,{children:"传入两个元素"}),"\n",(0,r.jsx)(n.p,{children:"2.元素拖拽"}),"\n",(0,r.jsx)(n.p,{children:"在开始元素长按（1000毫秒）"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-py",children:"driver.drag_and_drop(ele_1,ele_2)\n"})}),"\n",(0,r.jsx)(n.p,{children:"3.屏幕滑动"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-py",children:"driver.swipe(start_x,start_y,end_x,end_y,duration=None)\n"})}),"\n",(0,r.jsx)(n.p,{children:"分别传入开始和结束位置的xy轴值"}),"\n",(0,r.jsx)(n.p,{children:"4.快速滑动"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-py",children:"driver.flick(start_x,start_y,end_x,end_y)\n"})}),"\n",(0,r.jsxs)(n.h3,{id:"输入键盘和输入法控制",children:["输入、键盘和输入法控制",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#输入键盘和输入法控制",children:"#"})]}),"\n",(0,r.jsx)(n.p,{children:"1.模拟输入"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-py",children:'send_keys("text")\n'})}),"\n",(0,r.jsx)(n.p,{children:"2.发送按键码"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-py",children:"driver.press_keycode(66)\n"})}),"\n",(0,r.jsx)(n.p,{children:"常用的按键码"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"4:返回\n66:回车\n26:电源键\n3:home键\n"})}),"\n",(0,r.jsx)(n.p,{children:"3.输入法操作"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-py",children:"# 获取当前输入法引擎\nactive_ime_engine()\n# 激活某个输入法\nactivate_ime_engine(engine)\n"})}),"\n",(0,r.jsxs)(n.h3,{id:"获取页面内容",children:["获取页面内容",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#获取页面内容",children:"#"})]}),"\n",(0,r.jsx)(n.p,{children:"1.获取上下文信息"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-py",children:"# 看有没有webview，包含当前会话所有上下文的list\ndriver.contexts \n# 获取当前上下文\ndrover/current_context \n"})}),"\n",(0,r.jsx)(n.p,{children:"2.获取当前所在的activity"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-py",children:"driver.current_activity\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"# 任意程序页面，获取当前页面的activity\nadb shell dumpsys window | findstr mCurrentFocus \n"})}),"\n",(0,r.jsx)(n.p,{children:"3.获取元素相关内容"}),"\n",(0,r.jsx)(n.p,{children:"① 获取文本值"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-py",children:"driver.find_element_by_id('id').text\n"})}),"\n",(0,r.jsx)(n.p,{children:"②获取元素属性值"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-py",children:"driver.find_element_by_id('id').get_attribute('text')\n"})}),"\n",(0,r.jsx)(n.p,{children:"③获取元素大小"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-py",children:"driver.find_element_by_id('id').size\n"})}),"\n",(0,r.jsx)(n.p,{children:"④获取元素坐标"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-py",children:"driver.find_element_by_id('id').location\n"})}),"\n",(0,r.jsx)(n.p,{children:"4.检查元素状态"}),"\n",(0,r.jsx)(n.p,{children:"①检查元素是否被选中"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-py",children:"driver.find_element_by_id('id').is_selected()\n"})}),"\n",(0,r.jsx)(n.p,{children:"②检查元素是否可用"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-py",children:"driver.find_element_by_id('id').is_enabled()\n"})}),"\n",(0,r.jsx)(n.p,{children:"③获取窗口大小"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-py",children:"driver.get_window_size(windowHandle='current')\n"})}),"\n",(0,r.jsxs)(n.h3,{id:"等待",children:["等待",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#等待",children:"#"})]}),"\n",(0,r.jsx)(n.p,{children:"1.wait_activity"}),"\n",(0,r.jsx)(n.p,{children:"等待某个 activity 加载完"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-py",children:"# 每隔1秒扫描一下，总共等待10秒\nwait_activity('.base.ui.MainActiity',10,1) \n"})}),"\n",(0,r.jsx)(n.p,{children:"2.强制等待"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-py",children:"time.sleep(1)\n"})}),"\n",(0,r.jsx)(n.p,{children:"3.隐式等待"}),"\n",(0,r.jsx)(n.p,{children:"只需要声明一次，一般在打开浏览器后进行声明，声明之后对整个driver的生命周期都有效。"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-py",children:"driver.implicitly_wait(20)\n"})}),"\n",(0,r.jsx)(n.p,{children:"4.显示等待"}),"\n",(0,r.jsx)(n.p,{children:"等待某个元素出现"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-py",children:"from selenium.webdriver.support.ui import WebDriverWait\nfrom selenium.webdriver.support import expected_conditions as EC\n\nwait = WebDriverWait(driver,10,0.5)\nwait.until(EC.presence_of_element_located(By.ID,'kw'))\n"})}),"\n",(0,r.jsxs)(n.h3,{id:"截图",children:["截图",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#截图",children:"#"})]}),"\n",(0,r.jsx)(n.p,{children:"1.截图保存为文件"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-py",children:"driver.save_screenshot(C:/filename.png)\n"})}),"\n",(0,r.jsx)(n.p,{children:"2.截图并保存为字符串"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-py",children:"base64_png = driver.get_screenshot_as_base64()\nbase64_png_bytes = base64.b64decode(base64_png)\n\nwith open('xxx.png','wb') as f:\n	f.write(base64_png_bytes)\n"})}),"\n",(0,r.jsxs)(n.h3,{id:"app弹窗处理",children:["APP弹窗处理",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#app弹窗处理",children:"#"})]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"Dialog"})," 对话框，确定或取消等弹窗"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"Actionbar"})," 功能框，分享功能从下方弹出的窗口"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"Toast"})," 提示信息，页面小提示，过几秒钟就自动消失"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"Snackbar"})," 提示对话框"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"Dialog"})," 和 ",(0,r.jsx)(n.code,{children:"Actionbar"})," 可以直接用元素定位"]}),"\n"]}),"\n",(0,r.jsxs)(n.h3,{id:"触屏操作",children:["触屏操作",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#触屏操作",children:"#"})]}),"\n",(0,r.jsx)(n.p,{children:"TouchAction 要使用到这个类里面的方法"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-py",children:"from appium.webdriver.common.touch_action import TouchAction\n"})}),"\n",(0,r.jsx)(n.p,{children:"1.tap 触摸"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-py",children:"tap(element=None, x=None, y=None, count=1)\n"})}),"\n",(0,r.jsx)(n.p,{children:"2.press 短按"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-py",children:"press(el=None, x=None, y=None)\n"})}),"\n",(0,r.jsx)(n.p,{children:"3.long_press 长按"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-py",children:"long_press(el=None, x=None, y=None, duration=1000)\n"})}),"\n",(0,r.jsx)(n.p,{children:"4.wait 等待"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-py",children:"wait(ms=0)\n"})}),"\n",(0,r.jsx)(n.p,{children:"5.move_to 移动"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-py",children:"move_to(el=None, x=None, y=None)\n"})}),"\n",(0,r.jsx)(n.p,{children:"6.release 释放"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-py",children:"driver.release()\n"})}),"\n",(0,r.jsx)(n.p,{children:"7.perform 提交"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-py",children:"driver.perform()\n"})})]})}function c(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,d.ah)(),e.components);return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(s,{...e})}):s(e)}let l=c;c.__RSPRESS_PAGE_META={},c.__RSPRESS_PAGE_META["%E8%87%AA%E5%8A%A8%E5%8C%96%E6%8A%80%E6%9C%AF%2FUI%E8%87%AA%E5%8A%A8%E5%8C%96%2FAppium%E2%80%946%E5%B0%8F%E6%97%B6%E5%85%A5%E9%97%A8%E7%89%88.md"]={toc:[{text:"简介",id:"简介",depth:2},{text:"安装",id:"安装",depth:2},{text:"安装 Appium 应用",id:"安装-appium-应用",depth:3},{text:"安装驱动程序 UiAutomator2",id:"安装驱动程序-uiautomator2",depth:3},{text:"安装 Appium Python 客户端",id:"安装-appium-python-客户端",depth:3},{text:"Appium基础",id:"appium基础",depth:2},{text:"adb工具",id:"adb工具",depth:3},{text:"Package和Activity",id:"package和activity",depth:3},{text:"控件布局",id:"控件布局",depth:3},{text:"Appium脚本",id:"appium脚本",depth:2},{text:"认识appium",id:"认识appium",depth:3},{text:"启动APP的脚本",id:"启动app的脚本",depth:3},{text:"常用Capability",id:"常用capability",depth:3},{text:"Appium元素定位",id:"appium元素定位",depth:2},{text:"1、元素探测工具-appium-inspector",id:"1元素探测工具-appium-inspector",depth:3},{text:"2、元素探测工具-UIAutomatorviewer",id:"2元素探测工具-uiautomatorviewer",depth:3},{text:"3、原生应用的定位",id:"3原生应用的定位",depth:3},{text:"4、UIAutomator",id:"4uiautomator",depth:3},{text:"5、混合应用hybrid",id:"5混合应用hybrid",depth:3},{text:"6、web应用",id:"6web应用",depth:3},{text:"Appium操作",id:"appium操作",depth:2},{text:"基本操作",id:"基本操作",depth:3},{text:"滚动操作",id:"滚动操作",depth:3},{text:"输入、键盘和输入法控制",id:"输入键盘和输入法控制",depth:3},{text:"获取页面内容",id:"获取页面内容",depth:3},{text:"等待",id:"等待",depth:3},{text:"截图",id:"截图",depth:3},{text:"APP弹窗处理",id:"app弹窗处理",depth:3},{text:"触屏操作",id:"触屏操作",depth:3}],title:"Appium—6小时入门版",headingTitle:"Appium—6小时入门版",frontmatter:{Author:"mikigo"}}}}]);