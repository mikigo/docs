"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["609"],{2779:function(e,n,s){s.r(n),s.d(n,{default:()=>l});var r=s(2676),i=s(453);function d(e){let n=Object.assign({h1:"h1",a:"a",h2:"h2",p:"p",code:"code",h3:"h3",img:"img",h4:"h4",ol:"ol",li:"li",strong:"strong",pre:"pre",ul:"ul"},(0,i.ah)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.h1,{id:"jmeter10小时入门版",children:["JMeter—10小时入门版",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#jmeter10小时入门版",children:"#"})]}),"\n",(0,r.jsxs)(n.h2,{id:"简介",children:["简介",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#简介",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:["全称 ",(0,r.jsx)(n.code,{children:"Apache JMeter"})," ，一个基于 ",(0,r.jsx)(n.code,{children:"Java"})," 的开源性能测试工具，有些同学也用来做一些简单的接口测试，但它主要的功能是用来做性能的。"]}),"\n",(0,r.jsx)(n.p,{children:"其工作原理是，建立一个线程池，多线程运行取样器产生大量负载，在运行中通过断言来验证结果的正确性，通过监听器来记录测试结果；"}),"\n",(0,r.jsxs)(n.p,{children:["Github地址：",(0,r.jsx)(n.a,{href:"https://github.com/apache/jmeter",target:"_blank",rel:"noopener noreferrer",children:"https://github.com/apache/jmeter"})]}),"\n",(0,r.jsxs)(n.h2,{id:"jmeter-组件",children:["Jmeter 组件",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#jmeter-组件",children:"#"})]}),"\n",(0,r.jsxs)(n.h3,{id:"线程组",children:["线程组",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#线程组",children:"#"})]}),"\n",(0,r.jsx)(n.p,{children:"可以看做一个虚拟用户组，线程组中的每个线程都可以理解为一个虚拟用户；"}),"\n",(0,r.jsx)(n.p,{children:"线程数就表示虚拟用户数；"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"Ramp-up Period"})," 爬坡启动时间，单位是秒，默认时间是1，它制定了启动所有线程所花费的时间。"]}),"\n",(0,r.jsx)(n.p,{children:"（举例：线程数10个，运行时间5，就是1秒启动2个）"}),"\n",(0,r.jsxs)(n.p,{children:["​    ",(0,r.jsx)(n.img,{src:"/jmeter/1.png",alt:"0"})]}),"\n",(0,r.jsxs)(n.p,{children:["​    ",(0,r.jsx)(n.img,{src:"/jmeter/2.png",alt:"0"})]}),"\n",(0,r.jsxs)(n.h3,{id:"取样器sampler",children:["取样器（sampler）",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#取样器sampler",children:"#"})]}),"\n",(0,r.jsx)(n.p,{children:"性能测试中向服务器发送请求，记录响应信息，记录响应时间的最小单元。"}),"\n",(0,r.jsxs)(n.p,{children:["​    ",(0,r.jsx)(n.img,{src:"/jmeter/3.png",alt:"0"})]}),"\n",(0,r.jsxs)(n.h3,{id:"逻辑控制器logic-controller",children:["逻辑控制器（logic controller）",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#逻辑控制器logic-controller",children:"#"})]}),"\n",(0,r.jsx)(n.p,{children:"两类："}),"\n",(0,r.jsx)(n.p,{children:"①  控制测试计划中取样器节点发送请求的逻辑顺序的控制器（if/switch/Controller）"}),"\n",(0,r.jsx)(n.p,{children:"② 用来组织可控制取样器节点的，失误控制器、吞吐量控制器。"}),"\n",(0,r.jsxs)(n.h4,{id:"1循环控制器",children:["（1）循环控制器",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#1循环控制器",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:["​    ",(0,r.jsx)(n.img,{src:"/jmeter/4.png",alt:"0"})]}),"\n",(0,r.jsx)(n.p,{children:"线程组循环次数与循环控制器循环次数叠加（相乘）"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"badboy"})," 录制的循环控制器和 ",(0,r.jsx)(n.code,{children:"jmeter"})," 带的循环控制器不兼容"]}),"\n",(0,r.jsxs)(n.h4,{id:"2foreach控制器",children:["（2）ForEach控制器",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#2foreach控制器",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:["​    ",(0,r.jsx)(n.img,{src:"/jmeter/5.png",alt:"0"})]}),"\n",(0,r.jsxs)(n.p,{children:["后面的请求是加在 ",(0,r.jsx)(n.code,{children:"ForEach"})," 控制器下面"]}),"\n",(0,r.jsxs)(n.p,{children:["​    ",(0,r.jsx)(n.img,{src:"/jmeter/6.png",alt:"0"})]}),"\n",(0,r.jsxs)(n.h4,{id:"3if-控制器",children:["（3）If 控制器",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#3if-控制器",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:["​    ",(0,r.jsx)(n.img,{src:"/jmeter/7.png",alt:"0"})]}),"\n",(0,r.jsxs)(n.p,{children:['注意：条件里面，变量要用 "${}" ,',(0,r.jsx)(n.code,{children:"if"})," 下面加 ",(0,r.jsx)(n.code,{children:"http"})," 请求"]}),"\n",(0,r.jsxs)(n.h4,{id:"4switch-控制器开关",children:["（4）switch 控制器（开关）",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#4switch-控制器开关",children:"#"})]}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["在逻辑控制器里面选择 ",(0,r.jsx)(n.code,{children:"switch controller"}),"（switch控制器）"]}),"\n",(0,r.jsx)(n.li,{children:"在控制器内添加多个请求"}),"\n",(0,r.jsx)(n.li,{children:"可通过请求名称来控制，或通过请求序号来控制（序号从0开始）"}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["​    ",(0,r.jsx)(n.img,{src:"/jmeter/8.png",alt:"0"})]}),"\n",(0,r.jsxs)(n.p,{children:["​    ",(0,r.jsx)(n.img,{src:"/jmeter/9.png",alt:"0"})]}),"\n",(0,r.jsxs)(n.h4,{id:"5吞吐量控制器",children:["（5）吞吐量控制器",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#5吞吐量控制器",children:"#"})]}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"在逻辑控制器里面选择吞吐量控制器（用于控制发送的请求数）"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"Total Executions"}),"（吞吐量）输入数据，输入数据要小于等于线程组数（每个线程发送4次，线程组数和循环次数无效）"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"Percent Executions"})," 吞吐量百分比（线程组数10个，吞吐量百分比25，每个线程发送2次，百分比25.5，每个线程发送3次）"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["​    ",(0,r.jsx)(n.img,{src:"/jmeter/10.png",alt:"0"})]}),"\n",(0,r.jsxs)(n.p,{children:["​    ",(0,r.jsx)(n.img,{src:"/jmeter/11.png",alt:"0"})]}),"\n",(0,r.jsxs)(n.h3,{id:"定时器",children:["定时器",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#定时器",children:"#"})]}),"\n",(0,r.jsx)(n.p,{children:"①固定定时器（思考时间）"}),"\n",(0,r.jsx)(n.p,{children:"每个线程在请求之前按相同的制定时间停顿。"}),"\n",(0,r.jsx)(n.p,{children:"②同步定时器（集合点）"}),"\n",(0,r.jsx)(n.p,{children:"集合点，等到特定的用户数后再一起执行某个操作。"}),"\n",(0,r.jsxs)(n.p,{children:["​    ",(0,r.jsx)(n.img,{src:"/jmeter/12.png",alt:"0"})]}),"\n",(0,r.jsxs)(n.p,{children:["​    ",(0,r.jsx)(n.img,{src:"/jmeter/13.png",alt:"0"})]}),"\n",(0,r.jsxs)(n.p,{children:["​    ",(0,r.jsx)(n.img,{src:"/jmeter/14.png",alt:"0"})]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"Number of Simulated Users to Group by"}),":集合多少人后再执行请求；"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"Timeout in milliseconds"})," :指定人数多少秒没有集合到算超时（延迟时间，单位毫秒）;如果为0，表示无超时时间，会一直等下去。如果线程数小于集合人数，到时间就会发出去。"]}),"\n",(0,r.jsxs)(n.h3,{id:"配置元件",children:["配置元件",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#配置元件",children:"#"})]}),"\n",(0,r.jsx)(n.p,{children:"用于提供对静态数据配置的支持"}),"\n",(0,r.jsx)(n.p,{children:"参数化有三种："}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"CSV Data Set config"}),"\n",(0,r.jsx)(n.li,{children:"函数助手"}),"\n",(0,r.jsx)(n.li,{children:"用户自定义变量"}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"① CSV Data Set config"})}),"\n",(0,r.jsx)(n.p,{children:"可以将本地数据文件形成数据池。"}),"\n",(0,r.jsxs)(n.p,{children:["​    ",(0,r.jsx)(n.img,{src:"/jmeter/15.png",alt:"0"})]}),"\n",(0,r.jsxs)(n.p,{children:["​    ",(0,r.jsx)(n.img,{src:"/jmeter/16.png",alt:"0"})]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"② 函数助手"})}),"\n",(0,r.jsx)(n.p,{children:"选项-函数助手"}),"\n",(0,r.jsxs)(n.p,{children:["​    ",(0,r.jsx)(n.img,{src:"/jmeter/17.png",alt:"0"})]}),"\n",(0,r.jsxs)(n.p,{children:["​    ",(0,r.jsx)(n.img,{src:"/jmeter/18.png",alt:"0"})]}),"\n",(0,r.jsxs)(n.p,{children:["​    ",(0,r.jsx)(n.img,{src:"/jmeter/19.png",alt:"0"})]}),"\n",(0,r.jsxs)(n.p,{children:["​    ",(0,r.jsx)(n.img,{src:"/jmeter/20.png",alt:"0"})]}),"\n",(0,r.jsxs)(n.p,{children:["​    ",(0,r.jsx)(n.img,{src:"/jmeter/21.png",alt:"0"})]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"③ 用户自定义变量"})}),"\n",(0,r.jsxs)(n.p,{children:["​    ",(0,r.jsx)(n.img,{src:"/jmeter/22.png",alt:"0"})]}),"\n",(0,r.jsxs)(n.p,{children:["​    ",(0,r.jsx)(n.img,{src:"/jmeter/23.png",alt:"0"})]}),"\n",(0,r.jsxs)(n.p,{children:["​    ",(0,r.jsx)(n.img,{src:"/jmeter/24.png",alt:"0"})]}),"\n",(0,r.jsxs)(n.p,{children:["​    ",(0,r.jsx)(n.img,{src:"/jmeter/25.png",alt:"0"})]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"④计数器"})}),"\n",(0,r.jsxs)(n.p,{children:["​    ",(0,r.jsx)(n.img,{src:"/jmeter/25.png",alt:"0"})]}),"\n",(0,r.jsxs)(n.p,{children:["​    ",(0,r.jsx)(n.img,{src:"/jmeter/27.png",alt:"0"})]}),"\n",(0,r.jsxs)(n.p,{children:["​    ",(0,r.jsx)(n.img,{src:"/jmeter/28.png",alt:"0"})]}),"\n",(0,r.jsxs)(n.p,{children:["​    ",(0,r.jsx)(n.img,{src:"/jmeter/29.png",alt:"0"})]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"${__v(name_${N})}"})," 两层变量用v函数，固定用法。"]}),"\n",(0,r.jsxs)(n.h2,{id:"元件的作用域",children:["元件的作用域",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#元件的作用域",children:"#"})]}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"配置元件"}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"会影响其作用范围内的所有元件。"}),"\n",(0,r.jsxs)(n.ol,{start:"2",children:["\n",(0,r.jsx)(n.li,{children:"前置处理程序"}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"在其作用范围内的每个sampler元件之前执行。"}),"\n",(0,r.jsxs)(n.ol,{start:"3",children:["\n",(0,r.jsx)(n.li,{children:"定时器"}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"对在其所用范围内的每个sampler有效。"}),"\n",(0,r.jsxs)(n.ol,{start:"4",children:["\n",(0,r.jsx)(n.li,{children:"后置处理程序"}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"在其作用范围内的每个sampler元件之后执行。"}),"\n",(0,r.jsxs)(n.ol,{start:"5",children:["\n",(0,r.jsx)(n.li,{children:"断言"}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"在其作用范围内的每个sampler元件执行后结果进行校验。"}),"\n",(0,r.jsxs)(n.ol,{start:"6",children:["\n",(0,r.jsx)(n.li,{children:"监听器"}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"收集其作用范围内的每个什么sampler元件的信息并呈现。"}),"\n",(0,r.jsxs)(n.ol,{start:"7",children:["\n",(0,r.jsx)(n.li,{children:"取样器"}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"不予其他元件相互作用。"}),"\n",(0,r.jsxs)(n.ol,{start:"8",children:["\n",(0,r.jsx)(n.li,{children:"逻辑控制器"}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"对其子节点中的去延期或逻辑控制器作用。"}),"\n",(0,r.jsxs)(n.h2,{id:"脚本开发",children:["脚本开发",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#脚本开发",children:"#"})]}),"\n",(0,r.jsxs)(n.h3,{id:"脚本录制",children:["脚本录制",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#脚本录制",children:"#"})]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"badboy"})}),"\n",(0,r.jsxs)(n.h3,{id:"脚本生成",children:["脚本生成",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#脚本生成",children:"#"})]}),"\n",(0,r.jsx)(n.p,{children:"1.关联"}),"\n",(0,r.jsx)(n.p,{children:"关联：用于获取一个响应数据中的结果；"}),"\n",(0,r.jsx)(n.p,{children:"在后置处理器中-正则表达式提取器；"}),"\n",(0,r.jsxs)(n.p,{children:["​    ",(0,r.jsx)(n.img,{src:"/jmeter/30.png",alt:"0"})]}),"\n",(0,r.jsx)(n.p,{children:"正则表达式"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"引用名称：下一个请求要引用的参数名称，"}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"2.（）：括起来的部分就是要提取"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sh",children:". ：匹配任何字符串\n\n\\+ ：一次或多次\n\n*：任意多次（可以取到空格）\n\n？：不要太贪婪，在找到第一个匹配项后停止。\n"})}),"\n",(0,r.jsx)(n.p,{children:"3.模块：用$$引用起来，如果有多个（）内容，可以用$1$,$2$等，标识解析到第几个值"}),"\n",(0,r.jsx)(n.p,{children:"4.匹配数字：0代表随机，-1代表全部，其余整整数代表提取第几个匹配的内容。"}),"\n",(0,r.jsx)(n.p,{children:"5.添加Debug进行调试"}),"\n",(0,r.jsx)(n.p,{children:"任意字符串的取法：（.+?）或（.*?）"}),"\n",(0,r.jsxs)(n.p,{children:["​    ",(0,r.jsx)(n.img,{src:"/jmeter/31.png",alt:"0"})]}),"\n",(0,r.jsx)(n.p,{children:"数字的取法："}),"\n",(0,r.jsx)(n.p,{children:"（[0-9]*）,[0-9]表示取0-9的任意数字，*表示任意多次  ##表达式前面的字符不要太多"}),"\n",(0,r.jsxs)(n.p,{children:["​    ",(0,r.jsx)(n.img,{src:"/jmeter/32.png",alt:"0"})]}),"\n",(0,r.jsx)(n.p,{children:"2.http请求默认值"}),"\n",(0,r.jsx)(n.p,{children:"有相同的服务器名称或IP地址时，将其填入请求默认值中，减小工作量。"}),"\n",(0,r.jsxs)(n.p,{children:["​    ",(0,r.jsx)(n.img,{src:"/jmeter/33.png",alt:"0"})]}),"\n",(0,r.jsxs)(n.p,{children:["​    ",(0,r.jsx)(n.img,{src:"/jmeter/34.png",alt:"0"})]}),"\n",(0,r.jsxs)(n.p,{children:["​    ",(0,r.jsx)(n.img,{src:"/jmeter/35.png",alt:"0"})]}),"\n",(0,r.jsxs)(n.h3,{id:"webservice接口测试",children:["webservice接口测试",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#webservice接口测试",children:"#"})]}),"\n",(0,r.jsx)(n.p,{children:"soap请求底层是调用的http请求"}),"\n",(0,r.jsx)(n.p,{children:"请求的报文是xml，返回的报文也是xml"}),"\n",(0,r.jsxs)(n.p,{children:["​    ",(0,r.jsx)(n.img,{src:"/jmeter/36.png",alt:"0"})]}),"\n",(0,r.jsxs)(n.h3,{id:"jdbc请求",children:["JDBC请求",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#jdbc请求",children:"#"})]}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["添加控制元件，",(0,r.jsx)(n.code,{children:"JDBC Connection Configuration"})]}),"\n",(0,r.jsxs)(n.li,{children:["添加sampler ，",(0,r.jsx)(n.code,{children:"JDBC Request"})]}),"\n",(0,r.jsx)(n.li,{children:"配置如下："}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["（1）",(0,r.jsx)(n.code,{children:"Variable Name"}),"：变量名可自定义"]}),"\n",(0,r.jsxs)(n.p,{children:["（2）",(0,r.jsx)(n.code,{children:"JDBC URL"}),"：",(0,r.jsx)(n.code,{children:"jdbc:mysql://127.0.0.1:3306/ecshop"})]}),"\n",(0,r.jsxs)(n.p,{children:["（3）",(0,r.jsx)(n.code,{children:"JDBC Driver Class"}),"：",(0,r.jsx)(n.code,{children:"com.mysql.jdbc.Driver"})]}),"\n",(0,r.jsxs)(n.p,{children:["（4）",(0,r.jsx)(n.code,{children:"username"}),": 数据库名"]}),"\n",(0,r.jsxs)(n.p,{children:["（5）",(0,r.jsx)(n.code,{children:"password"}),"：数据库密码"]}),"\n",(0,r.jsxs)(n.p,{children:["​    ",(0,r.jsx)(n.img,{src:"/jmeter/37.png",alt:"0"})]}),"\n",(0,r.jsxs)(n.ol,{start:"4",children:["\n",(0,r.jsx)(n.li,{children:"时区设置问题"}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["在 ",(0,r.jsx)(n.code,{children:"URL"})," 末尾加 ",(0,r.jsx)(n.code,{children:"?serverTimezone=UTC"})]}),"\n",(0,r.jsxs)(n.ol,{start:"5",children:["\n",(0,r.jsxs)(n.li,{children:["要添加多条 ",(0,r.jsx)(n.code,{children:"SQL"})," 语句"]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["在 ",(0,r.jsx)(n.code,{children:"URL"})," 末尾加 ",(0,r.jsx)(n.code,{children:"?allowMultiQueries=true"})," （前面有？的用&连接），",(0,r.jsx)(n.code,{children:"JDBC Request"})," 中"]}),"\n",(0,r.jsxs)(n.ol,{start:"6",children:["\n",(0,r.jsx)(n.li,{children:"设置字符集类型"}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["在URL末尾加 ",(0,r.jsx)(n.code,{children:"?characterEncoding=UTF-8"})]}),"\n",(0,r.jsxs)(n.p,{children:["​    ",(0,r.jsx)(n.img,{src:"/jmeter/38.png",alt:"0"})]}),"\n",(0,r.jsxs)(n.p,{children:["​    ",(0,r.jsx)(n.img,{src:"/jmeter/39.png",alt:"0"})]}),"\n",(0,r.jsxs)(n.ol,{start:"7",children:["\n",(0,r.jsxs)(n.li,{children:["插入删除更新操作，",(0,r.jsx)(n.code,{children:"Query Type"})," 都选",(0,r.jsx)(n.code,{children:" update Statement"})]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["​    ",(0,r.jsx)(n.img,{src:"/jmeter/40.png",alt:"0"})]}),"\n",(0,r.jsxs)(n.h3,{id:"ftp请求",children:["FTP请求",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#ftp请求",children:"#"})]}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"sampler"})," 中添加 ",(0,r.jsx)(n.code,{children:"FTP"})," 请求"]}),"\n",(0,r.jsx)(n.li,{children:"配置如下"}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"端口号：21"}),"\n",(0,r.jsxs)(n.p,{children:["服务器名称和 ",(0,r.jsx)(n.code,{children:"IP"}),"：上传或用来下载的服务器地址"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"Remote File"}),"：远程 ",(0,r.jsx)(n.code,{children:"FTP"})," 服务器文件路径（要加文件名）"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"Local File"}),"：本地文件路径（要加文件名）"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"Local File Contents"}),"：本地文件内容"]}),"\n",(0,r.jsx)(n.p,{children:"用户名：如果是匿名用户登录，也要填入“anonymous”"}),"\n",(0,r.jsx)(n.p,{children:"密码："}),"\n",(0,r.jsxs)(n.p,{children:["​    ",(0,r.jsx)(n.img,{src:"/jmeter/41.png",alt:"0"})]}),"\n",(0,r.jsxs)(n.p,{children:["​    ",(0,r.jsx)(n.img,{src:"/jmeter/42.png",alt:"0"})]}),"\n",(0,r.jsxs)(n.p,{children:["​    ",(0,r.jsx)(n.img,{src:"/jmeter/43.png",alt:"0"})]}),"\n",(0,r.jsxs)(n.p,{children:["​    ",(0,r.jsx)(n.img,{src:"/jmeter/44.png",alt:"0"})]}),"\n",(0,r.jsxs)(n.h3,{id:"场景设置",children:["场景设置",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#场景设置",children:"#"})]}),"\n",(0,r.jsxs)(n.h4,{id:"分布式运行",children:["分布式运行",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#分布式运行",children:"#"})]}),"\n",(0,r.jsx)(n.p,{children:"控制机：又称调度机，参与脚本的运行，主要是管理远程负载机，指挥远程负载机运行的任务，收集测试结果；"}),"\n",(0,r.jsx)(n.p,{children:"负载机：又称执行机，运行脚本的机子；"}),"\n",(0,r.jsx)(n.p,{children:"（1）分布式执行原理"}),"\n",(0,r.jsx)(n.p,{children:"①选择一台机器作为调度机，其他机器作为执行机"}),"\n",(0,r.jsxs)(n.p,{children:["②执行时，",(0,r.jsx)(n.code,{children:"master"})," 会把脚本发送给每台 ",(0,r.jsx)(n.code,{children:"slave"}),"，",(0,r.jsx)(n.code,{children:"slave"})," 拿到脚本后执行，",(0,r.jsx)(n.code,{children:"slave"})," 执行时启动 ",(0,r.jsx)(n.code,{children:"jmeter-server.bat"})," 即可（无需启动 ",(0,r.jsx)(n.code,{children:"Jmeter"})," 软件）"]}),"\n",(0,r.jsxs)(n.p,{children:["③执行完后 ",(0,r.jsx)(n.code,{children:"slave"})," 会把结果回传给 ",(0,r.jsx)(n.code,{children:"master"})]}),"\n",(0,r.jsx)(n.p,{children:"（2）分布式配置方式"}),"\n",(0,r.jsx)(n.p,{children:"①调度机（master）配置"}),"\n",(0,r.jsx)(n.p,{children:"仅需将自己的 IP 添加到配置文件里面就行"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["找到J ",(0,r.jsx)(n.code,{children:"meter.properties"})]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["在 ",(0,r.jsx)(n.code,{children:"remote_hosts"})," 后面加上负载机的 IP 地址"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"②执行机（slave）配置"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["找到 ",(0,r.jsx)(n.code,{children:"Jmeter.properties"})]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"修改配置项（默认端口：1099）"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sh",children:"server_port=1099\n\nserver.rmi.localport=1099\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["启动 ",(0,r.jsx)(n.code,{children:"Jmeter-server.bat"})]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["​    ",(0,r.jsx)(n.img,{src:"/jmeter/45.png",alt:"0"})]}),"\n",(0,r.jsx)(n.p,{children:"③注意事项"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"软件版本要一致"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"三方配置文件要配置在负载机上，路径要一致"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"注册等特殊情况，分发给负载机的参数化文件，参数不能相同。"}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"d.脚本不要放在桌面上"}),"\n",(0,r.jsx)(n.p,{children:"④如果连接失败需检查："}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"是否关闭了防火墙"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"是否禁用了所有的虚拟网卡"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["参数化的 ",(0,r.jsx)(n.code,{children:"CSV"})," 文件要复制到负载机上"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"三方的jar包要复制到负载机上"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.h4,{id:"浪涌测试",children:["浪涌测试",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#浪涌测试",children:"#"})]}),"\n",(0,r.jsx)(n.p,{children:"（1）概述"}),"\n",(0,r.jsx)(n.p,{children:"定义：浪涌测试是持续进行高强度和普通强度的交叉压力测试。"}),"\n",(0,r.jsx)(n.p,{children:"目的：主要是查看资源的释放情况。"}),"\n",(0,r.jsx)(n.p,{children:"（2）操作步骤"}),"\n",(0,r.jsxs)(n.p,{children:["①在测试计划，右键添加 ",(0,r.jsx)(n.code,{children:"threads→Ultimate Thread Group"})]}),"\n",(0,r.jsx)(n.p,{children:"②添加以下测试策略数据："}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"Start Thread Count"}),"：开始线程数量"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"Initial Ddlay"}),"，sec：线程加载多长时间开始运行"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"Startup Time"}),"，sec：线程加载多长时间"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"Hold Load For"}),"，sec：线程持续运行多长时间"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"Shutdown Time"}),"：线程停止时长，在多长时间内停止下来。"]}),"\n"]}),"\n",(0,r.jsxs)(n.h3,{id:"ip欺骗",children:["IP欺骗",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#ip欺骗",children:"#"})]}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["对电脑添加多个可用 ",(0,r.jsx)(n.code,{children:"IP"}),"，并将IP地址保存在一个 ",(0,r.jsx)(n.code,{children:"txt"})," 或 ",(0,r.jsx)(n.code,{children:"csv"})," 文档中"]}),"\n",(0,r.jsxs)(n.li,{children:["添加配置元件 ",(0,r.jsx)(n.code,{children:"CSV Data Set Config"})," 将文档中",(0,r.jsx)(n.code,{children:" IP"})," 参数化"]}),"\n",(0,r.jsxs)(n.li,{children:["在请求中选择 ",(0,r.jsx)(n.code,{children:"[Advanced]"}),"，",(0,r.jsx)(n.code,{children:"implementation"})," 选择 ",(0,r.jsx)(n.code,{children:"HttpClient4"}),"，",(0,r.jsx)(n.code,{children:"Source address"})," 选择 ",(0,r.jsx)(n.code,{children:"IP/Hostname"}),"，并输入 ",(0,r.jsx)(n.code,{children:"IP"})," 参数（",(0,r.jsx)(n.code,{children:"${ip}"}),"）"]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["​    ",(0,r.jsx)(n.img,{src:"/jmeter/46.png",alt:"0"})]}),"\n",(0,r.jsxs)(n.p,{children:["​    ",(0,r.jsx)(n.img,{src:"/jmeter/47.png",alt:"0"})]}),"\n",(0,r.jsxs)(n.p,{children:["​    ",(0,r.jsx)(n.img,{src:"/jmeter/48.png",alt:"0"})]}),"\n",(0,r.jsxs)(n.p,{children:["​    ",(0,r.jsx)(n.img,{src:"/jmeter/49.png",alt:"0"})]}),"\n",(0,r.jsxs)(n.p,{children:["连不上网，需要把“首选 ",(0,r.jsx)(n.code,{children:"DNS"})," 服务器”填上 ",(0,r.jsx)(n.code,{children:"192.168.1.1"}),"，"]}),"\n",(0,r.jsxs)(n.p,{children:["​    ",(0,r.jsx)(n.img,{src:"/jmeter/50.png",alt:"0"})]}),"\n",(0,r.jsx)(n.p,{children:"将网络禁用后重启；"}),"\n",(0,r.jsxs)(n.p,{children:["​    ",(0,r.jsx)(n.img,{src:"/jmeter/51.png",alt:"0"})]}),"\n",(0,r.jsxs)(n.h3,{id:"曲线拐点模型分析",children:["曲线拐点模型分析",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#曲线拐点模型分析",children:"#"})]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"1.定义"})}),"\n",(0,r.jsx)(n.p,{children:"性能测试曲线模型是一条随着测试时间不断变化的曲线，与服务器资源，用户数或其他的性能指标密切相关的曲线。"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"2.解释"})}),"\n",(0,r.jsx)(n.p,{children:"x轴代表并发用户数，Y轴代表资源利用率、吞吐量、响应时间。"}),"\n",(0,r.jsx)(n.p,{children:"从左往右依次为轻负载区、重负载区、拐点区"}),"\n",(0,r.jsx)(n.p,{children:"（1）响应时间：轻负载区变化不大，重负载区增长，拐点区倾斜率增大。"}),"\n",(0,r.jsx)(n.p,{children:"（2）吞吐量：轻负载区增加，重压力区逐步平稳，拐点区急剧下降。"}),"\n",(0,r.jsxs)(n.p,{children:["​    ",(0,r.jsx)(n.img,{src:"/jmeter/52.png",alt:"0"})]})]})}function c(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,i.ah)(),e.components);return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}let l=c;c.__RSPRESS_PAGE_META={},c.__RSPRESS_PAGE_META["%E8%87%AA%E5%8A%A8%E5%8C%96%E6%8A%80%E6%9C%AF%2F%E6%80%A7%E8%83%BD%E8%87%AA%E5%8A%A8%E5%8C%96%2FJMeter%E2%80%9410%E5%B0%8F%E6%97%B6%E5%85%A5%E9%97%A8%E7%89%88.md"]={toc:[{text:"简介",id:"简介",depth:2},{text:"Jmeter 组件",id:"jmeter-组件",depth:2},{text:"线程组",id:"线程组",depth:3},{text:"取样器（sampler）",id:"取样器sampler",depth:3},{text:"逻辑控制器（logic controller）",id:"逻辑控制器logic-controller",depth:3},{text:"（1）循环控制器",id:"1循环控制器",depth:4},{text:"（2）ForEach控制器",id:"2foreach控制器",depth:4},{text:"（3）If 控制器",id:"3if-控制器",depth:4},{text:"（4）switch 控制器（开关）",id:"4switch-控制器开关",depth:4},{text:"（5）吞吐量控制器",id:"5吞吐量控制器",depth:4},{text:"定时器",id:"定时器",depth:3},{text:"配置元件",id:"配置元件",depth:3},{text:"元件的作用域",id:"元件的作用域",depth:2},{text:"脚本开发",id:"脚本开发",depth:2},{text:"脚本录制",id:"脚本录制",depth:3},{text:"脚本生成",id:"脚本生成",depth:3},{text:"webservice接口测试",id:"webservice接口测试",depth:3},{text:"JDBC请求",id:"jdbc请求",depth:3},{text:"FTP请求",id:"ftp请求",depth:3},{text:"场景设置",id:"场景设置",depth:3},{text:"分布式运行",id:"分布式运行",depth:4},{text:"浪涌测试",id:"浪涌测试",depth:4},{text:"IP欺骗",id:"ip欺骗",depth:3},{text:"曲线拐点模型分析",id:"曲线拐点模型分析",depth:3}],title:"JMeter—10小时入门版",headingTitle:"JMeter—10小时入门版",frontmatter:{Author:"mikigo"}}}}]);