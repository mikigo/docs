---
Author: 海针
---
# Shell编码规范错误参考手册

### 背景

​		shell脚本提交以前必须用静态代码扫描工具`shellcheck`扫描，根据提示修改代码，需达到扫描后无报错即可通过。修改过程中整理了一些常见错误与解决办法以供参考。



### 工具使用

​		安装`shellcheck`并使用命令进行扫描，具体步骤如下：

```bash
# 安装：
apt install shellcheck
# 扫描：
shellcheck  -x -s bash *.sh
# -s 指定使用 bash
# -x 给予shellcheck跟踪文件的权限，例如一个文件中导入了其他文件
```



### 错误编号

​		shellcheck扫描出的每一个错误，均有其编号，以`SC+4位数字`组成，google可搜索到详细建议，以下为整理出的部分编号，分为两部分：

* 可选修改编号：部分场景下为正常现象，该错误无需修改，在文件头`配置跳过该检测项`与`说明`即可，配置命令`#  shellcheck disbale=编号`
* 必须修改编号：必须修改的错误



#### 可选修改编号：

##### SC2154

* 报错：SC2154: quiet_type is referenced but not assigned.
* 原因：代码中使用的变量`quiet_type`被引用，但并未被赋值
* 解决：在引用变量前对齐赋值
* 特殊情况：应该测试框架加载了多个文件，文件中存在关联关系，当前文件未被赋值的变量是在其他文件中处理的，顾此时可以特殊处理，跳过该项检查，文件头注释：`# shellcheck disable=SC2154`



##### SC2034

  ```bash
  if [ "$1" = "true" ] && [ "$2" = "true" ]
  then 
  	r="pass"
  else 
  	r="fail"
  fi
  ```

* 报错：SC2034: r appears unused. Verify use (or export if used externally).

* 原因：变量ｒ赋值后未被使用，因该文件是存放公共方法，顾变量ｒ在脚本中不会被使用

* 解决：在此文件跳过该项检查，文件头增加注释：`# shellcheck disbale=SC2034`





#### 必须修改编号：

##### SC2162
```bash
read -t 8 -p "${tailor_11}""
```
* 报错：SC2162:read without -r will mangle backslashes.
* 原因：默认情况下，Read将解释空格和换行符之前的反斜杠，通常您只想读取数据，这就是read -r所做的。除非有充分的理由不使用-r，否则应该始终使用-r（请注意，read-r仍然会去掉前导空格和尾随空格。IFS=“”read-r可防止这种情况。）
* 修改：
```bash
read -r -t 8 -p "${tailor_11}""
```

* 例子：

```bash
read name
# 输入：\n z
# 输出：n z

read -r name
# 输入：\n z
# 输出：\n z
```



##### SC2181

```bash
apt install -y iso-tailor
if [ "$?" == "0" ]; then
...
```
* 报错：SC2181:Check exit code directly with e.g. 'if mycmd;', not indirectly with $?.
* 原因：检查退出代码直接使用 `if mycmd;` ，而不是使用$?
* 修改：
```bash

if apt install -y iso-tailor; then
...
```



##### SC1090

```bash
source "${PWD}/method/config.sh"
```
* 报错：SC1090: Can't follow non-constant source. Use a directive to specify location.
* 原因：`source`后不要跟变量
* 修改：
```bash
source "method/config.sh"
```



##### SC1091

```bash
source method/config
```

* 报错：SC1091: Not following: method/config was not specified as input (see shellcheck -x).

* 原因：file not found, no permissions, not included on the command line, not allowing `shellcheck` to follow files with `-x`

* 解决：

  * 命令行输出检查命令时加上参数`-x`，允许shellcheck跟踪文件：shellcheck -x -s bash test.sh

    * 注意：当涉及文件无权限时，使用之后方法

  * 文件中错误命令上增加注释`# shellcheck disable=SC1091`，跳过该错误项检查：

    * ```bash
      # 方法1验证有效
      # 注意：一般在对涉及文件无权限时，使用此方法
      # shellcheck disable=SC1091
      source method/assertion.sh
      
      # 方法2验证无效（why？）
      # 注意：一般在对涉及文件有权限时，使用此方法
      # shellcheck source=method/assertion.sh
      source method/assertion.sh
      ```



##### SC2219

* 报错：SC2219: Instead of 'let expr', prefer (( expr )) .

* 原因：使用`((  ))` 代替 `let`

* 解决：

  * ```bash
    # 修改前
    let a+=1 
    
    # 修改后
    (( a+=1 ))
    ```

  

##### SC2076

* 报错：SC2076: Don't quote rhs of =~, it'll match literally rather than as a regex.

* 原因：使用`=~` 但右侧的值存在`" "`，那将按照字面量匹配，而非正则表达式

* 解决：

  * ```
    # 修改前
    if [[ "${2}" =~ "${1}" ]]
    
    # 修改方案1，不使用" "，但该场景是使用传入的值，无法控制，推荐使用方案2
    # 备注：若=~右侧非变量，去掉" "即可，若有空格可使用'\'
    if [[ "${2}" =~ ${1} ]]
    
    # 修改方案2，不使用 '=~'
    if [[ "${2}" == *"${1}"* ]]
  ```
  
  

##### SC2010

* 报错：SC2010: Don't use ls | grep. Use a glob or a for loop with a condition to allow non-alphanumeric filenames.

* 原因：不要使用ls|grep，可使用glob通配符

* 解决：

  * ```bash
    #修改前
    iso="$(ls ${PWD}/resource/test_iso/ | grep iso)"
    
    #修改后
    iso="$(ls ${PWD}/resource/test_iso/*iso*)"
    ```

    

##### SC2046

* 报错：Double quote to prevent globbing and word splitting.

* 原因：当命令扩展未加引号时，将发生单词拆分和全局合并。当文件名包含空格时，这通常表现为中断。

* 解决：

```bash
# 修改前
if [ $(command -v startdde) ];then
	os_type="gui"
else
	os_type="cli"
fi

#修改后
if [ "$(command -v startdde)" ];then
	os_type="gui"
else
	os_type="cli"
fi
```



##### SC2086

* 报错：Double quote to prevent globbing and word splitting.

* 原因：引用变量可防止单词拆分和全局扩展，并在输入包含空格、换行符、全局字符等时防止脚本中断。

* 解决：

  * ```bash
    # 修改前
    ls ${PWD}/.file
    
    #修改后
    ls "${PWD}/.file"
    ```



##### SC2188

* 报错：SC2188: This redirection doesn't have a command. Move to its command (or use 'true' as no-op).

* 原因：重定向无命令

* 解决：

  * ```bash
    # 修改前
    > ${error_log_path}
    
    # 修改后
    true > ${error_log_path}
    ```

    

##### SC2013

* 报错：SC2013: To read lines rather than words, pipe/redirect to a 'while read' loop.

* 原因：要读取行，而不是词时，使用管道/重定向到`while read`循环

* 解决：

  * ```bash
    # 修改前
    for case_files in $(cat ${PWD}/.file/iso_case_list.log);do
    	source ${PWD}/case/iso_case/Round_${case_files}.sh
    done
    
    # 修改后
    while read -r line || [[ -n $line ]]; do
    	source "${PWD}/case/iso_case/Round_${line}.sh"
    done < "${PWD}/.file/iso_case_list.log"
    ```



##### SC2129

* 报错：SC2129:Consider using { cmd1; cmd2; } >> file instead of individual redirects.

* 原因：多个重定向时，建议使用{ cmd1; cmd2; } >> file，更为简洁

* 解决：

  * ```
    # Problematic code:
    
    echo foo >> file
    date >> file
    cat stuff  >> file
    
    # ------------------------
    
    # Correct code:
    
    {
      echo foo
      date
      cat stuff
    } >> fil
    ```



##### SC2126

* 报错：SC2126:Consider using `grep -c` instead of `grep | wc`

* 原因：grep+wc时，可使用grep -c代替

* 解决：

  * ```bash
    # Problematic code:
    grep "${com}" "${error_log_path}" | wc -l
    
    
    # Correct code:
    grep -c "${com}" "${error_log_path}"
    ```



##### SC2230

* 报错：SC2230:which is non-standard. Use builtin 'command -v' instead.

* 原因：which是在PATH中定位可执行文件的非标准外部工具。command -v是一个POSIX标准内置命令，它使用与shell本身相同的查找机制，使用`command -v`代替`which`

* 解决：

  * ```bash
    # Problematic code:
    which wc
    
    
    # Correct code:
    command -v wc
    ```



##### SC2002

* 报错：SC2002:Useless cat. Consider 'cmd < file | ..' or 'cmd file | ..' instead.

* 原因：`CAT`是启用文件的工具。将单个文件作为程序的输入读取被认为是对Cat(UUOC)的无用使用。简单地使用重定向更高效、更少迂回。对于可以从可查找的输入中获益的程序(如Tail或tar)，情况尤其如此。

* 解决：

  * ```bash
    # Problematic code:
    cat file | grep iso
    cat file | wc -l
    
    # Correct code:
    grep iso file
    wc -l < file
    ```



##### SC2164

* 报错：SC2164:Use cd ... || exit in case cd fails.

* 原因：`CAT`是启用文件的工具。将单个文件作为程序的输入读取被认为是对Cat(UUOC)的无用使用。简单地使用重定向更高效、更少迂回。对于可以从可查找的输入中获益的程序(如Tail或tar)，情况尤其如此。

* 解决：

  * ```bash
    # Problematic code:
    cd generated_files
    rm -r *.c
    
    func(){
      cd foo
      do_something
    }
    
    
    # Correct code:
    cd generated_files || exit
    rm -r *.c
    
    func(){
      cd foo || return
      do_something
    }
    ```



##### SC2145

* 报错：SC2145:Argument mixes string and array. Use * or separate argument.

* 原因：参数混合了字符串和数组。使用*或单独的参数。

* 解决：

  * ```bash
    #Problematic code:
    printf "Error: %s\n" "Bad parameters: $@"
    #Correct code:
    printf "Error: %s\n" "Bad parameters: $*"
    
    #Problematic code 2:
    printf "Error: %s\n" "Bad parameters: ${ARRAY_VAR[@]}"
    #Correct code 2:
    printf "Error: %s\n" "Bad parameters: " "${ARRAY_VAR[@]}"
    ```



##### SC2185

* 报错：SC2185:Some finds don't have a default path. Specify '.' explicitly.

* 原因：如果没有提供搜索路径，GNU和Busybox find将使用当前目录的默认路径。在POSIX、MacOS/OSX、FreeBSD、OpenBSD和NetBSD上，它反而会导致错误。

* 解决：

  * ```bash
    #Problematic code:
    find |grep test_b_logo
    
    #Correct code:
    find . |grep test_b_logo
    ```



##### SC2012

* 报错：SC2012:Use `find` instead of `ls` to better handle non-alphanumeric filenames.

* 原因：如果您想要的仅仅是文件名或它们的数量，那么ls通常可以替换为find。

* 解决：

  * ```bash
    #Problematic code:
    ls case/iso_case/Round*
    
    #Correct code:
    find case/iso_case/Round*
    
    
    # 注意：
    # find输出具有找到的文件的完整路径，相对于运行find的当前工作目录，而ls只有文件名。
    # 所以如果只是项获取文件名，在ls替换find的时候需要做额外的处理
    ```



##### SC2143

* 报错：SC2143:Use grep -q instead of comparing output with [ -n .. ].

* 原因：grep判断结果时，使用grep -q，而不是将结果输出，正确的代码更干净，并在第一个匹配行停止，避免了迭代目录的其余部分和将数据读入内存。

* 解决：

  * ```bash
    #Problematic code:
    if [ "$(find . | grep 'IMG[0-9]')" ]
    then
      echo "Images found"
    fi
    
    #Correct code:
    if find . | grep -q 'IMG[0-9]'
    then
      echo "Images found"
    fi
    ```



##### SC2001

* 报错：SC2001: See if you can use ${variable//search/replace} instead.

* 原因：echo 变量+sed处理输出时，壳尝试使用${variable//search/replace}

* 解决：

  * ```bash
    #Problematic code:
    string="stirng" ; echo "$string" | sed -e "s/ir/ri/"
    
    #Correct code:
    string="stirng" ; echo "${string//ir/ri}"
    ```



##### SC2116

* 报错：SC2116: Useless echo? Instead of 'cmd $(echo foo)', just use 'cmd foo'.

* 原因：无用的echo

* 解决：

  * ```bash
    #Problematic code:
    greeting=$(echo "Hello, $name")
    # or
    tar czf "$(echo "$(date +%F).tar.gz")" *
    
    #Correct code:
    greeting="Hello, $name"
    # or
    tar czf "$(date +%F).tar.gz" *
    ```



##### SC2059

* 报错：Don't use variables in the printf format string. Use printf "..%s.." "$foo".

* 原因：`printf`未使用`%s`

* 解决：

  * ```bash
    #Problematic code:
    printf "Hello, $NAME\n"
    
    #Correct code:
    printf "Hello, %s\n" "$NAME"
    ```



##### SC2066

* 报错：SC2066: Since you double quoted this, it will not word split, and the loop will only run once.

* 原因：for循环使用了数组："array[*]"，由于使用了双引号，因此不会拆分单词，循环只会运行一次。

* 解决：

  * ```bash
    #Problematic code:
    for i in "${test_user_id[*]}";do
    
    #Correct code:
    for i in ${test_user_id[*]};do
    for i in "${test_user_id[@]}";do
    ```



##### SC2103

* 报错：SC2103: Use a ( subshell ) to avoid having to cd back..

* 原因：使用子shell执行命令，避免回放cd。

* 解决：

  * ```bash
    # Problematic code:
    
    for dir in */
    do
      cd "$dir"
      convert index.png index.jpg
      cd ..
    done
    
    # Correct code:
    
    for dir in */
    do
      (
      cd "$dir" || exit
      convert index.png index.jpg
      )
    done
    
    # or
    
    for dir in */
    do
      cd "$dir" || exit
      convert index.png index.jpg
      cd ..
    done
    ```



##### SC2035

* 报错：SC2103: Use ./*glob* or -- *glob* so names with dashes won't become options.

* 原因：因为文件和参数是以相同方式传递的字符串，所以程序不能正确地识别，使用`./`、`--`可避免这个问题。

* 解决：

  * ```bash
    # Problematic code:
    
    rm *
    
    # Correct code:
    
    rm ./*
    
    # or
    
    rm -- *
    
    ```



##### SC2124

* 报错：SC2124: Assigning an array to a string! Assign as array, or use * instead of @ to concatenate.

* 原因：将数组赋给字符串！赋值为数组，或使用*而不是@进行连接。

* 解决：

  * ```bash
    # Problematic code:
    xx() {
    
    	test="${@}"
    
    }
    
    # Correct code:
    
    xx() {
    
    	test="${*}"
    
    }
    
    ```



##### SC1012

* 报错：SC1012: `\t` is just literal `t` here. For tab, use `"$(printf '\t')"` instead.

* 原因：ShellCheck 发现了一个`\t`,`\n`或者`\r`在一个上下文中，它们只是变成了普通的字母`t`，`n`或者`r`。很可能，它被用作制表符、换行符或回车符。

* 解决：

  * ```bash
    # Problematic code:
    # Want tab
    var=foo\tbar
    # Want linefeed
    var=foo\nbar
    
    # Correct code:
    var="foo$(printf '\t')bar"  # As suggested in warning
    var="$(printf 'foo\tbar')"  # Equivalent alternative
    
    # Literal, quoted linefeed
    line="foo
    bar"
    ```
    
##### SC2048

* 报错：SC2048: Use "$@" (with quotes) to prevent whitespace problems.

* 原因：当一个数组使用 `for` 循环遍历时，相对于 `$*` ， `"$@"` 要更为安全，避免空格可引起的其他问题。

* 解决：

  * ```bash
    # Problematic code:
    for i in ${user_list[*]}; do
        if test -s "${sat_path}/method/users/process_${i}.sh"; then
        "os_env_check_${i}"
        fi
    done
    
    # Correct code:
    for i in "${user_list[@]}"; do
        if test -s "${sat_path}/method/users/process_${i}.sh"; then
        "os_env_check_${i}"
        fi
    done
    ```



##### SC2268

* 报错：SC2268 (style): Avoid x-prefix in comparisons as it no longer serves a purpose.

* 原因：避免在比较中使用x-prefix，因为它不再起作用。

* 解决：

  * ```bash
    # Problematic code:
    [ "x$pass" = "xswordfish" ]
    test x"$var" = x 
    
    # Correct code:
    [ "$pass" = "swordfish" ] 
    test "$var" = ""
    ```

