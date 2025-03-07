---
Author: 海针 - 搬运 Google开源项目风格指南之《Shell风格指南》
---

 

# Shell风格指南

 

## **1.** *引言*

### **1.1.** **目的**

本规范用于指导Shell脚本编写人员，统一编码风格，提升代码的易读性和健壮性。

本规范不能替代ShellCheck等静态检查工具，请在提升代码前使用ShellCheck进行静态检查。

### **1.2.** **说明**

本规范中条目分为如下三个级别：

【强制】必须遵守的编码规范，新增代码必须严格按照规范编写，历史代码根据项目实际情况决定是否修改。

【建议】建议遵守的编码规范，根据代码所处上下文决定编码风格，但需要保持在同一项目中统一风格。

【注意】编码过程中的注意事项，通常为容易出现缺陷的代码，应当用合理的编码方式进行替代。



## 2. **环境**

### 2.1. **STDOUT** **vs STDERR**

【建议】所有的错误信息都应该被导向STDERR。

推荐使用类似如下函数，将错误信息和其他状态信息一起打印出来。

```shell
err() {
	echo "[$(date +'%Y-%m-%dT%H:%M:%S%z')]: $@" >&2
}

if ! do_something; then
    err "Unable to do_something"
    exit "${E_DID_NOTHING}"
fi
```

 

## 3. **注释**

### 3.1. **文件头注释**

【强制】可执行文件首行必须指定脚本解释器，通常以 #!/bin/bash 开始。

【强制】每个文件必须包含一个顶层注释，对其内容进行简要概述。

【建议】脚本中尽量使用英文注释，防止切换系统环境后出现中文乱码问题。

如果脚本仅限于公司内部使用，那么版权声明和作者信息是可选的。如果用于版本发布，那么至少要在头文件中携带版权声明。

示例：不带版权声明

```shell
#!/bin/bash
#
# Perform hot backups of Oracle databases.
```

示例：带版权声明

```shell
#!/bin/bash
# 
# Copyright (C) 2020 Deepin Technology Co., Ltd.
#
# This program is free software: you can redistribute it and/or modify
# it under the terms of the GNU General Public License as published by
# the Free Software Foundation, either version 3 of the License, or
# any later version.
#
# This program is distributed in the hope that it will be useful,
# but WITHOUT ANY WARRANTY; without even the implied warranty of
# MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
# GNU General Public License for more details.
#
# You should have received a copy of the GNU General Public License
# along with this program. If not, see <http://www.gnu.org/licenses/>.
#
#Name : xxx.sh
#Desciption : xxx
#Time : 2020/10/21 上午10:10
#Author : xxx
#Connect : xxx@uniontech.com
```

 

### 3.2. **函数定义注释**

【强制】任何不是既明显又短的函数都必须被注释。

其他人通过阅读注释（和帮助信息，如果有的话）就能够学会如何使用你的程序或库函数，而不需要阅读代码。所有的函数注释应该包含：

* 函数的描述

* 全局变量的使用和修改

* 使用的参数说明

* 返回值，而不是上一条命令运行后默认的退出状态

例如：

```shell
#!/bin/bash
#
# Perform hot backups of Oracle databases.

export PATH='/usr/xpg4/bin:/usr/bin:/opt/csw/bin:/opt/goog/bin'

#######################################
# Cleanup files from the backup dir
# Globals:
#  BACKUP_DIR
#  ORACLE_SID
# Arguments:
#  None
# Returns:
#  None
#######################################
cleanup() {
...
}
```



### 3.3. **代码体注释**

【强制】注释代码中含有技巧、不明显、有趣的或者重要的部分。

如果有一个复杂的算法或者你正在做一些与众不同的，放一个简单的注释。并非注释所有代码。

 

### 3.4. **TODO注释**

【强制】使用TODO注释临时的、短期解决方案的、或者足够好但不够完美的代码。

TODO应当为全部大写字符串，接着是括号中你的名字。冒号是可选的。最好在TODO条目之后加上 bug或者ticket 的序号。

例如：

```shell
# TODO(mrmonkey): Handle the unlikely edge cases (bug ####)
```



## 4. **格式**

### 4.1. **缩进**

【强制】缩进为4个空格，禁止使用TAB制表符来代替空格。 

【建议】对于已有文件，或者从第三方开源获取的文件，保持已有的缩进格式。

【建议】在代码块之间请使用空行以提升可读性。 

 

### 4.2. **行的长度**

【强制】行的最大长度为120个字符。

如果你必须写长度超过120个字符的字符串，如果可能的话，尽量使用here document或者嵌入的换行符。长度超过120个字符的文字串且不能被合理地分割，这是正常的。但强烈建议找到一个方法使其变短。

```shell
# DO use 'here document's
cat <<END;
I am an exceptionally long
string.
END

# Embedded newlines are ok too
long_string="I am an exceptionally
long string."
```

 

### 4.3. **管道**

【建议】如果一行容不下整个管道操作，那么请将整个管道操作分割成每行一个管段。如果一行容得下整个管道操作，那么请将整个管道操作写在同一行。

 

否则，应该将整个管道操作分割成每行一个管段，管道操作的下一部分应该将管道符放在新行并且缩进4个空格。这适用于使用管道符’|’的合并命令链以及使用’||’和’&&’的逻辑运算链。

```shell
# All fits on one line
command1 | command2

# Long commands
command1 \
    | command2 \
    | command3 \
    | command4
```

 

### 4.4. **循环**

【强制】将 ; do , ; then 和 while , for , if 放在同一行。

shell中的循环略有不同，但是我们遵循跟声明函数时的大括号相同的原则。也就是说， ; do , ; then 应该和 if/for/while 放在同一行。 else 应该单独一行，结束语句应该单独一行并且跟开始语句垂直对齐。

例如：

```shell
for dir in ${dirs_to_cleanup}; do
    if [[ -d "${dir}/${ORACLE_SID}" ]]; then
        log_date "Cleaning up old files in ${dir}/${ORACLE_SID}"
        rm "${dir}/${ORACLE_SID}/"*
        if [[ "$?" -ne 0 ]]; then
            error_message
        fi
    else
        mkdir -p "${dir}/${ORACLE_SID}"
        if [[ "$?" -ne 0 ]]; then
        error_message
        fi
    fi
done
```



### 4.5. **case语句**

【强制】可选项与case关键字首字母对齐。

【强制】操作命令表达式和 ;; 符号缩进4个空格， ;; 与操作命令表达式左对齐。

【强制】可选项与右圆括号之间不能有空格。

【建议】通常情况下，可选项，操作命令表达式和 ;; 符号在不同的行。如果整个表达式可读，简单的命令可以跟可选项和 ;; 写在同一行，但可选项右圆括号之后和结束符  ;; 之前各需要一个空格。

示例：

```shell
case "${expression}" in
    a)
        variable="..."
        some_command "${variable}" "${other_expr}" ...
        ;;
    absolute)
        actions="relative"
        another_command "${actions}" "${other_expr}" ...
        ;;
    *)
        error "Unexpected expression '${expression}'"
    	;;
esac
```

只要整个表达式可读，简单的命令可以跟可选项和 ;; 写在同一行。这通常适用于单字母选项的处理。也可以将选项与命令放一行，而 ;; 单独放一行。无论哪种写法，必须保证在同一case语句中的语法风格一致，同时选项，括号与 ;; 使用一个空格分隔。

示例：选项、命令和 ;; 写在同一行。

```shell
verbose='false'
aflag=''
bflag=''
files=''
while getopts 'abf:v' flag; do
    case "${flag}" in
        a) aflag='true' ;;
        b) bflag='true' ;;
        f) files="${OPTARG}" ;;
        v) verbose='true' ;;
        *) error "Unexpected option ${flag}" ;;
    esac
done
```

 

示例：选项和命令写在一行， ;; 单独一行。

```shell
verbose='false'
aflag=''
bflag=''
files=''
while getopts 'abf:v' flag; do
    case "${flag}" in
        a)aflag='true' 
        ;;
        b)bflag='true' 
        ;;
        f) files="${OPTARG}"
        ;;
        v) verbose='true' 
        ;;
        *) error "Unexpected option ${flag}"
        ;;
    esac
done
```

 

### 4.6. **变量扩展**

【强制】如果变量值是系统路径，那么${var} 必须用双引号引起来。

【建议】引用变量，推荐用 ${var} 而不是 $var 。

【建议】除非绝对必要或者为了避免困惑，否则不要用大括号将单个字符的shell特殊变量或定位变量括起来。推荐将其他所有变量用大括号括起来。

 

示例：当位置参数超过10个时，对于第10个及以上参数变量的引用必须大括号括起来

```shell
# Braces necessary:
echo "many parameters: ${10}"
```

示例：单字符的特殊变量或小于10的位置变量，不建议用大括号括起来

```shell
# Preferred style for 'special' variables:
echo "Positional: $1" "$5" "$3"
echo "Specials: !=$!, -=$-, _=$_. ?=$?, #=$# *=$* @=$@ \$=$$ ..."
```

示例：为避免困惑用大括号括起来

```shell
# Braces avoiding confusion:
# Output is "a0b0c0"
set -- a b c
echo "${1}0${2}0${3}0"
```

示例：包含路径的变量用引号引起来

```shell
# Preferred style for other variables:
PATH="${PATH}"
FILENAME="one_file"
cp -pf "${PATH}/${FILENAME}" "${PWD}/"
```



## 5. **命名约定**

### 5.1. **文件名**

【强制】文件名使用小写字母，单词之间用下划线分隔。

【建议】作为可执行程序入口脚本，脚本名称不带.sh后缀，对于库函数文件名，脚本名称需带.sh后缀。

### 5.2. **变量名**

#### 5.2.1. **常量和环境变量**

【强制】常量和环境变量全部大写，单词用下划线分隔，声明在文件顶部，文件头注释之下。

```shell
# Constant
readonly PATH_TO_FILES='/some/path'

# Both constant and environment
export ORACLE_SID='PROD'
```

 

#### 5.2.2. **只读变量**

【建议】使用 readonly 或者 declare -r 来确保变量只读。

因为全局变量在shell中广泛使用，所以在使用它们的过程中捕获错误是很重要的。当你声明了一个变量，希望其只读，那么请明确指出。

```shell
zip_version="$(dpkg --status zip | grep Version: | cut -d ' ' -f 2)"
if [[ -z "${zip_version}" ]]; then
	error_message
else
	readonly zip_version
fi
```

 

#### 5.2.3. **本地变量**

【强制】使用 local 来声明局部变量以确保其只在函数内部和子函数中可见。这避免了污染全局命名空间和不经意间设置可能具有函数之外重要性的变量。

【强制】当赋值的值由命令替换提供时，声明和赋值必须分开。因为内建的 local 不会从命令替换中传递退出码，会导致set -e设置不生效。

```shell
my_func2() {
    local name="$1"
    # Separate lines for declaration and assignment:
    local my_var
    my_var="$(my_func)" || return
    # DO NOT do this: $? contains the exit code of 'local', not my_func
    local my_var="$(my_func)"
    [[ $? -eq 0 ]] || return
    ...
}
```

 

### 5.3. **函数名**

【强制】函数名全部使用小写字母，单词之间用下划线分隔。

【强制】函数名之后必须有小括号。

【建议】定义函数的关键function是可选的，但必须在一个项目中保持一致。

【建议】定义函数体的左大括号可以和函数名在同一行，也可以另起一行，但必须在一个项目中保持一致。

【建议】函数名的定义尽量可以反映出函数的功能，即通过函数名可知道函数的作用，因此函数名中的单词不建议使用缩写。

 

### 5.4. **函数使用**

【强制】将文件中所有的函数一起放在常量下面。不要在函数之间隐藏可执行代码。

只有source， set 声明和常量设置可能在函数声明之前完成。不要在函数之间隐藏可执行代码。

【强制】对于独立完成一个功能的脚本，入口主程序放入一个称为main的函数，作为脚本最下面的函数，文件中最后的非注释行应该是对 main 函数的调用。

```shell
main "$@"
```

【建议】每个函数尽可能只处理一个小功能，代码量在100行以内，超出行数建议分拆。

【建议】多次反复调用的代码建议独立成函数，简化程序，使条理更清晰。

 

## 6. **命令调用**

### 6.1. **内建命令和外部命令**

【强制】对于shell内建命令和外部程序之间选择，优先选择内建命令。

例如：

```shell
# Prefer this:
addition=$((${X} + ${Y}))
substitution="${string/#foo/bar}"

# Instead of this:
addition="$(expr ${X} + ${Y})"
substitution="$(echo "${string}" | sed -e 's/^foo/bar/')"
```



### 6.2. **检查返回值**

【强制】命令及表达式的使用，总是检查返回值，并根据返回值做出响应。

对于非管道命令，使用 $? 或直接通过一个 if 语句来检查以保持其简洁。如果判断逻辑简单并且处理代码简短也可以使用[[...]]结合&&和||在一行中处理。

例如：

```shell
if ! mv "${file_list}" "${dest_dir}/" ; then
    echo "Unable to move ${file_list} to ${dest_dir}" >&2
    exit "${E_BAD_MOVE}"
fi

# Or
mv "${file_list}" "${dest_dir}/"
if [[ "$?" -ne 0 ]]; then
    echo "Unable to move ${file_list} to ${dest_dir}" >&2
    exit "${E_BAD_MOVE}"
fi

# Or
[[ ! -d "${dest_dir}/" ]] && echo "No such directory" >&2 && exit "${E_BAD_MOVE}" 
```

Bash 也有 PIPESTATUS 变量，允许检查从管道所有部分返回的代码。如果仅仅需要检查整个管道是成功还是失败，以下的方法是可以接受的：

```shell
tar -cf - ./* | ( cd "${dir}" && tar -xf - )
if [[ "${PIPESTATUS[0]}" -ne 0 || "${PIPESTATUS[1]}" -ne 0 ]]; then
	echo "Unable to tar files to ${dir}" >&2
fi
```

但是在运行任何其他命令时， PIPESTATUS 将会被覆盖。如果你需要基于管道中发生的错误执行不同的操作，那么你需要在运行命令后立即将 PIPESTATUS 赋值给另一个变量。

```shell
tar -cf - ./* | ( cd "${DIR}" && tar -xf - )
return_codes=(${PIPESTATUS[*]})
if [[ "${return_codes[0]}" -ne 0 ]]; then
	do_something
fi
if [[ "${return_codes[1]}" -ne 0 ]]; then
	do_something_else
fi
```

 

## 7. **语句**

### 7.1. **命令替换**

【强制】运行命令使用$(command)而不是反引号。

嵌套的反引号要求用反斜杠转义内部的反引号。而 $(command) 形式嵌套时不需要改变，而且更易于阅读。

 

例如：

```shell
# This is preferred:
var="$(command "$(command1)")"

# This is not:
var="`command \`command1\``"
```



### 7.2. **文件名的通配符扩展**

【强制】当进行文件名的通配符扩展时，请使用明确的路径。

因为文件名可能以 - 开头，所以使用扩展通配符 ./* 比 * 来得安全得多。

```shell
# Here's the contents of the directory:
# -f -r somedir somefile
# This deletes almost everything in the directory by force
psa@bilby$ rm -v *
removed directory: `somedir'
removed `somefile'
# As opposed to:
psa@bilby$ rm -v ./*
removed `./-f'
removed `./-r'
rm: cannot remove `./somedir': Is a directory
removed `./somefile'
```

 

### 7.3. **test,[和[[**

【建议】推荐使用 [[ ... ]] ，而不是 [ , test , 和 /usr/bin/[ 。

因为在 [[ 和 ]] 之间不会有路径名称扩展或单词分割发生，所以使用 [[ ... ]] 能够减少错误。而且 [[ ... ]] 允许正则表达式匹配，而 [ ... ] 不允许。

```shell
# This ensures the string on the left is made up of characters in the
# alnum character class followed by the string name.
# Note that the RHS should not be quoted here.
# For the gory details, see
# E14 at http://tiswww.case.edu/php/chet/bash/FAQ
if [[ "filename" =~ ^[[:alnum:]]+name ]]; then
	echo "Match"
fi
# This matches the exact pattern "f*" (Does not match in this case)
if [[ "filename" == "f*" ]]; then
	echo "Match"
fi
# This gives a "too many arguments" error as f* is expanded to the
# contents of the current directory
if [ "filename" == f* ]; then
	echo "Match"
fi
```



### 7.4. **测试字符串**

【建议】Bash足以在测试中处理空字符串，请使用-z或者-n字符串测试，而不是填充字符，使得代码更易于阅读。

```shell
# Do this:
if [[ "${my_var}" = "some_string" ]]; then
	do_something
fi
# -z (string length is zero) and -n (string length is not zero) are
# preferred over testing for an empty string
if [[ -z "${my_var}" ]]; then
	do_something
fi
# This is OK (ensure quotes on the empty side), but not preferred:
if [[ "${my_var}" = "" ]]; then
	do_something
fi
# Not this:
if [[ "${my_var}X" = "some_stringX" ]]; then
	do_something
fi
```

 

### 7.5. **管道导向while循环**

【注意】命令输出通过管道导向给while循环，在while循环中被修改的变量是不能传递给父shell的，因为循环命令是在一个子shell中运行的。

管道导向while循环中的隐式子shell使得追踪bug变得很困难。

```shell
last_line='NULL'
your_command | while read line; do
last_line="${line}"
done

# This will output 'NULL'
echo "${last_line}"
```

 

如果你确定输入中不包含空格或者特殊符号（通常意味着不是用户输入的），那么可以使用一个for循环。

```shell
total=0
# Only do this if there are no spaces in return values.
for value in $(command); do
total+="${value}"
done
```

 

使用过程替换允许重定向输出，但是请将命令放入一个显式的子shell中，而不是bash为while循环创建的隐式子shell。

```shell
total=0
last_file=
while read count filename; do
    total+="${count}"
    last_file="${filename}"
done <  <(your_command | uniq -c)
# This will output the second field of the last line of output from
# the command.
echo "Total = ${total}"
echo "Last one = ${last_file}"
```



### 7.6. **$@与$的使用**

【建议】请使用 $@ 除非你有特殊原因需要使用 $* 。

当变量引用加上双引号时，使用 "$*" ， 会将所有参数组合一个字符串参数， 而 "$@" 保留参数状态，如果某个参数中包含空格，该空格是以字符的形态作为参数的一部分。

```shell
set -- 1 "2 two" "3 three tres"; echo $# ; set -- "$*"; echo "$#, $@"
set -- 1 "2 two" "3 three tres"; echo $# ; set -- "$@"; echo "$#, $@"
```



 