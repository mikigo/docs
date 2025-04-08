"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["901"],{6486:function(e,n,i){i.r(n),i.d(n,{default:()=>d});var r=i(2676),s=i(453);function h(e){let n=Object.assign({h1:"h1",a:"a",h2:"h2",ul:"ul",li:"li",pre:"pre",code:"code",p:"p",strong:"strong",h3:"h3",h4:"h4"},(0,s.ah)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.h1,{id:"代码提交流程与常见场景",children:["代码提交流程与常见场景",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#代码提交流程与常见场景",children:"#"})]}),"\n",(0,r.jsxs)(n.h2,{id:"git代码提交流程",children:["git代码提交流程",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#git代码提交流程",children:"#"})]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"本地创建密钥对，git项目中部署公钥"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'$ ssh-keygen -C "邮箱"\n... # 一路Enter\n$ cat ~/.ssh/id_rsa.pub\nssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQDfvlLm9Hb4nOJwrW/btXDGNvSWqolr/hxPoAsW3gzxr+fpHFS5/jGAxevjpWqrgd++nQFRVnZnzTDCEdg+kfjTUmx5zqxPFCgMmv3Ci5HuV4MvAjdiReMUNDrLikAZEhuy4H7zW4m+uaOFfrWfwAGnbJNnrverMkjoTL/wkCBvmqimAb8C+67wHV5aHGlrZajiW7zDh8G2sr8NtSifPMz7T/1XV6cYn6w1PIsDzt9Luq4mgmgPqy+U+lgWYRgrUHGt8szYoe1XcJG6NQh3kz3O1RBBcDa2ZR0i5CGVWoZQZQr2J0O22veQAmJmRjGmOcPQJ6QDyT2+Iq+LOohTw8Ov huanghaizhen@uniontech.com\n'})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"克隆代码至本地仓库"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"$ git clone  ssh克隆地址\n\n# 克隆仓库分为https与ssh，注意这里为ssh地址，否则部署了公钥任然需要输出账号密码\n"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"修改代码后提交（注意：若修改文件为公共文件，则以文件为最小单位提交合并请求，禁止同时修改多个公共文件，避免增加冲突几率）"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'$ git add .\n$ git commit -m "提交信息"\n$ git pull # 注意：拉取仓库最新代码\n$ git push\n'})}),"\n",(0,r.jsxs)(n.h2,{id:"greeit代码提交流程",children:["greeit代码提交流程",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#greeit代码提交流程",children:"#"})]}),"\n",(0,r.jsx)(n.p,{children:"​		背景：代码管理引入gerrit工具，主要实现提交代码前：自动代码扫描+人工代码审核，提升代码质量，具体提交流程如下："}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"本地创建密钥对，获取公钥"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'$ ssh-keygen -C "邮箱"\n... # 一路Enter\n$ cat ~/.ssh/id_rsa.pub\nssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQDfvlLm9Hb4nOJwrW/btXDGNvSWqolr/hxPoAsW3gzxr+fpHFS5/jGAxevjpWqrgd++nQFRVnZnzTDCEdg+kfjTUmx5zqxPFCgMmv3Ci5HuV4MvAjdiReMUNDrLikAZEhuy4H7zW4m+uaOFfrWfwAGnbJNnrverMkjoTL/wkCBvmqimAb8C+67wHV5aHGlrZajiW7zDh8G2sr8NtSifPMz7T/1XV6cYn6w1PIsDzt9Luq4mgmgPqy+U+lgWYRgrUHGt8szYoe1XcJG6NQh3kz3O1RBBcDa2ZR0i5CGVWoZQZQr2J0O22veQAmJmRjGmOcPQJ6QDyT2+Iq+LOohTw8Ov huanghaizhen@uniontech.com\n'})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["访问gerrit进行公钥部署：","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["gerrit地址：",(0,r.jsx)(n.a,{href:"https://gerrit.uniontech.com/settings/",target:"_blank",rel:"noopener noreferrer",children:"点击跳转"})]}),"\n",(0,r.jsxs)(n.li,{children:["设置页面滑动至设置项：",(0,r.jsx)(n.code,{children:"SSH keys"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"New SSH key"}),"输入框中",(0,r.jsx)(n.code,{children:"公钥"})]}),"\n",(0,r.jsxs)(n.li,{children:["点击按钮",(0,r.jsx)(n.code,{children:"ADD NEW SSH KEY"})]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["安装git-review：",(0,r.jsx)(n.code,{children:"sudo apt install git-review"})]}),"\n",(0,r.jsx)(n.li,{children:"克隆gerrit自动化测试仓库至本地"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'$ git clone -b dev "ssh://ut000827@gerrit.uniontech.com:29418/autotest/cd-uosdevice-os" && scp -p -P 29418 ut000827@gerrit.uniontech.com:hooks/commit-msg "cd-uosdevice-os/.git/hooks/"\n'})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"修改代码后提交至gerrit仓库（注意：若修改文件为公共文件，则以文件为最小单位提交合并请求，禁止同时修改多个公共文件，避免增加冲突几率）"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"$ git pull origin dev # 注意：拉取仓库最新代码，此步骤不可缺失\n\n# 自动提交\n$ cd /cd-uosdevice-os/tools\n$ bash gerrit_push.sh               # 自动提交脚本\n\n# 手动提交\n$ cd /cd-uosdevice-os\n$ cp -rf ./hooks/* ./.git/hooks/    # 添加钩子，进行提交前代码规范、格式检查\n$ chmod -R a+x ./.git/hooks/\n$ cp -rf gitcommit_template ~/gitcommit_template   # 添加commit模板文件\n$ git config --global commit.template ~/gitcommit_template  # 配置commit模板\n$ git add .\n$ git commit -a\n$ git review dev -r origin   # 提交代码至dev\n\n# 若不想每次提交都加上`-r`选项，执行以下命令：\n# git config --global gitreview.remote origin \n# 提交代码，直接使用 `git review branch<目标分支>`，例如`git review dev`\n"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["登录gerrit网址，gerrit地址：",(0,r.jsx)(n.a,{href:"https://gerrit.uniontech.com/dashboard/self",target:"_blank",rel:"noopener noreferrer",children:"点击跳转"})]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["选择自己提交的记录，增加",(0,r.jsx)(n.code,{children:"审核+1人员"}),"：点击",(0,r.jsx)(n.code,{children:"ADD REVIEWER"})]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"通知审核人员审核修改代码是否符合规范"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["审核人员检查代码，点击",(0,r.jsx)(n.code,{children:"REPLY"}),"填写结果："]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"通过：+1"}),"\n",(0,r.jsx)(n.li,{children:"不通过：-1（针对错误代码处，可点击进行评论）"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"+1审核通过后，通知+2审核人员，进行最终审核并合并代码"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"注意："})," 提交前请仔细检查"]}),"\n",(0,r.jsxs)(n.h2,{id:"分支管理",children:["分支管理",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#分支管理",children:"#"})]}),"\n",(0,r.jsxs)(n.h3,{id:"查看分支",children:["查看分支",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#查看分支",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:["​		使用命令：",(0,r.jsx)(n.code,{children:"git branch"})]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"查看本地分支"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:">git branch\n* master\n"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"查看本地+远程分支"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:">git branch -a\n* master\n  remotest/origin/HEAD -> origin/master\n  remotest/origin/dev\n  remotest/origin/master\n  remotest/origin/test\n  \n# 使用命令git branch -a，远程仓库已经删除的分支在本地依然可以看到\n# 使用命令 git remote show origin，可以查看remote地址，远程分支，还有本地分支与之相对应关系等信息\n\n>git remote show origin\n* 远程 origin\n  获取地址：...\n  推送地址：...\n  HEAD 分支：master\n  远程分支：\n    dev                      已跟踪\n    master                   已跟踪\n    refs/remotes/origin/test 过时（使用 'git remote prune' 来移除）\n  为 'git pull' 配置的本地分支：\n    dev 与远程 dev 合并\n  为 'git push' 配置的本地引用：\n    dev 推送至 dev (最新)\n"})}),"\n",(0,r.jsxs)(n.h3,{id:"新建分支",children:["新建分支",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#新建分支",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:["​		使用命令：",(0,r.jsx)(n.code,{children:"git branch 分支名称"})]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"查看分支"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:">git branch\n* master\n"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"创建分支"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:">git branch hhz\n"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"创建之后再次查看，可看到新建分支，master分支前面有个星号，代表此时还在master分支上"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:">git branch\n* master\n  hhz\n"})}),"\n",(0,r.jsxs)(n.h3,{id:"切换分支",children:["切换分支",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#切换分支",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:["​		使用命令：",(0,r.jsx)(n.code,{children:"git checkout 分支名称"})]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"创建分支，默认在master上，切换到新的分支hhz上"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:">git checkout hhz\nA       .idea/vcs.xml\nSwitched to branch 'hhz'\n\n# 如果当前分支有修改未合并，不允许切换分支，可提交后再切换\n"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"切换成功，查看当前的所有分支"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:">git branch\n  master\n* hhz\n"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["查看当前分支状态也可以用",(0,r.jsx)(n.code,{children:"git status"})]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:">git status\nOn branch hhz\n"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"创建分支的同时并切换分支"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:">git checkout -b hhz2\nA       .idea/vcs.xml\nSwitched to a new branch 'hhz2'\n"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"等同于：先创建分支，再切换分支"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"git branch hhz2\ngit checkout hhz2\n"})}),"\n",(0,r.jsxs)(n.h3,{id:"删除本地分支",children:["删除本地分支",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#删除本地分支",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:["​		删掉本地的分支，使用",(0,r.jsx)(n.code,{children:"git branch —delete 分支名称"})]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"—delete缩写就是-d，可以使用 git branch -d 分支名称来代替"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"注意：使用—delete删除分支时,该分支必须完全和它的上游分支merge完成,如果没有上游分支,必须要和HEAD完全merge"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"-D 是—delete —force的缩写,这样写可以在不检查merge状态的情况下删除分支"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"—force 简写-f,作用是将当前branch重置到初始点(startpoint),如果不使用—force的话,git分支无法修改一个已经存在的分支."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["​		在不检查merge状态的情况下删除分支，使用",(0,r.jsx)(n.code,{children:"git branch -D 分支名称"})," ，它是",(0,r.jsx)(n.code,{children:"git branch --delete --force 分支名称"}),"的缩写"]}),"\n",(0,r.jsx)(n.p,{children:"​		**注意：**无法直接删除当前分支，需切换至其他分支"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:">git branch\n  master\n  hhz\n* hhz2\n\n>git branch -D hhz2\nerror: Cannot delete branch 'hhz2' checked out at 'D:/ftp/sat'\n\n>git checkout master\nA       .idea/vcs.xml\nSwitched to branch 'master'\nYour branch is up-to-date with 'origin/master'.\n\n>git branch -D hhz2\nDeleted branch hhz2 (was c613c75).\n\n>git branch\n* master\n  hhz\n"})}),"\n",(0,r.jsxs)(n.h3,{id:"删除远程分支",children:["删除远程分支",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#删除远程分支",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:["​		通过本地的命令行删除远程分支，使用",(0,r.jsx)(n.code,{children:"git push origin -—delete 分支名称"})]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:">git push origin --delete hhz\n\n - [deleted]         hhz\n \n # 若未进行关联无法通过本地的命令行删除远程分支，需建立本地分支并关联：git push origin 本地分支:远程分支 ，若本地、远程分支名一致，则可省略`:远程分支`\n"})}),"\n",(0,r.jsxs)(n.h2,{id:"文件管理",children:["文件管理",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#文件管理",children:"#"})]}),"\n",(0,r.jsxs)(n.h3,{id:"恢复代码",children:["恢复代码",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#恢复代码",children:"#"})]}),"\n",(0,r.jsxs)(n.h4,{id:"放弃修改",children:["放弃修改",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#放弃修改",children:"#"})]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"git reset --hard {commint id}"})}),"\n",(0,r.jsx)(n.p,{children:"代码整体回退到该次提交，所有修改均放弃。"}),"\n",(0,r.jsxs)(n.h4,{id:"保留修改",children:["保留修改",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#保留修改",children:"#"})]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"git reset --soft {commint id}"})}),"\n",(0,r.jsx)(n.p,{children:"代码当前指针移到该次提交，所有修改均保留。"}),"\n",(0,r.jsx)(n.p,{children:"备注：常用于代码提交后被驳回，此时可移动指针后再次提交代码即可。"}),"\n",(0,r.jsxs)(n.h3,{id:"恢复文件",children:["恢复文件",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#恢复文件",children:"#"})]}),"\n",(0,r.jsxs)(n.h4,{id:"恢复最新版本",children:["恢复最新版本",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#恢复最新版本",children:"#"})]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"本地修改未提交"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"$ git checkout -- other.sh  # other.sht为文件名\n"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"本地修改，已提交至暂存区（即编辑之后，git add但没有 git commit -m ....）"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"$ git reset HEAD    # 回退到当前版本\n$ git checkout -- other.sh  # other.sht为文件名\n"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"本地修改，已提交至仓库区（即编辑之后，git add和 git commit -m ....）"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"$ git reset HEAD^    # 回退到上一个版本\n$ git checkout -- other.sh  # other.sht为文件名\n"})}),"\n",(0,r.jsxs)(n.h4,{id:"恢复至任意版本",children:["恢复至任意版本",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#恢复至任意版本",children:"#"})]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:" $ git log --oneline\nfbcfafd (HEAD -> dev) ly-5  # HEAD\n02d906a ly-4  # HEAD^\n08493f3 Merge branch 'dev' of https://e.coding.net/mars-z/sat/SAT into dev   # HEAD^^\nc11ed08 ly-3  # HEAD~4\ndc07dfe ly-2\n\n# 第一列为版本号\ngit reset 版本号\ngit checkout -- other.sh  # other.sht为文件名\n\n"})}),"\n",(0,r.jsxs)(n.h2,{id:"拉取代码差异",children:["拉取代码差异",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#拉取代码差异",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:["​		使用git pull 与 git pull --rebase的差异，建议使用",(0,r.jsx)(n.code,{children:"git pull --rebase"}),"，使提交曲线为直线，让大家易于理解。"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["git pull = git fetch + ",(0,r.jsx)(n.code,{children:"git merge"})]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-mermaid",children:"graph TD\nA[分支A] --\x3e B(分支B)\nB --\x3e |本地修改|C(分支C)\nB --\x3e |远程修改|D(分支D)\nC --\x3e |合并|E(分支E)\nD --\x3e |合并|E(分支E:含C+D内容)\n"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["git pull --rebase = git fetch + ",(0,r.jsx)(n.code,{children:"git rebase"})]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-mermaid",children:"graph TD\nA[分支A] --\x3e B(分支B)\nB -.-> |本地修改|C(分支C)\nB --\x3e |远程修改|D(分支D)\nC -.-> |放弃提交|E(分支E)\nD --\x3e E(分支E:含C+D内容)\n"})}),"\n",(0,r.jsxs)(n.h2,{id:"文件冲突",children:["文件冲突",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#文件冲突",children:"#"})]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"git pull --rebase:"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"在rebase的过程中，有时也会有conflict，这时Git会停止rebase并让用户去解决冲突，解决完冲突后\n1、用git add命令去更新这些内容\n2、然后不用执行git-commit,直接执行git rebase --continue,这样git会继续apply余下的补丁。\n\n注意：在任何时候，都可以用git rebase --abort参数来终止rebase的行动，并且mywork分支会回到rebase开始前的状态。\n"})}),"\n",(0,r.jsxs)(n.h3,{id:"异常问题收集",children:["异常问题收集",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#异常问题收集",children:"#"})]}),"\n",(0,r.jsxs)(n.h4,{id:"git-config报错",children:["git config报错",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#git-config报错",children:"#"})]}),"\n",(0,r.jsx)(n.p,{children:"操作人：黄海针"}),"\n",(0,r.jsxs)(n.p,{children:["操作背景：执行命令",(0,r.jsx)(n.code,{children:'$ git config --global user.email "huanghaizhen@uniontech.com"'}),"失败"]}),"\n",(0,r.jsxs)(n.p,{children:["报错：",(0,r.jsx)(n.code,{children:"error: 不能锁定配置文件 /home/mars/.gitconfig: 权限不够"})]}),"\n",(0,r.jsxs)(n.p,{children:["根因：执行以上命令时，会在家目录创建文件",(0,r.jsx)(n.code,{children:".gitconfig"}),"，显然该提示是因为权限不够，查看家目录权限为555（why？）"]}),"\n",(0,r.jsxs)(n.p,{children:["解决方案：修改家目录权限为755解决问题，需要注意的时，在以上命令前加",(0,r.jsx)(n.code,{children:"sudo"}),"任然无法创建文件",(0,r.jsx)(n.code,{children:".gitconfig"})]}),"\n",(0,r.jsx)(n.p,{children:"参考资料：暂无"})]})}function c(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,s.ah)(),e.components);return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}let d=c;c.__RSPRESS_PAGE_META={},c.__RSPRESS_PAGE_META["blog%2F2024%2FAT%E4%BB%A3%E7%A0%81%E6%8F%90%E4%BA%A4%E6%B5%81%E7%A8%8B%E4%B8%8E%E5%B8%B8%E8%A7%81%E5%9C%BA%E6%99%AF.md"]={toc:[{text:"git代码提交流程",id:"git代码提交流程",depth:2},{text:"greeit代码提交流程",id:"greeit代码提交流程",depth:2},{text:"分支管理",id:"分支管理",depth:2},{text:"查看分支",id:"查看分支",depth:3},{text:"新建分支",id:"新建分支",depth:3},{text:"切换分支",id:"切换分支",depth:3},{text:"删除本地分支",id:"删除本地分支",depth:3},{text:"删除远程分支",id:"删除远程分支",depth:3},{text:"文件管理",id:"文件管理",depth:2},{text:"恢复代码",id:"恢复代码",depth:3},{text:"放弃修改",id:"放弃修改",depth:4},{text:"保留修改",id:"保留修改",depth:4},{text:"恢复文件",id:"恢复文件",depth:3},{text:"恢复最新版本",id:"恢复最新版本",depth:4},{text:"恢复至任意版本",id:"恢复至任意版本",depth:4},{text:"拉取代码差异",id:"拉取代码差异",depth:2},{text:"文件冲突",id:"文件冲突",depth:2},{text:"异常问题收集",id:"异常问题收集",depth:3},{text:"git config报错",id:"git-config报错",depth:4}],title:"代码提交流程与常见场景",headingTitle:"代码提交流程与常见场景",frontmatter:{Author:"海针"}}}}]);