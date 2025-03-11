"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["6075"],{325:function(e,n,h){h.r(n),h.d(n,{default:()=>a});var r=h(2676),d=h(453);function s(e){let n=Object.assign({h1:"h1",a:"a",p:"p",img:"img",h2:"h2",h3:"h3",strong:"strong",hr:"hr"},(0,d.ah)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.h1,{id:"大型网站技术架构",children:["大型网站技术架构",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#大型网站技术架构",children:"#"})]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:"/%E5%A4%A7%E5%9E%8B%E7%BD%91%E7%AB%99%E6%8A%80%E6%9C%AF%E6%9E%B6%E6%9E%84_assets/t6_773202.jpg",alt:""})}),"\n",(0,r.jsx)(n.p,{children:"这本书是阿里资深架构师（李智慧）写的，人如其名，这满脑子哐哐都是智慧，实战型大佬，全方位的解读了构建大型网站面临的各种架构问题及应该怎样去做；内容绝对是教材级别的；"}),"\n",(0,r.jsxs)(n.h2,{id:"概述",children:["概述",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#概述",children:"#"})]}),"\n",(0,r.jsx)(n.p,{children:"大型网站软件系统的特点：高并发，大流量、高可用、海量数据、用户分布广，网络情况复杂、安全环境恶劣、快速迭代发布；"}),"\n",(0,r.jsxs)(n.h3,{id:"大型网站架构演化发展历程",children:["大型网站架构演化发展历程",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#大型网站架构演化发展历程",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"一台服务器"}),"：大型网站都是从小型网站慢慢发展过来的，小网站最开始没啥人访问，一台服务器就够了；"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"应用服务和数据服务分离"}),"：随着用户增多，性能越来越差，存储空间不足，将应用和数据分离：应用服务器、文件服务器、数据库服务器；"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"使用缓存改善网站性能"}),"：实际业务中，80% 的业务方位集中在 20% 的数据上，将这 20% 的数据缓存在内存（缓存服务器）中，改善性能；"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"应用服务器集群改善并发处理能力"}),"：随着访问量增加，换更强大的服务器是不行的，再厉害的服务器都顶不住持续增长的业务需求，而应该增加服务器分担访问和存储压力；"]}),"\n",(0,r.jsx)(n.p,{children:"增加了很多服务器之后就成了集群，通过负载均衡调度服务器，将来自用户浏览器的访问请求分发到应用服务器集群；"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"数据库读写分离"}),"：使用缓存服务器后，虽然大部分数据读可以不走数据库，但是小部分读和全量写数据库的操作也会让数据负载压力过大，造成性能瓶颈；"]}),"\n",(0,r.jsx)(n.p,{children:"可以将一台数据库服务器的数据更新同步到另一台服务器（主从关系），做数据库的读写分离：写数据走主数据库，主数据库同步到从数据库，读数据走从数据库；"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"反向代理和CDN网络加速"}),"：基本原理都是缓存，CDN部署在网络提供商的机房，用户请求时可以从距离最近的一个机房获取；反向代理服务器也缓存了数据，用户访问方向代理服务器，由反向代理服务器中缓存返回用户；"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"业务拆分（模块化）"}),"、",(0,r.jsx)(n.strong,{children:"分布式服务"})]}),"\n",(0,r.jsxs)(n.h2,{id:"大型网站核心架构要素",children:["大型网站核心架构要素",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#大型网站核心架构要素",children:"#"})]}),"\n",(0,r.jsx)(n.p,{children:"5个架构要素：性能、可用性、伸缩行、扩展性、安全性"}),"\n",(0,r.jsxs)(n.h3,{id:"性能",children:["性能",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#性能",children:"#"})]}),"\n",(0,r.jsx)(n.p,{children:"在浏览器端，可以通过浏览器缓存、使用页面压缩、合理布局页面、减少Cookie传输等手段改善性；"}),"\n",(0,r.jsx)(n.p,{children:"在应用服务器端，可以使用服务器本地缓存和分布式缓存，通过缓存在内存中的热点数据处理用户请求，加快请求处理过程，减轻数据库负载压力；"}),"\n",(0,r.jsx)(n.p,{children:"在网站有很多用户高并发请求的情况下，可以将多台应用服务器组成一个集群共同对外服务，提高整体处理能力，改善性能；"}),"\n",(0,r.jsx)(n.p,{children:"在代码层面，也可以通过使用多线程、改善内存管理等手段优化性能；"}),"\n",(0,r.jsx)(n.p,{children:"在数据库服务器端，索引、缓存、SQL优化等性能优化手段；"}),"\n",(0,r.jsxs)(n.h3,{id:"可用性",children:["可用性",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#可用性",children:"#"})]}),"\n",(0,r.jsx)(n.p,{children:"7\xd724可用"}),"\n",(0,r.jsx)(n.p,{children:"网站高可用的主要手段是冗余，应用部署在多台服务器上同时提供访问，数据存储在多台服务器上互相备份，任何一台服务器宕机都不会影响应用的整体可用，也不会导致数据丢失。"}),"\n",(0,r.jsxs)(n.h3,{id:"伸缩性",children:["伸缩性",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#伸缩性",children:"#"})]}),"\n",(0,r.jsx)(n.p,{children:"伸缩性是指通过不断向集群中加入服务器的手段来缓解不断上升的用户并发访问压力和不断增长的数据存储需求。"}),"\n",(0,r.jsx)(n.p,{children:"主要标准就是是否可以用多台服务器构建集群，是否容易向集群中添加新的服务器。加入新的服务器后是否可以提供和原来的服务器无差别的服务。集群中可容纳的总的服务器数量是否有限制。"}),"\n",(0,r.jsxs)(n.h3,{id:"扩展性",children:["扩展性",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#扩展性",children:"#"})]}),"\n",(0,r.jsx)(n.p,{children:"业务功能要能方便的扩展新功能，而且对原来的功能不造成影响，需要做好模块化划分；"}),"\n",(0,r.jsxs)(n.h3,{id:"安全性",children:["安全性",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#安全性",children:"#"})]}),"\n",(0,r.jsx)(n.p,{children:"XSS攻击、SQL注入等"}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"书中的核心内容都是围绕这5个有要素来展开描述的"})}),"\n",(0,r.jsxs)(n.h2,{id:"架构",children:["架构",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#架构",children:"#"})]}),"\n",(0,r.jsxs)(n.h3,{id:"高性能架构",children:["高性能架构",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#高性能架构",children:"#"})]}),"\n",(0,r.jsx)(n.p,{children:"前端性能优化、应用服务器性能优化、存储性能优化"}),"\n",(0,r.jsxs)(n.h3,{id:"高可用架构",children:["高可用架构",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#高可用架构",children:"#"})]}),"\n",(0,r.jsx)(n.p,{children:"高可用的架构、高可用的应用、高可用的服务、高可用的数据、高可用的软件质量保证、运行监测"}),"\n",(0,r.jsx)(n.p,{children:"事物总是先求生存，然后求发展。保证网站可用，万无一失，任重而道远。"}),"\n",(0,r.jsxs)(n.h3,{id:"伸缩性架构",children:["伸缩性架构",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#伸缩性架构",children:"#"})]}),"\n",(0,r.jsx)(n.p,{children:"应用服务器集群伸缩性设计、分布式缓存集群的伸缩性设计、数据存储服务器集群的伸缩性设计。"}),"\n",(0,r.jsx)(n.p,{children:"高手定律：这个世界只有遇不到的问题，没有解决不了的问题，高手之所以成为高手，是因为他们遇到了常人很难遇到的问题，并解决了；"}),"\n",(0,r.jsx)(n.p,{children:"救世主定律：遇到问题，分析问题，最后总能解决问题。"}),"\n",(0,r.jsxs)(n.h3,{id:"可扩展性架构",children:["可扩展性架构",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#可扩展性架构",children:"#"})]}),"\n",(0,r.jsx)(n.p,{children:"设计网站可扩展架构的核心思想是模块化，并在此基础之上，降低模块间的耦合性，提高模块的复用性。"}),"\n",(0,r.jsx)(n.p,{children:"模块分布式部署以后具体聚合方式主要有分布式消息队列和分布式服务；"}),"\n",(0,r.jsx)(n.p,{children:"马克思的劳动价值理论告诉我们，产品的内在价值在于劳动的时间，劳动的时间不在于个体付出的劳动时间，而在于行业一般劳动时间，资本家只会为行业一般劳动时间买单，如果你的效率低于行业一般劳动时间，对不起，请你自愿加班。反之，如果你有一个更具有扩展性的网站架构，可以更快速地开发新产品，也许你也享受不了只上半天班的福利，但是至少在这个全行业加班的互联网领域，你能够按时下班，陪陪家人，看看星星。"}),"\n",(0,r.jsxs)(n.h3,{id:"安全架构",children:["安全架构",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#安全架构",children:"#"})]}),"\n",(0,r.jsx)(n.p,{children:"常见的攻击是 XSS 攻击、SQL 注入攻击、CSRF、Session 劫持"}),"\n",(0,r.jsx)(n.p,{children:"做好信息加密：单向三列加密、对称加密、非对称加密；"}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsxs)(n.h2,{id:"软实力",children:["软实力",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#软实力",children:"#"})]}),"\n",(0,r.jsx)(n.p,{children:"作者在后面几个章节还讲了很多职场攻略，没有多余的废话，都非常实用。"})]})}function i(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,d.ah)(),e.components);return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(s,{...e})}):s(e)}let a=i;i.__RSPRESS_PAGE_META={},i.__RSPRESS_PAGE_META["%E5%88%86%E4%BA%AB%E6%9C%89%E8%B6%A3%2F%E8%AF%BB%E4%B9%A6%E7%AC%94%E8%AE%B0%2F%E5%A4%A7%E5%9E%8B%E7%BD%91%E7%AB%99%E6%8A%80%E6%9C%AF%E6%9E%B6%E6%9E%84.md"]={toc:[{text:"概述",id:"概述",depth:2},{text:"大型网站架构演化发展历程",id:"大型网站架构演化发展历程",depth:3},{text:"大型网站核心架构要素",id:"大型网站核心架构要素",depth:2},{text:"性能",id:"性能",depth:3},{text:"可用性",id:"可用性",depth:3},{text:"伸缩性",id:"伸缩性",depth:3},{text:"扩展性",id:"扩展性",depth:3},{text:"安全性",id:"安全性",depth:3},{text:"架构",id:"架构",depth:2},{text:"高性能架构",id:"高性能架构",depth:3},{text:"高可用架构",id:"高可用架构",depth:3},{text:"伸缩性架构",id:"伸缩性架构",depth:3},{text:"可扩展性架构",id:"可扩展性架构",depth:3},{text:"安全架构",id:"安全架构",depth:3},{text:"软实力",id:"软实力",depth:2}],title:"大型网站技术架构",headingTitle:"大型网站技术架构",frontmatter:{Author:"mikigo"}}}}]);