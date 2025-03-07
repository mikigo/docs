---
Author: 海针 - 搬运
---

## Shell数学运算
## 1. 常用的数学运算工具及表达式
|  工具/表达式      | 案例说明  |
|  ----            | ----     |
|`$[ expressions ]`  |	支持整数运算， 如 `var = $[ 3 + 2 ]`,   `var = $[ var * 10 ]`。    |
|`$((  expressions  ))`	|支持整数运算，功能更为强大灵活，类C语言表达式风格，支持三元运算，支持自增自减，如`$((1+2+3))`， `$(($i++)) `   |
|`expr`	|支持整数运算，如 `expr $i + 2`, 注意表达式中每个参数之间要有空格，并且有类似*这样的通配符还要转义。 如`expr 2 + 3` ,   `expr 5 \* 6  `  |
|`let `  |	用于整数计算，支持自增自减运算， 注意表达式中每个参数之间不能有空格， 如`let i++;let i++1;  `   |
|`bc `   |	计算器，支持浮点运算, 如 `echo “2+3” \| bc` ,  `echo “scale=2;5/2” \| bc `   |
|`awk/gawk  `|	强大的文本和字符串处理工具，类C语言表达式风格，如 `echo \| awk '{ printf("%d\n",2+3) }' ` |

### 1.1 `$[ expression ]`表达式

+ 1) `$[...]`表达式中变量符号$可有可无，表达式各参数之间空格可有可无。支持`+,-,*,/,%, ++,--,>,<,==,**,&&,||`等运算符。   

      如`a=8;` `echo $[$a+8]`等同于`echo $[ a + 8 ]`, `$`和`空格`可有可无。   
  更多示例如下：

  ```bash
  test@test-PC:~$  a=8; echo $[ ($a+2)*3/2-3 ]
  12
  test@test-PC:~$  a=8; a=8; a=$[$a%2];echo $a      
  0
  test@test-PC:~$  a=8; a=$[$a**2];echo $a 
  64
  test@test-PC:~$  a=8; b=$[ a > 5 ];echo $b
  1
  test@test-PC:~$  a=8; b=$[ a <= 5 ];echo $b 
  0
  test@test-PC:~$ a=8;echo $[ a<<2 ] 
  32
  test@test-PC:~$ a=8;echo $[ --a ],$a
  7,7
  test@test-PC:~$ a=8;echo $[ a++ ],$a
  8,9
  test@test-PC:~$ a=8;b=0;echo $[ a>5 && b>5 ] 
  0
  ```

+ 2) 注意和`[ expressions ]`表达式做区分,`[]`是test的用法变体，在`[]`表达式中变量必须带`$`，各参数之间必须有空格，数值比较必须用`lt,le,gt,ge,eq,ne`参数，如用`<>=`符号，则视为字符串比较。
  ```bash
  test@test-PC:~$ if [ $a -gt 5 ];then echo "a>5";fi
  a>5
  test@test-PC:~$ [ $a \> 5 ] && echo "a>5"      # 注意< > 前要转义，不然会被认为是重定向
  a>5
  test@test-PC:~$ [ $a \< 5 ] && echo "a>5" 
  test@test-PC:~$ [ $a -lt 5 ] && echo "a>5"  
  ```

### 1.2 `$(( expressions )) `表达式
`$(( expressions ))`除了具备 `$[ expression ]`的运算符支持的能力外，还支持多个表达式运算，进制转换。

- 支持多个表达式运算， 表达式之间用“,”分隔。
```bash
# 返回最后一个表达式的执行结果
test@test-PC:~$ echo $((a=8,b=10,c=a+b))   
18

#每个表达式都依次进行了计算，可以打印出结果
test@test-PC:~$ echo $((a=8,b=10,c=a+b));echo $a,$b,$c    
18
8,10,18
```
- 转换成10进制输出
```bash
test@test-PC:~$ echo $((2#11110000))    
240
test@test-PC:~$ echo $((8#7))             
7
test@test-PC:~$ echo $((16#2B))      
43
test@test-PC:~$ echo $((0xF0000000))   
4026531840
test@test-PC:~$ echo $((0264))  
180
```
- 类C语言风格的for循环
```bash
for (( i=1; i<5; i++ )) 
do 
    echo -n "$i"
done
```

### 1.3 `expr` 
expr工具可以用来进行整数数值运算和数值比较，需注意以下几点：
- 只能对整数参数进行运算和比较 
- 参数之间必须有空格
- 对于通配符如*，必须要转义
- 变量必须使用$来引用   
  

用法如下：

- 整数数学运算和逻辑判断 
```bash
test@test-PC:~$ a=8;expr $a + 10
18
test@test-PC:~$ a=8;expr $a \* 10
80
test@test-PC:~$ a=8;expr \( $a \* 10 \) / 4
20
test@test-PC:~$ a=8;expr $a % 5  
3
test@test-PC:~$ a=8;expr $a \> 5
1 
test@test-PC:~$ a=8; result=$(expr $a + 10);echo ${result}    #将expr的计算结果赋值给变量result
18
```

- 判断变量是否为整数   
由于expr只能对整数进行数学运算，所以可以通过expr命令的退出码来判断是变量是否为整数
```bash
test@test-PC:~$ a='x';expr $a + 5 
expr: 非整数参数
test@test-PC:~$ echo $?     # 捕捉expr退出码非0, 说明变量a非整数
2
```

### 1.4 `let`

let是shell内置命令，常用于整数的整值运算，使用时需要注意   
+ `let` 只接受整数数值运算，传入变量为字符串会默认变量值为0. （实际测试还会出现未知的异常错误）
+ `let` 运算=号左右两边不能有空格， 除非let 的表达式用双引号引起来（建议）
+ `let` 等式中的变量可以不用带`$`， 对于`*`,`()`符号可以不用转义。
  

用法：
```bash
test@test-PC:~$ a=8; let a=3+a+4; echo $a
15
test@test-PC:~$ a=8; let a=(3+a)*2; echo $a      
22
test@test-PC:~$ a="string"; let a=3+a; echo $a 
3 
test@test-PC:~$ a=8; let a++; echo $a 
9
test@test-PC:~$ a=8; let --a; echo $a   
7
test@test-PC:~$ a=1;b=2;let a+=7 b+=3;echo $a,$b     # 多个表达式计算，表达式之间用空格分隔 
8,5
test@test-PC:~$ a=1;b=2; let d=$((c=a*2+b*3)); echo $d        # let可以和$(( expressions )) 结合使用
8
```
在循环中使用let计数:
```bash
i=0
while [ $i -lt 10 ]
do
    echo "Do something here!"
    let i++
done
```

### 1.5 `bc`
bc计算器，不仅可以进行整数计算，还支持对浮点数的运算，进制转换，幂运算。
+ 整数计算，逻辑判断
```bash
test@test-PC:~$ echo "8+2*5/(4-2)" | bc   
13
test@test-PC:~$ echo "8%5" | bc 
3
test@test-PC:~$ a=8; echo "$a>5"|bc
1
```

+ 浮点数计算
```bash
test@test-PC:~$ a=8;echo "scale=2;$a/3" |bc    #scale用来设置精度，即小数点的位数
2.66
test@test-PC:~$ a='0.3'; echo "$a*2"|bc     # .6 是个什么鬼，bc不完美的地方可以用printf进行修复	
.6
test@test-PC:~$ a='0.3'; printf "%.2f\n" $(echo "$a*2"|bc) 
0.60
```
**注意：`bc`变量`scale`设置的小数位只对除法有效，加减乘法还是输出最高精度，想要保留具体小数点位数建议还是使用`printf`格式化打印**

+ 进制转换
```bash
test@test-PC:~$ echo "ibase=16;A"|bc         # ibase 设置输入为16进制。 obase不设置默认输出为10进制
10
test@test-PC:~$ echo "ibase=16;obase=2;A"|bc    # 将obase设置为2进制
1010
```

+ 科学计算，利用bc -l 使用数学库来实现求幂运算，正弦，余弦，正切等
```bash
ftest@test-PC:~$ echo "2^3"|bc    
8
test@test-PC:~$ echo "sqrt(8)"|bc
2
test@test-PC:~$ a=8;echo "scale=6;e($a)"|bc -l      
2980.957987
test@test-PC:~$ a=8;echo "scale=6;s($a)"|bc -l  
.989358
test@test-PC:~$ 
```

+ 批量运算 
```bash
length=12
width=12
height=8
bc << EOF
cycle=2*($length+$width)
area=$length*$width
volume=area*$height
obase=16
volume
EOF
```

### 1.6 `awk/gawk`
awk是一款非常强大的文本处理工作，涉及大量的文本处理工作时选择awk无疑是高效的，awk使用方法网上有大量的介绍。本章节重点使用awk来进行数学运算。   

awk/gawk已经可以作为一门编程语言，在数学运算上参照C语言编程规范， 支持
+ 算术运算: `+,-,*,/,%,++,--`
+ 关系运算: `> ,<,==,<=,>=,!=`
+ 逻辑运算：` &&,||,!`
+ 赋值运算: `=,+=,-=,*=,/=,%=, &=,^=,|=`
+ 三元运算: `?:`
+ 位运算函数：`lshift(var,count)，rshift(var,count), or(var1,var2), xor(var1,var2), and(var1,var2),compl(var)`
+ 内置数学函数：`sin(var),cos(var),exp(var),sqrt(var),log(var)` ,等等 
更为关键的是，awk/awk还可以自定义算法函数， 可以处理更为复杂的逻辑运算。

用法
```bash
test@test-PC:~$ echo | awk '{printf("%d\n",3+4)}'
7
test@test-PC:~$ echo | awk '{printf("%d\n",8*4)}'  
32
test@test-PC:~$ echo | awk -v a=8 '{printf("%d,%d\n",a>=5,a)}'
1,8
test@test-PC:~$ echo | awk -v a=8 '{printf("%d,%d\n",a&&0,a)}'
0,8
test@test-PC:~$ echo | awk -v a=8 '{printf("%d,%d\n",a>5?1:0,a)}'
1,8
test@test-PC:~$ echo | awk -v a=8 '{printf("%d\n",rshift(a,2))}'
2
test@test-PC:~$ echo | awk -v a=24 '{printf("%.2f\n",cos(a))}'
0.42
test@test-PC:~$ echo | awk -v a=8 '{printf("%.2f\n",sqrt(a))}'
2.83
```

## 2. Shell数学运算实践
  本节参考一段C语言代码，获取字符串的hash值，把C语言代码转换成Bash语言和awk，来练习之前章节所学习的一些技能。

### 2.1 C语言Hash算法

以下C语言代码中`ELFHash`函数来源于<http://www.partow.net/programming/hashfunctions>    
`test@test-PC:~/work/study/cplus$ vi hash.c `
```c
#include <stdio.h>
#include <stdlib.h>
#include <string.h>

unsigned int ELFHash(const char* str, unsigned int length)
{
        unsigned int hash = 0;
        unsigned int x    = 0;
        unsigned int i    = 0;
        for (i = 0; i < length; ++str, ++i)
        {
                hash = (hash << 4) + (*str);
                if ((x = hash & 0xF0000000L) != 0)
                {
                        hash ^= (x >> 24);
                }
                hash &= ~x;
        }

        return hash;
}

int main(char *argv[], int argc)
{
        const char str[] = "UOS is the best Opeartion System!";
        const char *ptr  = str;
        unsigned int hash;

        hash = ELFHash(ptr,strlen(str));

        printf("Hash value is :[%d]\n",hash);
        return 0;
}
```
编译执行，结果如下：
```
test@test-PC:~/work/study/cplus$ gcc -o ELFHash hash.c
test@test-PC:~/work/study/cplus$ ./ELFHash 
Hash value is :[680273]
```

### 2.2 Bash语言Hash算法   
`test@test-PC:~/work/study/cplus$ vi hash.sh `

```bash
#!/bin/bash
  
function ELFHash()
{
    declare -i hash=0;
    declare -i x=0;
    declare -i i=0;

    charr=$1
    length=$2

    for ((i = 0; i < length; ++i))
    do
        ch=$(printf "%d" "'${charr:$i:1}")   #将字母转换为ASC码值

        hash=$(( (hash << 4) + ch ))
        x=$(( hash & 0xF0000000 ))

        if [ $x -ne 0 ]; then
            hash=$(( hash ^ (x >> 24) ))
        fi

        hash=$(( hash & (~x) ))
     done

     echo ${hash}                         #将结果打印
     return 0
}

function main()
{
    declare -r str="UOS is the best Opeartion System!"
    declare -i retval

    retval=$(ELFHash "${str}" "${#str}") 
    printf "Hash value is :[%d]\n" "${retval}"

    return 0;
}

main
```

执行结果如下：
```
test@test-PC:~/work/study/cplus$ bash hash.sh 
Hash value is :[680273]
```

### 2.3 awk语言Hash算法

`test@test-PC:~/work/study/cplus$ vi hash.awk `
```awk
#!/bin/awk -f
  
function ELFHash(str,len)
{
    x = 0
    hash = 0
    split(str, charr, "")              #将字符串转换为数组，方便遍历
    for ( i = 1; i <= len; ++i ) {
        ch = ascii[charr[i]]
        hash=lshift(hash,4) + ch
        x= and(hash, 0xF0000000L)

        if( x != 0 ) {
            hash= xor(hash, rshift(x,24) )
        }

        hash = and( hash, compl(x) )
    }
    return hash
}

BEGIN {
    str="UOS is the best Opeartion System!"

    # 将字母和ASCII码值建立映射关系，便于后面函数取ASCII值
    for (i = 0; i < 256; ++i) { ascii[sprintf("%c", i)] = i; }

    retval = ELFHash(str,length(str))
   
    printf("Hash value is :[%d]\n",retval);
}
```

执行结果如下：
```
test@test-PC:~/work/study/cplus$ awk -f hash.awk 
Hash value is :[680273]
```