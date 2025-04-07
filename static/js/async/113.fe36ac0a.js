"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["113"],{2629:function(e,n,s){s.r(n),s.d(n,{default:()=>a});var r=s(2676),i=s(453);function h(e){let n=Object.assign({h1:"h1",a:"a",h2:"h2",h3:"h3",p:"p",ul:"ul",li:"li",img:"img",h4:"h4",ol:"ol",strong:"strong"},(0,i.ah)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.h1,{id:"django进阶技巧",children:["Django进阶技巧",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#django进阶技巧",children:"#"})]}),"\n",(0,r.jsxs)(n.h2,{id:"用户认证和权限",children:["用户认证和权限",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#用户认证和权限",children:"#"})]}),"\n",(0,r.jsxs)(n.h3,{id:"用户认证",children:["用户认证",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#用户认证",children:"#"})]}),"\n",(0,r.jsx)(n.p,{children:"用户认证是指确认用户声称的身份是否真实的过程，即验证用户名和密码是否匹配。在Django中，这一过程主要由django.contrib.auth应用处理。"}),"\n",(0,r.jsx)(n.p,{children:"django.contrib.auth是Django框架中的一个核心应用，专门用于处理用户认证和授权相关的功能。这个应用提供了一整套解决方案，包括用户模型、认证视图、权限管理、会话管理等，使得开发者能够方便地实现用户注册、登录、权限控制等功能。下面是对django.contrib.auth几个关键组成部分的详细说明："}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"用户模型(User Model)"}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Django默认提供了一个用户模型django.contrib.auth.models.User，这个模型包含了一些常用字段，如username、password、email、first_name、last_name等，用于存储用户的基本信息。密码字段经过哈希处理，确保安全性。如果你有更复杂的需求，可以通过继承AbstractUser或AbstractBaseUser来自定义用户模型，像研测平台就是来继承AbstractUser来自定义我们自己的业务员需求。"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"认证视图(Authentication Views)"}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Django提供了一系列内置的视图函数来处理常见的认证操作，如登录、注销、密码重置、密码更改等。这些视图位于django.contrib.auth.views模块中。例如，LoginView用于处理用户登录逻辑，而LogoutView则负责用户注销。开发者只需在URL配置中引用这些视图即可快速搭建认证流程。"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"认证后端(Authentication Backends)"}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"认证后端决定了如何验证用户的凭证（如用户名和密码）。Django支持多种认证机制，并允许开发者自定义认证后端。默认情况下，Django使用ModelBackend，它基于数据库中的用户模型进行认证。此外，还可以添加其他后端，比如LDAP、OAuth等，以支持不同的认证方式。"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:"/Django%E8%BF%9B%E9%98%B6%E6%8A%80%E5%B7%A7_assets/1.png",alt:""})}),"\n",(0,r.jsx)(n.p,{children:"通过设置多个认证后端，Django 会依次尝试这些后端来验证用户的登录信息，直到找到一个成功的认证后端或者所有后端都尝试失败。"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"权限和组(Permissions and Groups)"}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Django提供了一套简单的权限系统，用于控制用户对模型（及其实例）的操作权限。每个模型都有三个默认的权限：“添加”、“修改”、“删除”。此外，可以为模型定义额外的自定义权限。用户可以被直接赋予这些权限，或者通过用户组间接赋予。Group模型允许将权限批量分配给多个用户，便于权限管理。"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"会话管理(Session Management)"}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Django的会话系统允许服务器跟踪用户的状态。当用户登录后，会创建一个会话，其中可以存储用户信息。会话数据默认保存在数据库中，但也可以配置为保存在cookie或缓存中。会话系统处理登录状态保持、超时及安全性设置，如使用HTTPS-only cookie。"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"CSRF保护(CSRF Protection)"}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"跨站请求伪造（CSRF）是一种常见的网络攻击。django.contrib.auth还包含了对跨站请求伪造的防护机制，自动为每个POST请求生成并验证一个CSRF令牌，确保表单提交的安全性。"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"密码管理(Password Management)"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Django提供了密码重置和更改的完整工作流，包括发送密码重置邮件、生成一次性密码链接、验证密码等。这些功能通过视图和表单实现，简化了开发者的实现工作。"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"综上所述，django.contrib.auth是Django框架安全性和用户管理的核心组件，其设计旨在简化开发者的工作，同时保证应用的安全性。"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.h3,{id:"权限管理",children:["权限管理",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#权限管理",children:"#"})]}),"\n",(0,r.jsx)(n.p,{children:"权限管理涉及决定已认证用户能够访问哪些资源或执行哪些操作。Django的权限系统分为基本权限和对象级权限。"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"基本权限（Basic permissions）: 每个Django模型都可以定义一组全局权限，比如add_<modelname>, change_<modelname>, delete_<modelname>。这些权限自动添加到auth.permission表，并且可以分配给用户组或单独的用户。"}),"\n",(0,r.jsx)(n.li,{children:"对象级权限（Object-level permissions）: 除了全局权限，Django也支持对具体对象实例的权限控制。这意味着可以限制用户仅能修改或删除他们自己的某些记录，而不是所有人的记录。这需要手动检查权限，通常在视图函数中完成。"}),"\n",(0,r.jsx)(n.li,{children:"组（Groups）: Django允许将用户分组，并给组分配权限。这样可以批量管理权限，提高效率。"}),"\n",(0,r.jsx)(n.li,{children:"用户权限检查: 使用user.has_perm()方法可以检查用户是否具有某个权限。在模板中也可以使用{% if perms.app_label.codename %}这样的标签来控制内容的显示。"}),"\n"]}),"\n",(0,r.jsxs)(n.h4,{id:"121在django中实现角色级别的权限控制",children:["1.2.1在django中实现角色级别的权限控制",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#121在django中实现角色级别的权限控制",children:"#"})]}),"\n",(0,r.jsx)(n.p,{children:"在Django中实现角色级别的权限控制，通常涉及创建自定义用户组，并给这些组分配特定的权限，然后将用户分配到对应的组中。以下是实现这一功能的步骤："}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"创建用户组并分配权限"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:'登录Django管理后台，在“用户权限”部分找到“用户组”(Groups)，创建新的用户组，比如"管理员"、"编辑"和"普通用户"。'}),"\n",(0,r.jsx)(n.p,{children:"为每个组分配特定的权限。权限可以是预定义的模型权限（在模型的Meta类中定义）或自定义权限。在创建或编辑组时，可以找到权限分配的部分，选择适用于该角色的权限。"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.ol,{start:"2",children:["\n",(0,r.jsx)(n.li,{children:"用户与组关联"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"在添加或编辑用户时，将用户分配到一个或多个组中。这样，用户就继承了所属组的所有权限。"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.ol,{start:"3",children:["\n",(0,r.jsx)(n.li,{children:"视图函数中的权限检查"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"在视图中，除了直接检查用户的个人权限外，还可以检查当前用户所属的组是否具有执行某项操作的权限。这可以通过遍历用户所属的组并检查组的权限来实现。"}),"\n",(0,r.jsx)(n.p,{children:"示例代码"}),"\n",(0,r.jsx)(n.p,{children:"假设有一个视图需要管理员权限才能访问，可以这样做："}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:"/Django%E8%BF%9B%E9%98%B6%E6%8A%80%E5%B7%A7_assets/Fri_Oct_18_2024_182259.png",alt:""})}),"\n",(0,r.jsxs)(n.ol,{start:"4",children:["\n",(0,r.jsx)(n.li,{children:"自定义权限检查装饰器"}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"如果你频繁地使用某个特定的角色检查，可以创建自定义的装饰器来简化代码："}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:"/Django%E8%BF%9B%E9%98%B6%E6%8A%80%E5%B7%A7_assets/Fri_Oct_18_2024_182308.png",alt:""})}),"\n",(0,r.jsxs)(n.h4,{id:"131-在django中实现对象级别的权限控制",children:["1.3.1 在django中实现对象级别的权限控制",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#131-在django中实现对象级别的权限控制",children:"#"})]}),"\n",(0,r.jsx)(n.p,{children:"在django中要实现对象级别的权限控制，推荐使用第三方库：django-guardian："}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"安装django-guardian："}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:"/Django%E8%BF%9B%E9%98%B6%E6%8A%80%E5%B7%A7_assets/Fri_Oct_18_2024_182317.png",alt:""})}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"然后，在你的settings.py文件中将其添加到INSTALLED_APPS列表中："}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:"/Django%E8%BF%9B%E9%98%B6%E6%8A%80%E5%B7%A7_assets/Fri_Oct_18_2024_182342.png",alt:""})}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"并确保配置AUTHENTICATION_BACKENDS："}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:"/Django%E8%BF%9B%E9%98%B6%E6%8A%80%E5%B7%A7_assets/Fri_Oct_18_2024_182409.png",alt:""})}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"配置模型"}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"确保你的模型中已经定义了权限相关的元数据，尽管这不是必需的，但有助于理解权限的上下文。例如："}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:"/Django%E8%BF%9B%E9%98%B6%E6%8A%80%E5%B7%A7_assets/Fri_Oct_18_2024_182418.png",alt:""})}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"分配对象权限"}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"你可以使用assign_perm函数给特定的用户或用户组分配对象级别的权限："}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:"/Django%E8%BF%9B%E9%98%B6%E6%8A%80%E5%B7%A7_assets/Fri_Oct_18_2024_182425.png",alt:""})}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"检查对象权限"}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"在视图中，你可以使用get_perms或has_perm来检查用户是否有特定的对象权限："}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:"/Django%E8%BF%9B%E9%98%B6%E6%8A%80%E5%B7%A7_assets/Fri_Oct_18_2024_182433.png",alt:""})}),"\n",(0,r.jsx)(n.p,{children:"这样，你就可以在Django项目中灵活地实施对象级别的权限控制了。通过django-guardian，你可以精细地管理用户对各个模型实例的操作权限，增强应用的安全性和用户体验。"}),"\n",(0,r.jsxs)(n.h2,{id:"restful-api",children:["RestFul API",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#restful-api",children:"#"})]}),"\n",(0,r.jsx)(n.p,{children:"RESTful API 是一种广泛采用的网络 API 设计指南，它利用了 REST（表述性状态转移）架构风格。RESTful API 通过使用标准的 HTTP 方法来处理数据的 CRUD（创建、读取、更新、删除）操作，使得网络服务的开发和消费变得更加简单和高效。"}),"\n",(0,r.jsx)(n.p,{children:"需要注意的是，RESTful API是一种接口风格，并不是代码框架，目的是统一网络接口的编写规范"}),"\n",(0,r.jsxs)(n.h3,{id:"restful-api-的核心概念",children:["RESTful API 的核心概念",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#restful-api-的核心概念",children:"#"})]}),"\n",(0,r.jsxs)(n.h4,{id:"211-资源resources",children:["2.1.1 资源（Resources）",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#211-资源resources",children:"#"})]}),"\n",(0,r.jsx)(n.p,{children:"在 RESTful 架构中，一切都被视为资源。资源可以是文档、图片、视频，或者是任何可以命名的事物。每个资源都对应一个唯一的 URL。"}),"\n",(0,r.jsxs)(n.h4,{id:"212-统一接口uniform-interface",children:["2.1.2 统一接口（Uniform Interface）",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#212-统一接口uniform-interface",children:"#"})]}),"\n",(0,r.jsx)(n.p,{children:"RESTful API 设计强调使用统一的接口进行资源的操作。这意味着所有的资源都通过相似的接口进行访问，使得用户可以无需了解底层实现，只需通过标准的 HTTP 方法对资源进行操作。"}),"\n",(0,r.jsxs)(n.h4,{id:"213-无状态stateless",children:["2.1.3 无状态（Stateless）",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#213-无状态stateless",children:"#"})]}),"\n",(0,r.jsx)(n.p,{children:"RESTful API 应该是无状态的，这意味着每次请求都包含了完成请求所需的所有信息，服务器不会在请求之间保存任何状态信息。"}),"\n",(0,r.jsxs)(n.h4,{id:"214-可缓存cacheable",children:["2.1.4 可缓存（Cacheable）",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#214-可缓存cacheable",children:"#"})]}),"\n",(0,r.jsx)(n.p,{children:"响应应该被设计为可缓存的，这可以提高性能并减少服务器的负载。"}),"\n",(0,r.jsxs)(n.h4,{id:"215-分层系统layered-system",children:["2.1.5 分层系统（Layered System）",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#215-分层系统layered-system",children:"#"})]}),"\n",(0,r.jsx)(n.p,{children:"在 RESTful 架构中，客户端通常不知道它是直接与终端服务器通信，还是通过一个或多个中间层。分层允许你插入缓存、负载均衡器等组件。"}),"\n",(0,r.jsxs)(n.h3,{id:"设计原则",children:["设计原则",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#设计原则",children:"#"})]}),"\n",(0,r.jsxs)(n.h4,{id:"221-使用标准-http-方法",children:["2.2.1 使用标准 HTTP 方法",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#221-使用标准-http-方法",children:"#"})]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"GET：用于检索资源。"}),"\n",(0,r.jsx)(n.li,{children:"POST：用于创建新的资源或触发资源上的处理。"}),"\n",(0,r.jsx)(n.li,{children:"PUT：用于更新资源或创建新资源。"}),"\n",(0,r.jsx)(n.li,{children:"DELETE：用于删除资源。"}),"\n"]}),"\n",(0,r.jsxs)(n.h4,{id:"222-资源命名",children:["2.2.2 资源命名",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#222-资源命名",children:"#"})]}),"\n",(0,r.jsx)(n.p,{children:"使用名词而不是动词来命名资源，并且保持命名直观和易于理解。"}),"\n",(0,r.jsxs)(n.h4,{id:"223-分层系统",children:["2.2.3 分层系统",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#223-分层系统",children:"#"})]}),"\n",(0,r.jsx)(n.p,{children:"设计 API 时，应该考虑系统的分层，使得每个层次都可以独立地扩展和替换。"}),"\n",(0,r.jsxs)(n.h4,{id:"224-按需加载代码",children:["2.2.4 按需加载代码",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#224-按需加载代码",children:"#"})]}),"\n",(0,r.jsx)(n.p,{children:"这是一种可选原则，允许服务器发送执行代码（例如 JavaScript）到客户端，以扩展客户端的功能。"}),"\n",(0,r.jsxs)(n.h4,{id:"225-hateoas",children:["2.2.5 HATEOAS",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#225-hateoas",children:"#"})]}),"\n",(0,r.jsx)(n.p,{children:"通过超媒体链接动态提供客户端当前状态下的下一步操作，减少客户端与服务器之间的耦合。"}),"\n",(0,r.jsxs)(n.h2,{id:"常见中间件",children:["常见中间件",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#常见中间件",children:"#"})]}),"\n",(0,r.jsxs)(n.h3,{id:"什么是中间件",children:["什么是中间件",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#什么是中间件",children:"#"})]}),"\n",(0,r.jsx)(n.p,{children:"Django 中间件是一个轻量级的、底层级的 “插件” 系统，用于在 Django 的请求 / 响应处理过程中插入某些特定的逻辑。中间件组件是 Django 框架的核心特性之一，允许开发者在全局层面上修改进入和离开 Django 应用的请求和响应。"}),"\n",(0,r.jsxs)(n.h3,{id:"中间件的关键点",children:["中间件的关键点",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#中间件的关键点",children:"#"})]}),"\n",(0,r.jsx)(n.p,{children:"以下是 Django 中间件的一些关键点："}),"\n",(0,r.jsxs)(n.h4,{id:"321-作用时机",children:["3.2.1 作用时机",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#321-作用时机",children:"#"})]}),"\n",(0,r.jsx)(n.p,{children:"中间件在请求从用户发送到 Django 然后返回响应的整个周期中的多个点被调用。这包括在 Django 处理请求之前、处理请求时、以及生成响应之后。"}),"\n",(0,r.jsxs)(n.h4,{id:"322-功能",children:["3.2.2 功能",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#322-功能",children:"#"})]}),"\n",(0,r.jsx)(n.p,{children:"中间件可以用于多种多样的任务，比如："}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"用户认证和授权"}),"\n",(0,r.jsx)(n.li,{children:"会话管理"}),"\n",(0,r.jsx)(n.li,{children:"CSRF 保护"}),"\n",(0,r.jsx)(n.li,{children:"压缩响应内容"}),"\n",(0,r.jsx)(n.li,{children:"缓存机制"}),"\n",(0,r.jsx)(n.li,{children:"日志记录"}),"\n",(0,r.jsx)(n.li,{children:"设置响应头"}),"\n",(0,r.jsx)(n.li,{children:"防止点击劫持"}),"\n",(0,r.jsx)(n.li,{children:"请求和响应数据的修改"}),"\n"]}),"\n",(0,r.jsxs)(n.h4,{id:"323-工作原理",children:["3.2.3 工作原理",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#323-工作原理",children:"#"})]}),"\n",(0,r.jsx)(n.p,{children:"中间件以类或函数的形式实现，并且按照在 Django 项目设置文件settings.py中的MIDDLEWARE配置列表的顺序来调用。请求和响应会通过这个中间件列表，在每个中间件中可以执行特定的操作。"}),"\n",(0,r.jsxs)(n.h4,{id:"324-方法",children:["3.2.4 方法",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#324-方法",children:"#"})]}),"\n",(0,r.jsx)(n.p,{children:"一个中间件可以包含以下方法（但不一定要全部实现）："}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"init"}),"(self, get_response): 初始化中间件，接收一个get_response参数，这个参数是一个可调用的对象，用于调用中间件链中的下一个中间件或最终的视图。"]}),"\n",(0,r.jsx)(n.li,{children:"process_request(self, request): 在 Django 决定哪个视图处理请求之前调用。"}),"\n",(0,r.jsx)(n.li,{children:"process_view(self, request, view_func, view_args, view_kwargs): 在 Django 调用视图函数之前调用。"}),"\n",(0,r.jsx)(n.li,{children:"process_response(self, request, response): 在视图函数处理完请求后，返回响应之前调用。"}),"\n",(0,r.jsx)(n.li,{children:"process_exception(self, request, exception): 如果在视图函数中抛出了异常，这个方法会被调用。"}),"\n"]}),"\n",(0,r.jsxs)(n.h2,{id:"drf-架构",children:["DRF 架构",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#drf-架构",children:"#"})]}),"\n",(0,r.jsxs)(n.h3,{id:"简介",children:["简介",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#简介",children:"#"})]}),"\n",(0,r.jsx)(n.p,{children:"DRF，即 Django REST framework，是一个强大且灵活的工具集，用于构建 Web API 在 Django 项目中。它提供了序列化器、视图、路由器等工具，让开发者能够快速地开发出符合 RESTful 规范的 API。以下是针对新手小白的 DRF 介绍，包括一个简单的代码实例。"}),"\n",(0,r.jsx)(n.p,{children:"DRF 的主要优点："}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"符合 RESTful 设计原则：它鼓励使用无状态的、可缓存的通信协议。"}),"\n",(0,r.jsx)(n.li,{children:"高度可扩展：你可以利用它的插件系统来扩展其功能。"}),"\n",(0,r.jsx)(n.li,{children:"强大的文档：自动生成 API 文档，便于开发和测试。"}),"\n"]}),"\n",(0,r.jsxs)(n.h3,{id:"42-实战例子",children:["4.2 实战例子",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#42-实战例子",children:"#"})]}),"\n",(0,r.jsxs)(n.h4,{id:"421-安装",children:["4.2.1 安装",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#421-安装",children:"#"})]}),"\n",(0,r.jsx)(n.p,{children:"首先，确保你已经有一个 Django 项目。以下是安装 DRF 的步骤："}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:"/Django%E8%BF%9B%E9%98%B6%E6%8A%80%E5%B7%A7_assets/Fri_Oct_18_2024_182443.png",alt:""})}),"\n",(0,r.jsx)(n.p,{children:"然后在你的settings.py中添加以下内容来注册 DRF："}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:"/Django%E8%BF%9B%E9%98%B6%E6%8A%80%E5%B7%A7_assets/Fri_Oct_18_2024_182450.png",alt:""})}),"\n",(0,r.jsx)(n.p,{children:"下面我们将创建一个简单的 API 来管理博客文章。"}),"\n",(0,r.jsxs)(n.h4,{id:"422-定义模型",children:["4.2.2 定义模型",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#422-定义模型",children:"#"})]}),"\n",(0,r.jsx)(n.p,{children:"首先，在models.py中定义一个简单的模型："}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:"/Django%E8%BF%9B%E9%98%B6%E6%8A%80%E5%B7%A7_assets/Fri_Oct_18_2024_182004.png",alt:""})}),"\n",(0,r.jsxs)(n.h4,{id:"423-创建序列化器",children:["4.2.3 创建序列化器",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#423-创建序列化器",children:"#"})]}),"\n",(0,r.jsx)(n.p,{children:"在serializers.py中创建一个序列化器："}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:"/Django%E8%BF%9B%E9%98%B6%E6%8A%80%E5%B7%A7_assets/Fri_Oct_18_2024_182504.png",alt:""})}),"\n",(0,r.jsxs)(n.h4,{id:"424-创建视图",children:["4.2.4 创建视图",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#424-创建视图",children:"#"})]}),"\n",(0,r.jsx)(n.p,{children:"在views.py中创建视图，使用 DRF 的APIView："}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:"/Django%E8%BF%9B%E9%98%B6%E6%8A%80%E5%B7%A7_assets/Fri_Oct_18_2024_182526.png",alt:""})}),"\n",(0,r.jsxs)(n.h4,{id:"425-配置-urls",children:["4.2.5 配置 URLs",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#425-配置-urls",children:"#"})]}),"\n",(0,r.jsx)(n.p,{children:"在urls.py中配置 URL："}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:"/Django%E8%BF%9B%E9%98%B6%E6%8A%80%E5%B7%A7_assets/Fri_Oct_18_2024_182532.png",alt:""})}),"\n",(0,r.jsxs)(n.h4,{id:"426-运行服务器",children:["4.2.6 运行服务器",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#426-运行服务器",children:"#"})]}),"\n",(0,r.jsx)(n.p,{children:"确保你的数据库表已经被创建："}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:"/Django%E8%BF%9B%E9%98%B6%E6%8A%80%E5%B7%A7_assets/Fri_Oct_18_2024_182538.png",alt:""})}),"\n",(0,r.jsx)(n.p,{children:"然后运行开发服务器："}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:"/Django%E8%BF%9B%E9%98%B6%E6%8A%80%E5%B7%A7_assets/Fri_Oct_18_2024_182546.png",alt:""})}),"\n",(0,r.jsxs)(n.h4,{id:"427-测试-api",children:["4.2.7 测试 API",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#427-测试-api",children:"#"})]}),"\n",(0,r.jsx)(n.p,{children:"现在，你可以使用浏览器或者 Postman 等工具来测试你的 API。"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["获取文章列表：访问\xa0",(0,r.jsx)(n.a,{href:"http://127.0.0.1:8000/articles/",target:"_blank",rel:"noopener noreferrer",children:(0,r.jsx)(n.a,{href:"http://127.0.0.1:8000/articles/",target:"_blank",rel:"noopener noreferrer",children:"http://127.0.0.1:8000/articles/"})})]}),"\n",(0,r.jsxs)(n.li,{children:["创建新文章：发送 POST 请求到\xa0",(0,r.jsx)(n.a,{href:"http://127.0.0.1:8000/articles/%EF%BC%8C%E5%B9%B6%E5%9C%A8%E8%AF%B7%E6%B1%82%E4%BD%93%E4%B8%AD%E5%8C%85%E5%90%ABtitle",target:"_blank",rel:"noopener noreferrer",children:"http://127.0.0.1:8000/articles/，并在请求体中包含title"}),",\xa0author, 和\xa0body字段。"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"以下是使用curl的一个例子："}),"\n",(0,r.jsxs)(n.h1,{id:"获取文章列表",children:["获取文章列表",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#获取文章列表",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:["curl ",(0,r.jsx)(n.a,{href:"http://127.0.0.1:8000/articles/",target:"_blank",rel:"noopener noreferrer",children:"http://127.0.0.1:8000/articles/"})]}),"\n",(0,r.jsxs)(n.h1,{id:"创建新文章",children:["创建新文章",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#创建新文章",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:['curl -X POST -H "Content-Type: application/json" -d \'{"title": "My Title", "author": "Me", "body": "This is my article body."}\' ',(0,r.jsx)(n.a,{href:"http://127.0.0.1:8000/articles/",target:"_blank",rel:"noopener noreferrer",children:"http://127.0.0.1:8000/articles/"})]})]})}function d(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,i.ah)(),e.components);return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}let a=d;d.__RSPRESS_PAGE_META={},d.__RSPRESS_PAGE_META["program%2F%E5%89%8D%E5%90%8E%E7%AB%AF%2FDjango%E8%BF%9B%E9%98%B6%E6%8A%80%E5%B7%A7.md"]={toc:[{text:"用户认证和权限",id:"用户认证和权限",depth:2},{text:"用户认证",id:"用户认证",depth:3},{text:"权限管理",id:"权限管理",depth:3},{text:"1.2.1在django中实现角色级别的权限控制",id:"121在django中实现角色级别的权限控制",depth:4},{text:"1.3.1 在django中实现对象级别的权限控制",id:"131-在django中实现对象级别的权限控制",depth:4},{text:"RestFul API",id:"restful-api",depth:2},{text:"RESTful API 的核心概念",id:"restful-api-的核心概念",depth:3},{text:"2.1.1 资源（Resources）",id:"211-资源resources",depth:4},{text:"2.1.2 统一接口（Uniform Interface）",id:"212-统一接口uniform-interface",depth:4},{text:"2.1.3 无状态（Stateless）",id:"213-无状态stateless",depth:4},{text:"2.1.4 可缓存（Cacheable）",id:"214-可缓存cacheable",depth:4},{text:"2.1.5 分层系统（Layered System）",id:"215-分层系统layered-system",depth:4},{text:"设计原则",id:"设计原则",depth:3},{text:"2.2.1 使用标准 HTTP 方法",id:"221-使用标准-http-方法",depth:4},{text:"2.2.2 资源命名",id:"222-资源命名",depth:4},{text:"2.2.3 分层系统",id:"223-分层系统",depth:4},{text:"2.2.4 按需加载代码",id:"224-按需加载代码",depth:4},{text:"2.2.5 HATEOAS",id:"225-hateoas",depth:4},{text:"常见中间件",id:"常见中间件",depth:2},{text:"什么是中间件",id:"什么是中间件",depth:3},{text:"中间件的关键点",id:"中间件的关键点",depth:3},{text:"3.2.1 作用时机",id:"321-作用时机",depth:4},{text:"3.2.2 功能",id:"322-功能",depth:4},{text:"3.2.3 工作原理",id:"323-工作原理",depth:4},{text:"3.2.4 方法",id:"324-方法",depth:4},{text:"DRF 架构",id:"drf-架构",depth:2},{text:"简介",id:"简介",depth:3},{text:"4.2 实战例子",id:"42-实战例子",depth:3},{text:"4.2.1 安装",id:"421-安装",depth:4},{text:"4.2.2 定义模型",id:"422-定义模型",depth:4},{text:"4.2.3 创建序列化器",id:"423-创建序列化器",depth:4},{text:"4.2.4 创建视图",id:"424-创建视图",depth:4},{text:"4.2.5 配置 URLs",id:"425-配置-urls",depth:4},{text:"4.2.6 运行服务器",id:"426-运行服务器",depth:4},{text:"4.2.7 测试 API",id:"427-测试-api",depth:4}],title:"创建新文章",headingTitle:"创建新文章",frontmatter:{Author:"马涛涛"}}}}]);