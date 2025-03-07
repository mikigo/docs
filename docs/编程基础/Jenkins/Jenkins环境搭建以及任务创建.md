---
Author: zhx
---

# Jenkins环境搭建以及任务创建



## 环境搭建
下面主要讲解一下利用Jenkins容器搭建Jenkins环境

1、下载kenkins容器镜像(建议下载lts稳定版本)

```bash
docker pull Jenkins/Jenkins:lts
```

2、创建docker的文件影射卷

```bash
docker volume inspect Jenkins_zuo
```

3、运行容器

```bash
docker run -d --name Jenkins_rongqi -p 8080:8080 -p 50000:50000 -v 
Jenkins_zuo:/var/Jenkins_home Jenkins/Jenkins:lts
```

8080端口是Jenkins对外服务开放的端口

50000端口是slave节点与Jenkins的通讯端口

4、查看容器启动日志，查看Jenkins的初始密码

```bash
docker exec Jenkins_rongqi cat /var/Jenkins_home/secrets/initialAdminPassword
```

5、通过web端8080端口，访问Jenkins登录页面，使用初始密码可以成功登录

6、进入插件选择页面，选择自己想要使用的插件

7、创建用户，创建Jenkins URL等基础配置，Jenkins安装完成

## 任务创建

1、入口

(1) 点击"新建Item"按钮，进入任务创建页面

![任务创建](/Jenkins环境搭建以及任务创建_assets/任务创建.png)

(2)可以选择创建一个新的任务，输入任务名称，选择任务类型，点击确定即可，也可以选择复制一个现有的任务，输入任务名称，填入想要复制的任务路径，点击确定

2、任务设置

这里以'Freestyle project'类型任务进行举例

(1)通用模块设置

- 填写项目的描述信息

<img src="/Jenkins环境搭建以及任务创建_assets/通用模块.png" alt="项目描述" style="zoom:120%;" />

- 设置用户权限

<img src="/Jenkins环境搭建以及任务创建_assets/权限.png" alt="权限" style="zoom:120%;" />

- 项目重构：重新构建这个作业而不需要再次输入参数，也就是说，它会使用上一次构建时使用的参数值直接进行构建

<img src="/Jenkins环境搭建以及任务创建_assets/重构.png" alt="重构" style="zoom:120%;" />

- 任务构建参数选择：

添加一些参数变量信息到你的Jenkins工程当中，根据参数类型，每个参数都有一个Name和某种类型的Value。当构建开始时，这些名称-值对将作为环境变量导出，允许构建配置的后续部分(例如构建步骤)访问这些值，例如通过使用${PARAMETER_NAME}语法使用这些变量

<img src="/Jenkins环境搭建以及任务创建_assets/任务参数.png" alt="任务参数" style="zoom:120%;" />

- 禁止重构，勾选后，任务将不支持重构功能

<img src="/Jenkins环境搭建以及任务创建_assets/禁止重构.png" alt="禁止重构" style="zoom:120%;" />

- 限制job的最大并发数量

<img src="/Jenkins环境搭建以及任务创建_assets/限制并发数量.png" alt="限制并发数量" style="zoom:120%;" />

- 允许项目并发执行

<img src="/Jenkins环境搭建以及任务创建_assets/允许并发.png" alt="允许并发" style="zoom:120%;" />

- 限制job的运行环境，填写slave节点的标签即可

<img src="/Jenkins环境搭建以及任务创建_assets/限制节点.png" alt="限制节点" style="zoom:120%;" />

(2)源码管理模块

- 设置要在任务中要使用的代码仓

  Repository URL：代码仓库地址

  Credentials:ssh私钥，用于免密clone仓库

  <img src="/Jenkins环境搭建以及任务创建_assets/git.png" alt="git" style="zoom:120%;" />			

- 仓库分支设置

  指定分支：clone仓库的哪个分支

<img src="/Jenkins环境搭建以及任务创建_assets/git分支.png" alt="git分支" style="zoom:120%;" />

- 添加仓库附加行为

  根据你使用的版本控制系统，选择一个或多个附加行为。以下是一些常见的 Git 附加行为：

  - Check out to a sub-directory: 将检出代码放到一个子目录中

  - Clean before checkout: 在每次检出之前清理工作区，确保不会有遗留的文件

  - Prune stale remote-tracking branches: 清理不再存在的远程分支的跟踪记录

  - Advanced clone behaviours: 配置高级克隆选项，如 --depth、--single-branch 等

(3)构建触发器模块

- 任务构建设置

  - 触发远程构建：当想要利用脚本远程触发Jenkins任务的时候，可以选择此选项

    - 假如此处勾选了此选项，设置一个token值，用于远程控制任务，我们可以通过python的第三方库python-Jenkins进行任务的构建，日志查看等操作，下面是一个简单的demo

    ```python
    import Jenkins
    url = 'http://Jenkinswh.uniontech.com/Jenkinsb/job/%E5%BC%80%E5%8F%91%E5%B7%A5%E5%85%B7'
    username = 'ut005046'
    password = 'jiubugaosuni'
    jk = Jenkins.Jenkins(url=url, username=username, password=password, timeout=20)
    jk.build_job(name='test_zz', parameters={'kernel': '4.19'}, token='zuohanxu')
    ```

    

  - Build periodically：定时触发Jenkins任务，如下，每周的星期五中午 12 点执行任务：H 12 * * 5

  - Poll SCM：用于设置 Jenkins 任务如何定期检查源码管理系统（SCM）以检测代码更改。如果检测到更改，Jenkins 将自动触发构建，如设置为H/15 * * * *，则会15分钟检查一次代码变更情况

  - Build after other projects are built：用于配置当前项目在其他项目完成构建后进行构建

<img src="/Jenkins环境搭建以及任务创建_assets/构建触发器.png" alt="构建触发器" style="zoom:120%;" />

(4)构建模块

- 点击“增加构建步骤”，可以选择构建的方式，最常见的是Excute shell,可以通过shell命令，进行相关build操作 

<img src="/Jenkins环境搭建以及任务创建_assets/构建操作.png" alt="构建操作" style="zoom:120%;" />

(5)构建后操作模块

- build完成后，进行的一系列操作，比如说，可以将测试结果通过企业微信发送至项目负责人

<img src="/Jenkins环境搭建以及任务创建_assets/构建后操作.png" alt="构建后操作" style="zoom:120%;" />
