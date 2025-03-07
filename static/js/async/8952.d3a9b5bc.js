"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["8952"],{5846:function(n,e,t){t.r(e),t.d(e,{default:()=>a});var s=t(2676),h=t(453);function r(n){let e=Object.assign({h1:"h1",a:"a",h2:"h2",p:"p",pre:"pre",code:"code",h3:"h3"},(0,h.ah)(),n.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(e.h1,{id:"httpx",children:["Httpx",(0,s.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#httpx",children:"#"})]}),"\n",(0,s.jsxs)(e.h2,{id:"1简介",children:["1、简介",(0,s.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#1简介",children:"#"})]}),"\n",(0,s.jsx)(e.p,{children:"虽然 Requests 基本已经可以解决大部分问题，但仍然有少部分问题无法解决，比如：HTTP/2（Requests 只支持HTTP/1.1）、异步请求等，这就需要用到 httpx；"}),"\n",(0,s.jsx)(e.p,{children:"httpx 号称下一代 HTTP 客户端，最开始是为了解决 Requests 不支持异步请求的问题，工程名称就叫：requests-async，后面整体迁移到 httpx 仓库中。"}),"\n",(0,s.jsx)(e.p,{children:"由于 httpx 从一开始就是基于 Requests 来搞的，所以它提供的接口几乎和 Requests 保持一致，这对于我们使用来说就简单多了。"}),"\n",(0,s.jsxs)(e.h2,{id:"2安装",children:["2、安装",(0,s.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#2安装",children:"#"})]}),"\n",(0,s.jsx)(e.p,{children:"系统环境：deepin"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-console",children:"pip3 install httpx\n"})}),"\n",(0,s.jsx)(e.p,{children:"它还提供命令行工具："}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-console",children:"pip3 install 'httpx[cli]'\n"})}),"\n",(0,s.jsx)(e.p,{children:"我一般不咋习惯用命令行做接口请求，所以基本都不装这玩意儿。"}),"\n",(0,s.jsxs)(e.h2,{id:"3简单的例子",children:["3、简单的例子",(0,s.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#3简单的例子",children:"#"})]}),"\n",(0,s.jsx)(e.p,{children:"前面说了 httpx 和 Requests 提供的接口几乎一致，咱们就用 Requests 教程里面的例子；"}),"\n",(0,s.jsxs)(e.h3,{id:"31get请求",children:["3.1、GET请求",(0,s.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#31get请求",children:"#"})]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-python",children:'import httpx\n\nr = httpx.get("https://www.baidu.com")\nprint(r.status_code)\nprint(r.text)\n'})}),"\n",(0,s.jsx)(e.p,{children:"执行后终端输出："}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-console",children:'200\n<html>\n<head>\n        <script>\n                location.replace(location.href.replace("https://","http://"));\n        <\/script>\n</head>\n<body>\n        <noscript><meta http-equiv="refresh" content="0;url=http://www.baidu.com/"></noscript>\n</body>\n</html>\n'})}),"\n",(0,s.jsxs)(e.h3,{id:"32post请求",children:["3.2、POST请求",(0,s.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#32post请求",children:"#"})]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-python",children:"import httpx\n\nr = httpx.post('https://httpbin.org/post', data={'key': 'value'})\nprint(r.status_code)\nprint(r.text)\n"})}),"\n",(0,s.jsx)(e.p,{children:"执行后终端输出："}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-console",children:'200\n{\n  "args": {}, \n  "data": "", \n  "files": {}, \n  "form": {\n    "key": "value"\n  }, \n  "headers": {\n    "Accept": "*/*", \n    "Accept-Encoding": "gzip, deflate", \n    "Content-Length": "9", \n    "Content-Type": "application/x-www-form-urlencoded", \n    "Host": "httpbin.org", \n    "User-Agent": "python-httpx/0.23.3", \n    "X-Amzn-Trace-Id": "Root=1-642f820c-019ccf8938faee564386038e"\n  }, \n  "json": null, \n  "origin": "110.191.179.216", \n  "url": "https://httpbin.org/post"\n}\n'})}),"\n",(0,s.jsx)(e.p,{children:"你看，简直是一毛一样。"}),"\n",(0,s.jsx)(e.p,{children:"行啦，都一样咱们就不聊了，后面重点讲讲不一样的。"}),"\n",(0,s.jsxs)(e.h2,{id:"4异步请求",children:["4、异步请求",(0,s.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#4异步请求",children:"#"})]}),"\n",(0,s.jsx)(e.p,{children:"异步是一种并发方式，也就是通常说的“协程”，比多线程效率高很多；"}),"\n",(0,s.jsx)(e.p,{children:"httpx 的异步请求主要依赖于标准库 asyncio，使用 async 和 await 关键词；"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-python",children:"import asyncio\nimport httpx\n\nasync def my_get():\n    async with httpx.AsyncClient() as client:\n        r = await client.get(\"https://www.baidu.com\")\n        print(r.text)\n\nif __name__ == '__main__':\n    asyncio.run(my_get())\n"})}),"\n",(0,s.jsx)(e.p,{children:"client 对象你可以理解为 Requests 里面的 Session 对象。"}),"\n",(0,s.jsxs)(e.h2,{id:"5http2",children:["5、HTTP/2",(0,s.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#5http2",children:"#"})]}),"\n",(0,s.jsx)(e.p,{children:"老实讲 HTTP/2 的网站我还没机会爬过，所以我这里还不太好找例子；"}),"\n",(0,s.jsx)(e.p,{children:"如果你在不小心遇到了也别慌，只需要加一个参数就好了；"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-python",children:"import asyncio\nimport httpx\n\nasync def my_get():\n    async with httpx.AsyncClient(http2=True) as client:\n        r = await client.get(\"https://www.xxxxxx.com\")\n        print(r.text)\n\nif __name__ == '__main__':\n    asyncio.run(my_get())\n"})}),"\n",(0,s.jsxs)(e.p,{children:["在 ",(0,s.jsx)(e.code,{children:"httpx.AsyncClient()"})," 里面，默认参数:"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-python",children:"class AsyncClient:\n    def __init__(\n        self,\n		...\n        http1: bool = True,\n        http2: bool = False,\n		...\n    ):\n        pass  # 省略其他源码\n"})}),"\n",(0,s.jsxs)(e.p,{children:["也就是说默认是开启的 http1，所以只需要在实例化 client 对象的时候，传入参数 ",(0,s.jsx)(e.code,{children:"http2=True"})," 即可；"]})]})}function i(){let n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:e}=Object.assign({},(0,h.ah)(),n.components);return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(r,{...n})}):r(n)}let a=i;i.__RSPRESS_PAGE_META={},i.__RSPRESS_PAGE_META["%E7%BC%96%E7%A8%8B%E5%9F%BA%E7%A1%80%2F%E7%BD%91%E7%BB%9C%E7%88%AC%E8%99%AB%2FHttpx.md"]={toc:[{text:"1、简介",id:"1简介",depth:2},{text:"2、安装",id:"2安装",depth:2},{text:"3、简单的例子",id:"3简单的例子",depth:2},{text:"3.1、GET请求",id:"31get请求",depth:3},{text:"3.2、POST请求",id:"32post请求",depth:3},{text:"4、异步请求",id:"4异步请求",depth:2},{text:"5、HTTP/2",id:"5http2",depth:2}],title:"Httpx",headingTitle:"Httpx",frontmatter:{Author:"mikigo"}}}}]);