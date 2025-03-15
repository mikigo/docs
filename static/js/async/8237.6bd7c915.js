"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["8237"],{324:function(e,n,s){s.r(n),s.d(n,{default:()=>l});var r=s(2676),d=s(453);function h(e){let n=Object.assign({h1:"h1",a:"a",h2:"h2",p:"p",h3:"h3",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",code:"code",pre:"pre",h4:"h4",strong:"strong",ul:"ul",li:"li",ol:"ol"},(0,d.ah)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.h1,{id:"shell参数传递",children:["Shell参数传递",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#shell参数传递",children:"#"})]}),"\n",(0,r.jsxs)(n.h2,{id:"1-shell参数",children:["1. Shell参数",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#1-shell参数",children:"#"})]}),"\n",(0,r.jsx)(n.p,{children:"参数常用在脚本，函数，命令工具调用时传入和传出。"}),"\n",(0,r.jsxs)(n.h3,{id:"11-常用位置参数",children:["1.1 常用位置参数",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#11-常用位置参数",children:"#"})]}),"\n",(0,r.jsx)(n.p,{children:"函数或者命令接收参数时，按照位置获取参数。"}),"\n",(0,r.jsxs)(n.table,{children:["\n",(0,r.jsxs)(n.thead,{children:["\n",(0,r.jsxs)(n.tr,{children:["\n",(0,r.jsx)(n.th,{children:"工具/表达式"}),"\n",(0,r.jsx)(n.th,{children:"案例说明"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.tbody,{children:["\n",(0,r.jsxs)(n.tr,{children:["\n",(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"$0"})}),"\n",(0,r.jsxs)(n.td,{children:["代表命令或者脚本本身，如常用",(0,r.jsx)(n.code,{children:"basename $0"})," 输出脚本名称本身。"]}),"\n"]}),"\n",(0,r.jsxs)(n.tr,{children:["\n",(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"$1~$n"})}),"\n",(0,r.jsxs)(n.td,{children:["第1个到第n个参数,从第10参数开始，引用时要加",(0,r.jsx)(n.code,{children:"{}"}),"，如$",(0,r.jsx)(n.code,{children:"{10}"})]}),"\n"]}),"\n",(0,r.jsxs)(n.tr,{children:["\n",(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"$#"})}),"\n",(0,r.jsx)(n.td,{children:"传入的参数个数"}),"\n"]}),"\n",(0,r.jsxs)(n.tr,{children:["\n",(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"$*"})}),"\n",(0,r.jsx)(n.td,{children:"传入的全部参数"}),"\n"]}),"\n",(0,r.jsxs)(n.tr,{children:["\n",(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"$@"})}),"\n",(0,r.jsx)(n.td,{children:"传入的全部参数"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.h3,{id:"12-和的使用区别",children:["1.2 ",(0,r.jsx)(n.code,{children:"$@"}),"和",(0,r.jsx)(n.code,{children:"$*"}),"的使用区别",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#12-和的使用区别",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:["多个参数传递使用空格分隔，二者在没有使用双引号的情况下传递效果是一致的，所有参数依次解析；\n当带有双引号时，",(0,r.jsx)(n.code,{children:"$*"}),"中所有的参数连同空格会被当成一个字符串参数传递，而",(0,r.jsx)(n.code,{children:"$@"}),"仍然会被空格分隔成多个参数（如果某个参数本身带有空格不会分隔成两个参数）。\n如下："]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"test@test-PC:~/work/study/shell/share$ vi param.sh "})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'#!/bin/bash\n  \nfunction func()\n{\n    echo -e "Param list is:[$@]"\n    for param in $@; do echo "arg[$param]"; done\n\n    echo -e "Param list is:[$*]"\n    for param in $*; do echo "arg[$param]"; done\n\n    echo -e "Param list is:[$*]"\n    for param in "$@"; do echo "arg[$param]"; done\n\n    echo -e "Param list is:[$*]"\n    for param in "$*"; do echo "arg[$param]"; done\n}\n\nfunc 1 2 3 4 \n'})}),"\n",(0,r.jsx)(n.p,{children:"执行结果如下："}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"输出结果：\ntest@test-PC:~/work/study/shell/share$ bash param.sh \nParam list is:[1 2 3 4]\narg[1]\narg[2]\narg[3]\narg[4]\nParam list is:[1 2 3 4]\narg[1]\narg[2]\narg[3]\narg[4]\nParam list is:[1 2 3 4]\narg[1]\narg[2]\narg[3]\narg[4]\nParam list is:[1 2 3 4]\narg[1 2 3 4]\n"})}),"\n",(0,r.jsxs)(n.h3,{id:"13-参数的位移",children:["1.3 参数的位移",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#13-参数的位移",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:["使用",(0,r.jsx)(n.code,{children:"shift"}),"改变参数位置，参数从",(0,r.jsx)(n.code,{children:"$1"}),"开始，",(0,r.jsx)(n.code,{children:"shift"}),"每提取一个参数，后续的参数列表向左移一个参数位，即原来的",(0,r.jsx)(n.code,{children:"$2"}),"变成了",(0,r.jsx)(n.code,{children:"$1"}),",原来的",(0,r.jsx)(n.code,{children:"$1"}),"丢弃。 ",(0,r.jsx)(n.code,{children:"shfit"}),"每次只需要提取",(0,r.jsx)(n.code,{children:"$1"}),"，以此类推，直到所有参数提取完毕。常用于不关心参数个数，依次处理参数时用",(0,r.jsx)(n.code,{children:"shift"}),"。"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"test@test-PC:~/work/study/shell/share$ shift_test.sh"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'#!/bin//bash\n  \nwhile [ $# -gt 0 ]\ndo\n    echo "Catch arg:$1, left:$#" \n    shift\ndone\n'})}),"\n",(0,r.jsx)(n.p,{children:"执行结果如下："}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"# bash shift_test.sh a b c d\nCatch arg:a, left:4\nCatch arg:b, left:3\nCatch arg:c, left:2\nCatch arg:d, left:1\n"})}),"\n",(0,r.jsxs)(n.h3,{id:"14-参数传入和传出",children:["1.4 参数传入和传出",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#14-参数传入和传出",children:"#"})]}),"\n",(0,r.jsxs)(n.h4,{id:"141-自定义函数参数的传入和传出",children:["1.4.1 自定义函数参数的传入和传出",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#141-自定义函数参数的传入和传出",children:"#"})]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"test@test-PC:~/work/study/shell/share$ vi deffunc.sh "})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'#!/bin/bash\n  \nfunction defunc()\n{\n    echo "in_value=$1"\n    eval $2="out"     # 在函数内部对第2个参数进行赋值后，调用者在后续流程中可以使用，如果有多个参数，如$3,$4可以依次赋值\n    return 0\n}\n\nin_value="in"   \ndefunc "${in_value}" out_value\n\necho "out_value=${out_value}"\n\nexit 0\n'})}),"\n",(0,r.jsxs)(n.p,{children:["如上：\n",(0,r.jsx)(n.code,{children:"in_value"}),"为入参数，也是第一个参数。实际上",(0,r.jsx)(n.code,{children:"in_value"}),"作为变量，在定义变量的位置开始一直到Shell脚本执行结束，变量都是生效的。所以即使不传递，在",(0,r.jsx)(n.code,{children:"pararm_test"}),"也是可以使用的。这不在本节讨论范围，实际也不推荐这样做。这里仍然作为参数传递；\n",(0,r.jsx)(n.code,{children:"out_value"}),"为出参数，也是第二个参数，从同赋值的位置开始，到Shell脚本结束，变量都是生效的。\n执行结果如下："]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"test@test-PC:~/work/study/shell/share$ bash deffunc.sh \nin_value=in\nout_value=out\n"})}),"\n",(0,r.jsxs)(n.p,{children:["有时我们也可以利用函数的返回值当做出参数， 但这是有局限性的，函数的返回值只能为正整型，否则会报错，且数值在0～255区间内，超出范围会反转。\n",(0,r.jsx)(n.code,{children:"test@test-PC:~/work/study/shell/share$ vi retfunc.sh "})]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'#!/bin/bash\n\nfunction retfunc()\n{\n    echo "in_value=$1"\n    return 128\n}\n\nin_value="in"   \nretfunc "${in_value}" \nout_value=$?\necho "out_value=${out_value}"\n'})}),"\n",(0,r.jsx)(n.p,{children:"执行结果输出"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"test@test-PC:~/work/study/shell/share$ bash retfunc.sh\nin_value=in\nout_value=128\n"})}),"\n",(0,r.jsxs)(n.p,{children:["如上，",(0,r.jsx)(n.code,{children:"return"}),"的返回值为",(0,r.jsx)(n.code,{children:"128"}),"，在",(0,r.jsx)(n.code,{children:"0~255"}),"区间内，现在我们把它改为",(0,r.jsx)(n.code,{children:"256"}),"。\n执行结果输出："]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"test@test-PC:~/work/study/shell/share$ bash retfunc.sh \nin_value=in\nout_value=0\n"})}),"\n",(0,r.jsxs)(n.p,{children:["改成",(0,r.jsx)(n.code,{children:"-1"}),"，执行结果如下："]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"test@test-PC:~/work/study/shell/share$ bash retfunc.sh \nin_value=in\nout_value=255\n"})}),"\n",(0,r.jsxs)(n.p,{children:["改成",(0,r.jsx)(n.code,{children:"A"}),"，执行结果如下："]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"test@test-PC:~/work/study/shell/share$ bash retfunc.sh \nin_value=in\nretfunc.sh: 第 6 行：return: A：需要数字参数\nout_value=2\n"})}),"\n",(0,r.jsxs)(n.p,{children:["综上，函数返回值超出",(0,r.jsx)(n.code,{children:"0~255"}),"会反转，非数字则报错。一般情况下我们是利用函数的返回码来做函数执行状态判断的。我们可以定义",(0,r.jsx)(n.code,{children:"0"}),"为成功，非",(0,r.jsx)(n.code,{children:"0"}),"则失败，根据不同的数字值可以设定不同的错误状态。"]}),"\n",(0,r.jsxs)(n.h4,{id:"142-数组做为参数进行传递",children:["1.4.2 数组做为参数进行传递",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#142-数组做为参数进行传递",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:["数组也可以作为参数进行传递，这涉及到如何数组的取值， 如下, ",(0,r.jsx)(n.code,{children:"$WEEK"}),"仅取值数组中第一个\n元素， 而",(0,r.jsx)(n.code,{children:"${WEEK[@]}"}),"或者",(0,r.jsx)(n.code,{children:"${WEEK[*]}"}),"才是取整个数组的值，所以我们做为参数传递时要传递整个数组。"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"test@test-PC:~/work/study/shell/share$ vi arr_param.sh"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'#!/bin/bash\n  \nfunction arr_param() {   \n    echo "Input is: $@"\n}\ndeclare -a WEEK=( "MON" "TUE" "WED" "THU" "FRI" "SAT" "SUN" )\narr_param $WEEK\narr_param "${WEEK[@]}"\n'})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsxs)(n.strong,{children:["注意:",(0,r.jsx)(n.code,{children:"${WEEK[@]}"}),"和",(0,r.jsx)(n.code,{children:"${WEEK[*]}"}),"有什么区别呢？参考章节 ",(0,r.jsxs)(n.a,{href:"#12-%E5%92%8C%E7%9A%84%E4%BD%BF%E7%94%A8%E5%8C%BA%E5%88%AB",children:['"1.2 ',(0,r.jsx)(n.code,{children:"$@"}),"和",(0,r.jsx)(n.code,{children:"$*"}),'的使用区别"']}),"。"]})}),"\n",(0,r.jsxs)(n.h4,{id:"143-函数名做为参数传递",children:["1.4.3 函数名做为参数传递",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#143-函数名做为参数传递",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:["函数名也可以做为参数进行传递，使用时用  ",(0,r.jsx)(n.code,{children:"eval"})," 进行二次解析。\n",(0,r.jsx)(n.code,{children:"eval"})," 的作用是先将命令中的变量进行一次解析，然后再执行命令。"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"test@test-PC:~/work/study/shell/share$ vi func_param.sh "})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'#!/bin/bash\n  \nfunction max() { return $(( $1 > $2 ? $1 : $2   )); }\nfunction min() { return $(( $1 < $2 ? $1 : $2   )); }\nfunction abs() { return $(( $1 > 0  ? $1 : 0-$1 )); }\n\nfunction func_param() {\n    func=$1       #取到函数名，赋值给变量func\n    shift         #剔除第一个参数（即函数名），剩下的就是要在调用函数中处理的参数\n    eval ${func} "$@"\n    ret=$?\n    echo $ret\n}\nfunc_param "max" 3 5\nfunc_param "min" 3 5\nfunc_param "abs" -8\n\n'})}),"\n",(0,r.jsxs)(n.p,{children:["如上，我们定义了三个函数",(0,r.jsx)(n.code,{children:"max"}),",",(0,r.jsx)(n.code,{children:"min"}),",",(0,r.jsx)(n.code,{children:"abs"}),"分别求传入数字最大，最小和绝对值，我们可以将它们的名称作为参数传递给",(0,r.jsx)(n.code,{children:"func_param"}),"。"]}),"\n",(0,r.jsxs)(n.h2,{id:"2-getopts和getopt",children:["2. getopts和getopt",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#2-getopts和getopt",children:"#"})]}),"\n",(0,r.jsxs)(n.h3,{id:"21-getopts-命令",children:["2.1 getopts 命令",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#21-getopts-命令",children:"#"})]}),"\n",(0,r.jsx)(n.p,{children:"getopts是Bash内置命令，用于格式化参数解析。在开发脚本或者小工具时（需要通过传入参数执行特定功能）时，可以按照给定格式传递与解析参数"}),"\n",(0,r.jsx)(n.p,{children:"命令的关键点，以getopts 'l:t:p:d' 为例说明"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"getopts"}),"后面的参数约定了",(0,r.jsx)(n.code,{children:"getopts"}),"所在函数或脚本的接收参数内容及格式， 如支持参数为 ",(0,r.jsx)(n.code,{children:"-l"}),", ",(0,r.jsx)(n.code,{children:"-t"}),", 参数只能为单个字符, 不支持长参数名，比如",(0,r.jsx)(n.code,{children:"--lang"}),"."]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.ol,{start:"2",children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"getopts"}),"  定义的参数后带",(0,r.jsx)(n.code,{children:":"}),"，表示参数为键值参数，需要给参数传入一个值； 如不带",(0,r.jsx)(n.code,{children:":"}),"说明是一个开关参数，默认开关是",(0,r.jsx)(n.code,{children:"true"}),"。"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.ol,{start:"3",children:["\n",(0,r.jsxs)(n.li,{children:["常量",(0,r.jsx)(n.code,{children:"OTPARG"}),"记录当前参数的值， ",(0,r.jsx)(n.code,{children:"OPTIND"}),"记录下一参数位置。"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.ol,{start:"4",children:["\n",(0,r.jsxs)(n.li,{children:["当出现了不在约定的参数列表中的参数时，进入 ",(0,r.jsx)(n.code,{children:"?"})," 分支。"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.ol,{start:"5",children:["\n",(0,r.jsxs)(n.li,{children:["当前",(0,r.jsx)(n.code,{children:"getopts"}),"后面的参数列表以",(0,r.jsx)(n.code,{children:":"}),"开始时， ",(0,r.jsx)(n.code,{children:"getopts"}),"进入安静模式，不打印内置的错误描述。"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.h3,{id:"22-getopt",children:["2.2 getopt",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#22-getopt",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:["getopt是一个外部工具，可以通过",(0,r.jsx)(n.code,{children:"man getopt"}),"查看具体用法。"]})]})}function c(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,d.ah)(),e.components);return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}let l=c;c.__RSPRESS_PAGE_META={},c.__RSPRESS_PAGE_META["%E7%BC%96%E7%A8%8B%E5%9F%BA%E7%A1%80%2FShell%2FShell%E5%8F%82%E6%95%B0%E4%BC%A0%E9%80%92.md"]={toc:[{text:"1. Shell参数",id:"1-shell参数",depth:2},{text:"1.1 常用位置参数",id:"11-常用位置参数",depth:3},{text:"1.2 `$@`和`$*`的使用区别",id:"12-和的使用区别",depth:3},{text:"1.3 参数的位移",id:"13-参数的位移",depth:3},{text:"1.4 参数传入和传出",id:"14-参数传入和传出",depth:3},{text:"1.4.1 自定义函数参数的传入和传出",id:"141-自定义函数参数的传入和传出",depth:4},{text:"1.4.2 数组做为参数进行传递",id:"142-数组做为参数进行传递",depth:4},{text:"1.4.3 函数名做为参数传递",id:"143-函数名做为参数传递",depth:4},{text:"2. getopts和getopt",id:"2-getopts和getopt",depth:2},{text:"2.1 getopts 命令",id:"21-getopts-命令",depth:3},{text:"2.2 getopt",id:"22-getopt",depth:3}],title:"Shell参数传递",headingTitle:"Shell参数传递",frontmatter:{Author:"海针 - 搬运"}}}}]);