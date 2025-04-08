"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["3253"],{7193:function(n,e,r){r.r(e),r.d(e,{default:()=>c});var s=r(2676),i=r(453);function l(n){let e=Object.assign({h1:"h1",a:"a",h2:"h2",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",p:"p",ul:"ul",li:"li",h3:"h3",strong:"strong",h4:"h4",img:"img"},(0,i.ah)(),n.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(e.h1,{id:"获取影院播放视频fps方法",children:["获取影院播放视频FPS方法",(0,s.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#获取影院播放视频fps方法",children:"#"})]}),"\n",(0,s.jsxs)(e.h2,{id:"相关术语",children:["相关术语",(0,s.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#相关术语",children:"#"})]}),"\n",(0,s.jsxs)(e.table,{children:["\n",(0,s.jsxs)(e.thead,{children:["\n",(0,s.jsxs)(e.tr,{children:["\n",(0,s.jsx)(e.th,{align:"center",children:"缩写"}),"\n",(0,s.jsx)(e.th,{align:"center",children:"全称"}),"\n",(0,s.jsx)(e.th,{align:"center",children:"描述"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(e.tbody,{children:["\n",(0,s.jsxs)(e.tr,{children:["\n",(0,s.jsx)(e.td,{align:"center",children:"FPS"}),"\n",(0,s.jsx)(e.td,{align:"center",children:"Frames Per Second"}),"\n",(0,s.jsx)(e.td,{align:"center",children:"每秒传输帧数"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(e.h2,{id:"问题",children:["问题",(0,s.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#问题",children:"#"})]}),"\n",(0,s.jsx)(e.p,{children:"​		目前基于Uos影院应用测试中，有一个功能点一直没覆盖到：验证影院播放视频呈现的FPS（帧率）。"}),"\n",(0,s.jsx)(e.p,{children:"​		比如影院，在播放一个50帧率的视频资源，通过显示器呈现给用户的观感是否有达到50FPS，这是目前需要解决的问题：找到对应的测试方法。"}),"\n",(0,s.jsxs)(e.h2,{id:"现状",children:["现状",(0,s.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#现状",children:"#"})]}),"\n",(0,s.jsx)(e.p,{children:"​		针对于以上描述问题，方案分为两个方向："}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"通过外部获取：例如FPS监控软件，直接使用FPS检查工具针对播放中视频检测FPS"}),"\n",(0,s.jsx)(e.li,{children:"通过内部获取：了解影院播放功能的设计逻辑，手动计算获取，通过播放视频时，抽取视频几段位置，分别获取每帧播放完毕时的耗时，计算出平均帧率，经过验证此方法可满足当前需求。"}),"\n",(0,s.jsx)(e.li,{children:"通过计算获取：获取单位时间内帧数图片与耗时，计算出当前播放帧率"}),"\n"]}),"\n",(0,s.jsx)(e.p,{children:"​		经调研基于linux做FPS检测的工具很少，目前只找到2款工具：Unigine Heaven、GLgears，但这2款工具在FPS测试方便均是针对显卡，并不满足我们的需求（应用播放视频呈现的帧率），所以pass掉。"}),"\n",(0,s.jsx)(e.p,{children:"​		暂定使用内部获取方案与计算获取的方案，后续会进行数据比对与测试流程比对，确认最终方案。"}),"\n",(0,s.jsxs)(e.h2,{id:"技术方案",children:["技术方案",(0,s.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#技术方案",children:"#"})]}),"\n",(0,s.jsx)(e.p,{children:"​		要通过内部获取的方案，首先需要确认目前测试部硬件环境，然后对影院FPS相关逻辑进行了解分析，最后找到对应的测试切入点。"}),"\n",(0,s.jsxs)(e.h3,{id:"测试范围",children:["测试范围",(0,s.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#测试范围",children:"#"})]}),"\n",(0,s.jsxs)(e.p,{children:["​		目前测试部搭配的显示器刷新率统一为60Hz（ 每秒钟刷新60次 ），通过字面上的意思可以得出结论：若播放80帧的视频，每一秒钟切换80张图，但是显示器每一秒才刷新60次，那么视频每一秒包含的80帧中，必然有部分帧是显示不出来的，这就是所谓的",(0,s.jsx)(e.strong,{children:"丢帧"}),"。所以在测试资源上目前支持测试",(0,s.jsx)(e.strong,{children:"60FPS"}),"以下的视频资源。"]}),"\n",(0,s.jsxs)(e.p,{children:["​		除了显示器以外显卡对FPS也有一定影响，比如目前我们测试机配置的显卡，针对50帧以上的4K高分辨率视频存在解码性能问题，也会影响测试结果。除开性能以外显卡有一个配置项",(0,s.jsx)(e.strong,{children:"垂直同步"}),"，当打开后显卡输出的FPS与显示器刷新率会一致，这个选项对用户场景来说基本是默认开启的，所以我们不考虑关闭此配置项的情况。"]}),"\n",(0,s.jsxs)(e.p,{children:["​		这里说一下视频播放的原理，视频播放理论由连续不断的图片切换呈现出的效果，例如在测试中所说的50帧率视频，其实就是在每一秒的时间内连续切换了50张不同的图片，每一张图片为1帧，所以FPS表现为：50帧/秒。人的肉眼在查看超过30帧的画面，在视觉感知上就较为流畅，所以视频资源最少需要达到",(0,s.jsx)(e.strong,{children:"30FPS"}),"。"]}),"\n",(0,s.jsx)(e.p,{children:"​		结合以上内容可确定目前可测试的视频资源范围为："}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"普通视频：==30FPS-60FPS=="}),"\n",(0,s.jsx)(e.li,{children:"4K高清视频：==30FPS-50FPS=="}),"\n"]}),"\n",(0,s.jsxs)(e.h3,{id:"原理确认",children:["原理确认",(0,s.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#原理确认",children:"#"})]}),"\n",(0,s.jsxs)(e.h4,{id:"内部获取方案方案1",children:["内部获取方案（方案1）",(0,s.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#内部获取方案方案1",children:"#"})]}),"\n",(0,s.jsx)(e.p,{children:"​		遍历影院与FPS相关的功能，决定从进度条做为切入点，因为进度条递增1秒理论上就是视频FPS。通过和影院开发（谢鹏飞）沟通后了解了一些技术概念与影院内部设计逻辑，证明该方案是可行的。"}),"\n",(0,s.jsx)(e.p,{children:"​		业界对于音视频同步一般是三种策略："}),"\n",(0,s.jsxs)(e.table,{children:["\n",(0,s.jsxs)(e.thead,{children:["\n",(0,s.jsxs)(e.tr,{children:["\n",(0,s.jsx)(e.th,{align:"center",children:"策略"}),"\n",(0,s.jsx)(e.th,{align:"center",children:"详情"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(e.tbody,{children:["\n",(0,s.jsxs)(e.tr,{children:["\n",(0,s.jsx)(e.td,{align:"center",children:"音频和视频同步到时钟"}),"\n",(0,s.jsx)(e.td,{align:"center",children:"以外部时钟为参考对象，视频和音频均以时钟时间为准"}),"\n"]}),"\n",(0,s.jsxs)(e.tr,{children:["\n",(0,s.jsx)(e.td,{align:"center",children:"音频去同步视频的时间"}),"\n",(0,s.jsx)(e.td,{align:"center",children:"以视频时间为基准，判断音频快了还是慢了，从而调整音频的播放速度，其实是一个动态的追赶与等待的过程。"}),"\n"]}),"\n",(0,s.jsxs)(e.tr,{children:["\n",(0,s.jsx)(e.td,{align:"center",children:"视频去同步音频的时间"}),"\n",(0,s.jsx)(e.td,{align:"center",children:"这个方案的原理刚好与方案2的原理相反。就是以音频时间为基准，判断视频是快了还是慢了，从而调整视频的播放速度。"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(e.p,{children:"​		举个例子：60FPS的视频，实际播放出来只有30FPS，那不同的同步策略会有什么不同的展示？下面能很直接看出差异："}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"正常情况下60FPS视频，实际播放达到60FPS，耗时1秒播放完60帧"}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"音频去同步视频时间：耗时2秒播放完60帧"}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"视频去同步音频时间：耗时1秒播放完30帧，其中30帧被丢掉"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(e.p,{children:["​		咱们",(0,s.jsx)(e.strong,{children:"影院采取的同步策略为视频去同步音频时间"}),"，所以若播放视频FPS未达到视频资源FPS，那么呈现出来的效果是：==播放过程中会丢帧==。"]}),"\n",(0,s.jsx)(e.p,{children:"​		那么进度条递增1秒则代表完成了1秒的音频播放，同时完成了1秒时间内帧的播放，播放了多少帧则代表当前播放FPS，所以在后续的测试中进度条的变化时主要的参照物。"}),"\n",(0,s.jsxs)(e.h4,{id:"计算获取方案方案2",children:["计算获取方案（方案2）",(0,s.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#计算获取方案方案2",children:"#"})]}),"\n",(0,s.jsx)(e.p,{children:"​		该方案的重点在于==时间==与==帧图像==，只要能获取影院播放视频每秒消耗的时间和帧图像，即可计算出当前位置的FPS。比如30FPS的视频在播放过程中，任意截取一秒内播放的帧图像数量，并去掉重复的帧图像，最后剩余图片数量预期应该是30张，那30即为当前播放帧率。"}),"\n",(0,s.jsx)(e.p,{children:"​		该方案的难点在于怎么定位一秒的播放时长来截取该范围帧数图像。"}),"\n",(0,s.jsxs)(e.h2,{id:"关键技术",children:["关键技术",(0,s.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#关键技术",children:"#"})]}),"\n",(0,s.jsx)(e.p,{children:"​		这两种方案中都会采用到的关键测试技术是视频分帧，它能做到把每一秒视频分解为任意数量的帧图像，通过对帧图像的分析与筛选，达到我们测试的目的。"}),"\n",(0,s.jsxs)(e.h3,{id:"视频资源",children:["视频资源",(0,s.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#视频资源",children:"#"})]}),"\n",(0,s.jsx)(e.p,{children:"​		这两种方案都会受到视频资源的影响，比如某些视频资源本身在某一段时间画面就是静置的，则无法使用该方法进行测试，因为视频本身就有重复帧。"}),"\n",(0,s.jsx)(e.p,{children:"​		我们无法保证每个视频资源都没有重复帧，那么我们可以自己制作符合要求的视频资源，这里可使用显卡FPS测试工具glxgears，运行glxgears会产生3个不同转动的齿轮，因为开启了垂直同步所以齿轮动画稳定在60FPS，通过视频录制软件录制齿轮动画为不同FPS资源：30FPS、49FPS，这些资源作为测试数据完美解决视频本身出现重复帧的情况。"}),"\n",(0,s.jsx)(e.p,{children:"​		为了满足“计算获取帧率方案”，在录制视频时安装了一个毫秒精度的计时器==stopwatch==，录制过程中计时器会和齿轮动画同时运行，后期则通过计时器数值来定位“ 每秒 ”的范围。同时也可以印证“内部获取帧数方案”的可行性。"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"glxgears运行动画及实时帧率"}),"\n"]}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.img,{src:"/%E8%8E%B7%E5%8F%96%E5%BD%B1%E9%99%A2%E6%92%AD%E6%94%BE%E8%A7%86%E9%A2%91FPS%E6%96%B9%E6%B3%95%E8%B0%83%E7%A0%94_assets/FPS%E5%BD%95%E5%88%B6.png",alt:"FPS录制"})}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"已完成录制视频资源："}),"\n"]}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.img,{src:"/%E8%8E%B7%E5%8F%96%E5%BD%B1%E9%99%A2%E6%92%AD%E6%94%BE%E8%A7%86%E9%A2%91FPS%E6%96%B9%E6%B3%95%E8%B0%83%E7%A0%94_assets/%E8%A7%86%E9%A2%91%E8%B5%84%E6%BA%90.png",alt:"视频资源"})}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:["录制的视频截图\n",(0,s.jsx)(e.img,{src:"/%E8%8E%B7%E5%8F%96%E5%BD%B1%E9%99%A2%E6%92%AD%E6%94%BE%E8%A7%86%E9%A2%91FPS%E6%96%B9%E6%B3%95%E8%B0%83%E7%A0%94_assets/%E5%BD%95%E5%88%B6%E8%A7%86%E9%A2%91.png",alt:"录制视频"})]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(e.h3,{id:"视频分帧",children:["视频分帧",(0,s.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#视频分帧",children:"#"})]}),"\n",(0,s.jsx)(e.p,{children:"​		视频分帧的原理是把一个录制好的视频按照一定的规则分解成图片，比如一个30FPS的视频："}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"每秒分出10帧，每秒会得到10帧不同图像"}),"\n",(0,s.jsx)(e.li,{children:"每秒分出30帧，每秒会得到30帧不同图像"}),"\n",(0,s.jsx)(e.li,{children:"每秒分出60帧，每秒会得到30帧不同图像和30帧重复图像"}),"\n"]}),"\n",(0,s.jsxs)(e.h3,{id:"实现支撑",children:["实现支撑",(0,s.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#实现支撑",children:"#"})]}),"\n",(0,s.jsx)(e.p,{children:"​		综上所述要进行测试前，需要准备以下内容："}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"测试视频资源：目前已录制了30FPS、49FPS视频资源（录制工具无法录制出60FPS视频，暂时忽略该FPS资源），已上传至seafile【成都-测试团队 / 成都-测试团队 / 测试资源 / 视频资源 / 定制FPS】"}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"视频录制/图片查看工具：可通过工具‘PerfTools’辅助，首页【编号1】可自动安装视频录制、图片查看工具**（如下图）**"}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"视频分帧：可通过工具‘PerfTools_3.3’辅助，3.3版本新增了自定义分帧图片数量功能，首页【编号2】。"}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"影院更新至测试对应版本"}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"工具截图："}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.img,{src:"/%E8%8E%B7%E5%8F%96%E5%BD%B1%E9%99%A2%E6%92%AD%E6%94%BE%E8%A7%86%E9%A2%91FPS%E6%96%B9%E6%B3%95%E8%B0%83%E7%A0%94_assets/PerfTools.png",alt:"PerfTools"})}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"分帧流程截图："}),"\n"]}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.img,{src:"/%E8%8E%B7%E5%8F%96%E5%BD%B1%E9%99%A2%E6%92%AD%E6%94%BE%E8%A7%86%E9%A2%91FPS%E6%96%B9%E6%B3%95%E8%B0%83%E7%A0%94_assets/%E5%88%86%E5%B8%A7%E8%BF%87%E7%A8%8B.png",alt:"分帧过程"})}),"\n",(0,s.jsxs)(e.h2,{id:"实验验证",children:["实验验证",(0,s.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#实验验证",children:"#"})]}),"\n",(0,s.jsxs)(e.h4,{id:"验证测试资源",children:["验证测试资源",(0,s.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#验证测试资源",children:"#"})]}),"\n",(0,s.jsx)(e.p,{children:"​		进行实验验证前，对测试资源进行一轮验证（后续测试直接使用测试资源即可），确保测试视频资源FPS是达到标准的，因为后续无需其他测试人员再操作，该部分只展示原理与数据。"}),"\n",(0,s.jsxs)(e.p,{children:["​		",(0,s.jsx)(e.strong,{children:"重点说明："}),"==因为视频资源是通过录制的方式生成的，所以录制本身也可能出现丢帧的情况，以下经过验证过的时间均为正确位置，所以在之后的测试中，截取的三组数据均必须为验证后的时间位置=="]}),"\n",(0,s.jsxs)(e.p,{children:["​		",(0,s.jsx)(e.strong,{children:"操作步骤简介"})]}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["通过测试工具PerfTools对30/49视频进行分帧，分帧图像数量与视频一致即可","\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"这里有做过分帧图像数量验证：30FPS视频分帧图像数量分别为30和60，得出的结论一致，所以这里分帧图像数量设置成视频FPS即可"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["通过计时器截取时间范围，选取三个时间区域，每个时间区域范围为“1s”，这里选择计时器做参考有2个原因：","\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"影院外计时器不受影院内部逻辑影响，对验证结果更有说服力"}),"\n",(0,s.jsx)(e.li,{children:"计时器精度为毫秒级，更能体现细节"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(e.li,{children:"把多组时间区域的图像帧分别复制到对应文件目录"}),"\n",(0,s.jsx)(e.li,{children:"依次查看每个目录，去掉重复帧（参考图像与计时器时间，若时间未变化则为重复帧）"}),"\n",(0,s.jsx)(e.li,{children:"统计数据并分析，数据如下：\n| 测试视频资源 |       时间区域(计时器时间)      |进度条对应时间 | 去重帧数量   |\n| :--: | :---------------: | :----------: |:----------: |\n| 30FPS视频  | 00:00:03.051 —— 00:00:04.053 |3s-4s | 30 |\n| 30FPS视频  | 00:00:08.021 —— 00:00:09.021 |8s-9s | 30 |\n| 30FPS视频  | 00:00:11.027 —— 00:00:12.026 | 11s - 12s |30 |\n| 30FPS视频  | 00:00:12.026 —— 00:00:13.012 | 12s - 13s |30 |\n| 30FPS视频  | 00:00:22.021 —— 00:00:23.018 |22s - 23s | 30 |\n| 49FPS视频  | 00:00:05.018 —— 00:00:06.025 | 05s - 06s |49 |\n| 49FPS视频  | 00:00:08.003 —— 00:00:09.000 | 08s - 09s |49 |\n| 49FPS视频  | 00:00:12.002 —— 00:00:13.001 | 12s - 13s |49 |\n| 49FPS视频  | 00:00:14.020 —— 00:00:15.019 |14s - 15s | 49 |\n| 49FPS视频  | 00:00:20.019 —— 00:00:21.019 |20s - 21s | 49 |"}),"\n"]}),"\n",(0,s.jsx)(e.p,{children:"​		通过以上数据验证，可看出得出的帧数量与视频测试资源FPS一致，证明以上原理可靠，在==后续的测试中，不管是【内部获取FPS方案】还是【计算获取FPS方案】使用以上时间区域即可，为了可以通用，取得时间区域都是整点==。"}),"\n",(0,s.jsxs)(e.h4,{id:"获取监控视频",children:["获取监控视频",(0,s.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#获取监控视频",children:"#"})]}),"\n",(0,s.jsx)(e.p,{children:"​		要获取影院播放视频呈现的FPS，首先需要在影院播放测试视频资源时，对该过程进行视频录制监控，最后再对监控视频进行分帧处理，对分解为帧图像的数据进行进一步的分析。"}),"\n",(0,s.jsx)(e.p,{children:"​		在录制视频时，同样加入了计时器==stopwatch==，用于后期数据分析，下面将录制：影院播放**测试视频资源（30FPS）**的监控视频，步骤如下："}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"关闭所有不相关应用与窗口"}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"运行计时器stopwatch"}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"运行影院并打开视频资源（30FPS），在00:00:00位置暂停"}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"运行PerfTools工具，执行【编号1】启动视频录制软件，设置录制帧率为30，开始录制"}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"影院开始播放视频、计时器开始计时"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"注意"}),"：鼠标移动至底部工具栏（此处为重点，因为鼠标移动至附近，进度条才不会消失，我们需要监控进度条时间变化）"]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"视频资源内"}),"展示时间，后续称为==A时间=="]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"视频资源外"}),"展示时间，后续称为==B时间=="]}),"\n",(0,s.jsx)(e.li,{children:"理论上截取1秒时间区域，通过A时间与B时间进行验证，均需等于1秒"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"影院点击播放键，"}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"视频播放完毕，停止录制"}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.img,{src:"/%E8%8E%B7%E5%8F%96%E5%BD%B1%E9%99%A2%E6%92%AD%E6%94%BE%E8%A7%86%E9%A2%91FPS%E6%96%B9%E6%B3%95%E8%B0%83%E7%A0%94_assets/%E8%AE%BE%E7%BD%AE.png",alt:"设置"})}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(e.h4,{id:"获取影院播放视频帧率",children:["获取影院播放视频帧率",(0,s.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#获取影院播放视频帧率",children:"#"})]}),"\n",(0,s.jsxs)(e.h4,{id:"视频分帧-1",children:["视频分帧",(0,s.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#视频分帧-1",children:"#"})]}),"\n",(0,s.jsxs)(e.p,{children:["​		下面将针对录制好的监控视频（影院播放",(0,s.jsx)(e.strong,{children:"30FPS"}),"测试资源）进行数据分析，得出测试结果，两种方案前期步骤一致，如下："]}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["运行PerfTools工具：","\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"执行首页【编号2】"}),"\n",(0,s.jsxs)(e.li,{children:["执行子菜单【编号1】—— 输入监控名称 —— 输出自定义帧率",(0,s.jsx)(e.strong,{children:"30 ** —— 完成分帧"}),"（见插图）**"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(e.li,{children:"进入目录【监控30FPS_30fps】，说明：监控30FPS为视频名称；30fps为分帧数量，验证一致则代表视频资源分帧正确"}),"\n",(0,s.jsx)(e.li,{children:"右键点击图片选择使用nomacs打开（相比系统自带看图软件，切换图片更流畅）"}),"\n",(0,s.jsxs)(e.li,{children:["根据",(0,s.jsx)(e.strong,{children:"验证测试资源"}),"部分时间区域，选取至少3组区域的数据，根据各自的分析方法得出FPS"]}),"\n",(0,s.jsx)(e.li,{children:"多组数据间求平均值得出最终结果"}),"\n"]}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:"内部获取FPS方案（方案1）分析"})}),"\n",(0,s.jsx)(e.p,{children:"​		以下数据主要基于==进度条对应时间==得出，计时器时间A是作为一个重要参考项，==首帧与尾帧都是根据影院进度条对应时间来定位==，用第一组数据举例："}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"首帧为影院进度条变为00:00:03不在变化那一帧"}),"\n",(0,s.jsx)(e.li,{children:"尾帧为影院进度条变为00:00:04不在变化那一帧"}),"\n"]}),"\n",(0,s.jsx)(e.p,{children:"​		==方案1数据：=="}),"\n",(0,s.jsxs)(e.table,{children:["\n",(0,s.jsxs)(e.thead,{children:["\n",(0,s.jsxs)(e.tr,{children:["\n",(0,s.jsx)(e.th,{align:"center",children:"数据组"}),"\n",(0,s.jsx)(e.th,{align:"center",children:"选取时间A范围"}),"\n",(0,s.jsx)(e.th,{align:"center",children:"时间A实际范围（首帧和帧数图像上时间）"}),"\n",(0,s.jsx)(e.th,{align:"center",children:"进度条对应时间"}),"\n",(0,s.jsx)(e.th,{children:"首帧"}),"\n",(0,s.jsx)(e.th,{children:"尾帧"}),"\n",(0,s.jsx)(e.th,{children:"去重后帧数量"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(e.tbody,{children:["\n",(0,s.jsxs)(e.tr,{children:["\n",(0,s.jsx)(e.td,{align:"center",children:"第一组"}),"\n",(0,s.jsx)(e.td,{align:"center",children:"3s-4s"}),"\n",(0,s.jsx)(e.td,{align:"center",children:"00:00:03.320 —— 00:00:04.287"}),"\n",(0,s.jsx)(e.td,{align:"center",children:"3s-4s"}),"\n",(0,s.jsx)(e.td,{children:"164"}),"\n",(0,s.jsx)(e.td,{children:"200"}),"\n",(0,s.jsx)(e.td,{children:"29"}),"\n"]}),"\n",(0,s.jsxs)(e.tr,{children:["\n",(0,s.jsx)(e.td,{align:"center",children:"第二组"}),"\n",(0,s.jsx)(e.td,{align:"center",children:"12s - 13s"}),"\n",(0,s.jsx)(e.td,{align:"center",children:"00:00:12.326 —— 00:00:13.346"}),"\n",(0,s.jsx)(e.td,{align:"center",children:"12s - 13s"}),"\n",(0,s.jsx)(e.td,{children:"448"}),"\n",(0,s.jsx)(e.td,{children:"478"}),"\n",(0,s.jsx)(e.td,{children:"28"}),"\n"]}),"\n",(0,s.jsxs)(e.tr,{children:["\n",(0,s.jsx)(e.td,{align:"center",children:"第三组"}),"\n",(0,s.jsx)(e.td,{align:"center",children:"22s - 23s"}),"\n",(0,s.jsx)(e.td,{align:"center",children:"00:00:22.353 —— 00:00:23.318"}),"\n",(0,s.jsx)(e.td,{align:"center",children:"22s - 23s"}),"\n",(0,s.jsx)(e.td,{children:"748"}),"\n",(0,s.jsx)(e.td,{children:"777"}),"\n",(0,s.jsx)(e.td,{children:"25"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(e.p,{children:"​		通过以上数据求平均值，得出最终的FPS： （29+28+25）/3 ≈ 27.3帧"}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:"计算获取FPS方案（方案2）分析"})}),"\n",(0,s.jsx)(e.p,{children:"​		该方案数据主要基于==进度条与时间B==得出，首先选定时间A的范围，然后在得出首/尾帧："}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"首帧：以进度条时间范围起始点定位首帧，同时获取帧图像上时间B时间，作为起始点时间"}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"尾帧：以时间B起始点时间为准，起始点时间向后推1000ms，则为尾帧"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(e.p,{children:"​		起始点与结束点范围区间耗时为1000ms，也就是时间B的时间范围永远为1000ms（因为录制精度的问题，可能有微量误差），获取时间B尾帧时顺便记录时间A的时间，后续做参考，具体格式如下："}),"\n",(0,s.jsxs)(e.table,{children:["\n",(0,s.jsxs)(e.thead,{children:["\n",(0,s.jsxs)(e.tr,{children:["\n",(0,s.jsx)(e.th,{align:"center",children:"数据组"}),"\n",(0,s.jsx)(e.th,{align:"center",children:"进度条时间范围"}),"\n",(0,s.jsx)(e.th,{align:"center",children:"时间A实际范围"}),"\n",(0,s.jsx)(e.th,{align:"center",children:"计时器时间B"}),"\n",(0,s.jsx)(e.th,{align:"center",children:"首帧"}),"\n",(0,s.jsx)(e.th,{align:"center",children:"尾帧"}),"\n",(0,s.jsx)(e.th,{align:"center",children:"去重后帧数量"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(e.tbody,{children:["\n",(0,s.jsxs)(e.tr,{children:["\n",(0,s.jsx)(e.td,{align:"center",children:"第一组"}),"\n",(0,s.jsx)(e.td,{align:"center"}),"\n",(0,s.jsx)(e.td,{align:"center"}),"\n",(0,s.jsx)(e.td,{align:"center"}),"\n",(0,s.jsx)(e.td,{align:"center"}),"\n",(0,s.jsx)(e.td,{align:"center"}),"\n",(0,s.jsx)(e.td,{align:"center"}),"\n"]}),"\n",(0,s.jsxs)(e.tr,{children:["\n",(0,s.jsx)(e.td,{align:"center",children:"第二组"}),"\n",(0,s.jsx)(e.td,{align:"center",children:"* 已验证数据表格中进度条时间区间"}),"\n",(0,s.jsx)(e.td,{align:"center",children:"* 通过确认首/尾帧，获取图像上时间A区间"}),"\n",(0,s.jsx)(e.td,{align:"center",children:"* 进度条范围起始点 —— +1000ms"}),"\n",(0,s.jsx)(e.td,{align:"center",children:"* 时间B起始点帧编号"}),"\n",(0,s.jsx)(e.td,{align:"center",children:"* 时间B结束点帧编号"}),"\n",(0,s.jsx)(e.td,{align:"center"}),"\n"]}),"\n",(0,s.jsxs)(e.tr,{children:["\n",(0,s.jsx)(e.td,{align:"center",children:"第三组"}),"\n",(0,s.jsx)(e.td,{align:"center"}),"\n",(0,s.jsx)(e.td,{align:"center"}),"\n",(0,s.jsx)(e.td,{align:"center"}),"\n",(0,s.jsx)(e.td,{align:"center"}),"\n",(0,s.jsx)(e.td,{align:"center"}),"\n",(0,s.jsx)(e.td,{align:"center"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(e.p,{children:["​		为了与",(0,s.jsx)(e.strong,{children:"方案1"}),"相互印证，以下选取时间A范围取值改为与方案1一致，以方案1中",(0,s.jsx)(e.strong,{children:"时间A实际范围"}),"的起始点为时间B的起始点，再后推1000ms获得结束点。总结一下就是，首/尾通过时间B范围确定，但是时间B的起始点是通过",(0,s.jsx)(e.strong,{children:"方案1"}),"的起始点确认的，这样就能保证测试的范围是同一范围，方便做数据对比分析。"]}),"\n",(0,s.jsx)(e.p,{children:"​		==方案2数据：=="}),"\n",(0,s.jsxs)(e.table,{children:["\n",(0,s.jsxs)(e.thead,{children:["\n",(0,s.jsxs)(e.tr,{children:["\n",(0,s.jsx)(e.th,{align:"center",children:"数据组"}),"\n",(0,s.jsx)(e.th,{align:"center",children:"选取时间A范围（预期结果）"}),"\n",(0,s.jsx)(e.th,{align:"center",children:"时间A实际范围"}),"\n",(0,s.jsx)(e.th,{align:"center",children:"计时器时间B"}),"\n",(0,s.jsx)(e.th,{align:"center",children:"首帧"}),"\n",(0,s.jsx)(e.th,{align:"center",children:"尾帧"}),"\n",(0,s.jsx)(e.th,{align:"center",children:"去重后帧数量"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(e.tbody,{children:["\n",(0,s.jsxs)(e.tr,{children:["\n",(0,s.jsx)(e.td,{align:"center",children:"第一组"}),"\n",(0,s.jsx)(e.td,{align:"center",children:"00:00:03.320 —— 00:00:04.287"}),"\n",(0,s.jsx)(e.td,{align:"center",children:"00:00:03.320 —— 00:00:04.154"}),"\n",(0,s.jsx)(e.td,{align:"center",children:"00:00:06.292 —— 00:00:07.320"}),"\n",(0,s.jsx)(e.td,{align:"center",children:"164"}),"\n",(0,s.jsx)(e.td,{align:"center",children:"194"}),"\n",(0,s.jsx)(e.td,{align:"center",children:"24"}),"\n"]}),"\n",(0,s.jsxs)(e.tr,{children:["\n",(0,s.jsx)(e.td,{align:"center",children:"第二组"}),"\n",(0,s.jsx)(e.td,{align:"center",children:"00:00:12.326 —— 00:00:13.346"}),"\n",(0,s.jsx)(e.td,{align:"center",children:"00:00:12.326 —— 00:00:13.346"}),"\n",(0,s.jsx)(e.td,{align:"center",children:"00:00:15.760 —— 00:00:16.764"}),"\n",(0,s.jsx)(e.td,{align:"center",children:"448"}),"\n",(0,s.jsx)(e.td,{align:"center",children:"478"}),"\n",(0,s.jsx)(e.td,{align:"center",children:"28"}),"\n"]}),"\n",(0,s.jsxs)(e.tr,{children:["\n",(0,s.jsx)(e.td,{align:"center",children:"第三组"}),"\n",(0,s.jsx)(e.td,{align:"center",children:"00:00:22.353 —— 00:00:23.318"}),"\n",(0,s.jsx)(e.td,{align:"center",children:"00:00:22.353 —— 00:00:23.318"}),"\n",(0,s.jsx)(e.td,{align:"center",children:"00:00:25.763 —— 00:00:26.752"}),"\n",(0,s.jsx)(e.td,{align:"center",children:"748"}),"\n",(0,s.jsx)(e.td,{align:"center",children:"778"}),"\n",(0,s.jsx)(e.td,{align:"center",children:"25"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(e.p,{children:"​		通过以上数据求平均值，得出最终的FPS： （24+28+25）/3 = 25.6帧"}),"\n",(0,s.jsxs)(e.p,{children:["​		同时把",(0,s.jsx)(e.strong,{children:"方案1"}),"的数据拿下来，把",(0,s.jsx)(e.strong,{children:"进度条对应时间"}),"根据首/尾帧改为时间B范围，与以上",(0,s.jsx)(e.strong,{children:"方案2"}),"数据做进一步印证。"]}),"\n",(0,s.jsx)(e.p,{children:"​		==方案1加入“时间B范围”后数据：=="}),"\n",(0,s.jsxs)(e.table,{children:["\n",(0,s.jsxs)(e.thead,{children:["\n",(0,s.jsxs)(e.tr,{children:["\n",(0,s.jsx)(e.th,{align:"center",children:"数据组"}),"\n",(0,s.jsx)(e.th,{align:"center",children:"选取时间A范围"}),"\n",(0,s.jsx)(e.th,{align:"center",children:"时间A实际范围（首帧和帧数图像上时间）"}),"\n",(0,s.jsx)(e.th,{align:"center",children:"时间B范围（供对比，与首/尾帧无关）"}),"\n",(0,s.jsx)(e.th,{align:"center",children:"首帧"}),"\n",(0,s.jsx)(e.th,{align:"center",children:"尾帧"}),"\n",(0,s.jsx)(e.th,{align:"center",children:"去重后帧数量"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(e.tbody,{children:["\n",(0,s.jsxs)(e.tr,{children:["\n",(0,s.jsx)(e.td,{align:"center",children:"第一组"}),"\n",(0,s.jsx)(e.td,{align:"center",children:"3s-4s"}),"\n",(0,s.jsx)(e.td,{align:"center",children:"00:00:03.320 —— 00:00:04.287"}),"\n",(0,s.jsx)(e.td,{align:"center",children:"00:00:06.292 —— 00:00:07.493"}),"\n",(0,s.jsx)(e.td,{align:"center",children:"164"}),"\n",(0,s.jsx)(e.td,{align:"center",children:"200"}),"\n",(0,s.jsx)(e.td,{align:"center",children:"29"}),"\n"]}),"\n",(0,s.jsxs)(e.tr,{children:["\n",(0,s.jsx)(e.td,{align:"center",children:"第二组"}),"\n",(0,s.jsx)(e.td,{align:"center",children:"12s - 13s"}),"\n",(0,s.jsx)(e.td,{align:"center",children:"00:00:12.326 —— 00:00:13.346"}),"\n",(0,s.jsx)(e.td,{align:"center",children:"00:00:15.760 —— 00:00:16.764"}),"\n",(0,s.jsx)(e.td,{align:"center",children:"448"}),"\n",(0,s.jsx)(e.td,{align:"center",children:"478"}),"\n",(0,s.jsx)(e.td,{align:"center",children:"28"}),"\n"]}),"\n",(0,s.jsxs)(e.tr,{children:["\n",(0,s.jsx)(e.td,{align:"center",children:"第三组"}),"\n",(0,s.jsx)(e.td,{align:"center",children:"22s - 23s"}),"\n",(0,s.jsx)(e.td,{align:"center",children:"00:00:22.353 —— 00:00:23.318"}),"\n",(0,s.jsx)(e.td,{align:"center",children:"00:00:25.763 —— 00:00:26.729"}),"\n",(0,s.jsx)(e.td,{align:"center",children:"748"}),"\n",(0,s.jsx)(e.td,{align:"center",children:"777"}),"\n",(0,s.jsx)(e.td,{align:"center",children:"25"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(e.p,{children:"​		通过以上数据可以看出，第二组与第三组数据得出的结论吻合，但是第一组数据有出入，进行进一步分析如下："}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"==方案1==比==方案2==的尾帧多了6帧，经过验证这6帧中有5帧时有效帧，若方案2加5帧则数据吻合"}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"通过==方案1==中时间A与时间B分析，时间A（视频内时间）耗时967毫秒，时间B（视频外自然时间）耗时1201毫秒，也就是说针对第一组数据中进度条递增1秒的耗时超过了1秒，所以尾帧要比方案2多出6帧，同时这里也证明了方案1会有存在误差的情况"}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"通过==方案2==中时间A与时间B分析，时间A（视频内时间）耗时834毫秒，时间B（视频外自然时间）耗时1028毫秒，也就是说自然时间1秒内，影院只播放了834毫秒的资源，存在丢帧情况，与结果24帧吻合"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(e.h2,{id:"定案",children:["定案",(0,s.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#定案",children:"#"})]}),"\n",(0,s.jsxs)(e.h3,{id:"最终结论",children:["最终结论",(0,s.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#最终结论",children:"#"})]}),"\n",(0,s.jsx)(e.p,{children:"​		通过以上数据分析，最终得出以下结果："}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"方案2精度更高，方案1有时会存在误差"}),"\n",(0,s.jsxs)(e.li,{children:["方案1与方案2测试结果差距1.7帧：","\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"方案1：25.6帧"}),"\n",(0,s.jsx)(e.li,{children:"方案2：27.3帧"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(e.p,{children:"​		最终结论是，使用方案2进行测试可解决目前面临的问题，获取影院播放视频呈现的FPS值。"}),"\n",(0,s.jsx)(e.p,{children:"​		同时需要注意的是：==真实测试时，发现这种帧率不稳定情况，可额外多做2组数据，增加精确度，同样需要在“验证测试资源部分”的表格中选择时间区域==。"}),"\n",(0,s.jsxs)(e.h4,{id:"测试方法最终调整",children:["测试方法最终调整",(0,s.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#测试方法最终调整",children:"#"})]}),"\n",(0,s.jsx)(e.p,{children:"​		定案使用最终方案进行测试后，有部分细节需要调整，最终流程如下："}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"获取测试资源视频（不变）：seafile【成都-测试团队 / 成都-测试团队 / 测试资源 / 视频资源 / 定制FPS】"}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"获取监控视频（不变）"}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"视频分帧（不变）"}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"选取有效时间区域，参考==验证测试资源==部分表格中进度条对应时间区域，至少三组，若结果不稳定则酌情增加"}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"分帧后图像数据处理："}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"首帧：参考==验证测试资源==部分表格中，==进度条==对应时间，起始点为首帧（记录该帧图像上时间A、时间B）"}),"\n",(0,s.jsx)(e.li,{children:"尾帧：首帧中时间B后推1000ms，有时会上下浮动，取最接近那一帧为尾帧（记录尾帧时间A、时间B）"}),"\n",(0,s.jsx)(e.li,{children:"每一组图像集合==复制==到其他文件夹中，不可删除原文件（需留底）"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"重复帧处理（不变）"}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"记录表格："}),"\n",(0,s.jsxs)(e.table,{children:["\n",(0,s.jsxs)(e.thead,{children:["\n",(0,s.jsxs)(e.tr,{children:["\n",(0,s.jsx)(e.th,{align:"center",children:"数据组"}),"\n",(0,s.jsx)(e.th,{align:"center",children:"进度条时间范围"}),"\n",(0,s.jsx)(e.th,{align:"center",children:"时间A实际范围"}),"\n",(0,s.jsx)(e.th,{align:"center",children:"时间B实际范围"}),"\n",(0,s.jsx)(e.th,{align:"center",children:"首帧"}),"\n",(0,s.jsx)(e.th,{align:"center",children:"尾帧"}),"\n",(0,s.jsx)(e.th,{align:"center",children:"去重后帧数量"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(e.tbody,{children:["\n",(0,s.jsxs)(e.tr,{children:["\n",(0,s.jsx)(e.td,{align:"center",children:"第一组"}),"\n",(0,s.jsx)(e.td,{align:"center",children:"3s-4s"}),"\n",(0,s.jsx)(e.td,{align:"center"}),"\n",(0,s.jsx)(e.td,{align:"center",children:"00:00:06.292 —— 00:00:07.493"}),"\n",(0,s.jsx)(e.td,{align:"center"}),"\n",(0,s.jsx)(e.td,{align:"center"}),"\n",(0,s.jsx)(e.td,{align:"center"}),"\n"]}),"\n",(0,s.jsxs)(e.tr,{children:["\n",(0,s.jsx)(e.td,{align:"center",children:"第二组"}),"\n",(0,s.jsx)(e.td,{align:"center",children:"12s - 13s"}),"\n",(0,s.jsx)(e.td,{align:"center"}),"\n",(0,s.jsx)(e.td,{align:"center",children:"00:00:15.760 —— 00:00:16.764"}),"\n",(0,s.jsx)(e.td,{align:"center"}),"\n",(0,s.jsx)(e.td,{align:"center"}),"\n",(0,s.jsx)(e.td,{align:"center"}),"\n"]}),"\n",(0,s.jsxs)(e.tr,{children:["\n",(0,s.jsx)(e.td,{align:"center",children:"第三组"}),"\n",(0,s.jsx)(e.td,{align:"center",children:"22s - 23s"}),"\n",(0,s.jsx)(e.td,{align:"center"}),"\n",(0,s.jsx)(e.td,{align:"center",children:"00:00:25.763 —— 00:00:26.729"}),"\n",(0,s.jsx)(e.td,{align:"center"}),"\n",(0,s.jsx)(e.td,{align:"center"}),"\n",(0,s.jsx)(e.td,{align:"center"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"数据分析："}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"主要是通过时间B范围，筛选出非重复帧数量"}),"\n",(0,s.jsx)(e.li,{children:"时间A是顺便记录，出现问题后用作参考，不容缺失"}),"\n",(0,s.jsx)(e.li,{children:"非重复帧数量取平均值得出结果"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(e.h2,{id:"参考资料",children:["参考资料",(0,s.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#参考资料",children:"#"})]}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:(0,s.jsx)(e.a,{href:"https://blog.csdn.net/myvest/article/details/97416415",target:"_blank",rel:"noopener noreferrer",children:"音视频同步原理及实现"})}),"\n",(0,s.jsx)(e.li,{children:(0,s.jsx)(e.a,{href:"https://baike.baidu.com/item/%E5%9E%82%E7%9B%B4%E5%90%8C%E6%AD%A5/7263524?fr=aladdin",target:"_blank",rel:"noopener noreferrer",children:"垂直同步"})}),"\n",(0,s.jsx)(e.li,{children:(0,s.jsx)(e.a,{href:"https://www.cnblogs.com/zhichao123/p/11676843.html",target:"_blank",rel:"noopener noreferrer",children:"丢帧"})}),"\n",(0,s.jsx)(e.li,{children:(0,s.jsx)(e.a,{href:"https://baijiahao.baidu.com/s?id=1620464199499893560&wfr=spider&for=pc",target:"_blank",rel:"noopener noreferrer",children:"显示器刷新率与FPS"})}),"\n"]})]})}function d(){let n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:e}=Object.assign({},(0,i.ah)(),n.components);return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(l,{...n})}):l(n)}let c=d;d.__RSPRESS_PAGE_META={},d.__RSPRESS_PAGE_META["tech_doc%2F%E6%8A%80%E6%9C%AF%E8%B0%83%E7%A0%94%2F%E3%80%8A%E8%8E%B7%E5%8F%96%E5%BD%B1%E9%99%A2%E6%92%AD%E6%94%BE%E8%A7%86%E9%A2%91FPS%E6%96%B9%E6%B3%95%E3%80%8B%E8%B0%83%E7%A0%94%E6%8A%A5%E5%91%8A.md"]={toc:[{text:"相关术语",id:"相关术语",depth:2},{text:"问题",id:"问题",depth:2},{text:"现状",id:"现状",depth:2},{text:"技术方案",id:"技术方案",depth:2},{text:"测试范围",id:"测试范围",depth:3},{text:"原理确认",id:"原理确认",depth:3},{text:"内部获取方案（方案1）",id:"内部获取方案方案1",depth:4},{text:"计算获取方案（方案2）",id:"计算获取方案方案2",depth:4},{text:"关键技术",id:"关键技术",depth:2},{text:"视频资源",id:"视频资源",depth:3},{text:"视频分帧",id:"视频分帧",depth:3},{text:"实现支撑",id:"实现支撑",depth:3},{text:"实验验证",id:"实验验证",depth:2},{text:"验证测试资源",id:"验证测试资源",depth:4},{text:"获取监控视频",id:"获取监控视频",depth:4},{text:"获取影院播放视频帧率",id:"获取影院播放视频帧率",depth:4},{text:"视频分帧",id:"视频分帧-1",depth:4},{text:"定案",id:"定案",depth:2},{text:"最终结论",id:"最终结论",depth:3},{text:"测试方法最终调整",id:"测试方法最终调整",depth:4},{text:"参考资料",id:"参考资料",depth:2}],title:"获取影院播放视频FPS方法",headingTitle:"获取影院播放视频FPS方法",frontmatter:{Author:"海针"}}}}]);