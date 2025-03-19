---
Author : 马涛涛
---

# Django基础知识

## **1.** Python web框架要点

### **1.1** web应用程序流程

![img](/Django基础知识_assets/wpsQgYZ5V.jpg) 

### **1.1** web程序框架的意义

1. 搭建web应用程序
2. 免去不同web应用相同代码部分的重复编写，只需关心web应用核心的业务逻辑实现

### **1.2** web应用程序本质

#### 1.3.1接收并解析HTTP请求，获取具体的请求信息

服务器端接收到客户端（通常是浏览器）通过网络发送的HTTP请求，这个请求中包含了请求方法（GET、POST等）、请求头（携带了客户端信息、接受的数据类型等）、请求参数（URL中的查询字符串或POST请求的数据体）等信息。

#### 1.3.2处理本次HTTP请求，即完成本次请求的业务逻辑处理

  根据请求的具体内容，Web应用执行相应的业务逻辑处理。这可能涉及到数据库操作、计算、调用外部API、验证用户身份等多种操作。

#### 1.3.3构造并返回处理结果--HTTP响应

处理完业务逻辑后，服务器需要构造一个HTTP响应，该响应包括状态码（如200表示成功，404表示未找到等）、响应头（指示内容类型、编码方式等）以及响应体（通常是HTML页面、JSON数据或其他格式的内容）。这个响应会被发送回客户端，展示或进一步处理。

### **1.3** web框架学习要点

#### 1.4.1如何搭建工程

- 工程组建

- 工程配置

- 路由定义

- 试图函数定义

#### 1.4.2如何获取请求数据

获取请求数据是处理HTTP请求的关键部分，不同的请求类型（GET、POST等）和数据传输方式（查询字符串、表单数据、JSON数据等）有不同的获取方法。以下是几种常见情况下的数据获取方式：

对于GET请求：

- 查询字符串参数：不论是Flask还是Django，你可以通过框架提供的请求对象轻松访问。在Flask中使用request.args.get('parameter_name')，在Django中使用request.GET.get('parameter_name')来获取特定的查询参数值。如果参数不存在，.get()方法会返回None或你指定的默认值。

对于POST请求：

- 表单数据：当表单通过application/x-www-form-urlencoded或multipart/form-data编码发送时，可以使用类似的方式获取数据。在Flask中，利用request.form['parameter_name']；Django中则是request.POST['parameter_name']。注意，尝试访问不存在的键会抛出异常，因此推荐使用.get()方法来避免错误。

- JSON数据：现代Web应用中，客户端经常发送JSON格式的数据，尤其是在API接口中。在Flask中，可以直接使用request.get_json()来获取整个JSON数据，或者request.json['key']访问具体键值；Django中则需要先将请求体解析为JSON，如import json; data = json.loads(request.body)['key']。

#### 1.4.3如何构造响应数据

构造响应数据是Web应用程序开发中的另一个重要环节，它涉及到如何将服务器处理的结果组织成符合HTTP规范的格式并发送回客户端。

无论使用哪种Web框架，构造响应数据的核心思路都是类似的：

- 确定响应状态码：如200表示成功，404表示未找到等。

- 设置响应头：如Content-Type来指明响应内容的类型。

- 构建响应体：根据应用场景，可以是HTML、JSON、XML等格式的数据。

- 发送响应：将上述信息组合并通过框架提供的方法发送给客户端。

eg: 

Django（Python Web框架）

在Django中，可以通过视图函数直接返回HttpResponse对象，或者使用JsonResponse来构造JSON响应：

![img](/Django基础知识_assets/wps2KTMN7.jpg) 

 

Flask（Python Web框架）

Flask提供了简洁的API来构造响应：

![img](/Django基础知识_assets/wpsT1BDvj.jpg) 

 

## **2.** Django框架以及工作流程简单梳理

### **2.1** django介绍MVC和MVT

#### **2.1.1** MVC模式![img](/Django基础知识_assets/wpsyzPAdv.jpg)

eg：已查询数据库为例

1）发送查询数据库请求到controll，controll处理请求

2,3,4,5）controll请求model模块查询数据库，model查询数据库后将数据返回给controll

6,7,8）controll请求view分装html，view将分装渲染后的数据返回给controll，再有controll发送给客户端

从上述例子中不难看出：

- control- 用于接收请求，处理业务逻辑，与model和view交互，返回结果

- model主要分装对数据库的访问，对数据库数据进行增删改查

- view用于分装结果，生成页面展示的htlm内容

#### **2.1.2** MVT模式

![img](/Django基础知识_assets/wpsUnjCVG.jpg) 

 

- mode- 与MVC中的M功能相同，负责和数据库交互

- view与MVC中的C功能相同，接收请求，进行业务处理，返回应答

- template与MVC中的V 功能相同，负责封装构造要返回的html

 

 

## **3.** 实操搭建django项目

### **3.1** 虚拟环境搭建

建议使用Python的虚拟环境搭建自己的项目，优点：

- 隔离性：虚拟环境允许你在独立的空间安装Python库和依赖项，而不会影响到系统全局或其他项目的环境。这样可以避免不同项目间依赖冲突的问题，确保每个项目运行在预期的库版本上。

- 可复现性：通过记录虚拟环境中安装的库及其版本，你可以很容易地在其他机器或团队成员之间复现相同的开发或运行环境，这对于团队协作和持续集成尤为重要。

- 易于管理：虚拟环境使库的安装、升级和卸载变得更加简单和安全。你可以在特定的虚拟环境中自由实验，而不必担心破坏系统的Python安装或影响其他项目。

- 清理方便：如果一个项目不再需要或者你想从头开始，只需删除对应的虚拟环境即可，这比手动卸载多个库要快速且彻底。

- 多版本支持：虚拟环境允许你在同一台机器上安装和使用Python的不同版本。这对于需要特定Python版本的项目非常有用，也便于测试代码在不同Python版本下的兼容性。

- 环境配置文件：通常与虚拟环境一起使用的还有环境配置工具（如pipenv或conda），它们可以创建一个包含所有依赖的文件（如requirements.txt或environment.yml），使得环境的配置和分发更加自动化和标准化。

- 提高开发效率：因为虚拟环境隔离了每个项目，所以你可以在不同项目间快速切换，无需担心依赖冲突导致的错误，从而提高了开发和调试的效率。

总之，Python虚拟环境通过提供一个一致、可控制、易于维护的开发环境，显著提高了开发工作的灵活性、可靠性和协作效率。

 

这里我们使用virtualenv，以下是搭建virtualenv虚拟环境的操作步骤：

```bash

sudo pip instal- virtualenv

sudo pip instal- virtualenvwrapper

mkdir $HOME/.virtualenvs

编辑~/.bashrc 添加

export WORKON_HOME=$HOME/.virtualenvs

source /usr/local/bin/virtualenvwrapper.sh

source ~/.bashrc
```


基本常见命令：

```bash
创建虚拟环境 mkvirtualenv -p python3

列举所有虚拟环境 workon

进入某个虚拟环境workon + 虚拟环境名称

删除虚拟环境 rmvirtualenv + 虚拟环境名称

退出虚拟环境 deactivate + 虚拟环境名称
```

### **3.2** 创建django项目

#### 3.2.1创建工程

命令：
```Django-admin startproject name```


![img](/Django基础知识_assets/wpsCYoPDS.jpg) 

- 拉起服务

 ```Python manage.py runserver name ```

 在uos虚拟机拉起Django服务，需要关闭防火墙，才能在主机访问

 

#### 3.2.2创建子应用

命令：
```python manager.py startapp name```


![img](/Django基础知识_assets/wpsKZi8l4.jpg) 

 

#### 3.2.3注册子应用到工程中

- 注册的子应用虽然创建，但是和工程并无关联，需要注册安装才能使用

- 在工程的配置文件setting.py中，INSTALLED_APPS列表保存了工程已经注册安装的子应用。

- 注册安装一个子应用的方法是将子应用中的apps.py中的config类添加到INSTALLED_APPS列表中

### **3.3** 模型

3.3.1 ORM框架

 

Django的ORM（Object-Relationa- Mapping，对象关系映射）框架是Django作为一个高级Web框架的核心组件之一，它提供了一种将数据库操作抽象化的方法，使得开发者可以用Python类和对象来操作数据库，而不是直接编写SQL语句。这样做有以下几个显著优点：

- 代码简洁：Django ORM允许开发者使用Python代码来定义数据库模型（即数据表结构），执行查询，更新数据等操作，从而减少了编写和维护原生SQL语句的工作量。

- 数据库无关性：通过配置，Django ORM可以在多种数据库（如SQLite, PostgreSQL, MySQL, Oracle等）之间切换，而不需要修改应用中的大部分代码，因为ORM会处理底层数据库之间的差异性。

- 自动化的SQL管理：Django的ORM能自动生成并执行SQL语句来创建、修改、删除数据库表。当你更改模型定义后，使用makemigrations和migrate命令，Django会自动为你同步数据库结构变化。

- 强大的查询API：Django提供了丰富的查询API，使得复杂的数据库查询可以通过链式调用和方法调用来完成，这不仅易于阅读和理解，也降低了出错的可能性。

- 关系管理：Django ORM自动处理数据库中的关系（如一对一、一对多、多对多关系），并提供了方便的方法来访问和管理这些关联对象。

- 数据验证：ORM模型可以定义字段的验证规则，确保在数据保存到数据库之前符合业务逻辑要求，提高了数据的一致性和完整性。

- 性能优化：尽管ORM会带来一定的性能开销，但Django也提供了一些机制来优化查询性能，如选择性地使用.select_related()和.prefetch_related()减少数据库查询次数，或者利用.only()和.defer()只加载需要的字段数据。

总的来说，Django的ORM框架极大地简化了Web开发中的数据库交互过程，提高了开发效率，并帮助开发者专注于业务逻辑的实现而非底层数据库操作。

#### 3.3.1 ORM对应关系

- model内嵌了ORM框架

- 通过ORM 操作数据库

![img](/Django基础知识_assets/wpsnKjx4f.jpg) 

![img](/Django基础知识_assets/wpsfubZMr.jpg) 

#### 3.3.2模型

1. 在模型文件models.py中定义模型类

![img](/Django基础知识_assets/wps9XcuvD.jpg) 

2. 模型迁移

python3 manage.py makemigrations    生成迁移文件

![img](/Django基础知识_assets/wpsDsQ2dP.jpg)

python3 manage.py migrate        迁移

![img](/Django基础知识_assets/wpsTHlHW0.jpg) 

此时，如果你的数据库已经生成了对应的表格

### **3.4** 视图与URL

#### 3.4.1视图

1. 视图就是一个python函数
2. 函数的第一个参数就是 请求 和请求相关  是 HttpRequest的实例对象
3. 视图必须要返回一个响应 响应是HttpResponse的实例对象

#### 3.4.2 url匹配过程

![img](/Django基础知识_assets/wpsgjNAFc.jpg) 

详细过程：

1. 项目.urls:  通过 incloud方法引导到 应用的 urls

 

2. 应用.urls：

![img](/Django基础知识_assets/wps69Yzoo.jpg) 

3. views.py：

![img](/Django基础知识_assets/wps7DdC7z.jpg) 

#### 3.4.5 总结views和URL匹配流程

![img](/Django基础知识_assets/wpsG5JSQL.jpg) 

 

### **3.5** 模板

#### 3.5.1 模板大体工作流程

1. 创建模板 （图1）
2. 设置模板查找路径 （图2）
3. 模板接受输入传入的数据 （图3）
4. 模板处理数据

![img](/Django基础知识_assets/wps5LPcAX.jpg) 

图1

![img](/Django基础知识_assets/wpsH71Bj9.jpg) 

图2

![img](/Django基础知识_assets/wpsj9l42k.jpg) 

图3

#### 3.5.2总体流程图

![img](/Django基础知识_assets/wpsg4VzMw.jpg)