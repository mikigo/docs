"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["3287"],{1376:function(e,n,r){r.r(n),r.d(n,{default:()=>h});var i=r(2676),c=r(453);function d(e){let n=Object.assign({h1:"h1",a:"a",h2:"h2",p:"p",code:"code",pre:"pre",h3:"h3",h4:"h4",ul:"ul",li:"li",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td"},(0,c.ah)(),e.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.h1,{id:"opencvpython基础9小时入门版",children:["OpenCV(Python)基础—9小时入门版",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#opencvpython基础9小时入门版",children:"#"})]}),"\n",(0,i.jsxs)(n.h2,{id:"一一句话简介",children:["一、一句话简介",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#一一句话简介",children:"#"})]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"OpenCV (Open Source Computer Vision Library) "})," 是用 ",(0,i.jsx)(n.code,{children:"C++"})," 语言编写，提供 ",(0,i.jsx)(n.code,{children:"Python"}),"、",(0,i.jsx)(n.code,{children:"Java"})," 等语言 ",(0,i.jsx)(n.code,{children:"API"}),"的一个开源计算机视觉库。"]}),"\n",(0,i.jsxs)(n.h2,{id:"二安装",children:["二、安装",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#二安装",children:"#"})]}),"\n",(0,i.jsxs)(n.p,{children:["1、",(0,i.jsx)(n.code,{children:"Debian"})," 系使用 ",(0,i.jsx)(n.code,{children:"apt"})," 安装 ",(0,i.jsx)(n.code,{children:"OpencCV"}),"："]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-console",children:"sudo apt install python-opencv\n"})}),"\n",(0,i.jsxs)(n.p,{children:["在 ",(0,i.jsx)(n.code,{children:"UOS"})," 系统上，也可以使用："]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-console",children:"sudo apt install python3-opencv\n"})}),"\n",(0,i.jsxs)(n.p,{children:["支持 ",(0,i.jsx)(n.code,{children:"AMD"}),"、",(0,i.jsx)(n.code,{children:"ARM"}),"、",(0,i.jsx)(n.code,{children:"MIPS"})," 架构安装。"]}),"\n",(0,i.jsxs)(n.p,{children:["2、安装 ",(0,i.jsx)(n.code,{children:"NumPy"}),"："]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"NumPy"})," 是 Python中的一个运算速度非常快的数学库，数组玩到起飞，如果你玩数据科学、机器学习，这是必学库。所有 ",(0,i.jsx)(n.code,{children:"OpenCV"})," 数组结构都转换为 ",(0,i.jsx)(n.code,{children:"NumPy"})," 数组，要想 ",(0,i.jsx)(n.code,{children:"OpenCV"})," 学得好，必须熟悉它，学习 ",(0,i.jsx)(n.code,{children:"OpenCV"})," 基础多少需要了解一点。"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"sudo apt -y install python3-numpy\n"})}),"\n",(0,i.jsxs)(n.p,{children:["好多同学安装 ",(0,i.jsx)(n.code,{children:"Python"})," 库都习惯使用 ",(0,i.jsx)(n.code,{children:"pip"})," 安装，实际上 ",(0,i.jsx)(n.code,{children:"OpenCV"})," 也可以，但是目前只支持在 ",(0,i.jsx)(n.code,{children:"AMD"}),"，所以考虑到兼容性还是建议使用 ",(0,i.jsx)(n.code,{children:"apt"})," 进行安装，并且官方文档也是建议使用 ",(0,i.jsx)(n.code,{children:"apt"})," 安装。"]}),"\n",(0,i.jsxs)(n.h2,{id:"三入门基础",children:["三、入门基础",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#三入门基础",children:"#"})]}),"\n",(0,i.jsxs)(n.p,{children:["所有 ",(0,i.jsx)(n.code,{children:"OpenCV"})," 类和函数都放在 ",(0,i.jsx)(n.code,{children:"cv"})," 名称空间中，在 ",(0,i.jsx)(n.code,{children:"py"})," 文件中导入："]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"import cv2 as cv\n"})}),"\n",(0,i.jsx)(n.p,{children:"后续内容默认都使用了导入。"}),"\n",(0,i.jsxs)(n.h3,{id:"1图像",children:["1、图像",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#1图像",children:"#"})]}),"\n",(0,i.jsxs)(n.h4,{id:"11读图像",children:["1.1、读图像",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#11读图像",children:"#"})]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"img = cv.imread()\n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"参数1：文件路径。(str)"}),"\n",(0,i.jsxs)(n.li,{children:["参数2：读取图像的方式。","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"cv.IMREAD_COLOR 加载一个彩色图像，忽略 alpha 通道。（默认值）"}),"\n",(0,i.jsx)(n.li,{children:"cv.IMREAD_GRAYSCALE 加载图像为灰度模式。"}),"\n",(0,i.jsx)(n.li,{children:"cv.IMREAD_UNCHANGED 加载图像，包括 alpha 通道。"}),"\n",(0,i.jsx)(n.li,{children:"还可以简单地分别传递整数1、0或 -1。"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.h4,{id:"12显示图像",children:["1.2、显示图像",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#12显示图像",children:"#"})]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"cv.show()\n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"参数1：窗口名称。（str）"}),"\n",(0,i.jsx)(n.li,{children:"参数2：图像。（obj）"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"在窗口中显示图像，窗口自动适合图像大小。"}),"\n",(0,i.jsx)(n.p,{children:"销毁窗口"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:'cv.destroyAllWindows() # 销毁所有窗口\ncv.destroyWindow("window_name") # 销毁某个窗口，参数传入窗口名称\n'})}),"\n",(0,i.jsxs)(n.h4,{id:"13写图像",children:["1.3、写图像",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#13写图像",children:"#"})]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"cv.imwrite()\n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"参数1：文件名。"}),"\n",(0,i.jsx)(n.li,{children:"参数2：图像。（obj）"}),"\n"]}),"\n",(0,i.jsxs)(n.h3,{id:"2视频",children:["2、视频",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#2视频",children:"#"})]}),"\n",(0,i.jsxs)(n.h4,{id:"21从摄像头捕获视频",children:["2.1、从摄像头捕获视频",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#21从摄像头捕获视频",children:"#"})]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"cap = cv.VideoCapture(0)\n"})}),"\n",(0,i.jsx)(n.p,{children:"它的参数可以是设备索引或视频文件的名称。设备索引就是指定哪个摄像头的数字。一般我们连接一个摄像头，所以传0(或-1)。当然可以通过传递1来选择第二个相机，以此类推。"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"import cv2 as cv\ncap = cv.VideoCapture(0)\n # 判断是否打开\nif not cap.isOpened(): \n    exit()\nwhile True:  \n    # 逐帧捕获\n    ret, frame = cap.read()  \n    # 判断是否读取到\n    if not ret:  \n        break\n    # 转灰度\n    gray = cv.cvtColor(frame, cv.COLOR_BGR2GRAY)\n    # 显示图像\n    cv.imshow('frame', gray)\n    # 监控键盘信号\n    if cv.waitKey(1) == ord('q'):\n        break\n# 释放\ncap.release()\ncv.destroyAllWindows()\n"})}),"\n",(0,i.jsx)(n.p,{children:"一切都看起来很和谐哈。"}),"\n",(0,i.jsx)(n.p,{children:"需要注意其他的两个判断："}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["有时候摄像头可能没有初始化成功，所以用",(0,i.jsx)(n.code,{children:"cap.isOpened()"})," 来判断，并退出。"]}),"\n",(0,i.jsx)(n.li,{children:"可能没有接收到帧，停止循环。"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"获取视频的一些属性："}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"cap.get(id)\n"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"id"})," 是一个从0到18的数字，每个数字表示视频的一个属性。每个属性代表什么→（",(0,i.jsx)(n.a,{href:"https://docs.opencv.org/4.1.2/d4/d15/group__videoio__flags__base.html#gaeb8dd9c89c10a5c63c139bf7c4f5704d%EF%BC%89",target:"_blank",rel:"noopener noreferrer",children:"https://docs.opencv.org/4.1.2/d4/d15/group__videoio__flags__base.html#gaeb8dd9c89c10a5c63c139bf7c4f5704d）"})]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"cap.set()"})," 属于进阶用法，这里按下不表。"]}),"\n",(0,i.jsxs)(n.h4,{id:"22从文件中播放视频",children:["2.2、从文件中播放视频",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#22从文件中播放视频",children:"#"})]}),"\n",(0,i.jsx)(n.p,{children:"原理和从摄像头中捕获是一样的，区别在于："}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"cap = cv.VideoCapture('vtest.avi')\n"})}),"\n",(0,i.jsx)(n.p,{children:"参数是文件名称。"}),"\n",(0,i.jsxs)(n.h4,{id:"23保存视频",children:["2.3、保存视频",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#23保存视频",children:"#"})]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"out = VideoWriter()\n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"参数1：文件名"}),"\n",(0,i.jsxs)(n.li,{children:["参数2：fourcc = cv.VideoWriter_fourcc(*'XVID')","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"FourCC 是一个4字节的代码，用于指定视频编解码器。"}),"\n",(0,i.jsx)(n.li,{children:"DIVX, XVID, MJPG, X264, WMV1, WMV2"}),"\n",(0,i.jsxs)(n.li,{children:["不同的操作系统有差异 ",(0,i.jsx)(n.a,{href:"https://www.fourcc.org/codecs.php",target:"_blank",rel:"noopener noreferrer",children:"https://www.fourcc.org/codecs.php"})]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.li,{children:"参数3：帧率"}),"\n",(0,i.jsx)(n.li,{children:"参数3：分辨率"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"import cv2 as cv\ncap = cv.VideoCapture(0)\nfourcc = cv.VideoWriter_fourcc(*'XVID')\nout = cv.VideoWriter('output.avi', fourcc, 20.0, (640,  480))\nwhile cap.isOpened():\n    ret, frame = cap.read()\n    if not ret:\n        break\n    # 旋转后写入\n    frame = cv.flip(frame, 0)\n    out.write(frame)\n    cv.imshow('frame', frame)\n    if cv.waitKey(1) == ord('q'):\n        break\n# 释放\ncap.release()\nout.release()\ncv.destroyAllWindows()\n"})}),"\n",(0,i.jsx)(n.p,{children:"结合前面摄像头捕获视频的代码，看起来很简单～"}),"\n",(0,i.jsxs)(n.h3,{id:"3绘图",children:["3、绘图",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#3绘图",children:"#"})]}),"\n",(0,i.jsxs)(n.h4,{id:"31画线",children:["3.1、画线",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#31画线",children:"#"})]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"cv.line()\n"})}),"\n",(0,i.jsx)(n.p,{children:"举例：创建一个黑色图像，并从左上角到右下角在上面画一条蓝线"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"import numpy as np\nimport cv2 as cv\n# 写一个黑色的图像\nimg = np.zeros((512,512,3), np.uint8)\n# 画一根5像素款的蓝线\ncv.line(img,(0,0),(511,511),(255,0,0),5)\n"})}),"\n",(0,i.jsx)(n.p,{children:"(255,0,0) 代表蓝色，最后一个参数是线的宽度。"}),"\n",(0,i.jsxs)(n.h4,{id:"32画圆",children:["3.2、画圆",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#32画圆",children:"#"})]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"cv.circle(img,(447,63), 63, (0,0,255), -1)\n"})}),"\n",(0,i.jsx)(n.p,{children:"参数：中心坐标和半径"}),"\n",(0,i.jsxs)(n.h4,{id:"33画矩形",children:["3.3、画矩形",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#33画矩形",children:"#"})]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"cv.rectangle(img,(384,0),(510,128),(0,255,0),3)\n"})}),"\n",(0,i.jsx)(n.p,{children:"参数：矩形的左上角和右下角"}),"\n",(0,i.jsx)(n.p,{children:"支持其他图形。。。"}),"\n",(0,i.jsxs)(n.h2,{id:"四核心功能",children:["四、核心功能",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#四核心功能",children:"#"})]}),"\n",(0,i.jsxs)(n.h3,{id:"1图像的基本操作",children:["1、图像的基本操作",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#1图像的基本操作",children:"#"})]}),"\n",(0,i.jsxs)(n.h4,{id:"11访问和修改像素值",children:["1.1、访问和修改像素值",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#11访问和修改像素值",children:"#"})]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"import numpy as np  # 官方建议固定写法\nimport cv2 as cv\nimg = cv.imread('messi5.jpg')\npx = img[100,100]  \n# (100, 100)的像素值[157 166 200]（B、G和R值）\nblue = img[100,100,0] \n"})}),"\n",(0,i.jsx)(n.p,{children:"修改"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"img[100,100] = [255,255,255]\n"})}),"\n",(0,i.jsx)(n.p,{children:"直接赋值即可修改，但是直接访问非常缓慢，更好的像素访问和编辑方法:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"img.item(10,10,2)  # 访问R值\nimg.itemset((10,10,2),100)  # 修改R值\n"})}),"\n",(0,i.jsxs)(n.h4,{id:"12访问图像属性",children:["1.2、访问图像属性",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#12访问图像属性",children:"#"})]}),"\n",(0,i.jsx)(n.p,{children:"图像属性包括行数、列数和通道数、图像数据类型、像素数等。"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"img.shape\n# (342,548,3)\n"})}),"\n",(0,i.jsx)(n.p,{children:"返回一个行、列和通道数的元组。"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"img.size  # 访问像素总数\n"})}),"\n",(0,i.jsxs)(n.h4,{id:"13特定区域",children:["1.3、特定区域",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#13特定区域",children:"#"})]}),"\n",(0,i.jsx)(n.p,{children:"机器学习中经常需要抠图，比如人脸识别时，一般会先选择人脸区域，搜索其中的眼睛，而不是搜索整个图像，以提供精确度。"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"ball = img[280:340, 330:390] # 抠一个区域\nimg[273:333, 100:160] = ball # 复制到另一个区域\n"})}),"\n",(0,i.jsxs)(n.h4,{id:"14图像信道的分裂与合并",children:["1.4、图像信道的分裂与合并",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#14图像信道的分裂与合并",children:"#"})]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"b,g,r = cv.split(img)  # 分裂\nimg = cv.merge((b,g,r))  # 合并\n"})}),"\n",(0,i.jsx)(n.p,{children:"或者"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"b = img[:,:,0]\n"})}),"\n",(0,i.jsx)(n.p,{children:"比如将所有红色像素设置为零"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"img[:,:,2] = 0\n"})}),"\n",(0,i.jsxs)(n.h3,{id:"2图像的算术运算",children:["2、图像的算术运算",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#2图像的算术运算",children:"#"})]}),"\n",(0,i.jsxs)(n.h4,{id:"21图片添加",children:["2.1、图片添加",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#21图片添加",children:"#"})]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"cv.add()\n"})}),"\n",(0,i.jsx)(n.p,{children:"可以添加两个图像"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"x = np.uint8([250])\ny = np.uint8([10])\ncv.add(x + y)  # 250+10 = 260 => 255\n"})}),"\n",(0,i.jsx)(n.p,{children:"OpenCV 的加法和 Numpy 的加法是有区别的。OpenCV 加法是一个饱和操作，而 Numpy 加法是一个除余操作。"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"x + y  # 250+10 = 260 % 256 = 4\n"})}),"\n",(0,i.jsxs)(n.h4,{id:"22图像混合",children:["2.2、图像混合",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#22图像混合",children:"#"})]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"cv.addWeighted()\n"})}),"\n",(0,i.jsx)(n.p,{children:"也是图像添加，但不同的权重给予图像，使它给人一种混合或透明的感觉。"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"参数1、2：图像1及其权重。"}),"\n",(0,i.jsx)(n.li,{children:"参数3、4：图像2及其权重。"}),"\n",(0,i.jsx)(n.li,{children:"参数5：图像混合的α 值，通过改变 α 从0→1，你可以在一张图片到另一张图片之间进行一个很魔幻的转换。"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"img1 = cv.imread('ml.png')\nimg2 = cv.imread('opencv-logo.png')\n# 第一幅图像的权重为0.7，第二幅图像的权重为0.3\ndst = cv.addWeighted(img1,0.7,img2,0.3,0)\ncv.imshow('dst',dst)\ncv.waitKey(0)\ncv.destroyAllWindows()\n"})}),"\n",(0,i.jsxs)(n.h4,{id:"23按位操作",children:["2.3、按位操作",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#23按位操作",children:"#"})]}),"\n",(0,i.jsx)(n.p,{children:"按位 AND、 OR、 NOT 和 XOR 操作。"}),"\n",(0,i.jsx)(n.p,{children:"可以理解为图像的逻辑运算："}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"img1 = cv.imread('messi5.jpg')\nimg2 = cv.imread('opencv-logo-white.png')\n# 把标志放在左上角，所以创建了一个roi\nrows,cols,channels = img2.shape\nroi = img1[0:rows, 0:cols ]\n# 创建一个标志图案，以及它的反面\nimg2gray = cv.cvtColor(img2,cv.COLOR_BGR2GRAY) # 灰度处理\nret, mask = cv.threshold(img2gray, 10, 255, cv.THRESH_BINARY)\nmask_inv = cv.bitwise_not(mask)\n# 黑掉 ROI 中的 logo 区域\nimg1_bg = cv.bitwise_and(roi,roi,mask = mask_inv)\n# 只取标志图像中的标志区域\nimg2_fg = cv.bitwise_and(img2,img2,mask = mask)\n# 将 logo 放入 ROI 中，并修改主图像\ndst = cv.add(img1_bg,img2_fg)\nimg1[0:rows, 0:cols ] = dst\ncv.imshow('res',img1)\ncv.waitKey(0)\ncv.destroyAllWindows()\n"})}),"\n",(0,i.jsxs)(n.h2,{id:"五图像处理",children:["五、图像处理",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#五图像处理",children:"#"})]}),"\n",(0,i.jsxs)(n.h3,{id:"1改变色彩空间",children:["1、改变色彩空间",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#1改变色彩空间",children:"#"})]}),"\n",(0,i.jsx)(n.p,{children:"OpenCV 目前有150多种颜色空间转换方法。但其中两个最广泛使用的："}),"\n",(0,i.jsxs)(n.h4,{id:"11gray",children:["1.1、Gray",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#11gray",children:"#"})]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"cv.COLOR_BGR2GRAY"})}),"\n",(0,i.jsx)(n.p,{children:"顾名思义：BGR → Gray"}),"\n",(0,i.jsx)(n.p,{children:"这个图像识别中经常使用，可以提供识别速度和准确度。"}),"\n",(0,i.jsxs)(n.h4,{id:"12hsv",children:["1.2、HSV",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#12hsv",children:"#"})]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"cv.COLOR_BGR2HSV"})}),"\n",(0,i.jsx)(n.p,{children:"顾名思义：BGR → HSV"}),"\n",(0,i.jsx)(n.p,{children:"HSV 图像可以用它来提取有色物体在 HSV 中，比在 BGR 颜色空间中更容易表示颜色。"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"import cv2 as cv\nimport numpy as np\ncap = cv.VideoCapture(0)\nwhile True:\n    # 取出视频的每一帧\n    _, frame = cap.read()\n    # 从 BGR 到 HSV 颜色空间的转换\n    hsv = cv.cvtColor(frame, cv.COLOR_BGR2HSV)\n    # 定义 HSV 中蓝色的范围\n    lower_blue = np.array([110,50,50])\n    upper_blue = np.array([130,255,255])\n    # 得到蓝色\n    mask = cv.inRange(hsv, lower_blue, upper_blue)\n    # 按位-and 蒙版和原始图像\n    res = cv.bitwise_and(frame,frame, mask= mask)\n    cv.imshow('frame',frame)\n    cv.imshow('mask',mask)\n    cv.imshow('res',res)\n    k = cv.waitKey(5) & 0xFF\n    if k == 27:\n        break\ncv.destroyAllWindows()\n"})}),"\n",(0,i.jsxs)(n.h3,{id:"2几何变换",children:["2、几何变换",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#2几何变换",children:"#"})]}),"\n",(0,i.jsxs)(n.h4,{id:"21缩放",children:["2.1、缩放",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#21缩放",children:"#"})]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"res = cv.resize(InputArray, OutputArray, Size, fx, fy, interpolation)\n"})}),"\n",(0,i.jsxs)(n.table,{children:["\n",(0,i.jsxs)(n.thead,{children:["\n",(0,i.jsxs)(n.tr,{children:["\n",(0,i.jsx)(n.th,{align:"left",children:"参数"}),"\n",(0,i.jsx)(n.th,{children:"解释"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.tbody,{children:["\n",(0,i.jsxs)(n.tr,{children:["\n",(0,i.jsx)(n.td,{align:"left",children:"nputArray src"}),"\n",(0,i.jsx)(n.td,{children:"输入图片"}),"\n"]}),"\n",(0,i.jsxs)(n.tr,{children:["\n",(0,i.jsx)(n.td,{align:"left",children:"OutputArray dst"}),"\n",(0,i.jsx)(n.td,{children:"输出图片"}),"\n"]}),"\n",(0,i.jsxs)(n.tr,{children:["\n",(0,i.jsx)(n.td,{align:"left",children:"Size"}),"\n",(0,i.jsx)(n.td,{children:"输出图片尺寸"}),"\n"]}),"\n",(0,i.jsxs)(n.tr,{children:["\n",(0,i.jsx)(n.td,{align:"left",children:"fx, fy"}),"\n",(0,i.jsx)(n.td,{children:"沿x轴，y轴的缩放系数"}),"\n"]}),"\n",(0,i.jsxs)(n.tr,{children:["\n",(0,i.jsx)(n.td,{align:"left",children:"interpolation"}),"\n",(0,i.jsx)(n.td,{children:"插入方式"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"interpolation"})," 默认情况下，使用的插值方法是  ",(0,i.jsx)(n.code,{children:"cv.INTER_LINEAR"}),"，用于所有调整大小。"]}),"\n",(0,i.jsx)(n.p,{children:"举例："}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"import numpy as np\nimport cv2 as cv\nimg = cv.imread('messi5.jpg')\nres = cv.resize(img,None,fx=2, fy=2, interpolation = cv.INTER_CUBIC)\n"})}),"\n",(0,i.jsxs)(n.h4,{id:"22旋转",children:["2.2、旋转",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#22旋转",children:"#"})]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"cv.getRotationMatrix2D()\n"})}),"\n",(0,i.jsx)(n.p,{children:"旋转90度："}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"img = cv.imread('messi5.jpg',0)\nrows,cols = img.shape\n# cols-1 and rows-1 are the coordinate limits.\nM = cv.getRotationMatrix2D(((cols-1)/2.0,(rows-1)/2.0),90,1)\ndst = cv.warpAffine(img,M,(cols,rows))\n"})}),"\n",(0,i.jsxs)(n.h3,{id:"3图像阈值化",children:["3、图像阈值化",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#3图像阈值化",children:"#"})]}),"\n",(0,i.jsxs)(n.h4,{id:"31自适应阈值分割",children:["3.1、自适应阈值分割",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#31自适应阈值分割",children:"#"})]}),"\n",(0,i.jsx)(n.p,{children:"如果像素值小于阈值，则将其设置为0，否则将其设置为最大值。"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"ret,thresh1 = cv.threshold(img,127,255,cv.THRESH_BINARY)\n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"cv.THRESH_BINARY"}),"\n",(0,i.jsx)(n.li,{children:"cv.THRESH_BINARY_INV"}),"\n",(0,i.jsx)(n.li,{children:"cv.THRESH_TRUNC"}),"\n",(0,i.jsx)(n.li,{children:"cv.THRESH_TOZERO"}),"\n",(0,i.jsx)(n.li,{children:"cv.THRESH_TOZERO_INV"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"如果一个图像在不同的区域有不同的照明条件，全局使用一个阈值一般是不可用的，对同一幅图像的不同区域采用不同的阈值，对不同光照条件下的图像取得了较好的效果。"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"cv.ADAPTIVE_THRESH_MEAN_C 阈值是邻近区域的平均值减去常数 c"}),"\n",(0,i.jsx)(n.li,{children:"cv.ADAPTIVE_THRESH_GAUSSIAN_C  阈值是邻域值减去常数 c 的高斯加权和"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"import cv2 as cv\nimport numpy as np\nfrom matplotlib import pyplot as plt\nimg = cv.imread('sudoku.png',0)\nimg = cv.medianBlur(img,5)\nret,th1 = cv.threshold(img,127,255,cv.THRESH_BINARY)\nth2 = cv.adaptiveThreshold(img,255,cv.ADAPTIVE_THRESH_MEAN_C,cv.THRESH_BINARY,11,2)\nth3 = cv.adaptiveThreshold(img,255,cv.ADAPTIVE_THRESH_GAUSSIAN_C,cv.THRESH_BINARY,11,2)\ntitles = ['Original Image', 'Global Thresholding (v = 127)',\n            'Adaptive Mean Thresholding', 'Adaptive Gaussian Thresholding']\nimages = [img, th1, th2, th3]\nfor i in xrange(4):\n    plt.subplot(2,2,i+1),plt.imshow(images[i],'gray')\n    plt.title(titles[i])\n    plt.xticks([]),plt.yticks([])\nplt.show()\n"})}),"\n",(0,i.jsxs)(n.h3,{id:"4模板匹配",children:["4、模板匹配",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#4模板匹配",children:"#"})]}),"\n",(0,i.jsxs)(n.h4,{id:"41单目标匹配",children:["4.1、单目标匹配",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#41单目标匹配",children:"#"})]}),"\n",(0,i.jsx)(n.p,{children:"模板匹配是一种在较大图像中搜索和查找模板图像位置的方法。"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"cv.matchTemplate()\n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"参数1：大图"}),"\n",(0,i.jsx)(n.li,{children:"参数2：小图"}),"\n",(0,i.jsxs)(n.li,{children:["参数3：匹配方法","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"cv.TM_CCOEFF"}),"\n",(0,i.jsx)(n.li,{children:"cv.TM_CCOEFF_NORMED"}),"\n",(0,i.jsx)(n.li,{children:"cv.TM_CCORR"}),"\n",(0,i.jsx)(n.li,{children:"cv.TM_CCORR_NORMED"}),"\n",(0,i.jsx)(n.li,{children:"cv.TM_SQDIFF"}),"\n",(0,i.jsx)(n.li,{children:"cv.TM_SQDIFF_NORMED"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"查找最大/最小值"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:" cv.minMaxLoc()\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"res = cv.matchTemplate(source, template, cv.TM_CCOEFF_NORMED)\ncv.minMaxLoc(res)\n"})}),"\n",(0,i.jsxs)(n.h4,{id:"42多目标匹配",children:["4.2、多目标匹配",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#42多目标匹配",children:"#"})]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"cv.minMaxLoc()"}),"不会给出所有位置。"]}),"\n",(0,i.jsx)(n.p,{children:"通过阈值处理多个模板匹配。"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"import cv2 as cv\nimport numpy as np\nfrom matplotlib import pyplot as plt\nimg_rgb = cv.imread('mario.png')\nimg_gray = cv.cvtColor(img_rgb, cv.COLOR_BGR2GRAY)\ntemplate = cv.imread('mario_coin.png',0)\nw, h = template.shape[::-1]\nres = cv.matchTemplate(img_gray,template,cv.TM_CCOEFF_NORMED)\nloc = np.where( res >= 0.8)\nfor pt in zip(*loc[::-1]):\n    cv.rectangle(img_rgb, pt, (pt[0] + w, pt[1] + h), (0,0,255), 2)\ncv.imwrite('res.png',img_rgb)\n"})})]})}function s(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,c.ah)(),e.components);return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}let h=s;s.__RSPRESS_PAGE_META={},s.__RSPRESS_PAGE_META["%E7%BC%96%E7%A8%8B%E5%9F%BA%E7%A1%80%2FPython%2FOpenCV(Python)%E5%9F%BA%E7%A1%80%E2%80%949%E5%B0%8F%E6%97%B6%E5%85%A5%E9%97%A8%E7%89%88.md"]={toc:[{text:"一、一句话简介",id:"一一句话简介",depth:2},{text:"二、安装",id:"二安装",depth:2},{text:"三、入门基础",id:"三入门基础",depth:2},{text:"1、图像",id:"1图像",depth:3},{text:"1.1、读图像",id:"11读图像",depth:4},{text:"1.2、显示图像",id:"12显示图像",depth:4},{text:"1.3、写图像",id:"13写图像",depth:4},{text:"2、视频",id:"2视频",depth:3},{text:"2.1、从摄像头捕获视频",id:"21从摄像头捕获视频",depth:4},{text:"2.2、从文件中播放视频",id:"22从文件中播放视频",depth:4},{text:"2.3、保存视频",id:"23保存视频",depth:4},{text:"3、绘图",id:"3绘图",depth:3},{text:"3.1、画线",id:"31画线",depth:4},{text:"3.2、画圆",id:"32画圆",depth:4},{text:"3.3、画矩形",id:"33画矩形",depth:4},{text:"四、核心功能",id:"四核心功能",depth:2},{text:"1、图像的基本操作",id:"1图像的基本操作",depth:3},{text:"1.1、访问和修改像素值",id:"11访问和修改像素值",depth:4},{text:"1.2、访问图像属性",id:"12访问图像属性",depth:4},{text:"1.3、特定区域",id:"13特定区域",depth:4},{text:"1.4、图像信道的分裂与合并",id:"14图像信道的分裂与合并",depth:4},{text:"2、图像的算术运算",id:"2图像的算术运算",depth:3},{text:"2.1、图片添加",id:"21图片添加",depth:4},{text:"2.2、图像混合",id:"22图像混合",depth:4},{text:"2.3、按位操作",id:"23按位操作",depth:4},{text:"五、图像处理",id:"五图像处理",depth:2},{text:"1、改变色彩空间",id:"1改变色彩空间",depth:3},{text:"1.1、Gray",id:"11gray",depth:4},{text:"1.2、HSV",id:"12hsv",depth:4},{text:"2、几何变换",id:"2几何变换",depth:3},{text:"2.1、缩放",id:"21缩放",depth:4},{text:"2.2、旋转",id:"22旋转",depth:4},{text:"3、图像阈值化",id:"3图像阈值化",depth:3},{text:"3.1、自适应阈值分割",id:"31自适应阈值分割",depth:4},{text:"4、模板匹配",id:"4模板匹配",depth:3},{text:"4.1、单目标匹配",id:"41单目标匹配",depth:4},{text:"4.2、多目标匹配",id:"42多目标匹配",depth:4}],title:"OpenCV(Python)基础—9小时入门版",headingTitle:"OpenCV(Python)基础—9小时入门版",frontmatter:{Author:"mikigo"}}}}]);