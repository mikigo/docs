"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["902"],{3703:function(e,n,s){s.r(n),s.d(n,{default:()=>i});var d=s(2676),r=s(453);function c(e){let n=Object.assign({h1:"h1",a:"a",h2:"h2",p:"p",table:"table",thead:"thead",tr:"tr",th:"th",strong:"strong",tbody:"tbody",td:"td",h3:"h3",ul:"ul",li:"li",img:"img",code:"code"},(0,r.ah)(),e.components);return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(n.h1,{id:"vscode远程环境开发指南",children:["VSCode远程环境开发指南",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#vscode远程环境开发指南",children:"#"})]}),"\n",(0,d.jsxs)(n.h2,{id:"1为什么要远程开发",children:["1.为什么要远程开发",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#1为什么要远程开发",children:"#"})]}),"\n",(0,d.jsx)(n.p,{children:"办公电脑常常会因安装各种包和部署开发环境而变得混乱，导致项目开发中出现各种问题，重新安装环境并不现实。因此，许多开发者选择将开发环境与办公环境分离，通过远程连接开发环境来编码，确保办公电脑的整洁和高效。"}),"\n",(0,d.jsxs)(n.h2,{id:"2为什么选择vscode",children:["2.为什么选择vscode",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#2为什么选择vscode",children:"#"})]}),"\n",(0,d.jsx)(n.p,{children:"测试部主要使用 Python 和 Shell 进行开发。在众多 IDE 中，PyCharm 和 VSCode 是不可避免的选择，两者的对比如下："}),"\n",(0,d.jsxs)(n.table,{children:["\n",(0,d.jsxs)(n.thead,{children:["\n",(0,d.jsxs)(n.tr,{children:["\n",(0,d.jsx)(n.th,{children:(0,d.jsx)(n.strong,{children:"对比项"})}),"\n",(0,d.jsx)(n.th,{children:(0,d.jsx)(n.strong,{children:"启动速度"})}),"\n",(0,d.jsx)(n.th,{children:(0,d.jsx)(n.strong,{children:"功能集成"})}),"\n",(0,d.jsx)(n.th,{children:(0,d.jsx)(n.strong,{children:"Python 支持"})}),"\n",(0,d.jsx)(n.th,{children:(0,d.jsx)(n.strong,{children:"扩展定制"})}),"\n"]}),"\n"]}),"\n",(0,d.jsxs)(n.tbody,{children:["\n",(0,d.jsxs)(n.tr,{children:["\n",(0,d.jsx)(n.td,{children:(0,d.jsx)(n.strong,{children:"VSCode"})}),"\n",(0,d.jsx)(n.td,{children:(0,d.jsx)(n.strong,{children:"轻量、启动快，占用资源少"})}),"\n",(0,d.jsx)(n.td,{children:(0,d.jsx)(n.strong,{children:"核心功能简洁，大多数功能依赖插件支持"})}),"\n",(0,d.jsx)(n.td,{children:(0,d.jsx)(n.strong,{children:"需安装 Python 扩展和调试插件"})}),"\n",(0,d.jsx)(n.td,{children:(0,d.jsx)(n.strong,{children:"丰富插件市场，可灵活定制"})}),"\n"]}),"\n",(0,d.jsxs)(n.tr,{children:["\n",(0,d.jsx)(n.td,{children:(0,d.jsx)(n.strong,{children:"PyCharm"})}),"\n",(0,d.jsx)(n.td,{children:(0,d.jsx)(n.strong,{children:"启动慢，占用资源多"})}),"\n",(0,d.jsx)(n.td,{children:(0,d.jsx)(n.strong,{children:"开箱即用的高级功能"})}),"\n",(0,d.jsx)(n.td,{children:(0,d.jsx)(n.strong,{children:"原生支持 Python，专为 Python 开发设计"})}),"\n",(0,d.jsx)(n.td,{children:(0,d.jsx)(n.strong,{children:"定制性较少，不够灵活"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.strong,{children:"关键原因：VSCode 完全免费，而 PyCharm 的远程开发功能需要专业版，且专业版是收费的。"})}),"\n",(0,d.jsxs)(n.h2,{id:"3配置步骤",children:["3.配置步骤",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#3配置步骤",children:"#"})]}),"\n",(0,d.jsxs)(n.h3,{id:"1下载安装",children:["1）下载安装",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#1下载安装",children:"#"})]}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsx)(n.li,{children:(0,d.jsx)(n.strong,{children:"从应用商店下载"})}),"\n"]}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.img,{src:"/public/vscode%E8%BF%9C%E7%A8%8B%E5%BC%80%E5%8F%91%E6%8C%87%E5%8D%97/%E5%95%86%E5%BA%97%E4%B8%8B%E8%BD%BD.png",alt:"商店下载"})}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.strong,{children:"官网下载："}),(0,d.jsx)(n.a,{href:"https://code.visualstudio.com/",target:"_blank",rel:"noopener noreferrer",children:"点我跳转"})]}),"\n"]}),"\n",(0,d.jsxs)(n.h3,{id:"2插件下载",children:["2）插件下载",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#2插件下载",children:"#"})]}),"\n",(0,d.jsx)(n.p,{children:"第一步：安装简体中文插件"}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.img,{src:"/public/vscode%E8%BF%9C%E7%A8%8B%E5%BC%80%E5%8F%91%E6%8C%87%E5%8D%97/%E4%B8%AD%E6%96%87%E6%8F%92%E4%BB%B6.png",alt:"中文插件"})}),"\n",(0,d.jsx)(n.p,{children:"第二步：安装完成后点击右下角重启vscode"}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.img,{src:"/public/vscode%E8%BF%9C%E7%A8%8B%E5%BC%80%E5%8F%91%E6%8C%87%E5%8D%97/%E9%87%8D%E5%90%AF.png",alt:"重启"})}),"\n",(0,d.jsx)(n.p,{children:"第三步：安装remote-ssh插件"}),"\n",(0,d.jsxs)(n.p,{children:["插件市场搜索",(0,d.jsx)(n.code,{children:"remote-ssh"}),"，点击安装"]}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.img,{src:"/public/vscode%E8%BF%9C%E7%A8%8B%E5%BC%80%E5%8F%91%E6%8C%87%E5%8D%97/remote-ssh%E4%B8%8B%E8%BD%BD.png",alt:"remote-ssh"})}),"\n",(0,d.jsxs)(n.h3,{id:"3vscode配置",children:["3）VSCode配置",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#3vscode配置",children:"#"})]}),"\n",(0,d.jsxs)(n.p,{children:["第一步：",(0,d.jsx)(n.code,{children:"ctrl+shift+p"}),"调出命令框，输入",(0,d.jsx)(n.code,{children:"remote-ssh:config"})]}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.img,{src:"/public/vscode%E8%BF%9C%E7%A8%8B%E5%BC%80%E5%8F%91%E6%8C%87%E5%8D%97/remot-ssh-config.png",alt:"remote-ssh-config"})}),"\n",(0,d.jsx)(n.p,{children:"第二步：配置远程环境信息"}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.img,{src:"/public/vscode%E8%BF%9C%E7%A8%8B%E5%BC%80%E5%8F%91%E6%8C%87%E5%8D%97/config-info.png",alt:"config-info"})}),"\n",(0,d.jsxs)(n.p,{children:["第三步：",(0,d.jsx)(n.code,{children:"ctrl+shift+p"}),"调出命令框，输入",(0,d.jsx)(n.code,{children:"Remote-SSH:Settings"}),"，",(0,d.jsx)(n.strong,{children:"把"}),(0,d.jsx)(n.code,{children:"Remote.SSH：Enable Agent Forwarding"}),"的勾选去掉"]}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.img,{src:"/public/vscode%E8%BF%9C%E7%A8%8B%E5%BC%80%E5%8F%91%E6%8C%87%E5%8D%97/AgentForwarding.png",alt:"AgentForwarding"})}),"\n",(0,d.jsxs)(n.h3,{id:"4免密配置",children:["4）免密配置",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#4免密配置",children:"#"})]}),"\n",(0,d.jsxs)(n.p,{children:["第一步：打开终端输入",(0,d.jsx)(n.code,{children:"ssh-keygen"}),"，连续回车生成密钥"]}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.img,{src:"/public/vscode%E8%BF%9C%E7%A8%8B%E5%BC%80%E5%8F%91%E6%8C%87%E5%8D%97/ssh-keygen.png",alt:"ssh-keygen"})}),"\n",(0,d.jsx)(n.p,{children:"第二步：配置远程免密："}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.img,{src:"/public/vscode%E8%BF%9C%E7%A8%8B%E5%BC%80%E5%8F%91%E6%8C%87%E5%8D%97/ssh-copy-id.png",alt:"ssh-copy-id"})}),"\n",(0,d.jsxs)(n.h3,{id:"4远程机器配置",children:["4）远程机器配置",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#4远程机器配置",children:"#"})]}),"\n",(0,d.jsxs)(n.p,{children:["第一步：安装",(0,d.jsx)(n.code,{children:"openssh-server"}),"，专业版安装命令",(0,d.jsx)(n.code,{children:"sudo apt-get install openssh-server"}),"，服务器版安装命令",(0,d.jsx)(n.code,{children:"yum install openssh-server"}),"，安装完成后打开",(0,d.jsx)(n.code,{children:"/etc/ssh/sshd_config"}),"，做如下修改"]}),"\n",(0,d.jsxs)(n.p,{children:["将",(0,d.jsx)(n.code,{children:"PermitRootLogin"}),"前的注释去掉，同时将后面字段改为yes"]}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.img,{src:"/public/vscode%E8%BF%9C%E7%A8%8B%E5%BC%80%E5%8F%91%E6%8C%87%E5%8D%97/Perminrootlogin.png",alt:"Perminrootlogin"})}),"\n",(0,d.jsxs)(n.p,{children:["将",(0,d.jsx)(n.code,{children:"AllowTcpForwarding "}),"前的注释去掉，同时将后面字段改为yes"]}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.img,{src:"/public/vscode%E8%BF%9C%E7%A8%8B%E5%BC%80%E5%8F%91%E6%8C%87%E5%8D%97/allowtcp.png",alt:"allowtcp"})}),"\n",(0,d.jsx)(n.p,{children:"第二步：重启服务"}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.code,{children:"systemctl restart sshd"})}),"\n",(0,d.jsxs)(n.h2,{id:"4连接远程",children:["4.连接远程",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#4连接远程",children:"#"})]}),"\n",(0,d.jsx)(n.p,{children:"大功即将告成，重启vscode后，点击左侧边电脑图标，然后点击已配置的远程机器，开始链接~~~"}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.img,{src:"/public/vscode%E8%BF%9C%E7%A8%8B%E5%BC%80%E5%8F%91%E6%8C%87%E5%8D%97/ssh-connect.png",alt:"ssh-connect"})}),"\n",(0,d.jsx)(n.p,{children:"会发现右下角开始链接远程并开始相关配置提示"}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.img,{src:"/public/vscode%E8%BF%9C%E7%A8%8B%E5%BC%80%E5%8F%91%E6%8C%87%E5%8D%97/deploy.png",alt:"deploy"})}),"\n",(0,d.jsx)(n.p,{children:"进度条读完后，点击左侧边栏文件图标，即可打开远程项目进行开发啦！！"}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.img,{src:"/public/vscode%E8%BF%9C%E7%A8%8B%E5%BC%80%E5%8F%91%E6%8C%87%E5%8D%97/open-floder.png",alt:"open-floder"})}),"\n",(0,d.jsxs)(n.h2,{id:"5推荐插件",children:["5.推荐插件",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#5推荐插件",children:"#"})]}),"\n",(0,d.jsx)(n.p,{children:"Python插件：Microsoft 提供的 Python 扩展，提供了强大的 Python 支持，包括代码补全、Linting、格式化等功能"}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.img,{src:"/public/vscode%E8%BF%9C%E7%A8%8B%E5%BC%80%E5%8F%91%E6%8C%87%E5%8D%97/python%E6%8F%92%E4%BB%B6.png",alt:"python插件"})}),"\n",(0,d.jsx)(n.p,{children:"black formatter：Python 代码格式化工具，能够自动格式化代码以符合 PEP 8 标准，使代码保持一致的风格"}),"\n",(0,d.jsx)(n.p,{children:"格式化快捷键："}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.strong,{children:"Windows/Linux"}),"‌: ",(0,d.jsx)(n.code,{children:"Ctrl + Shift + I"})]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.strong,{children:"macOS"}),"‌: ",(0,d.jsx)(n.code,{children:"Cmd + Shift + F"})]}),"\n"]}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.img,{src:"/public/vscode%E8%BF%9C%E7%A8%8B%E5%BC%80%E5%8F%91%E6%8C%87%E5%8D%97/black%E6%8F%92%E4%BB%B6.png",alt:"black插件"})})]})}function h(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,r.ah)(),e.components);return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(c,{...e})}):c(e)}let i=h;h.__RSPRESS_PAGE_META={},h.__RSPRESS_PAGE_META["%E5%88%86%E4%BA%AB%E6%9C%89%E8%B6%A3%2F%E5%B8%B8%E8%A7%81%E9%97%AE%E9%A2%98%2FVSCode%E8%BF%9C%E7%A8%8B%E7%8E%AF%E5%A2%83%E5%BC%80%E5%8F%91%E6%8C%87%E5%8D%97.md"]={toc:[{text:"1.为什么要远程开发",id:"1为什么要远程开发",depth:2},{text:"2.为什么选择vscode",id:"2为什么选择vscode",depth:2},{text:"3.配置步骤",id:"3配置步骤",depth:2},{text:"1）下载安装",id:"1下载安装",depth:3},{text:"2）插件下载",id:"2插件下载",depth:3},{text:"3）VSCode配置",id:"3vscode配置",depth:3},{text:"4）免密配置",id:"4免密配置",depth:3},{text:"4）远程机器配置",id:"4远程机器配置",depth:3},{text:"4.连接远程",id:"4连接远程",depth:2},{text:"5.推荐插件",id:"5推荐插件",depth:2}],title:"VSCode远程环境开发指南",headingTitle:"VSCode远程环境开发指南",frontmatter:{Author:"wangpeng"}}}}]);