---
Author: 海针-搬运
---

# Shell变量使用
## 1. 变量的声明
在Shell脚本内，变量是可以不先声明而直接使用的。有过传统语言编程经验的小伙伴习惯先声明再使用，这是个好的编程习惯。
### 1.1 常用内置变量
函数或者命令接收参数时，按照位置获取参数。

|  工具/表达式      | 案例说明  |
|  ----            | ----     |
|`$0`|代表命令或者脚本本身，如常用`basename $0` 输出脚本名称本身。    |
|`$1~$n` |  第1个到第n个参数,从第10参数开始，引用时要加`{}`，如$`{10}`|
|`$#` |  传入的参数个数|
|`$*`| 传入的全部参数|
|`$@`| 传入的全部参数|
|`$$`| 当前运行的进程ID|
|`$!`|最后一个后台进程的ID|
|`$?`| 最后一个执行命令的返回码|
|`$_`|最后执行的命令的最后一个参数的值|
|`$PPID`|shell 的父进程的进程号|
|`$BASH`|扩展为用来启动当前 bash 实例的文件全名|
|`$BASH_VERSION`|一个只读数组变量，成员保存着当前 bash 实例的版本信息。<br>赋予数组元素的值是如下这些：       <br>`BASH_VERSINFO[0]`       主版本号 (release).<br>`BASH_VERSINFO[1]`        次版本号 (version).<br> `BASH_VERSINFO[2]`        补丁版本<br>`BASH_VERSINFO[3]`        编译信息<br>`BASH_VERSINFO[4]`        发布时的状态 (例如, beta1).<br>`BASH_VERSINFO[5]`        MACHTYPE 平台类型<br> 
|`$UID`|UID    扩展为当前用户的 ID，在启动时初始化。|
|`$GROUPS`|一个数组变量，包含当前用户所属的组的列表|
|`$HOME`|前用户的个人家目录，内建命令 cd 的默认参数|
|`$HOSTNAME`|自动设置为当前的主机名。|
|`$IFS`|内部字段分隔符 Internal Field Separator 用来在扩展之后进行分词|
|`$PATH`|索命令的路径|
|`$PWD`|由 cd 命令设置的当前工作目录。|
|`$OLDPWD`|上一次命令 cd 设置的工作目录。|
|`$LINENO`|引用这个参数时，shell 将它替换为一个指示在脚本或函数中当前行号的十进制数字(从 1 开始)|
|`$FUNCNAME`|前执行的 shell 函数名。|
|`$OSTYPE`|正在运行 bash 的操作系统类型。|
|`$MACHTYPE`|正在运行 bash 的硬件系统类型|
|`$RANDOM`|引用这个参数时，都会产生一个 0 到 32767 之间的随机整数|
|`$SECONDS`|引用这个参数时，返回 shell 自运行以来的秒数|
|`$TMOUT`|如果设置为大于  0 的值，TMOUT 被当作内建命令 read 的默认超时 等待时间。可以用来设置终端无操作的超时时间|
|`$HISTSIZE`|令历史中保存的历史数量,默认值是 500。|
|`$PS1`|用作主提示符字符串|
|`$PS2`|个参数的值同 PS1 一起被扩展，用作次提示符字符串。|
|`$PS4`|这个参数的值同 PS1 一起被扩展，在执行跟踪中在 bash 显示每个命令之前显示|

更多内置变量详情，可查看`man bash`

### 1.2 变量的声明
#### 1.2.1 变量的声明与赋值

`test@test-PC:~/work/study/shell/share/1$ vi var.sh `

```bash 
#!/bin/bash
  
var1=            #变量赋值为空串
var2=abc         #变量赋值为abc
var3='It sales $125.00'    #使用单引号，避免字符串$符号被解析
var4="It's my book."       #使用双引号
var5="${var4}"             #变量的结果可以赋值给另一变量 
var6=4                     #变量值可以为数字， 在shell变量存储是以字符串方式存储
var7=3.14159
var8=$(( ( ${var6} + 10 ) * 2 ))  #表达式的结果可以赋值给变量 
var9=$( echo "scale=2; ${var6}*${var7}/3" | bc )   # 命令的执行结果可以赋值给变量 
var10=`expr ${var6} + ${var8}`    # 另一种执行命令的方式，结果赋值给变量 
var11=( 'a' 'b' 'c' 'd' )         # 变量可以为数组
func() { echo $1; }; var12=$(func ${var6})   # 函数的执行结果可以赋值给变量 

for i in `seq 1 12`
do
    [ $i -eq 11 ] && eval echo "var${i}=\${var${i}[@]}" && continue
    eval echo "var${i}=\${var${i}}"
done
```
脚本执行结果如下：
```bash
test@test-PC:~/work/study/shell/share/1$ bash var.sh 
var1=
var2=abc
var3=It sales $125.00
var4=It's my book.
var5=It's my book.
var6=4
var7=3.14159
var8=28
var9=4.18
var10=32
var11=a b c d
var12=4
```

注意以下几点：
+ 变量名由数字、字母、下划线组成，并且必须以数字，字母开头，不能包含Shell关键字。
+ 变量名称与值之间用`=`连接，`=`两点不能有空格。在`$((...))`,`$[...]` 表达式内除外。
+ Bash变量可以不用指定类型，默认都是字符串。
+ 变量赋值使用单引确保引号内的字符串不被转义，不被解析，保持原本输出。 而使用双引号，引号内字符串包含变量，命令，转义符将先会被解析后再赋值给变量。 
#### 1.2.2 删除变量
```
unset var             # 清除变量
```
#### 1.2.3 `readonly`只读变量 
用`readonly`声明的变量是只读的，不能修改。
```bash
#!/bin/bash
readonly rvar="TEST"
rvar="MOD"
```
执行修改：
```bash
test@test-PC:~/work/study/shell/share/1$ bash readonly.sh
readonly.sh:行4: rvar：只读变量
```
**注意**
`readonly`和`local`不能同时使用，如果同时使用，则在最前面的生效，后面的则失效，具体原理尚未深究。       
如 `readonly loacl var=123` : `readonly`生效，`local`失效。           
如 `local readonly var=123` ：`local`生效，`readonly`失效。

#### 1.2.4 `declare`声明变量
+ `declare -i` : 声明整型变量 
```bash
test@test-PC:~/share/1$ declare -i intval=123   #声明一个整型
test@test-PC:~/share/1$ echo $intval 
123
test@test-PC:~/share/1$ intval=abc    #将字符串赋值给整型变量，结果被转换为0
test@test-PC:~/share/1$ echo $intval 
0
```
+ `declare -r`: 声明只读变量 
```bash
test@test-PC:~/share/1$ declare -r rdval=123  #声明只读变量，等同readonly rdval=123
test@test-PC:~/share/1$ rdval=456    #只读变量不能被修改
-bash: rdval：只读变量
test@test-PC:~/share/1$ echo $rdval 
123
```
+ `declare -a`: 声明数组变量
```bash
test@test-PC:~/share/1$ declare arr=('a' 'b' 1 2)
test@test-PC:~/share/1$ echo ${arr[@]}
a b 1 2
```
+ `declare -f`: 声明函数
在函数定义之前可以先声明
```bash
declare -f call_script

call_script()
{
    echo "[$(basename $0)] - call declare_test.sh"
}
```

+ `declare -x`: 声明环境变量

声明变量为环境变量，可在当前Shell进程及其子进程中使用。

`test@test-PC:~/share/1$ vi declare.sh `
```bash
#!/bin/bash
  
declare -i intval=123
declare -r rdval=123
declare -a arr=123
declare -f call_script

declare -x DECLARE_XVAL  # 声明了一个环境变量
call_script()
{
    echo "[$(basename $0)] - call declare_test.sh"  
    DECLARE_XVAL="This_is_a_TEST_program"   #主进程中赋值环境变量
    bash declare_test.sh   #调用子脚本，在子进程中使用环境变量
}

call_script   #调用声明的函数
```
子进程脚本如下：
`test@test-PC:~/share/1$ vi declare_test.sh `
```bash
#!/bin/bash  
echo "[$(basename $0)] - DECLARE_XVAL=${DECLARE_XVAL}"
```

调用主脚本，执行结果如下,在子脚本中打印出了环境变量的值。
```bash
test@test-PC:~/hare/1$ bash declare.sh 
[declare.sh] - call declare_test.sh
[declare_test.sh] - DECLARE_XVAL=This_is_a_TEST_program
```

如果单独调用子脚本，这个变量是没有赋值的。
```bash
test@test-PC:~/share/1$ bash declare_test.sh 
[declare_test.sh] - DECLARE_XVAL=
```

**注意**：
实际测试，如果`declare`声明的变量是在函数体内，则变量的作用域也仅是函数体内有效。具体原理尚未深究。



## 2 变量的应用


### 2.1 变量的作用域
#### 2.1.1 全局变量
全局变量的作用域是从变量定义位置开始，到Shell进程结束，全局变量的作用域不包含当前进程的子进程。     
全局变量的声明：
`VariableName=Value`
如`var="abc"`或者`global var="abc"`，以下示例来演示全局变量的作用域。

`test@test-PC:~/share/1$ vi global.sh  `
```bash
#!/bin/bash
  
func1() {
    #依次打印[进程ID]<脚本名:函数名:行号>  变量名称=变量值
    printf "%-30s : %s\n" "[$$]<$(basename $0):$FUNCNAME:$LINENO>" "main_var=$main_var"
}

func2() {
    main_var="This is main_var"   #在func2中定义了全局变量，作用域从定义的位置开始到进程结束
    printf "%-30s : %s\n" "[$$]<$(basename $0):$FUNCNAME:$LINENO>" "main_var=$main_var"
}

main() {
    func1     #调用func1，此时main_var还未定义
    func2     #调用func2，此时main_var已经定义
    printf "%-30s : %s\n" "[$$]<$(basename $0):$FUNCNAME:$LINENO>" "main_var=$main_var"
    source source.sh   #用source调用脚本，souce.sh脚本中的代码导入到当前进程中。 注意，这里还是当前的shell进程
    printf "%-30s : %s\n" "[$$]<$(basename $0):$FUNCNAME:$LINENO>" "source_var=$source_var"

    bash extern.sh   #用bash调用脚本，注意，extern.sh脚本是开启新的进程去执行
    printf "%-30s : %s\n" "[$$]<$(basename $0):$FUNCNAME:$LINENO>" "extern_var=$extern_var"
}

main
```
在以下脚本中调用的两个脚本分别定义如下：
`test@test-PC:~/share/1$ vi source.sh `
```bash
#!/bin/bash  
source_var="This is source_var
```
`test@test-PC:~/share/1$ vi extern.sh`
```bash
#!/bin/bash
  
print_var() {
     printf "%-30s : %s\n" "[$$]<$(basename $0):$FUNCNAME:$LINENO>" "main_var=$main_var"
}

set_var() {
     extern_var="This is extern_var"  #定义了全局变量，只在当前进程有效
}
print_var
set_var
```
执行主脚本`global.sh`，结果如下：
```
test@test-PC:~/work/study/shell/share/1$ bash global.sh 
[28581]<global.sh:func1:4>     : main_var=
[28581]<global.sh:func2:9>     : main_var=This is main_var
[28581]<global.sh:main:15>     : main_var=This is main_var
[28581]<global.sh:main:17>     : source_var=This is source_var
[28586]<extern.sh:print_var:4> : main_var=
[28581]<global.sh:main:20>     : extern_var=
```

说明：
+ 1）`<global.sh:func1:4>`函数位置，`main_var`尚未定义，所以值为空。
+ 2）`<global.sh:func2:9>`函数位置，`main_var`已定义，打印值有效。
+ 3）`<global.sh:main:15>`在`main`在`func2`后执行，`main_var`已定义，值有效。
+ 4）`<global.sh:main:17>`变量`source_var`在`source.sh`定义，并且以source的方式导入，还在当前进程中，所以变量`source_var`有效。 以都是在同一进程内运行，进程ID:28581。
+ 5）`<extern.sh:print_var:4>`，当前是在新进程中运行，进程ID:28286。它打印主进程main_var是无效的，因为已经不在变量的作用域内。
+ 6）`<global.sh:main:20>` 同理，`extern_var`是在子进程`extern.sh`中定义，也已经超出了变量的作用域，打印无效。


#### 2.1.2 局部变量
局部变量的作用域是在函数体内定义的位置开始，到函数执行完毕。     
局部变量的定义，使用`local`来定义局部变量，`local`只能在函数中使用。     
`local VariableName=Value`，如`local var=123`。如下示例演示局部变量的作用域。     

`test@test-PC:~/share/1$ vi local.sh`
```bash
#!/bin/bash
  
func1() {
    local local_var=3    #定义了局部变量
    printf "%-30s : %s\n" "[$$]<$(basename $0):$FUNCNAME:$LINENO>" "local_var=$local_var"
}

main(){
    func1
    printf "%-30s : %s\n" "[$$]<$(basename $0):$FUNCNAME:$LINENO>" "local_var=$local_var"  #在函数外打印局部变量的值
}

main
```
调用执行结果如下：
```bash
test@test-PC:~/work/study/shell/share/1$ bash local.sh 
[1491]<local.sh:func1:5>       : local_var=3
[1491]<local.sh:main:10>       : local_var=
```
可以看到，`local_var`变量只是在函数`func` 是有效的，函数外打印无效。

#### 2.1.3 环境变量
环境变量对当前Shell进程及其子进程都是生效的，但不对当前Shell的父进程生效，不同Shell进程也是不生效的。            
假如脚本间有如下调用关系：
```
A.sh -> B.sh ->C.sh   #A.sh调用B.sh, B.sh调用C.sh
Z.sh                  #Z.sh独立调用
```

在脚本`B.sh`定义了环境变量，那么变量在`B.sh`和`C.sh`是生效的，但是对于调用它的`A.sh`是不生效的， 而`Z.sh`独立进程调用，所以`B.sh`中定义的环境变量在`Z.sh`也是无效的。     

环境变量的声明：
`export VARIABLENAME=Value`，如`local PROJECT_NAME=menu`。     
也可以        
`declare -x VARIABLENAME=Value`,如`declare PROJECT_NAME=menu`。            
一般我们习惯用大写字母表示环境变量，以下示例演示环境变量的作用域:            

`test@test-PC:~/share/1$ vi export.sh `
```bash
#!/bin/bash
  
func1() {
    export MAIN_ENV=project    #声明了环境变量MAIN_ENV
}

main(){
    func1
    bash extern.sh   #开辟新进程调用子脚本
    printf "%-30s : %s\n" "[$$]<$(basename $0):$FUNCNAME:$LINENO>" "EXTERN_ENV=$EXTERN_ENV"   #打印子进程环境变量EXTERN_ENV
}

main
```
`test@test-PC:~/share/1$ vi extern.sh `
```bash
#!/bin/bash
  
print_env(){
    export EXTERN_ENV="extern_env_value"   #声明环境变量EXTERN_ENV
    printf "%-30s : %s\n" "[$$]<$(basename $0):$FUNCNAME:$LINENO>" "MAIN_ENV=$MAIN_ENV"   #打印父进程环境变量
}
print_env
bash subextern.sh   #开辟新进程调用子脚本
```

`test@test-PC:~/share/1$ vi subextern.sh `

```bash
#!/bin/bash
  
sub_print_env() {
     printf "%-30s : %s\n" "[$$]<$(basename $0):$FUNCNAME:$LINENO>" "MAIN_ENV=$MAIN_ENV"   #打印爷爷进程的环境变量 
     printf "%-30s : %s\n" "[$$]<$(basename $0):$FUNCNAME:$LINENO>" "EXTERN_ENV=$EXTERN_ENV"  #打印父进程的环境变量
}
sub_print_env
```
调用主父进程脚本，执行结果如下：
```bash
test@test-PC:~/share/1$ bash export.sh 
[17698]<extern.sh:print_env:9> : MAIN_ENV=project
[17700]<subextern.sh:sub_print_env:4> : MAIN_ENV=project
[17700]<subextern.sh:sub_print_env:5> : EXTERN_ENV=extern_env_value
[17697]<export.sh:main:10>     : EXTERN_ENV=
```
分析：
+ 1） 输出第一行：子进程`extern.sh`打印出了父进程中定义的`MAIN_ENV`值。
+ 2） 输出第二行：孙进程`subextern.sh`打印出了爷爷进程的环境变量`MAIN_ENV`。
+ 3） 输出第三行:孙进程`subextern.sh`打印出了父进程的环境变量`EXTERN_ENV`。
+ 4）输出第四行：主父进程`export.sh`尝试打印子进程`extern.sh`的环境变量`EXTERN_ENV`不成功，已经超出了环境变量的作用域范围。


然后再编写一个独立调用的脚本，它与前三个脚本是不相关，不过是在同一Shell终端下执行。
`test@test-PC:~/share/1$ vi third.sh `
```
#!/bin/bash
  
printf "%-30s : %s\n" "[$$]<$(basename $0):$FUNCNAME:$LINENO>" "ENV_NAME=$ENV_NAME"
printf "%-30s : %s\n" "[$$]<$(basename $0):$FUNCNAME:$LINENO>" "EXTERN_ENV=$EXTERN_ENV"
```
调用执行结果如下：
```
test@test-PC:~/work/study/shell/share/1$ bash third.sh   
[16280]<third.sh::3>           : ENV_NAME=
[16280]<third.sh::4>           : EXTERN_ENV=
```
因为与前面脚本`export.sh`与相互独立的，无法共享环境变量。

但是，它们都是在同一Shell终端下运行，也就是它有共同的父进程，所以如果需要共享环境变量，只需要在当前Shell终端下设置一个环境变量就可以了， 如：      
`test@test-PC:~/share/1$ export EXPORT_TEST="export_test"`         
然后在`export.sh`和`third.sh`脚本入口添加打印代码：     
`echo EXPORT_TEST=$EXPORT_TEST`      
执行两个脚本，结果如下：     

```
test@test-PC:~/share/1$ bash export.sh 
EXPORT_TEST=export_test
test@test-PC:~/share/1$ bash third.sh 
EXPORT_TEST=export_test
```
可以看到，打印出了共享的环境变量。也可以查看当前Shell终端的环境变量，已经包含了`EXPORT_TEST`。
```
test@test-PC:~/share/1$ env | grep EXPORT_TEST
EXPORT_TEST=export_test
```
但是，这也仅对当前登录的Shell终端生效，但关掉终端重新打开又是一个新的Shell终端，要想永久生效，可以写入环境变量配置文件，如`~/.bashrc`或`~/.bash_profile`等 。Shell终端在登录的时候会自动加载共同的环境变量配置文件，保持在整个终端持续期间生效。

### 2.2 变量替换

|  表达式      | 案例说明  |
|  ----       | ----     |
|`${var:-word}`|  如果变量var已经设置且非空，结果为var的值，否则结果为word|
|`${var:=word}`|  如果变量var已经设置且非空，结果为var的值，否则设置var为word|
|`${var:+word}`|  如果变量var已经设置且非空，则设置var的值为word;否则不替换|
|`${var:?word}` | 如果变量var已经设置且非空，则替换为word，否则退出shell。|

### 2.3 变量嵌套
变量嵌套一般是变量名中仍然包含变量，需要做二次解析，最终求出变量的结果。
#### 2.3.1 `eval`
`eval`命令将会首先扫描命令行进行所有的替换，然后再执行命令。
`test@test-PC:~/share/1$ vi eval.sh `
```bash
#!/bin/bash
var1=abc
var2='It sales $125.00'
var3="It's my book."
var4=4
var5=3.14159

for i in `seq 1 5`
do
    eval echo "var${i}=\${var${i}}"  
    #eval echo "var${i}='$'{var${i}}"
done

```
如下，`i`也循环变量，需要`eval`将字符串的变量解析，然后`echo`执行打印。外层变量的`$`要做转义，否则再未被解析之前会被认为是非法的引用。当然转义也可以用单引号代替。

#### 2.3.2 `${!varname*}`变量名前缀
扩展为名称以 prefix 开始的变量名，匹配`varname`为形状的所有变量名。
先从简单示例开始：
```bash
#!/bin/bash
name="Tom"
column="name"
echo ${!column}
```
`column`先替换为变量 `name`，然后再取变量值，运行结果为：`Tom`
然后再实现上一例子：
`test@test-PC:~/share/1$ vi eval.sh`
```bash
#!/bin/bash
var1=abc
var2='It sales $125.00'
var3="It's my book."
var4=4
var5=3.14159

for var in ${!var*}
do
   echo "$var=${!var}"
done
```
执行结果如下：
```bash
test@test-PC:~/share/1$ bash eval.sh   
var1=abc
var2=It sales $125.00
var3=It's my book.
var4=4
var5=3.14159
```


## 3 awk/sed内使用外部变量
在实际编程中，经常会遇到把shell定义的变量传入给`sed`和`awk`使用，这跟我们普通的命令与函数传参略微有所不同。  
#### 3.1 sed使用外部变量

以下三种方法都是可以的
```bash
test@test-PC:~/share/1$ str="DEF";echo "ABC123FGH"|sed "s/123/"${str}"/g"    
ABCDEFFGH
test@test-PC:~/share/1$ str="DEF";echo "ABC123FGH"|sed 's/123/'"${str}"'/g'  
ABCDEFFGH
test@test-PC:~/share/1$ str="DEF";echo "ABC123FGH"|sed 's/123/'${str}'/g'  
ABCDEFFGH
```
#### 3.2 awk使用外部变量
```bash
test@test-PC:~/share/1$ str="DEF";echo "ABC123FGH"|awk '{gsub("123","'"${str}"'",$1);print $1}'  
ABCDEFFGH
test@test-PC:~/share/1$ str="DEF";echo "ABC123FGH"|awk -v var=${str} '{gsub("123",var,$1);print $1}' 
ABCDEFFGH
```

