"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["9501"],{6887:function(n,e,o){o.r(e),o.d(e,{default:()=>p});var r=o(2676),d=o(453);function s(n){let e=Object.assign({h1:"h1",a:"a",p:"p",pre:"pre",code:"code"},(0,d.ah)(),n.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(e.h1,{id:"linux-上安装-nodejs",children:["Linux 上安装 Nodejs",(0,r.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#linux-上安装-nodejs",children:"#"})]}),"\n",(0,r.jsxs)(e.p,{children:["在官网下载：",(0,r.jsx)(e.a,{href:"https://nodejs.cn/download/current/",target:"_blank",rel:"noopener noreferrer",children:"https://nodejs.cn/download/current/"})]}),"\n",(0,r.jsx)(e.p,{children:"以下代码可以直接复制下来，一键执行；"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-shell",children:'\n# 定义下载版本\nnode_version=v18.16.1\n\n# 定义/opt目录下node目录的名称，以兼容多个node版本\nopt_node_dir="node${node_version}"\n\nif ! command -v node &> /dev/null; then\n	# 下载node包\n	wget https://cdn.npmmirror.com/binaries/node/${node_version}/node-${node_version}-linux-x64.tar.xz\n\n	# 解压安装包\n	tar -xvJf node-${node_version}-linux-x64.tar.xz\n\n	# 放到/opt目录下\n	sudo rm -rf /opt/${opt_node_dir}\n	sudo mv node-${node_version}-linux-x64 /opt/${opt_node_dir}\n\n	# 创建npm、node链接到系统目录\n	sudo rm -rf /usr/local/bin/npm; sudo ln -s /opt/${opt_node_dir}/bin/npm   /usr/local/bin/npm\n	sudo rm -rf /usr/local/bin/node; sudo ln -s /opt/${opt_node_dir}/bin/node   /usr/local/bin/node\n\nelif ! command -v pnpm  &> /dev/null; then\n	# 设置淘宝镜像源\n	npm config set registry https://registry.npmmirror.com\n\n	# 安装pnpm\n	npm install -g pnpm\n\n	# 创建pnpm链接到系统目录\n  sudo rm -rf /usr/local/bin/pnpm; sudo ln -s /opt/${opt_node_dir}/bin/pnpm /usr/local/bin/pnpm\n  sudo rm -rf /usr/local/bin/pnpx; sudo ln -s /opt/${opt_node_dir}/bin/pnpx /usr/local/bin/pnpx\nfi\n'})}),"\n",(0,r.jsx)(e.p,{children:"安装完之后查看版本，没报错就说明安装好了；"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-shell",children:"node -v\nnpm -v\npnpm -v\n"})})]})}function i(){let n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:e}=Object.assign({},(0,d.ah)(),n.components);return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(s,{...n})}):s(n)}let p=i;i.__RSPRESS_PAGE_META={},i.__RSPRESS_PAGE_META["%E7%BC%96%E7%A8%8B%E5%9F%BA%E7%A1%80%2F%E5%89%8D%E5%90%8E%E7%AB%AF%2FLinux%E4%B8%8A%E5%AE%89%E8%A3%85Nodejs.md"]={toc:[],title:"Linux 上安装 Nodejs",headingTitle:"Linux 上安装 Nodejs",frontmatter:{Author:"mikigo"}}}}]);