"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["2591"],{557:function(s,e,n){n.r(e),n.d(e,{default:()=>h});var a=n(2676),i=n(453);function l(s){let e=Object.assign({h1:"h1",a:"a",h2:"h2",p:"p",code:"code",pre:"pre"},(0,i.ah)(),s.components);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(e.h1,{id:"单机服务部署",children:["单机服务部署",(0,a.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#单机服务部署",children:"#"})]}),"\n",(0,a.jsxs)(e.h2,{id:"部署",children:["部署",(0,a.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#部署",children:"#"})]}),"\n",(0,a.jsxs)(e.p,{children:["1、后台部署组件机文档说明：",(0,a.jsx)(e.a,{href:"https://filewh.uniontech.com/library/5c9b7174-752b-42f2-b132-5f37880f3543/%E6%8F%90%E6%B5%8B%E5%BA%93/2.1",target:"_blank",rel:"noopener noreferrer",children:"https://filewh.uniontech.com/library/5c9b7174-752b-42f2-b132-5f37880f3543/%E6%8F%90%E6%B5%8B%E5%BA%93/2.1"})]}),"\n",(0,a.jsxs)(e.p,{children:["2、需要先准备一台部署机、一台服务机，研测平台创建服务器后，服务机，新增磁盘挂载为 ",(0,a.jsx)(e.code,{children:"/data"})," 分区（如果空间足够，可不用新增）"]}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-shell",children:"# 新建/data目录\nmkdir /data\n# 新磁盘进行新建分区并创建文件系统\nfdisk /dev/vdb\nmkfs.ext4 /dev/vdb1\n# 挂载\nmount /dev/vdb1 /data\n# 获取uuid\nblkid /dev/vdb1\n# 添加 fstab 挂载信息\nUUID=your-uuid-here /data ext4 defaults 0 2\n\n# 重新挂载，mount -a 是一个用于挂载所有在 /etc/fstab 文件中定义的文件系统的命令\nmount -a\nreboot\n"})}),"\n",(0,a.jsx)(e.p,{children:"3、服务机设置uos和root用户密码，以及将uos用户添加到sudo组"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-shell",children:"# 登录root用户\npasswd root\npasswd uos\nsudo usermod -a -G wheel uos\nreboot\n"})}),"\n",(0,a.jsx)(e.p,{children:"4、部署命令（均为正常部署命令，步骤1文档中摘取，如果出现异常，需在文档中查看解决办法）"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-yaml",children:"./init_ansible_env.sh\n./init_ansible_env.sh doctor\nsudo bash install.bash plan k1s\ncp -f examples/env.k1s.example.yaml env.yaml\n\nsed -i 's/host1:.*/host1: {server_ip}/' env.yaml\nsed -i '/^server_username:/c server_username: \\\"{server_user}\\\"' env.yaml\nsed -i '/^server_password:/c server_password: \\\"{server_password}\\\"' env.yaml\n\nbash install.bash prepare.yaml -e @env.yaml\nsudo bash install.bash init-environment.yaml\n\nsed -i 's/min_disk_gb:.*/min_disk_gb: 100/' sub_tasks/check-pre-install.yaml\n\nsudo bash install.bash init-environment.yaml\nsudo bash install.bash remove-softwares.yaml\nsudo bash install.bash init-docker.yaml\nsudo bash install.bash init-registry.yaml\nsudo bash install.bash install-k8s.yaml\nsudo bash install.bash init-k8s-master.yaml\nsudo bash install.bash join-k8s-master.yaml\nsudo bash install.bash join-k8s-node.yaml\nsudo bash install.bash init-third-party-services.yaml\n\nsudo bash install.bash init-licensekit.yaml\nsudo bash install.bash init-database.yaml\nsudo bash install.bash init-redis-cluster.yaml\n\nsudo bash install.bash init-clickhouse-cluster.yaml\nsudo bash install.bash gen-certs.yaml\nsudo bash install.bash init-udcp.yaml -e action=init\n\n\n\nsudo bash install.bash update-k8s-certs.yaml\n"})}),"\n",(0,a.jsx)(e.p,{children:"5、部署完成后，首次进入平台配置管理员并激活，激活需在明道云申请激活序列号"}),"\n",(0,a.jsxs)(e.h1,{id:"平台设置",children:["平台设置",(0,a.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#平台设置",children:"#"})]}),"\n",(0,a.jsxs)(e.h2,{id:"登录",children:["登录",(0,a.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#登录",children:"#"})]}),"\n",(0,a.jsx)(e.p,{children:"1、入域账号密码强度设置：平台 -》配置 -》人员设置 -》密码安全设置 -》密码长度范围"}),"\n",(0,a.jsx)(e.p,{children:"2、平台保持登录状态：平台 -》配置 -》系统设置 -》基础设置 -》登录安全 -》页面最长静止时间"}),"\n",(0,a.jsxs)(e.h1,{id:"自动化开发",children:["自动化开发",(0,a.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#自动化开发",children:"#"})]}),"\n",(0,a.jsxs)(e.h2,{id:"web",children:["WEB",(0,a.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#web",children:"#"})]}),"\n",(0,a.jsxs)(e.h2,{id:"client",children:["CLIENT",(0,a.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#client",children:"#"})]})]})}function r(){let s=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:e}=Object.assign({},(0,i.ah)(),s.components);return e?(0,a.jsx)(e,{...s,children:(0,a.jsx)(l,{...s})}):l(s)}let h=r;r.__RSPRESS_PAGE_META={},r.__RSPRESS_PAGE_META["blog%2F2024%2FUDCP%E8%87%AA%E5%8A%A8%E5%8C%96%E8%BF%87%E7%A8%8B%E4%B8%AD%E8%AE%B0%E5%BD%95.md"]={toc:[{text:"部署",id:"部署",depth:2},{text:"登录",id:"登录",depth:2},{text:"WEB",id:"web",depth:2},{text:"CLIENT",id:"client",depth:2}],title:"自动化开发",headingTitle:"自动化开发",frontmatter:{Author:"禄烨"}}}}]);