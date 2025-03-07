---
Author: 海针 - 搬运
---

# Shell参数传递
## 1. Shell参数
参数常用在脚本，函数，命令工具调用时传入和传出。
### 1.1 常用位置参数
函数或者命令接收参数时，按照位置获取参数。

|  工具/表达式      | 案例说明  |
|  ----            | ----     |
|`$0`|代表命令或者脚本本身，如常用`basename $0` 输出脚本名称本身。    |
|`$1~$n` |  第1个到第n个参数,从第10参数开始，引用时要加`{}`，如$`{10}`|
|`$#` |  传入的参数个数|
|`$*`| 传入的全部参数|
|`$@`| 传入的全部参数|

### 1.2 `$@`和`$*`的使用区别
多个参数传递使用空格分隔，二者在没有使用双引号的情况下传递效果是一致的，所有参数依次解析；
当带有双引号时，`$*`中所有的参数连同空格会被当成一个字符串参数传递，而`$@`仍然会被空格分隔成多个参数（如果某个参数本身带有空格不会分隔成两个参数）。
如下：

`test@test-PC:~/work/study/shell/share$ vi param.sh `

```bash
#!/bin/bash
  
function func()
{
    echo -e "Param list is:[$@]"
    for param in $@; do echo "arg[$param]"; done

    echo -e "Param list is:[$*]"
    for param in $*; do echo "arg[$param]"; done

    echo -e "Param list is:[$*]"
    for param in "$@"; do echo "arg[$param]"; done

    echo -e "Param list is:[$*]"
    for param in "$*"; do echo "arg[$param]"; done
}

func 1 2 3 4 
```
执行结果如下：
```
输出结果：
test@test-PC:~/work/study/shell/share$ bash param.sh 
Param list is:[1 2 3 4]
arg[1]
arg[2]
arg[3]
arg[4]
Param list is:[1 2 3 4]
arg[1]
arg[2]
arg[3]
arg[4]
Param list is:[1 2 3 4]
arg[1]
arg[2]
arg[3]
arg[4]
Param list is:[1 2 3 4]
arg[1 2 3 4]
```

### 1.3 参数的位移
使用`shift`改变参数位置，参数从`$1`开始，`shift`每提取一个参数，后续的参数列表向左移一个参数位，即原来的`$2`变成了`$1`,原来的`$1`丢弃。 `shfit`每次只需要提取`$1`，以此类推，直到所有参数提取完毕。常用于不关心参数个数，依次处理参数时用`shift`。

`test@test-PC:~/work/study/shell/share$ shift_test.sh`
```bash
#!/bin//bash
  
while [ $# -gt 0 ]
do
    echo "Catch arg:$1, left:$#" 
    shift
done
```
执行结果如下：
```
# bash shift_test.sh a b c d
Catch arg:a, left:4
Catch arg:b, left:3
Catch arg:c, left:2
Catch arg:d, left:1
```

### 1.4 参数传入和传出
#### 1.4.1 自定义函数参数的传入和传出

`test@test-PC:~/work/study/shell/share$ vi deffunc.sh `
```bash
#!/bin/bash
  
function defunc()
{
    echo "in_value=$1"
    eval $2="out"     # 在函数内部对第2个参数进行赋值后，调用者在后续流程中可以使用，如果有多个参数，如$3,$4可以依次赋值
    return 0
}

in_value="in"   
defunc "${in_value}" out_value

echo "out_value=${out_value}"

exit 0
```
如上：
`in_value`为入参数，也是第一个参数。实际上`in_value`作为变量，在定义变量的位置开始一直到Shell脚本执行结束，变量都是生效的。所以即使不传递，在`pararm_test`也是可以使用的。这不在本节讨论范围，实际也不推荐这样做。这里仍然作为参数传递；
`out_value`为出参数，也是第二个参数，从同赋值的位置开始，到Shell脚本结束，变量都是生效的。
执行结果如下：
```
test@test-PC:~/work/study/shell/share$ bash deffunc.sh 
in_value=in
out_value=out
```

有时我们也可以利用函数的返回值当做出参数， 但这是有局限性的，函数的返回值只能为正整型，否则会报错，且数值在0～255区间内，超出范围会反转。
`test@test-PC:~/work/study/shell/share$ vi retfunc.sh `
```bash
#!/bin/bash

function retfunc()
{
    echo "in_value=$1"
    return 128
}

in_value="in"   
retfunc "${in_value}" 
out_value=$?
echo "out_value=${out_value}"
```
执行结果输出
```
test@test-PC:~/work/study/shell/share$ bash retfunc.sh
in_value=in
out_value=128
```
如上，`return`的返回值为`128`，在`0~255`区间内，现在我们把它改为`256`。
执行结果输出：
```
test@test-PC:~/work/study/shell/share$ bash retfunc.sh 
in_value=in
out_value=0
```
改成`-1`，执行结果如下：
```
test@test-PC:~/work/study/shell/share$ bash retfunc.sh 
in_value=in
out_value=255
```
改成`A`，执行结果如下：
```
test@test-PC:~/work/study/shell/share$ bash retfunc.sh 
in_value=in
retfunc.sh: 第 6 行：return: A：需要数字参数
out_value=2
```

综上，函数返回值超出`0~255`会反转，非数字则报错。一般情况下我们是利用函数的返回码来做函数执行状态判断的。我们可以定义`0`为成功，非`0`则失败，根据不同的数字值可以设定不同的错误状态。


#### 1.4.2 数组做为参数进行传递
数组也可以作为参数进行传递，这涉及到如何数组的取值， 如下, `$WEEK`仅取值数组中第一个
元素， 而`${WEEK[@]}`或者`${WEEK[*]}`才是取整个数组的值，所以我们做为参数传递时要传递整个数组。

`test@test-PC:~/work/study/shell/share$ vi arr_param.sh`
```bash
#!/bin/bash
  
function arr_param() {   
    echo "Input is: $@"
}
declare -a WEEK=( "MON" "TUE" "WED" "THU" "FRI" "SAT" "SUN" )
arr_param $WEEK
arr_param "${WEEK[@]}"
```

**注意:`${WEEK[@]}`和`${WEEK[*]}`有什么区别呢？参考章节 ["1.2 `$@`和`$*`的使用区别"](#12-和的使用区别)。**


#### 1.4.3 函数名做为参数传递
函数名也可以做为参数进行传递，使用时用  `eval` 进行二次解析。
`eval` 的作用是先将命令中的变量进行一次解析，然后再执行命令。

`test@test-PC:~/work/study/shell/share$ vi func_param.sh `
```bash
#!/bin/bash
  
function max() { return $(( $1 > $2 ? $1 : $2   )); }
function min() { return $(( $1 < $2 ? $1 : $2   )); }
function abs() { return $(( $1 > 0  ? $1 : 0-$1 )); }

function func_param() {
    func=$1       #取到函数名，赋值给变量func
    shift         #剔除第一个参数（即函数名），剩下的就是要在调用函数中处理的参数
    eval ${func} "$@"
    ret=$?
    echo $ret
}
func_param "max" 3 5
func_param "min" 3 5
func_param "abs" -8

```
如上，我们定义了三个函数`max`,`min`,`abs`分别求传入数字最大，最小和绝对值，我们可以将它们的名称作为参数传递给`func_param`。

## 2. getopts和getopt

### 2.1 getopts 命令

getopts是Bash内置命令，用于格式化参数解析。在开发脚本或者小工具时（需要通过传入参数执行特定功能）时，可以按照给定格式传递与解析参数

命令的关键点，以getopts 'l:t:p:d' 为例说明
- 1) `getopts`后面的参数约定了`getopts`所在函数或脚本的接收参数内容及格式， 如支持参数为 `-l`, `-t`, 参数只能为单个字符, 不支持长参数名，比如`--lang`.
- 2) `getopts`  定义的参数后带`:`，表示参数为键值参数，需要给参数传入一个值； 如不带`:`说明是一个开关参数，默认开关是`true`。
- 3) 常量`OTPARG`记录当前参数的值， `OPTIND`记录下一参数位置。
- 4) 当出现了不在约定的参数列表中的参数时，进入 `?` 分支。
- 5) 当前`getopts`后面的参数列表以`:`开始时， `getopts`进入安静模式，不打印内置的错误描述。

### 2.2 getopt

getopt是一个外部工具，可以通过`man getopt`查看具体用法。