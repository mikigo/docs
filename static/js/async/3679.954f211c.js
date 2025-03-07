"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["3679"],{2378:function(e,n,r){r.r(n),r.d(n,{default:()=>d});var t=r(2676),s=r(453);function i(e){let n=Object.assign({h1:"h1",a:"a",h2:"h2",h3:"h3",p:"p",code:"code",pre:"pre",blockquote:"blockquote",ol:"ol",li:"li",strong:"strong",ul:"ul"},(0,s.ah)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.h1,{id:"平台权限管理前端设计",children:["平台权限管理前端设计",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#平台权限管理前端设计",children:"#"})]}),"\n",(0,t.jsxs)(n.h2,{id:"用户登录流程",children:["用户登录流程",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#用户登录流程",children:"#"})]}),"\n",(0,t.jsxs)(n.h3,{id:"用户认证",children:["用户认证",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#用户认证",children:"#"})]}),"\n",(0,t.jsxs)(n.p,{children:["平台使用 ",(0,t.jsx)(n.a,{href:"https://jwt.io/",target:"_blank",rel:"noopener noreferrer",children:"JWT"}),"(JSON Web Token) 进行用户认证，客户端通过登录接口获取 JWT 并保存，在访问接口数据时，需要携带 JWT，将 JWT 放在请求的 ",(0,t.jsx)(n.code,{children:"Authorization"})," 头部。例如："]}),"\n",(0,t.jsx)(n.p,{children:"登录"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"import axios from 'axios';\nvar url = 'http://10.7.55.191:8000/api/token/';\nvar formData = new FormData();\nformData.append('username', 'admin');\nformData.append('password', '123456');\naxios.post(url, formData).then(res=>{\n    setStorage(\"token\", res.data.data.access);\n    setStorage(\"refresh\", res.data.data.refresh);\n})\n"})}),"\n",(0,t.jsx)(n.p,{children:"访问数据"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:'import axios from "axios";\nvar url = \'http://10.7.55.191:8000/api/version/\';\nvar token = getStorage("token");\nvar headers = {\n        Authorization: "JWT " + token,\n      },\naxios.get(url, {headers: headers})\n'})}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:["上面用到的两个函数 ",(0,t.jsx)(n.code,{children:"setStorage"})," 和 ",(0,t.jsx)(n.code,{children:"getStorage"}),"， 分别是保存和读取存储中的数据，具体会根据前端环境去实现。例如当前我们将用户数据保存在浏览器的 ",(0,t.jsx)(n.code,{children:"localStorage"})," 中:"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"export function setStorage(key, value) { window.localStorage.setItem(key, JSON.stringify(value)) }\n\nexport function getStorage(key) { return JSON.parse(window.localStorage.getItem(key)) }\n"})}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:["JWT 的详细设计可以参考 ",(0,t.jsx)(n.a,{href:"https://jwt.io/introduction/",target:"_blank",rel:"noopener noreferrer",children:"官方文档"}),"。"]}),"\n"]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"当 access token 过期时，客户端可以通过 refresh token 刷新 access token。"}),"\n"]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"http://10.7.55.191:8000/api/",target:"_blank",rel:"noopener noreferrer",children:"http://10.7.55.191:8000/api/"})," 使我们的开发 API 地址"]}),"\n"]}),"\n",(0,t.jsxs)(n.h3,{id:"用户资源",children:["用户资源",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#用户资源",children:"#"})]}),"\n",(0,t.jsx)(n.p,{children:"登录后，客户端会开始获取用户资源，包括："}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"菜单列表及菜单中的按钮权限"}),"\n",(0,t.jsx)(n.li,{children:"用户角色、用户部门"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"研测平台的策略是仅显示用户有权限访问的菜单和对应的按钮。"}),"\n",(0,t.jsxs)(n.h2,{id:"研测平台的权限设计",children:["研测平台的权限设计",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#研测平台的权限设计",children:"#"})]}),"\n",(0,t.jsx)(n.p,{children:"研测平台前端的权限主体是角色，例如【管理员】、【测试】，客体是菜单和按钮，例如【新建】、【删除】。"}),"\n",(0,t.jsxs)(n.p,{children:["对应的后端权限的客体是 接口 + 方法，前端的每个",(0,t.jsx)(n.strong,{children:"按钮"}),"与之对应。这种对应关系由管理员用户维护，即【系统管理】->【菜单管理】中的【按钮配置】功能。"]}),"\n",(0,t.jsx)(n.p,{children:"一般来说前端菜单对应后端不同的接口，按钮对应接口的不同操作（GET,PUT,POST,PATCH,DELETE），但研测平台的不同的菜单可能对应后端同一个接口，不同的按钮也可能对应不同的接口。例如："}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"【版本测试】和【系统测试】其实是同一个后端接口实现的，但是有不同的前端菜单；"}),"\n",(0,t.jsx)(n.li,{children:"同一个任务页面【启动】按钮和【新建】按钮对应的不同的后端接口。"}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["因此前端的权限还需要按照",(0,t.jsx)(n.strong,{children:"菜单"}),"区分，例如菜单A和菜单B都使用接口A，但是角色A和角色B需要对菜单A和菜单B有不同的权限，可以看到【按钮配置】是在对不同的菜单进行配置的。"]}),"\n",(0,t.jsx)(n.p,{children:"研测平台前端通过权限确认是否显示某个菜单或按钮。例如下面是控制按钮显示的函数："}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:'function isShowBtn(url, moduleName, btnName) {\n  /* \n    url: 前端路由\n    moduleName: 菜单名称\n    btnName: 按钮，即 http://10.7.13.132:8081/#/buttonManage 下的按钮的 Key\n  */\n  if (getStorage("is_superuser") == "true") {\n    return true;\n  }\n  let btnArr = getStorage("menuList") ? JSON.parse(getStorage("menuList")) : [];\n  let isshow = false;\n  for (var i = 0; i < btnArr.length; i++) {\n    let item = btnArr[i];\n    if (\n      item.url == url &&\n      item.moduleName == moduleName &&\n      item.menuPermission &&\n      item.menuPermission.includes(btnName)\n    ) {\n      isshow = true;\n      break;\n    }\n  }\n  return isshow;\n}\n'})}),"\n",(0,t.jsx)(n.p,{children:"权限主体和客体的关联即【权限配置】由管理员在【系统管理】-> 【权限管理】中维护。"}),"\n",(0,t.jsxs)(n.h2,{id:"研测平台的伪权限",children:["研测平台的伪权限",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#研测平台的伪权限",children:"#"})]}),"\n",(0,t.jsx)(n.p,{children:"伪权限是前端自己实现的权限，例如：用户作为权限主体（即每个用户有专属的权限）。"}),"\n",(0,t.jsx)(n.p,{children:"在机器的占用和释放中，需要对单个用户做权限控制。这里则由机器的用户名属性来控制，平台会判断当前用户是否该机器的占用用户来实现伪权限。下面是一个控制伪权限的函数："}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:'export function hasPerm(pm) {\n    return getStorage("userId") === pm.user || getStorage("is_superuser") == \'true\'\n}\n'})}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"getStorage"})," 是获取存储数据的函数。我们在登录的时候，通过 ",(0,t.jsx)(n.code,{children:"setStorage"})," 将 ",(0,t.jsx)(n.code,{children:"uiserId"})," 保存在浏览器中。"]}),"\n"]})]})}function a(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,s.ah)(),e.components);return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(i,{...e})}):i(e)}let d=a;a.__RSPRESS_PAGE_META={},a.__RSPRESS_PAGE_META["%E7%BC%96%E7%A8%8B%E5%9F%BA%E7%A1%80%2F%E5%89%8D%E5%90%8E%E7%AB%AF%2F%E7%A0%94%E6%B5%8B%E5%B9%B3%E5%8F%B0%E6%9D%83%E9%99%90%E7%AE%A1%E7%90%86%E5%89%8D%E7%AB%AF%E8%AE%BE%E8%AE%A1.md"]={toc:[{text:"用户登录流程",id:"用户登录流程",depth:2},{text:"用户认证",id:"用户认证",depth:3},{text:"用户资源",id:"用户资源",depth:3},{text:"研测平台的权限设计",id:"研测平台的权限设计",depth:2},{text:"研测平台的伪权限",id:"研测平台的伪权限",depth:2}],title:"平台权限管理前端设计",headingTitle:"平台权限管理前端设计",frontmatter:{Author:"路斐"}}}}]);