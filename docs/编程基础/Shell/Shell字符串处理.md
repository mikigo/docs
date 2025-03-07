---
Author: 海针 - 搬运
---

# Shell字符串处理
## 1. 字母与ASCII码值的转换
### 1.1 ASCII
ASCII 是美国对于信息交换的标准代码,使用7位二进制数来表示所有的大写和小写字母，数字0 到9、标点符号，以及在美式英语中使用的特殊控制字符。
可以使用`man ascii`查看ASCII值列表，我们通常比较字符的大小，实际上是比对的ASCII码值。
截取如下：

| Oct|   Dec|   Hex|   Char                       | Oct  | Dec  | Hex |  Char|
| ---- | ---- | ---- | ----                       | ---- | ---- | ---- | ---- |
| 000|   0  |   00 |   NUL '\0'                   | 100  | 64   | 40  |  @|
| 001|   1  |   01 |   SOH （标题开始）           | 101  | 65   | 41  |  A|
| 002|   2  |   02 |   STX （本文开始）           | 102  | 66   | 42  |  B|
| 003|   3  |   03 |   ETX （本文结束）           | 103  | 67   | 43  |  C|
| 004|   4  |   04 |   EOT （传输结束）           | 104  | 68   | 44  |  D|
| 005|   5  |   05 |   ENQ （请求）               | 105  | 69   | 45  |  E|
| 006|   6  |   06 |   ACK （确认回应）           | 106  | 70   | 46  |  F|
| 007|   7  |   07 |   BEL '\a' （响铃）          | 107  | 71   | 47  |  G|
| 010|   8  |   08 |   BS  '\b' （退格）          | 110  | 72   | 48  |  H|
| 011|   9  |   09 |   HT  '\t' （水平定位符号）  | 111  | 73   | 49  |  I|
| 012|   10 |   0A |   LF  '\n' （换行键）        | 112  | 74   | 4A  |  J|
| 013|   11 |   0B |   VT  '\v' （垂直定位符号）  | 113  | 75   | 4B  |  K|
| 014|   12 |   0C |   FF  '\f' （换页键）        | 114  | 76   | 4C  |  L|
| 015|   13 |   0D |   CR  '\r' （Enter 键）      | 115  | 77   | 4D  |  M|
| 016|   14 |   0E |   SO  （取消变换）           | 116  | 78   | 4E  |  N|
| 017|   15 |   0F |   SI  （开始变换）           | 117  | 79   | 4F  |  O|
| 020|   16 |   10 |   DLE （跳出数据通讯）       | 120  | 80   | 50  |  P|
| 021|   17 |   11 |   DC1 （设备控制1）          | 121  | 81   | 51  |  Q|
| 022|   18 |   12 |   DC2 （设备控制2）          | 122  | 82   | 52  |  R|
| 023|   19 |   13 |   DC3 （设备控制3）          | 123  | 83   | 53  |  S|
| 024|   20 |   14 |   DC4 （设备控制4）          | 124  | 84   | 54  |  T|
| 025|   21 |   15 |   NAK （确认失败回应）       | 125  | 85   | 55  |  U|
| 026|   22 |   16 |   SYN （同步用暂停）         | 126  | 86   | 56  |  V|
| 027|   23 |   17 |   ETB （区块传输结束）       | 127  | 87   | 57  |  W|
| 030|   24 |   18 |   CAN （取消）               | 130  | 88   | 58  |  X|
| 031|   25 |   19 |   EM  （连接介质中断）       | 131  | 89   | 59  |  Y|
| 032|   26 |   1A |   SUB （替换）               | 132  | 90   | 5A  |  Z|
| 033|   27 |   1B |   ESC （退出键）             | 133  | 91   | 5B  |  [|
| 034|   28 |   1C |   FS  （文件分区符）         | 134  | 92   | 5C  |  \ |
| 035|   29 |   1D |   GS  （群组分隔符）         | 135  | 93   | 5D  |  ]|
| 036|   30 |   1E |   RS  （记录分隔符）         | 136  | 94   | 5E  |  ^|
| 037|   31 |   1F |   US  （单元分隔符）         | 137  | 95   | 5F  |  _|
| 040|   32 |   20 |   SPACE                      | 140  | 96   | 60  |  `|
| 041|   33 |   21 |   \!                          | 141  | 97   | 61  |  a|
| 042|   34 |   22 |   \"                          | 142  | 98   | 62  |  b|
| 043|   35 |   23 |   \#                          | 143  | 99   | 63  |  c|
| 044|   36 |   24 |   \$                          | 144  | 100  | 64  |  d|
| 045|   37 |   25 |   \%                          | 145  | 101  | 65  |  e|
| 046|   38 |   26 |   \&                          | 146  | 102  | 66  |  f|
| 047|   39 |   27 |   \´                          | 147  | 103  | 67  |  g|
| 050|   40 |   28 |   \(                          | 150  | 104  | 68  |  h|
| 051|   41 |   29 |   \)                          | 151  | 105  | 69  |  i|
| 052|   42 |   2A |   \*                          | 152  | 106  | 6A  |  j|
| 053|   43 |   2B |   \+                          | 153  | 107  | 6B  |  k|
| 054|   44 |   2C |   \,                          | 154  | 108  | 6C  |  l|
| 055|   45 |   2D |   \-                          | 155  | 109  | 6D  |  m|
| 056|   46 |   2E |   \.                          | 156  | 110  | 6E  |  n|
| 057|   47 |   2F |   \/                          | 157  | 111  | 6F  |  o|
| 060|   48 |   30 |   0                          | 160  | 112  | 70  |  p|
| 061|   49 |   31 |   1                          | 161  | 113  | 71  |  q|
| 062|   50 |   32 |   2                          | 162  | 114  | 72  |  r|
| 063|   51 |   33 |   3                          | 163  | 115  | 73  |  s|
| 064|   52 |   34 |   4                          | 164  | 116  | 74  |  t|
| 065|   53 |   35 |   5                          | 165  | 117  | 75  |  u|
| 066|   54 |   36 |   6                          | 166  | 118  | 76  |  v|
| 067|   55 |   37 |   7                          | 167  | 119  | 77  |  w|
| 070|   56 |   38 |   8                          | 170  | 120  | 78  |  x|
| 071|   57 |   39 |   9                          | 171  | 121  | 79  |  y|
| 072|   58 |   3A |   \:                          | 172  | 122  | 7A  |  z|
| 073|   59 |   3B |   \;                          | 173  | 123  | 7B  |  {|
| 074|   60 |   3C |   \<                          | 174  | 124  | 7C  |  \||
| 075|   61 |   3D |   \=                          | 175  | 125  | 7D  |  }|
| 076|   62 |   3E |   \>                          | 176  | 126  | 7E  |  ~|
| 077|   63 |   3F |   \?                          | 177  | 127  | 7F  |  DEL|

### 1.1 字母转换为ASCII码值
+ 方法一：`printf`
```bash
test@test-PC:~/share/5$ printf "%d\n" "'a"       #注意'\n'是为了换行，让结果显示易读，也可以不要。
97
test@test-PC:~/share/5$ printf "%d\n" \'a
97
test@test-PC:~/share/5$ printf "%d\n" "'\\"      #打印‘\’的ascii这里需要转义
92
test@test-PC:~/share/5$ chr='?'
test@test-PC:~/share/5$ printf "%d\n" "'${chr}"   #可以使用变量
63
```

+ 方法二：`od`
```bash
test@test-PC:~/share/5$ printf "A"| tr -d "\n" | od -An -t dC   #因为字符串中含有换行符，要去掉，否则也会打印换行符的ascii。
   65
test@test-PC:~/share/5$ echo -n "A"| od -An -t dC  #也可以这样不要换行符          
   65
test@test-PC:~/share/5$ printf 'A'| od -An -t dC   #这样也可以
   65 

```

### 1.2 ASCII码值转换为字母
+ 方法一： `awk`

```bash
test@test-PC:~/work/study/shell/share/5$ echo 65| awk '{printf("%c\n", $1)}'  
A
```

+ 方法二： `printf`
```bash
test@test-PC:~/work/study/shell/share/5$ h=$(printf "%x" 65)  #先转换为16进制值，放入变量'h'
test@test-PC:~/work/study/shell/share/5$ printf "\\x$h\n"   #16进制输出为字符显示
A
test@test-PC:~/work/study/shell/share/5$ echo -e "\x$h"  #同上
A
```
也可以写在一行里：
```bash
Atest@test-PC:~/share/5$ printf "\x$(printf '%x' 65)\n"  #注意，最后加\n只是为了输出可读性
A
test@test-PC:~/share/5$ printf "\\$(printf '%o' 65)\n"  
A
test@test-PC:~/share/5$ 
```


## 2. 进制转换
### 2.1 不同进制的数值赋值给变量
```bash
test@test-PC:~/share/5$ ((num=2#1010)); echo $num    #以二进制赋值给变量 
10
test@test-PC:~/share/5$ ((num=8#11)); echo $num     #以八进制赋值给变量  
9
test@test-PC:~/share/5$ ((num=011)); echo $num    #以八进制赋值给变量  
9
test@test-PC:~/share/5$ ((num=16#FF)); echo $num  #以十六进制赋值给变量  
255
test@test-PC:~/share/5$ ((num=0XFF)); echo $num   #以十六进制赋值给变量  
255
```
当然也可以多此一举，以十进制值同赋值给变量
```bash
test@test-PC:~/share/5$ ((num=10#25)); echo $num  
25
test@test-PC:~/share/5$ ((num=25)); echo $num   
25
```

### 2.2 不同进制转换为十进制输出
+ 方法一： `$(( expressions )) `表达式
表示方法`$(( BASE#NUMBER ))`, `BASE`代表进制，可为2,8,10,16进制，`NUMBER`以对应进制的形式显示。       
**注意：这里`NUMBER`不需要再带进制前缀，因为`BASE`已经指明了，如`0xFF`转换为十进制，只需要`$((16#FF))`而不能使用`$((16#0xFF))`。**
```bash
test@test-PC:~/share/5$ num2="1010"; echo $(( 2#$num2 ))  #二进制转十进制
10
test@test-PC:~/share/5$ num8="11"; echo $(( 8#$num8 ))    #八进制转十进制
9
test@test-PC:~/share/5$ num16="FF"; echo $(( 16#$num16 ))  #十六进制转十进制
255
```
如果十六进制字符串前缀已经带了`0X`或者`0x`，需要先删除这两个字符。
```bash
test@test-PC:~/share/5$ num16="0XFF"; echo $(( 16#${num16:2} ))  #十六进制转十进制
255
```
或者
```bash
test@test-PC:~/share/5$ let num16=0xFF; echo $num16
255
test@test-PC:~share/5$ num=0xff; echo $(($num))   #默认是以十进制输出
255
```

+ 方法二： `bc`
`bc`进制转换需要2个内置变量,`ibase`和`obase`， `ibase`为输入进制，`obase`为输出进制,默认为十进制输出。
```bash
test@test-PC:~/share/5$ num2='1010';echo "ibase=2;$num2" | bc  #二转十
10
test@test-PC:~/share/5$ num8='11';echo "ibase=8;$num8" | bc    #八转十
9
test@test-PC:~/share/5$ num16='FF';echo "ibase=16;$num16" | bc #十六转十
255
```


### 2.3 十进制转换为不同进制输出
+ 方法一： `printf`
```bash
test@test-PC:~/share/5$ num=9; printf "%o\n" $num    #输出为八进制
11
test@test-PC:~/share/5$ num=255; printf "%x\n" $num  #输出为十六进制
ff
test@test-PC:~/share/5$ num=255; printf "%X\n" $num  #大写的十六进制
FF
test@test-PC:~/share/5$ num=255; printf "0X%X\n" $num  #加0X前缀十六进制
0XFF
```
`printf`不支持直接输出十进制数据，我们可以通过其它方法实现,比如用`bc`。

+ 方法二： `bc`
```bash
test@test-PC:~/share/5$ num=10;echo "obase=2; $num" | bc    
1010
test@test-PC:~/share/5$ num=9; echo "obase=8; $num" | bc
11
test@test-PC:~/share/5$ num=255; echo "obase=16; $num" | bc  
FF
```


## 3. 字符串与数组的转换
### 3.1 数组转换为字符串

在Bash中，你可以使用`"${array[@]}"`或`"${array[*]}"`来获取数组的所有元素，并使用`printf`或`echo`结合字符串连接符`""`将它们转换为单个字符串。

```shell
#!/bin/bash

# 声明一个数组
array=(one two three)

# 使用 printf 将数组转换为以空格分隔的字符串
string=$(printf "%s " "${array[@]}")
echo "Array as string (with spaces): $string"

# 使用 printf 将数组转换为以特定字符分隔的字符串
delimiter=,
string=$(printf "%s$delimiter" "${array[@]}")
# 移除末尾的分隔符
string=${string%,}
echo "Array as string (with commas): $string"
```

### 3.2 字符串转换为数组

要将字符串转换为数组，你可以使用内置的`read`命令或者直接通过赋值操作。

```shell
#!/bin/bash

# 声明一个以空格分隔的字符串
string="one two three"

# 使用内置的 read 命令将字符串转换为数组
read -ra array <<< "$string"
echo "String converted to array:"
for item in "${array[@]}"; do
  echo "$item"
done

# 或者直接赋值
array=($string)
echo "String converted to array using direct assignment:"
for item in "${array[@]}"; do
  echo "$item"
done

# 如果字符串是以逗号分隔的，可以这样做
string="one,two,three"
IFS=',' read -ra array <<< "$string"
echo "Comma-separated string converted to array:"
for item in "${array[@]}"; do
  echo "$item"
done
```

在上面的代码中，`IFS`代表内部字段分隔符（Internal Field Separator），它定义了如何分割字符串。通过设置`IFS=','`，我们告诉`read`命令使用逗号作为字段分隔符。在使用完`IFS`之后，最好将其重置为默认值，以避免影响脚本中其他部分的执行。



## 4. Bash字符串处理
声明一个字符串，并赋初值，本节对字符串的处理都是这个串作为示例。    
`string="https://zhidao.baidu.com" `
### 4.1 字符串变量处理
| 表达式|说明   |
| ---- | ---- |
|`${string}`	|变量`string`的值, 与`$string`相同|
|`${string-DEFAULT}`	|如果`string`没有被声明, 那么就以`$DEFAULT`作为其值|
|`${string:-DEFAULT}`|	如果`string`没有被声明, 或者其值为空, 那么就以`$DEFAULT`作为其值，判断var变量是否没有定义|
|`${string=DEFAULT}`	|如果`string`没有被声明, 那么就以`$DEFAULT`作为其值|
|`${string:=DEFAULT}`|	如果`string`没有被声明, 或者其值为空, 那么就以`$DEFAULT`作为其值 ，判断var变量是否没有定义，并确保变量始终有值|
|`${string+OTHER}`	|如果`string`声明了, 那么其值就是`$OTHER`, 否则就为`null`字符串|
|`${string:+OTHER}`	|如果`string`被设置了, 那么其值就是`$OTHER`, 否则就为`null`字符串|
|`${string?ERR_MSG}`	|如果string没被声明, 那么就打印`$ERR_MSG`|
|`${string:?ERR_MSG}`|	如果string没被设置, 那么就打印`$ERR_MSG`|
|`${!varprefix*}`	|匹配之前所有以`varprefix`开头进行声明的变量|
|`${!varprefix@}`	|匹配之前所有以`varprefix`开头进行声明的变量|
### 4.2 字符串长度

| 表达式|说明   |
| ---- | ---- |
|`${#string}` |计算字符串`string`长度。|

```bash
test@test-PC:~/share/5$ echo ${#string}
24
```
### 4.3 字符串截取
| 表达式|说明   |
| ---- | ---- |
|`${string#substring}`| 从变量`$string`的左侧开始, 删除最短匹配`$substring`的子串。|
|`${string##substring}`|从变量`$string`的左侧开始, 删除最长匹配`$substring`的子串。|
|`${string%substring}`|从变量`$string`的右侧开始, 删除最短匹配`$substring`的子串。|
|`${string%%substring}`| 从变量`$string`的右侧开始, 删除最长匹配`$substring`的子串。|

```bash
test@test-PC:~/share/5$ echo ${string#*.}  #从左开始，删除匹配到第1个.及其前面的子串
baidu.com
test@test-PC:~/share/5$ echo ${string##*.} #从左开始，删除匹配到最后1个.及其前面的子串
com
test@test-PC:~/share/5$ echo ${string%.*}  #从右开始，删除匹配到第1个.及其后面的子串
https://zhidao.baidu
test@test-PC:~/share/5$ echo ${string%%.*} #从右开始，删除匹配到最后1个.及其后面的子串
https://zhidao
```
### 4.4 字符串替换   
| 表达式|说明   |
| ---- | ---- |
|`${string/substring/replacement}`| 使用`$replacement`, 来代替第一个匹配的`$substring`的子串。|
|`${string//substring/replacement}`|使用`$replacement`, 代替所有匹配的`$substring`|
|`${string/#substring/replacement}`|从变量`string`的右侧开始, 删除最短匹配`substring`的子串。|
|`${string/%substring/replacement}`| 从变量`string`的右侧开始, 删除最长匹配`substring`的子串。|

### 4.5 字符串连接
将多个字符串并排放到一起就能实现字符中的连接 。     
```bash   
test@test-PC:~/work/study$ A='aaa'; echo "Output:$A"
Output:aaa
test@test-PC:~/work/study$ A='aaa';B='bbb'; echo $A$B
aaabbb
test@test-PC:~/work/study$ C=$A$B;echo $C
aaabbb
```

### 4.6 字符串切片操作
通过 **${变量名:起始:长度}** 得到子字符串。

| 表达式|说明   |
| ---- | ---- |
|`${string:offset}`|	返回字符串变量`string`中从第`offset`个字符后面\（不包括第`offset`个字符\）的字符开始，到最后的部分。<br> 注意：`offset` 的取值在`0`到 `${#var}-1` 之间。|
|`${string:offset:number}`	|  返回字符串变量`string`中从第`offset`个字符后面\（不包括第`offset`个字符\）的字符开始，长度为`number`的部分。|
|`${string: -length}`	|   取字符串的最右侧几个字符。<br> 注意：冒号后必须有一空白字符。|
|`${string:offset: -length}`|  从最左侧跳过`offset`字符，一直向右取到距离最右侧`lengh`个字符之前的内容。|
|`${string: -length:offset}`|	先从最右侧向左取到`length`个字符开始，再向右取到距离最右侧offset个字符之间的内容。<br> 注意：`-length`前空格。|

```bash
test@test-PC:~/work/study$ echo ${url:8}
www.debian.org
test@test-PC:~/work/study$ echo ${url:0:1}
h
test@test-PC:~/work/study$ echo ${url:1:3}
ttp
test@test-PC:~/work/study$ echo ${url:8: -4}
www.debian
test@test-PC:~/work/study$ echo ${url: -3:3}
org
```

### 4.7 字符串比较大小
字符串是按照从左向右对字母的ASCII值大小进行比较，不关心字符串的长度，比较过程中左侧同等位置的字母大者字符串为大。

| 表达式|说明   |
| ---- | ---- |
|  `= ` | 等于,如:`if [ "$a" = "$b" ]`|
|  `==` | 等于,如:`if [ "$a" == "$b" ],` 与`=`等价<br>注意:`==`的功能在`[[]]`和`[]`中的行为是不同的,如下:<br>  1  `[[ $a == z* ]]`      # 如果`$a`以`"z"`开头(模式匹配)那么将为true<br>  2  `[[ $a == "z*" ]]`  # 如果`$a`等于`z*`(字符匹配),那么结果为true<br>  3  `[ $a == z* ] `          # 如果`$a`等于`z*`(字符匹配),那么结果为true<br>  4 `[ "$a" == "z*" ] `   # 如果`$a`等于`z*`(字符匹配),那么结果为true |
|  `!=` |     不等于,如:`if [ "$a" != "$b" ]`， 这个操作符将在`[[]]`结构中使用模式匹配.|
|  `<`  | 小于,在ASCII字母顺序下.如:<br>    `if [[ "$a" < "$b" ]]`<br>     `if [ "$a" \< "$b" ]`     在`[]`结构中`"<"`需要被转义. |
|  `>`  | 大于,在ASCII字母顺序下.如:<br>    `if [[ "$a" > "$b" ]]`<br>    ` if [ "$a" \> "$b" ]`  在`[]`结构中`">"`需要被转义. |
|  `-z` |      字符串为空.就是长度为0.|
|  `-n`|      字符串不为空|

