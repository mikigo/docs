"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["8426"],{247:function(e,n,r){r.r(n),r.d(n,{default:()=>l});var s=r(2676),c=r(453);function d(e){let n=Object.assign({h1:"h1",a:"a",h2:"h2",p:"p",h3:"h3",code:"code",h4:"h4",pre:"pre"},(0,c.ah)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.h1,{id:"python包构建和发布",children:["Python包构建和发布",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#python包构建和发布",children:"#"})]}),"\n",(0,s.jsxs)(n.h2,{id:"1必要的文件",children:["1、必要的文件",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#1必要的文件",children:"#"})]}),"\n",(0,s.jsx)(n.p,{children:"除了你的源代码以外，你还需要准备以下文件；"}),"\n",(0,s.jsxs)(n.h3,{id:"license",children:["LICENSE",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#license",children:"#"})]}),"\n",(0,s.jsx)(n.p,{children:"开源协议文件"}),"\n",(0,s.jsx)(n.p,{children:"这里以我的项目用到的开源协议举例："}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://github.com/funny-dream/pdocr-rpc/blob/main/LICENSE",target:"_blank",rel:"noopener noreferrer",children:"https://github.com/funny-dream/pdocr-rpc/blob/main/LICENSE"})}),"\n",(0,s.jsxs)(n.h3,{id:"readme",children:["README",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#readme",children:"#"})]}),"\n",(0,s.jsx)(n.p,{children:"介绍这个包的安装及使用，理论上你可以写任何东西在上面，主要让别人全方位了解这个包的使用；"}),"\n",(0,s.jsxs)(n.h3,{id:"pyprojecttoml",children:["pyproject.toml",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#pyprojecttoml",children:"#"})]}),"\n",(0,s.jsxs)(n.p,{children:["网络上大多关于 Python 打包使用的都是 ",(0,s.jsx)(n.code,{children:"setup.py"}),"，最新最流行的是使用 ",(0,s.jsx)(n.code,{children:"pyproject.toml"}),"，",(0,s.jsx)(n.code,{children:"pypi"})," 官方也推荐使用它；"]}),"\n",(0,s.jsxs)(n.p,{children:["相比于",(0,s.jsx)(n.code,{children:"setup.py"}),"，",(0,s.jsx)(n.code,{children:"pyproject.toml"})," 的描述更为精细，但也更为繁琐，如果你是高定玩家，当然首选 ",(0,s.jsx)(n.code,{children:"pyproject.toml"})," ；"]}),"\n",(0,s.jsxs)(n.p,{children:["当然，常用的几个东西都差不多，下面就以我的项目举例简单介绍一下：",(0,s.jsx)(n.a,{href:"https://github.com/funny-dream/pdocr-rpc/blob/main/pyproject.toml",target:"_blank",rel:"noopener noreferrer",children:"https://github.com/funny-dream/pdocr-rpc/blob/main/pyproject.toml"})]}),"\n",(0,s.jsx)(n.p,{children:"里面主要包含这些内容："}),"\n",(0,s.jsxs)(n.h4,{id:"build-system",children:["build-system",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#build-system",children:"#"})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-toml",children:'[build-system]\nrequires = ["hatchling"]\nbuild-backend = "hatchling.build"\n'})}),"\n",(0,s.jsx)(n.p,{children:"构建系统"}),"\n",(0,s.jsxs)(n.h4,{id:"project",children:["project",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#project",children:"#"})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-toml",children:'[project]\nname = "pdocr-rpc"\nauthors = [\n  { name="mikigo", email="1964191531@qq.com" },\n]\ndescription = "PaddleOCR-RPC"\nreadme = "README.md"\nrequires-python = ">=3.7"\nclassifiers = [\n    "Programming Language :: Python :: 3",\n    "License :: OSI Approved :: Apache Software License",\n    "Operating System :: OS Independent",\n]\n\ndependencies = [\n    "pyscreenshot;sys_platform == \'linux\'",\n    "pillow;sys_platform == \'win32\'",\n]\n\n'})}),"\n",(0,s.jsx)(n.p,{children:"这里面就是一些基本信息，你可以按照自己的实际情况修改；"}),"\n",(0,s.jsx)(n.p,{children:"注意："}),"\n",(0,s.jsxs)(n.p,{children:["（1）",(0,s.jsx)(n.code,{children:"classifiers"})," 里面 ",(0,s.jsx)(n.code,{children:"License"})," 字段要和项目的开源协议一致；在这里列出了所有的开源协议应该怎么写：",(0,s.jsx)(n.a,{href:"https://pypi.org/classifiers/",target:"_blank",rel:"noopener noreferrer",children:"https://pypi.org/classifiers/"})]}),"\n",(0,s.jsxs)(n.p,{children:["（2）",(0,s.jsx)(n.code,{children:"dependencies"})," 是你项目的依赖，别人使用 pip 安装的时候会同时安装上这些依赖；"]}),"\n",(0,s.jsxs)(n.p,{children:["注意这里如果有一些条件，比如有些包有版本的、操作系统、Python版本的限制，必须要按照规范写：",(0,s.jsx)(n.a,{href:"https://peps.python.org/pep-0508/",target:"_blank",rel:"noopener noreferrer",children:"https://peps.python.org/pep-0508/"})]}),"\n",(0,s.jsx)(n.p,{children:"（3）可选依赖"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-toml",children:'[project.optional-dependencies]\ntest = [\n    "pytest",\n]\ndoc = ["mkdocs-material"]\n'})}),"\n",(0,s.jsx)(n.p,{children:"这些是可选的，安装的时候可以这样进行安装："}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"pip install pdocr-rpc[test]\n"})}),"\n",(0,s.jsxs)(n.p,{children:["这样就会安装 ",(0,s.jsx)(n.code,{children:"pytest"})]}),"\n",(0,s.jsx)(n.p,{children:"（4）urls"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-toml",children:'[project.urls]\nSource = "https://github.com/funny-dream/pdocr-rpc"\nDocumentation = "https://funny-dream.github.io/pdocr-rpc"\n'})}),"\n",(0,s.jsxs)(n.p,{children:["这个在 ",(0,s.jsx)(n.code,{children:"pypi"})," 的网页端能展示，别人可以通过那里跳转的你的文档或源码页面；"]}),"\n",(0,s.jsx)(n.p,{children:"（5）version"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-toml",children:'[tool.hatch.version]\npath = "allure_custom/__version__.py"\n'})}),"\n",(0,s.jsxs)(n.p,{children:["用一个 ",(0,s.jsx)(n.code,{children:"__version__.py"})," 指定版本是比较优雅的方法；"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:'__title__ = "allure_custom"\n__version__ = "2023.6.26"\n'})}),"\n",(0,s.jsxs)(n.p,{children:["关于 ",(0,s.jsx)(n.code,{children:"project"})," 下的详细内容及规范，请查看：",(0,s.jsx)(n.a,{href:"https://packaging.python.org/en/latest/specifications/declaring-project-metadata/#declaring-project-metadata",target:"_blank",rel:"noopener noreferrer",children:"https://packaging.python.org/en/latest/specifications/declaring-project-metadata/#declaring-project-metadata"})]}),"\n",(0,s.jsxs)(n.h2,{id:"2打包",children:["2、打包",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#2打包",children:"#"})]}),"\n",(0,s.jsx)(n.p,{children:"安装打包工具："}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"sudo pip3 install build\n"})}),"\n",(0,s.jsx)(n.p,{children:"打包："}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"python3 -m build\n"})}),"\n",(0,s.jsxs)(n.p,{children:["完成后应生成两个目录中的文件：",(0,s.jsx)(n.code,{children:"dist"})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"dist/\n├── xxx.whl\n└── xxx.tar.gz\n"})}),"\n",(0,s.jsxs)(n.h2,{id:"3发布",children:["3、发布",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#3发布",children:"#"})]}),"\n",(0,s.jsxs)(n.p,{children:["首先你需要注册一个  pypi 的账号：",(0,s.jsx)(n.a,{href:"https://pypi.org/account/register/",target:"_blank",rel:"noopener noreferrer",children:"https://pypi.org/account/register/"})]}),"\n",(0,s.jsx)(n.p,{children:"安装发布工具："}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"sudo pip3 install twine\n"})}),"\n",(0,s.jsx)(n.p,{children:"发布："}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"twine upload dist/*\n"})}),"\n",(0,s.jsx)(n.p,{children:"输入你的账号密码即可发布到 pypi，以后每次发布包记得更新版本；"})]})}function i(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,c.ah)(),e.components);return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}let l=i;i.__RSPRESS_PAGE_META={},i.__RSPRESS_PAGE_META["%E7%BC%96%E7%A8%8B%E5%9F%BA%E7%A1%80%2FPython%2FPython%E5%8C%85%E6%9E%84%E5%BB%BA%E5%92%8C%E5%8F%91%E5%B8%83.md"]={toc:[{text:"1、必要的文件",id:"1必要的文件",depth:2},{text:"LICENSE",id:"license",depth:3},{text:"README",id:"readme",depth:3},{text:"pyproject.toml",id:"pyprojecttoml",depth:3},{text:"build-system",id:"build-system",depth:4},{text:"project",id:"project",depth:4},{text:"2、打包",id:"2打包",depth:2},{text:"3、发布",id:"3发布",depth:2}],title:"Python包构建和发布",headingTitle:"Python包构建和发布",frontmatter:{Author:"mikigo"}}}}]);