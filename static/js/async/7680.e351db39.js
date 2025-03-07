"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["7680"],{2606:function(e,n,s){s.r(n),s.d(n,{default:()=>d});var a=s(2676),r=s(453);function h(e){let n=Object.assign({h1:"h1",a:"a",h2:"h2",p:"p",pre:"pre",code:"code"},(0,r.ah)(),e.components);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n.h1,{id:"常用的获取随机字符串的方法",children:["常用的获取随机字符串的方法",(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#常用的获取随机字符串的方法",children:"#"})]}),"\n",(0,a.jsxs)(n.h2,{id:"base64",children:["base64",(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#base64",children:"#"})]}),"\n",(0,a.jsx)(n.p,{children:"base64 不是算法而是一种编码方式，是可以被解码的，有时候在代码中我们用它来编码后处理业务效果很好；"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-py",children:'from  datetime import datetime\nimport base64\n\na = str(datetime.now())\nb = base64.b64encode(a.encode("utf-8")).decode("utf-8")\nprint(b)\n'})}),"\n",(0,a.jsxs)(n.h2,{id:"hash",children:["hash",(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#hash",children:"#"})]}),"\n",(0,a.jsx)(n.p,{children:"hash 是一种算法，不同的算法复杂度不一样，常用的 MD5算法；"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-py",children:'from  datetime import datetime\nimport hashlib\n\na = str(datetime.now())\n# 构造一个hashlib的对象\nobj = hashlib.md5() \nobj.update(a.encode("utf-8"))\nh = obj.hexdigest()\nprint(h)\n'})}),"\n",(0,a.jsxs)(n.p,{children:["还可以增加点复杂度，给 ",(0,a.jsx)(n.code,{children:"md5()"})," 里面传入一个字符串："]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-py",children:'from  datetime import datetime\nimport hashlib\n\na = str(datetime.now())\n# 传入一个字符串，增加复杂度\nobj = hashlib.md5("mikigo".encode("utf-8")) \nobj.update(a.encode("utf-8"))\nh = obj.hexdigest()\nprint(h)\n'})}),"\n",(0,a.jsxs)(n.h2,{id:"secrets",children:["secrets",(0,a.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#secrets",children:"#"})]}),"\n",(0,a.jsx)(n.p,{children:"secrets 用于生成高度加密的随机数，在后端处理Token问题时经常使用；"}),"\n",(0,a.jsxs)(n.p,{children:["过去咱们习惯使用 ",(0,a.jsx)(n.code,{children:"random"})," 模块来生成一些随机字符，最新最流行的是用 secrets；"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-py",children:"import secrets\n\na = secrets.token_hex()\nprint(a)\n"})})]})}function t(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,r.ah)(),e.components);return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}let d=t;t.__RSPRESS_PAGE_META={},t.__RSPRESS_PAGE_META["%E7%BC%96%E7%A8%8B%E5%9F%BA%E7%A1%80%2FPython%2F%E5%B8%B8%E7%94%A8%E7%9A%84%E8%8E%B7%E5%8F%96%E9%9A%8F%E6%9C%BA%E5%AD%97%E7%AC%A6%E4%B8%B2%E7%9A%84%E6%96%B9%E6%B3%95.md"]={toc:[{text:"base64",id:"base64",depth:2},{text:"hash",id:"hash",depth:2},{text:"secrets",id:"secrets",depth:2}],title:"常用的获取随机字符串的方法",headingTitle:"常用的获取随机字符串的方法",frontmatter:{Author:"mikigo"}}}}]);