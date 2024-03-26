---
Author: 海针
---

# Shell问题随记



### 脚本实现切换用户后操作

问题描述：shell脚本中如果涉及切换用户，无法执行切换操作之后命令，如root用户执行以下脚本：

```bash
#! /bin/bash

su mars  # 执行成功
echo 666 # 不会执行
```

问题原因：脚本中切换用户后，会先开一个子shell，所以后续命令不会执行，返回当前shell后才会执行

解决方案：使用xdotool模仿键盘输入，可规避环境问题，安装xdotool(apt install xdotool)后，修改代码如下：

```bash
#! /bin/bash

方案1：
xdotool type 'su mars'    # 模拟输入'su mars'
xdotool key Return        # 模拟输入回车
xdotool type 'echo 666'   # 模拟输入'echo 666'
xdotool key Return        # 模拟输入回车

方案2：
xdotool type 'su mars'    # 模拟输入'su mars'
xdotool keydown Return    # 模拟按下回车
xdotool keyup Return      # 模拟弹起回车
xdotool type 'echo 666'   # 模拟输入'echo 666'
xdotool keydown Return    # 模拟按下回车
xdotool keyup Return      # 模拟弹起回车

方案3：
xdotool type 'su mars
'                         # 模拟输入'su mars'+回车
xdotool type 'echo 666
'                         # 模拟输入'echo 666'+回车
```

补充：xdotool存在一些稳定性问题，以上方案实测仅`方案3`可用，其他方案理论上无问题，但执行失败，常用命令说明：

```bash
# 模拟击键a [*注1]
xdotool key a

# 模拟按两个键alt+tab
xdotool key alt+Tab

# 自动输入word
xdotool type 'word'

# 自动输入word带回车
xdotool type "word
"

# 模拟鼠标移动+点击，这会让鼠标移动到（x，y），然后点击鼠标左键。“1”代表鼠标左键，“2”则是滚轮，“3”则是右键。
xdotool mousemove 655 320 click 1

# 打开的窗口中搜索对应名称的窗口，并聚焦于该窗口，然后模拟击键
xdotool search --name [name of the window] key [keys to press]
```



### 通过命令创建用户并设置密码

问题描述：shell脚本使用root用户创建普通用户并设置密码操作时，因为设置密码是交互式操作，需要用户2次确认，使用`echo Test#136 | passwd login_a`显然不会成功。

解决方案：使用非交互式命令设置密码，如下：

```bash
# 方案1 使用passwd参数'--stdin'，uos与Ubuntu不可用，不支持该参数
echo "Test#136" | passwd login_a --stdin

# 方案2 使用chpasswd
useradd login_a -m -s /bin/bash && echo "login_a:Test#136" | chpasswd
```

补充：如果密码中包含 `$` 字符，需要使用反斜线进行转义`\$`



### 账号相关命令

```shell
# passwd：修改密码
# uptime： 显示系统运行信息
# who：查看当前登录的用户
# passwd root：修改root密码
# su 切换root用户，保留当前工作环境（保持当前目录），输入root用户密码
# su -i 切换root用户与root用户环境，输入root用户密码，无初始密码则设置后登陆
# sudo su 切换root，输入当前用户密码
```



### 用户管理

```shell
$ useradd username -m -s /bin/bash -u uid -g gid
# -c<备注> 　加上备注文字。备注文字会保存在passwd的备注栏位中。
# -d<登入目录> 　指定用户登入时的起始目录。
# -D 　变更预设值．
# -e<有效期限> 　指定帐号的有效期限。
# -f<缓冲天数> 　指定在密码过期后多少天即关闭该帐号。
# -g<群组> 　指定用户所属的群组。
# -G<群组> 　指定用户所属的附加群组。
# -m 　自动建立用户的登入目录。（等效 -d /home/username）
# -M 　不要自动建立用户的登入目录。
# -n 　取消建立以用户名称为名的群组．
# -r 　建立系统帐号。
# -s<shell>　 　指定用户登入后所使用的shell。
# -u<uid> 　指定用户ID。

$ usermol -l new_username old_username  # 修改用户名
$ usermol -u uid username # 修改uid
$ userdel username  # 删除用户名
```





###  解除账户锁定

问题描述：命令行输出错误密码次数过多，导致账号被锁定xmin

解决办法：

```shell
# 以下命令可登录root用户执行，username为锁定用户账号

pam_tally2 --user username   #查看错误了几次
pam_tally2 --user username --reset   #重置
```



### ssh配置root登录

问题描述：ssh默认不允许root用户登录

解决办法：

```shell
# 修改ssh服务配置文件

$ sudo vi /etc/ssh/sshd_config
#调整PermitRootLogin参数值为yes，并保存退出

$ sudo service ssh restart
# 重启服务生效
```





### 删除目录的非指定文件

问题描述
	在shell 脚本调试或者执行时，会经常遇到需要删除当前目录不需要的文件，手动删除十分麻烦。

解决方案
	`shopt -s extglob`
	`rm -rf !(file1|file2)`

解决过程与分析
	`shopt` 命令用于显示和设置shell中的行为选项，通过这些选项以增强shell易用性；如果不执行`shopt -s extglob` ，直接执行 `rm -rf !(*.txt)`会提示`bash: !: event not found`

实例：
	1)  在`/home/amd`目录下存在文件：`1.txt、test.log、test.txt、1.deb、1.log`，现在只保留`txt`格式的文件。

补充代码块

​	2)  在`/home/amd`目录下存在文件：`1.txt、test.log、test.txt、1.deb、1.log`，现在只保留`txt`和`deb`格式的文件。

补充代码块

​	3)  在`/home/amd`目录下存在文件：`1.txt、test.log、test.txt、1.deb、1.log`，现在保留指定目录下`log`格式的文件。

补充代码块





### shell中单/双/反引号的区别

问题描述
		在shell执行的时候，常常遇到调用的变量被当做字符处理，导致脚本运行出错。

解决方案
		使用双引号将需要保留特殊字符的字符串括起来。

解决过程与分析	
		双引号（""）：保留特殊字符的功能，如美元符号、反引号、反斜线。
		单引号（''）：被单引号括起来的字符都被视为普通字符对待。
		反引号（``）：被反引号括起来的字符串被当做shell命令执行，其标准输入结果取代整个反引号部分。

实例：

补充代码块



### 杀死进程的多种方法

问题描述
		在shell脚本执行中，经常遇到需要终止某个进程，但是通过进程id终止十分不方便，因为每次执行的进程id是变化的，导致脚本运行效率低下。

解决方案
		第一种：`ps aux | grep netserver | grep -v grep | cut -c 9-15 | xargs kill -9`
		第二种：`pidof netserver | xargs kill -9`
		第三种：`pgrep netserver | xargs kill -9`

解决过程与分析
第一种：
		`ps aux` 显示所有的进程
		`grep netserver `过滤显示`netserver`相关的进程
		`grep -v grep `过滤`grep`的查询进程
		`cut -c 9-15 ` 截取对应位置的字符，即进程id
		`xargs` 捕获左边的输出传递给右边的命令
		`kill -9` 强制杀死进程

第二种：
		`pidof` 用于查找指定名称的进程的进程号id号
		语法：
		`pidof (选项) (参数)`
		选项：
		`-s：仅返回一个进程号；`
		`-c：仅显示具有相同“root”目录的进程；`
		`-x：显示由脚本开启的进程；`
		`-o：指定不显示的进程ID。`

第三种：
		`pgrep `是通过程序的名字来查询进程的工具，一般是用来判断程序是否正在运行。
		语法：
		`pgrep  (选项) (参数)`
		选项：
		`-l 同时显示进程名和PID`
		`-o 当匹配多个进程时，显示进程号最小的那个`
		`-n 当匹配多个进程时，显示进程号最大的那个`

实例：
1. 启动stress进程，执行命令：
			stress -c 1 &
		stress -c 1 &
		stress -c 1 &
2. 使用第一种终止进程的命令：
		`ps aux | grep stress | grep -v grep | cut -c 9-15 | xargs kill -9`

3. 使用第二种终止进程的命令：
   	`pidof stress | xargs kill -9`
4. 使用第三种终止进程的命令：
   	`pgrep stress | xargs kill -9`



### $#,$0,$@ 等用法及说明

问题描述

​		在编写shell脚本的时候常常会向方法里面传递不同的参数，将参数放入变量的方式会导致脚本行数增加，代码执行效率不高，且不利于后期维护。

解决方案

​		使用$1、$2、$@等方式调用传入的参数。

解决过程与分析	
```shell
$# 是传给脚本的参数个数
$0 是脚本本身的名字
$1 是传递给该shell脚本的第一个参数
$2 是传递给该shell脚本的第二个参数
$@ 是传给脚本的所有参数的列表
$* 是以一个单字符串显示所有向脚本传递的参数，与位置变量不同，参数可超过9个
$$ 是脚本运行的当前进程ID号
$? 是显示最后命令的退出状态，0表示没有错误，其他表示有错误
```

实例：

​		创建脚本文件：`test.sh`，将下面的代码复制到文件中。

```shell
 #!/bin/bash
test(){
echo "传入的参数总数："$#
echo "第一个参数是："$1
echo "第二个参数是："$2
echo "传入的所有参数在这里："$@
echo "我是字符串："$*
echo "本次运行的脚本进程号是："$$
echo "我的名字是："$0
echo '$@ 和 $*的区别如下：'
echo '$@ 被双引号括起来后，是4份数据'
for var in "$@"
do	
	echo "${var}"
done

echo '$* 被双引号括起来后，是1份数据'
for var in "$*"
do
	echo "${var}"
done
}
test "1" "2" "3" "4"
```

