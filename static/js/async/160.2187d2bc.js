"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["160"],{6179:function(e,n,h){h.r(n),h.d(n,{default:()=>a});var d=h(2676),r=h(453);function i(e){let n=Object.assign({h1:"h1",a:"a",p:"p",h2:"h2",ul:"ul",li:"li"},(0,r.ah)(),e.components);return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(n.h1,{id:"at-用例筛选指北",children:["AT 用例筛选指北",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#at-用例筛选指北",children:"#"})]}),"\n",(0,d.jsx)(n.p,{children:"AT 用例筛选标准，是挑选合适的文本用例进行自动化用例转化的一些通用标准。"}),"\n",(0,d.jsx)(n.p,{children:"过去我们在自动化测试实践过程中，写了不少自动化用例，随着需求的迭代，自动化用例会自然腐化，因而需要在迭代的过程中对自动化用例进行维护，在维护自动化用例的过程中我们发现，有些用例维护起来太难了，调试用例耗费大量时间，成本很高。"}),"\n",(0,d.jsx)(n.p,{children:"因此，我们总结一些自动化用例选型的标准，以优化后续自动化用例结构，期待我们能编写出高效、稳定、易于维护的自动化用例。"}),"\n",(0,d.jsxs)(n.h1,{id:"一不适合做自动化的用例",children:["一、不适合做自动化的用例",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#一不适合做自动化的用例",children:"#"})]}),"\n",(0,d.jsx)(n.p,{children:"自动化测试可以分为常规自动化测试和专项自动化测试，常规自动化测试一般只针对一些常规的功能测试，其他非常规功能的用例，应该采用专项的自动化测试方案；"}),"\n",(0,d.jsx)(n.p,{children:"以下是不适合做自动化用例的情况："}),"\n",(0,d.jsxs)(n.h2,{id:"1-稳定性压测用例",children:["1. 稳定性、压测用例",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#1-稳定性压测用例",children:"#"})]}),"\n",(0,d.jsx)(n.p,{children:"稳定性测试、压测用例应该是属于性能相关的测试场景，如：反复多次点击按钮，检验其功能稳定性。因为这些用例断言的预期可能不是很明确，更有甚者不需要断言，用例时长比较长，而且不可控，因此不适合做常规自动化测试。"}),"\n",(0,d.jsx)(n.p,{children:"目前我们有性能自动化的专项方案，以及一些稳定性测试的专项方案，可以考虑将此类用例放到专项自动化里面去做。"}),"\n",(0,d.jsxs)(n.h2,{id:"2-涉及多个用户操作",children:["2. 涉及多个用户操作",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#2-涉及多个用户操作",children:"#"})]}),"\n",(0,d.jsx)(n.p,{children:"常见与文管的用例中，多用户操作的用例一般都会涉及到在系统中进行多个用户间的切换，自动化脚本一般是运行在一个用户空间下的，所以还无法实现多用户间的切换。"}),"\n",(0,d.jsx)(n.p,{children:"此类不建议采用自动化执行。"}),"\n",(0,d.jsxs)(n.h2,{id:"3-与开关机注销重启交互",children:["3. 与开关机、注销、重启交互",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#3-与开关机注销重启交互",children:"#"})]}),"\n",(0,d.jsx)(n.p,{children:"此类场景多为应用的异常场景测试，比如：复制大文件过程中注销机器。"}),"\n",(0,d.jsx)(n.p,{children:"自动化脚本在系统关机、注销、重启之后是会停止运行的；此类用例可以做自动化，但是同样需要做专项方案，用例执行过程的处理逻辑完全不同。"}),"\n",(0,d.jsx)(n.p,{children:"后续自动化需要攻关的点："}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsx)(n.p,{children:"自动化脚本在本机运行，自动化测试框架至少需要提供以下功能："}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsx)(n.p,{children:"重启之后用例能自动运行；可以考虑将执行用例写成一个开机自启的服务；"}),"\n"]}),"\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsx)(n.p,{children:"能记录关机之前用例执行的位置，重启之后能从此位置开始执行；"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsx)(n.p,{children:"像性能自动化一样，由服务端控制；"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsx)(n.li,{children:"完全基于图形识别进行元素定位；"}),"\n",(0,d.jsx)(n.li,{children:"串口线控制键鼠稳定性；"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,d.jsxs)(n.h2,{id:"4-测试执行时间长",children:["4. 测试执行时间长",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#4-测试执行时间长",children:"#"})]}),"\n",(0,d.jsx)(n.p,{children:"用例执行时间控制在2分钟以内，极端情况不要超过5分钟，所有用例的平均时长应该在1分钟左右；"}),"\n",(0,d.jsx)(n.p,{children:"用例执行时间太长，编写用例、调试用例、执行用例、维护用例都非常的耗时，人力成本时间成本投入太高。"}),"\n",(0,d.jsx)(n.p,{children:"你想，这条用例执行需要5分钟，那你写这条用例的时间不可能一遍过，写的过程中跑不通还得重跑至少15分钟不过分，写完了还得在其他架构上调试，半个小时过去了，这还只是第一次写用例的时候，后续如果用例维护过程中，你可能需要经常投入相当长时间，这样其实是失去了自动化的意义的。常规自动化测试就应该是快准狠。"}),"\n",(0,d.jsxs)(n.h2,{id:"5-边缘性测试",children:["5. 边缘性测试",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#5-边缘性测试",children:"#"})]}),"\n",(0,d.jsx)(n.p,{children:"有些功能模块本身是属于比较边缘性的，即极少用户会使用到的功能，这类功能模块不需要大规模实现自动化，一两个场景覆盖基本功能就行了，因此我们在挑选此类用例的时候可以结合整个功能模块的覆盖情况来决定。"}),"\n",(0,d.jsxs)(n.h2,{id:"6-需要依赖人工介入的",children:["6. 需要依赖人工介入的",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#6-需要依赖人工介入的",children:"#"})]}),"\n",(0,d.jsx)(n.p,{children:"自动化执行的过程中是没有人工介入的，如果这条用例是比如要人工介入的，那么就背离了自动化的意义。"}),"\n",(0,d.jsx)(n.p,{children:"比如光驱模块，光驱刻录是核心功能，但是光驱刻录之后光盘会弹出来，需要人工更换光盘，再手动推进光驱中。"}),"\n",(0,d.jsx)(n.p,{children:"这种功能模块即使做自动化，能涉及到的功能非常有限，而且不是核心功能，所以明显就不适合做自动化。"}),"\n",(0,d.jsxs)(n.h2,{id:"7-难以实现的",children:["7. 难以实现的",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#7-难以实现的",children:"#"})]}),"\n",(0,d.jsx)(n.p,{children:"用例所涉及到的方法实现起来可能有难度，甚至现阶段无法实现的，此类用例不适合做自动化。"}),"\n",(0,d.jsx)(n.p,{children:"比如影院测试画面清晰度、流畅度、截图录屏录制视频之后的视频是否存在卡顿等用例，现阶段还无法实现。"}),"\n",(0,d.jsxs)(n.h2,{id:"8-功能不稳定",children:["8. 功能不稳定",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#8-功能不稳定",children:"#"})]}),"\n",(0,d.jsx)(n.p,{children:"这个不是说还在开发阶段的功能，还在开发阶段的功能不稳定是正常的，这种我们可以等开发提测之后再写自动化用例。"}),"\n",(0,d.jsx)(n.p,{children:"功能不稳定指的是用例所涉及的功能，可能存在多种变化，每次执行用例可能断言的预期都不同。"}),"\n",(0,d.jsxs)(n.h2,{id:"9-动态断言",children:["9. 动态断言",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#9-动态断言",children:"#"})]}),"\n",(0,d.jsx)(n.p,{children:"用例执行过程中直到用例结束，一直是一个动态变化的过程，而且无法通过其他手段停下来；"}),"\n",(0,d.jsx)(n.p,{children:"比如：截图录屏录制视频时，右下角的录制时间是一直在变化的，用例需要测试录制1分钟之后，录制时间是刚好停在60秒；"}),"\n",(0,d.jsx)(n.p,{children:"目前自动化用例执行还做不到时间精准控制，程序执行时间是有波动的，而且要适配多个平台，所以此类用例大概率会执行失败。特别是在性能较差的国产化架构上，此类用例不太可能稳定执行。"}),"\n",(0,d.jsxs)(n.h2,{id:"10-探索性测试",children:["10. 探索性测试",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#10-探索性测试",children:"#"})]}),"\n",(0,d.jsx)(n.p,{children:"探索性测试通常是一些不确定的操作，多变切复杂的测试场景，预期也可能是不确定的，简单讲就是骚操作太多了，因此不适合做自动化测试。"}),"\n",(0,d.jsx)(n.p,{children:"此类用例适合采用手工测试，是手工测试真正的价值体现。"}),"\n",(0,d.jsxs)(n.h2,{id:"11-易用性测试",children:["11. 易用性测试",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#11-易用性测试",children:"#"})]}),"\n",(0,d.jsx)(n.p,{children:"对于易用性的判断通常是主观的，对于自动化来讲很难去定义什么样的情况对用户是易用的，自动化需要有明确的可实现的预期。"}),"\n",(0,d.jsxs)(n.h1,{id:"二适合做自动化的用例",children:["二、适合做自动化的用例",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#二适合做自动化的用例",children:"#"})]}),"\n",(0,d.jsx)(n.p,{children:"前面讲了不适合做自动化的一些用例情况，有同学就说了，适合做自动化的用例不用讲了，就是不适合的反面。没毛病哈，适合做自动化的用例，我们大体还可以分为两类："}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsx)(n.li,{children:"第一类：自动化效果好，应该尽可能实现的自动化用例；"}),"\n",(0,d.jsx)(n.li,{children:"第二类：自动化效果一般，需要投入更多精力才能实现的自动化用例；"}),"\n"]}),"\n",(0,d.jsx)(n.p,{children:"以下介绍一些我们应该尽可能实现自动化的情况："}),"\n",(0,d.jsxs)(n.h2,{id:"1-操作相对简单",children:["1. 操作相对简单",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#1-操作相对简单",children:"#"})]}),"\n",(0,d.jsx)(n.p,{children:"用例步骤相对较少，这种用例通常是一些路径很浅的用例，一般也是一些基础用例。用例编写、维护都可以轻松搞定。"}),"\n",(0,d.jsxs)(n.h2,{id:"2-容易实现",children:["2. 容易实现",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#2-容易实现",children:"#"})]}),"\n",(0,d.jsx)(n.p,{children:"现有技术是可实现的，没有难度，应该尽可能做自动化。"}),"\n",(0,d.jsxs)(n.h2,{id:"3-经常用于回归测试",children:["3. 经常用于回归测试",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#3-经常用于回归测试",children:"#"})]}),"\n",(0,d.jsx)(n.p,{children:"如果这条用例是每次回归测试必须要执行的用例，那么这条用例应该尽可能实现自动化。"}),"\n",(0,d.jsx)(n.p,{children:"回归测试时我们首先应该保证应用历史基本功能正常，所以那些每次在回归测试时都要执行的用例适合转化为自动化用例。"}),"\n",(0,d.jsxs)(n.h2,{id:"4-功能稳定的核心功能",children:["4. 功能稳定的核心功能",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#4-功能稳定的核心功能",children:"#"})]}),"\n",(0,d.jsx)(n.p,{children:"涉及核心功能的用例是最最重要的用例，也是我们交付时必须要保证质量的相关功能，因此应该尽可能的转化为自动化。"}),"\n",(0,d.jsxs)(n.h2,{id:"5-输入数据测试",children:["5. 输入数据测试",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#5-输入数据测试",children:"#"})]}),"\n",(0,d.jsx)(n.p,{children:"输入数据测试通常是检验被测应用接受有效数据、拒绝无效数据的能力。如：提交超长字符串、特殊字符串等等。"}),"\n",(0,d.jsx)(n.p,{children:"此类用例手工测试很难比较全面的覆盖到所有的输入情况，但是对于自动化来讲，此类用例操作步骤都是一样的，变化的仅是输入参数和断言结果，采用数据驱动，可以轻松实现。"}),"\n",(0,d.jsxs)(n.h2,{id:"6-格式覆盖",children:["6. 格式覆盖",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#6-格式覆盖",children:"#"})]}),"\n",(0,d.jsx)(n.p,{children:"原因同输入数据测试类用例一样，多种格式的覆盖也是一个很繁琐的事情，交给自动化来做再合适不过了。"}),"\n",(0,d.jsx)(n.p,{children:"比如影院对影片格式的检查、截图录屏对保存格式分辨率的检查。"}),"\n",(0,d.jsxs)(n.h2,{id:"7-检查元素状态",children:["7. 检查元素状态",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#7-检查元素状态",children:"#"})]}),"\n",(0,d.jsx)(n.p,{children:"查看被测应用的元素属性。如：图片的大小和排列；按钮的可用和不可用。"})]})}function s(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,r.ah)(),e.components);return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(i,{...e})}):i(e)}let a=s;s.__RSPRESS_PAGE_META={},s.__RSPRESS_PAGE_META["blog%2F2024%2FAT%E7%94%A8%E4%BE%8B%E7%AD%9B%E9%80%89%E6%8C%87%E5%8C%97.md"]={toc:[{text:"1. 稳定性、压测用例",id:"1-稳定性压测用例",depth:2},{text:"2. 涉及多个用户操作",id:"2-涉及多个用户操作",depth:2},{text:"3. 与开关机、注销、重启交互",id:"3-与开关机注销重启交互",depth:2},{text:"4. 测试执行时间长",id:"4-测试执行时间长",depth:2},{text:"5. 边缘性测试",id:"5-边缘性测试",depth:2},{text:"6. 需要依赖人工介入的",id:"6-需要依赖人工介入的",depth:2},{text:"7. 难以实现的",id:"7-难以实现的",depth:2},{text:"8. 功能不稳定",id:"8-功能不稳定",depth:2},{text:"9. 动态断言",id:"9-动态断言",depth:2},{text:"10. 探索性测试",id:"10-探索性测试",depth:2},{text:"11. 易用性测试",id:"11-易用性测试",depth:2},{text:"1. 操作相对简单",id:"1-操作相对简单",depth:2},{text:"2. 容易实现",id:"2-容易实现",depth:2},{text:"3. 经常用于回归测试",id:"3-经常用于回归测试",depth:2},{text:"4. 功能稳定的核心功能",id:"4-功能稳定的核心功能",depth:2},{text:"5. 输入数据测试",id:"5-输入数据测试",depth:2},{text:"6. 格式覆盖",id:"6-格式覆盖",depth:2},{text:"7. 检查元素状态",id:"7-检查元素状态",depth:2}],title:"二、适合做自动化的用例",headingTitle:"二、适合做自动化的用例",frontmatter:{Author:"litao"}}}}]);