---
Author: 海针 - 搬运
---

# Shell进程调用
## 1. 进程调用无处不在
实际上，Shell脚本的进程调用无处不在，除了shell自身的内建命令，Shell调用工具命令都会开辟一个子进程去执行，比如在shell脚本中使用sed，grep，sleep等命令。

`test@test-PC:~$ vim proc.sh`
```bash
#!/bin/bash
  
echo "fork a sleep process."
sleep 20

exit 0
```
如上例，在Bash脚本中执行一个sleep， 执行脚本，新开终端查询进程。查询结果分析可以看到，sleep 20做为一个子进程在运行，进程ID为`14586`,而他的父进程正是proc.sh脚本进程，ID为`14586`。

`test@test-PC:~$ bash proc.sh`  
`test@test-PC:~$ ps -ef | grep -E 'sleep|proc.sh'`

```
fenglg   14586  9358  0 09:33 pts/0    00:00:00 bash proc.sh
fenglg   14587 14586  0 09:33 pts/0    00:00:00 sleep 20
fenglg   14634 25734  0 09:34 pts/1    00:00:00 grep -E sleep|proc.sh
```

## 2. 脚本的调用 

+ 调用方法1： 
`bash script.sh`     
在当前Shell中开辟一个子进程shell运行script.sh脚本， 与父进程共享环境变量；script.sh文件可不必有可执行权限，已经显示的给出调用script.sh的解析器为Bash。

+ 调用方法2：`./script.sh`  
在当前Shell中开辟一个子进程shell运行script.sh脚本， 与父进程共享环境变量；script.sh文件必须有可执行权限，否则权限错误，使用哪种shell解释执行，取决于脚本开头的声明，如`#!/bin/bash`，如未进行声明，默认使用当前终端所用Shell。

+ 调用方法3： `. script.sh`  
在当前Shell进程中执行script.sh，与当前shell同一进程，共享全局变量和环境变量。script.sh如有exit，则退出当前shell。

+ 调用方法4： `source script.sh`    
  同调用方法3

  **补充说明**
    > 1. 调用方法1,2 都是新开shell进程执行， 调用方法3,4都是当前进程中执行；
    > 2. 调用方法3,4的常用场景在需要导入环境变量，全局变量，或者导入公共函数处理脚本时使用，使用`.`和使用`source`效果是一样的，但source是Bash的内建命令，并非所有Shell解析器都能支持，所以从脚本的健壮性和通用性角度讲，推荐使用`.`。

## 3. 进程的后台处理
### 3.1 进程后台运行
+ `&`： 使用`&`符号，在调用进程或者函数后加 `&`，即将进程放到后台去执行。如下，`sleep`进程被放入后台，进程ID为`13358`。
  ```
  test@test-PC:~/work/code/cli$ sleep 30 &
  [1] 13358
  ```
+ `Ctrl`+`z`： 如果是在终端中调用的命令或脚本，可以通过键入`Ctrl`+`z`，将命令或脚本放入后并挂起进程，<font color="red">注意：进程在后台不再运行，是停止状态，等待唤醒指令后才能继续运行</font>。  
  ```
  test@test-PC:~/work/code/cli$ sleep 20 
  ^Z
  [1]+  已停止               sleep 20
  ```
### 3.2 查询后台进程
`jobs`:使用`jobs`命令后台运行中的进程。`[1]` 中括号里的数字表示进程的作业号，唤醒和恢复时可以指定进程。`+`代表当前进程，`-`代表当前进程的上一进程，使用`fg`恢复时如不指定作业号，默认恢复当前进程。
```
test@test-PC:~/work/code/cli$ jobs
[1]+  已停止               sleep 20
[2]-  运行中               sleep 30 &
```
`jobs`支持参数选项来对后台进程进行筛选。
```
jobs [-lnprs]
     -l     普通信息之外，列出进程ID。
     -p     只列出作业的进程组 leader 的进程ID。
     -n     只显示从上次用户得知它们的状态之后，状态发生改变的作业的信息。
     -r     限制只输出正在运行的作业。
     -s     限制只输出停止的作业。
```
### 3.3 恢复后台进程
+ `fg`:将后台进程恢复到前台运行, 通过`fg number`指定进程作业号来恢复指定进程。
  ```
  test@test-PC:~/work/code/cli$ fg 2
  sleep 30
  ```

+ `bg`:将后台进程唤醒，继续在后台执行,即将挂起的任务进程的状态由 stopped 改为 running。
  ```
  test@test-PC:~/work/code/cli$ bg 1
  [1]+ sleep 20 &
  test@test-PC:~/work/code/cli$ jobs
  [1]+  运行中               sleep 20 &
  test@test-PC:~/work/code/cli$ 
  ```

## 4. 守护进程
通常我们运行脚本或者命令是在一个用户终端下，不论脚本是在前后还是后台运行，当我们关闭终端，脚本和命令进程也会随之消亡。这是因为终端退出时会对终端下的子shell进程发送`SIGHUP`信号，子进程shell进程收到信号默认终止进程运行。

有时这并不是我们想要的，比如写一个长时间运行的批处理脚本，如产品安装，升级，构建，脚本执行时长可能以小时来计算，在这期间如果终端异常中断，脚本也会中断，任务就会执行失败。

这里我们引入守护进程，借鉴了传统编程语言守护进程的概念（如C++/Java），Shell的守护进程可以狭义的理解为脱离了用户终端而在后台运行的进程。
实现方法如下：
+ `nohup script.sh &` ： `nohup`通知脚本`script.sh`忽略掉终端断连信号`SIGHUP`，即终端断开时进程不会退出。如下，`sleep`进程放入后台，ID为`27310`。
  
  ```
  test@test-PC:~/work/study/shell/share$ nohup sleep 800 &
  [1] 27310
  test@test-PC:~/work/study/shell/share$ nohup: 忽略输入并把输出追加到'nohup.out'
  
  test@test-PC:~/work/study/shell/share$ jobs -l
  [1]+ 27310 运行中               nohup sleep 800 &
  test@test-PC:~/work/study/shell/share$ 
  test@test-PC:~/work/study/shell/share$ ps -ef | grep sleep 
  fenglg   27310  9491  0 11:40 pts/1    00:00:00 sleep 800
  ```

  终端退出，再次登录查看`sleep`进程,进程ID`27310`仍然在运行，它已被 `init`进程(ID为`1`)接收。
  ```
  test@test-PC:~$ ps -ef | grep sleep
  fenglg   27310     1  0 11:40 ?        00:00:00 sleep 800
  fenglg   28176 28150  0 11:43 pts/1    00:00:00 grep sleep
  ```
+ 在脚本中忽略终端退出信号
  改变进程接收`SIGHUP`信号后的默认处理方式，即主动捕捉信号并自定义处理方式。
  在脚本中，需要开始忽略`SIGHUP`的核心代码运行之前，加入`trap "" HUP`， `""`中可以自定义一个函数名，在接收到`SIGHUP`信号后执行该函数，也可以为空，不做任务处理，即忽略掉`SIGHUP`信号，程序照常运行。
  `test@test-PC:~/work/study/shell/share$ vi sighup.sh`

  ```bash
  #!/bin/bash
  
  main()
  {
     sleep 2000
  }
  
  trap "" HUP
  main
  ```
  ```
  test@test-PC:~/work/study/shell/share$ bash sighup.sh  &
  [1] 1057
  test@test-PC:~/work/study/shell/share$ ps -ef | grep sleep 
  fenglg    1058  1057  0 11:59 pts/4    00:00:00 sleep 2000
  ```

  重启终端，查看进程并未退出。
  ```
  test@test-PC:~$ ps -ef | grep sleep
  fenglg    1058     1057  0 11:59 ?        00:00:00 sleep 2000
  ```
## 5. 进程的并发控制
### 5.1 一个简单的并发例子
shell也可以通过进程并发的方式提高运行效果，以下是最简单的shell进程并发例子。
```bash
#!/bin/bash
function child_process()
{
   sleep 5
   echo "I am a child process!"
}

function main_process()
{
   child_process &

   echo "I am a main process!"
}

main_process
```
以上是两个进程，主进程和子进程同时运行，各自打印自己的信息。 `child_process`子进程被放到了后台运行，主进程并没有等子进程运行完成就退出了。子进程在后台继续运行，直到退出。
```
test@test-PC:~/work/study/shell/share$ bash process.sh
I am a main process!
test@test-PC:~/work/study/shell/share$ I am a child process!
```
### 5.2 Shell进程的同步机制
优化一下上述脚本，引入进程同步机制，主进程等待子进程执行完毕后再退出。这里引入`wait`命令。
```bash
#!/bin/bash
function child_process()
{  
   sleep 5
   echo "[$$]I am a child process,I quit!"
}

function main_process()
{
   child_process &
   wait $!

   echo "[$$]I am a main process!I quit!"
}

main_process
```
`$$`:当前shell的进程ID
`$!`：最后一个运行在后台的进程ID
在父进程里使用`wait`以阻塞的方式等待子进程执行完毕，父进程（主进程）得以继续执行。这里值得注意的是不管父进程，还是子进程，打印PID都是`1161`，即当前shell进程的PID,这是bash的自身机制。
```
test@test-PC:~/work/study/shell/share$ bash process.sh 
[1161]I am a child process,I quit!
[1161]I am a main process!I quit!
```

### 5.3 多进程并发
并发的目的是为了提高运行效率，以另外一种机制来实现多进程并发与同步。

```bash
#!/bin/bash
  
declare -a pidlist           #声明一个数组，用来收集子进程ID
for ((i=0; i < 5; i++ ))
do
    sleep $((i+1)) &         #将子进程交付后台执行
    pidlist[$i]=$!           #将子进程ID(这里用$!表示最后一个后台进程ID)收集进数组
    echo "=Child process[$!] is running ..."
done

while :                      # 主进程无限循环监控子进程
do
   pcount=${#pidlist[@]} && [ ${pcount} -le 0 ] && break  #如果数组为空，表示全部子进程已经退出。
   echo "+[$pcount]:[${pidlist[@]}] is running..."
   for pid in "${pidlist[@]}"; do
       kill -0 ${pid} &>/dev/null   # 使用kill -0 监控子进程是否存在，如果不存在，则返回非0
       if [ $? -ne 0 ]; then
           echo "-[${pid}]child quit!" 
           pidlist=( ${pidlist[@]/${pid}/} )    #将已经退出的子进程ID清理出数组
       fi
   done
   sleep 1
done

echo "-[$$]main process quit!"
```

+ 1）上面是用数组的方式采集进程ID，实现了5个子进程并发处理，子进程命令为`sleep`，这里根据业务需要可以替换成自定义的批处理进程，脚本，函数等； 
+ 2）这里进程间的同步是通过kill -0查询进程是否存在，查询的时长取决于执行时间最长的子进程。通过并发后脚本执行时长为5秒，如果串行则时长为15秒。
  

## 6. 进程间通信
进程间通信（IPC，InterProcess Communication）是指在不同进程之间传播或交换信息。

编程语言常用的IPC的方式有管道（包括匿名管道和命名管道）、消息队列、信号量、共享内存等，如果涉及跨主机通信，可以使用Socket等。

当然Shell做为解释性语言无法直接实现上面的底层开发，这也不是我们使用Shell的初衷，但是我们仍然可以借助工具，借鉴思路实现简单的进程通信，以满足业务需要。

### 6.1 匿名管道 
匿名管道使用符号 `|` 表示,这是我们最常用的进程间通信方式了，管道左侧接收进程的标准输出，右侧是进程的标准输入。
```
echo "Name:Jack,Age:22,Gender:Man,Desc:null" | cut -d"," -f1 | sed 's/Name://g'
```
如上例，一行代码我们使用了两个`|`，为了方便叙述我们称为管道1和管道2。 管道1左侧`echo`进程输出信息，原本是要送到标准输出（`STDOUT`）的,这里被管道1接收； 管道1右侧`cut`进程从管道1中读入信息，做出处理，然后输出到管道2；而`sed`进程又从从管道2中读入信息，做处理，将结果输出到标准输出。

注意：
+ `|`两侧是标准输出和标准输入，所以如果左侧是标准错误，是不会被送入管道，右侧也就无法接收处理。如下,`ls`的执行结果还是被送到了标准错误，在屏幕中显示，并没有进入管道。
  ```
  test@test-PC:~/work/study/shell/share$ ls "not exist!" | cut -d"," -f1 | sed 's/Name://g' 
  ls: 无法访问'not exist!': 没有那个文件或目录
  ```
  
### 6.2 命名管道 
`mkfifo`:用来创建命名管道，命名管道是一种特殊的文件，同一操作系统内的进程都可以向命名管道内写入消息，同理，也可以读取消息，消息写入和读取是双向的，跟普通文件一样，读写前提是进程要有权限。
如下是创建一个命名管道，权限标志位置第一个字母是`p`，代表这是管道文件（-：普通文件，d:目录文件，l:链接文件，b:设备文件，c:字符设备文件，p:管道文件），其它权限标志跟普通文件是一致的。
```
test@test-PC:~/work/study/shell/share$ mkfifo fifo
test@test-PC:~/work/study/shell/share$ ls -l
prw-r--r-- 1 fenglg fenglg    0 11月 20 10:21 fifo
```
向管道写入信息,写入后会阻塞等待进程读取。
```
test@test-PC:~/work/study/shell/share$ echo "Name:Jack,Age:22,Gender:Man,Desc:null" > fifo 

```
向管道读取信息，我们用`cat`命令，跟读取文件一样，如果管道内无消息，则阻塞等待消息进入管道。
```
test@test-PC:~/work/study/shell/share$ cat fifo
Name:Jack,Age:22,Gender:Man,Desc:null
test@test-PC:~/work/study/shell/share$ 
```
读取信息完毕之后，`cat`进程退出，当然你也可以做后续的处理； 而写入进程`echo`在管道内信息被取走之后，进程也随之退出。

可以看到，命名管道是通过阻塞的方式进行进程同步的，可以多个进程写入消息，读取进程按照 **<font color="Blue">先进先出</font>** 的顺序取走消息。可不可以多个进程读呢，当然也是可以的，但是消息被取走之后管道就空了（除非有新消息写入），多个进程来读，总是最先读取的进程拿到消息，后来读取的因为管道空了，只有阻塞等待，直到有新消息写入。

我们可以借助传统编程语言的思路做一个服务端和客户端程序：

+ server端：
```bash
PIPEFILE=./fifo
mkfifo -m 600 ${PIPEFILE}     #创建一个命名管道，并设置文件权限

process_line()
{
    echo "[$1] process here .."
    echo ""
}

echo "Server Started ..."
while :                      #外循环不断监控管道是否有数据写入
do
    while read line          #按行读取数据
    do
       name=$(echo "${line}" | cut -d"," -f1 | sed 's/Name://g')
       process_line "${name}"  &   #开辟子进程处理数据
    done < "${PIPEFILE}"         #阻塞的方式等待数据写入
done
```
启动服务端：
```
test@test-PC:~/work/study/shell/share$ bash server.sh 
Server Started ...
```

+ 客户端
```bash
#!/bin/bash
  
PIPEFILE=./fifo

main()
{
   echo "This a message client."
   echo "$@" > "${PIPEFILE}"        # 向管道发送数据
}
main "$@"
```
执行客户端发送消息：
`bash client.sh "Name:Jack,Age:22,Gender:Man,Desc:null"`
`bash client.sh "Name:Jack,Age:22,Gender:Man,Desc:null"`
`bash client.sh "Name:Lily,Age:21,Gender:Woman,Desc:null"`

查看服务端接收消息：
```
[Jack] process here ..

[Tom] process here ..

[Lily] process here ..

```

### 6.3 普通文件传递消息
命名管道采用阻塞的方式实现进程间同步通信，有时，我们也需要进程间异步通信，即两个进程间不需要阻塞的方式等待消息， 它们之间仅仅是传递一个状态或者是标志。
实现异步用一个简单的普通文件就可以了。
比如， A进程需要实现系统IP的配置，B进程需要实现系统IP的修改，但前提是要求系统IP已经配置好，否则就执行失败； 

那么A进程在执行配置IP成功后，可以将状态写入一个约定的配置文件（可以为空文件，仅做标志位，也可以写入状态内容），写完后A进程就不管了； 
B进程在执行修改工作时，首先读取配置文件，确认IP配置状态已经成功，然后执行修改过程； 否则可以提示IP尚未配置； 


## 7. 进程的远程调用
实际工作中，经常会遇到远程调用主机上的命令或脚本， 或者将本地脚本同步到远程主机上进行调用。
这里用到ssh(Secure Shell),前提是双方主机建立了通信连接机制，或者密钥的方式或者输入密码方式进行登录执行； 

>ssh -nq user@xxx.xxx.xx.xx  "commoand line"
      -n      把 stdin 重定向到 /dev/null (实际上防止从 stdin 读取数据).  
      -q      安静模式. 消除所有的警告和诊断信息.
      -t      强制分配伪终端. 
ssh的详细使用说明可以自行man page

### 7.1 进程执行简单命令

```
test@test-PC:~/work/study/shell/share$ ssh fenglg@192.168.122.39 "uname -a"        
fenglg@192.168.122.39's password: 
Linux fenglg 5.4.50-amd64-desktop #74 SMP Mon Aug 24 20:15:37 CST 2020 x86_64 GNU/Linux
test@test-PC:~/work/study/shell/share$ 
```
+ ssh连接到远程主机，会进入用户家目录，加载环境变量，所以这里运行的系统命令不需要加绝对路径。
+ 但如果是自己定义的脚本，并且不在家目录下，则需要带上脚本的绝对路径，否则远程shell找不到脚本。

**<font color="Blue">Bash登录模式分为登录和非登录，交互和非交互，不同的模式下对环境变量（如/etc/profile,~/.profile, ~/.bashrc,...)加载是不一样的，详细可见man page，这里不做阐述。</font>**

### 7.2 进程执行多条命令组合
如果执行多条命令或者更为复杂的逻辑处理，可以使用Shell Here Document（嵌入文档）的方式。

应当注意：
+ 1） 命令从 `EOF`开始，到遇到下一个`EOF`结束，注意第二个`EOF`一定要顶行（行开头，不要留空格或其它字符）书写。
+ 2） 命令中如果包含变量是在远程主机上进行解析，那么本地命令中要加转义’`\`’，否则会被认为是本地变量，解析后再发送给远程主机。
  如下例，两个`EOF`之间的命令，对于本地主机就是多行字符串，发送到远程主机才会执行，在发送之前，会对`${ARCH}`变量进行解析，由于`ARCH`未定义和赋值，这里会被解析成空串发送给远程主机，导致后面命令执行出错。 如果加转义`\${ARCH}`后本地不再解析，发送到远程主机后命令执行过程中解析。

```bash 
ssh fenglg@192.168.122.39 << EOF

ARCH=$(uname -m)
echo "--------------------------"
echo arch=\${ARCH}
echo "--------------------------"
if [ "\${ARCH}" = x86_64 ]; then
    dpkg-query -l qemu-user-static
fi
echo "--------------------------"
ifconfig | grep -w inet

EOF
```

输出
```
fenglg@192.168.122.39's password: 
请输入密码
验证成功
Welcome to Deepin 20 GNU/Linux
--------------------------
arch=x86_64
--------------------------
dpkg-query: 没有找到与 qemu-user-static 相匹配的软件包
--------------------------
        inet 192.168.122.39  netmask 255.255.255.0  broadcast 192.168.122.255
        inet 192.168.122.237  netmask 255.255.255.0  broadcast 192.168.122.255
        inet 127.0.0.1  netmask 255.0.0.0
```

### 7.3 本地脚本远程执行
把上例的命令写入脚本中，这里把变量`$`符号之前的转义符给去掉，因它不是在作为字符串传递给远程主机了。
`vim remote_shell.sh`
```bash
#!/bin/bash

ARCH=$(uname -m)
echo "--------------------------"
echo arch=${ARCH}
echo "--------------------------"
if [ "${ARCH}" = x86_64 ]; then
    dpkg-query -l qemu-user-static
fi
echo "--------------------------"
ifconfig | grep -w inet
```
+ 把本地脚本拷贝到远程目录下，再通过ssh远程执行。
```bash
test@test-PC:~/work/study/shell/share$ scp remote_shell.sh  fenglg@192.168.122.39:/home/fenglg/
fenglg@192.168.122.39's password: 
remote_shell.sh                                                        100%  244    85.0KB/s   00:00  
ssh -nq fenglg@192.168.122.39 "bash -l /home/fenglg/remote_shell.sh"
```

输出：
```bash
fenglg@192.168.122.39's password: 
--------------------------
arch=x86_64
--------------------------
dpkg-query: 没有找到与 qemu-user-static 相匹配的软件包
--------------------------
        inet 192.168.122.39  netmask 255.255.255.0  broadcast 192.168.122.255
        inet 192.168.122.237  netmask 255.255.255.0  broadcast 192.168.122.255
        inet 127.0.0.1  netmask 255.0.0.0
```

+ 通过标准输入重定向的方式将命令传递到远程执行

```
test@test-PC:~/work/study/shell/share$ ssh fenglg@192.168.122.39  < remote_shell.sh 
```
输出与上例是一致的，用此方法可以省去将脚本拷贝到远程主机这一步骤。


## 8. 信号处理
### 8.1 Linux信号
使用`kill -l`可以查看当前系统支持的信号列表。
```
test@test-PC:~/work/study/shell/share$ kill -l
 1) SIGHUP       2) SIGINT       3) SIGQUIT      4) SIGILL       5) SIGTRAP
 6) SIGABRT      7) SIGBUS       8) SIGFPE       9) SIGKILL     10) SIGUSR1
11) SIGSEGV     12) SIGUSR2     13) SIGPIPE     14) SIGALRM     15) SIGTERM
16) SIGSTKFLT   17) SIGCHLD     18) SIGCONT     19) SIGSTOP     20) SIGTSTP
21) SIGTTIN     22) SIGTTOU     23) SIGURG      24) SIGXCPU     25) SIGXFSZ
26) SIGVTALRM   27) SIGPROF     28) SIGWINCH    29) SIGIO       30) SIGPWR
31) SIGSYS      34) SIGRTMIN    35) SIGRTMIN+1  36) SIGRTMIN+2  37) SIGRTMIN+3
38) SIGRTMIN+4  39) SIGRTMIN+5  40) SIGRTMIN+6  41) SIGRTMIN+7  42) SIGRTMIN+8
43) SIGRTMIN+9  44) SIGRTMIN+10 45) SIGRTMIN+11 46) SIGRTMIN+12 47) SIGRTMIN+13
48) SIGRTMIN+14 49) SIGRTMIN+15 50) SIGRTMAX-14 51) SIGRTMAX-13 52) SIGRTMAX-12
53) SIGRTMAX-11 54) SIGRTMAX-10 55) SIGRTMAX-9  56) SIGRTMAX-8  57) SIGRTMAX-7
58) SIGRTMAX-6  59) SIGRTMAX-5  60) SIGRTMAX-4  61) SIGRTMAX-3  62) SIGRTMAX-2
63) SIGRTMAX-1  64) SIGRTMAX
```

其中最常用的是
```
SIGHUP  1      控制终端发现被挂起或控制进程死亡，缺省动作为进程终止。
SIGINT  2      键盘终端中断，一般是`CTRL+C`，缺省动作为进程终止。
SIGQUIT 3      来自键盘的退出信号，一般是`CTRL+\`，缺省动作为进程终止。
SIGKILL 9      杀死进程的信号,缺省动作为进程终止,该信号不能捕捉也不能忽略。
SIGUSR1 10     用户自定义信号，缺省动作为进程终止。
SIGALRM 14     定时时钟中断，缺省动作为进程终止。
SIGTERM 15     终止信号，缺省动作为进程终止。
SIGSTP  20     停止进程，一般是`CTRL+Z`，缺省动作为进程终止，但终止还可恢复。
```

进程可以通过三种方式来响应一个信号：

+ 1）缺省操作，Linux对每种信号都规定了默认行为，一般是中断进程。
+ 2）捕捉信号，自定义函数进行处理。
+ 3）忽略信号，即对信号不做任何处理，其中有两个信号不能忽略：`SIGKILL`及`SIGSTOP`。

### 8.2 信号的发送和接收
信号的来源是多样化的，通过`kill -l`查看信号名称大概可以看到有来源于键盘，有来源于电源，有来源于时钟等等，信号的接收是默认状态的，对于信号的处理linux也规定了默认动作。
在程序本身中，我们也可以自定义发送和捕捉信号，自定义处理捕捉后的行为。
#### 8.2.1 `trap` 捕捉信号。
  `trap`用于捕捉信号

  用法： `trap [-lp] [[arg] sigspec ...]`
  + `trap "commands" signals`
    捕捉到`signals`，执行`commands`，`signals`是信号列表，多个信号用空格分开。`commands`可以是一条Linux指定，也可以是自定义的函数。
    如下示例，`trap`捕捉`INT`,`HUP`,`QUIT`三个信号，捕捉到后打印`Catch Ctrl+C,QUIT!`，然后执行`exit`退出进程。

    `test@test-PC:~/work/study/shell/share$ vi trap1.sh`
    ```bash
    #!/bin/bash
    
    trap "echo 'Catch SIGNAL,quit!'; exit 0" INT HUP QUIT
    process_function()
    {
        echo "Program is processing here"
        sleep 1
    }
    
    echo "[$$]main process is running .."
    for (( i=0; i<5; i++))
    do
        process_function
    done
    ```
    `trap`捕捉后的处理是采用了`echo`和`exit`两个指令组合，也可以改为在自定义函数中处理。如下,定义`catch_singal`来替换`commands`指定，在函数中可以做更复杂的处理过程。
    ```bash
    #!/bin/bash
    
    trap catch_singal INT HUP QUIT
    catch_singal()
    {
        echo 'echo Catch SIGNAL,quit!';
        exit 0
    }
    
    process_function()
    {
        echo "Program is processing here"
        sleep 1
    }
    
    echo "[$$]main process is running .."
    for (( i=0; i<5; i++))
    do
        process_function
    done
    ```

    在上述脚本执行过程中，按下键盘`Ctrl`+`Z`，或者执行`kill -1 <PID>`或者`kill -3 <PID>`发送信号， 脚本捕捉到信号后做出处理。
    ```bash
    test@test-PC:~/work/study/shell/share$ bash trap1.sh
    [4007]main process is running ..
    Program is processing here
    Program is processing here
    ^CCatch SIGNAL,quit!
    test@test-PC:~/work/study/shell/share$ 
    ```
  + `trap "" signals`: 忽略信号signals，即捕捉到信号，不做处理，屏蔽掉缺省的行为。**<font color="Red">注意：`SIGKILL`,`SIGSTOP`不能被忽略，缺省的操作必定执行。</font>**
    仍然用上例，
    ```bash
    #!/bin/bash
    
    trap "" INT HUP QUIT
    process_function()
    {
        echo "Program is processing here"
        sleep 1
    }
    echo "[$$]main process is running .."
    for (( i=0; i<5; i++)) 
    do
        process_function
    done
    ```
    任凭如何按`Ctrl`+`C`，进程都要执行完毕才退出。
    ```bash
    [6712]main process is running ..
    Program is processing here
    ^C^C^CProgram is processing here
    ^C^C^C^C^CProgram is processing here
    ^C^C^CProgram is processing here
    ^C^CProgram is processing here
    test@test-PC:~/work/study/shell/share$ ^C
    test@test-PC:~/work/study/shell/share$ ^C
    ```
    当然，你也可以在`trap ""`的打印一段信息，表示已接收到信号，如`trap "echo 'Catch Ctrl+C,but ignore it.'" INT HUP QUIT`，然后再次执行，进程接收到了键盘中断信号，但是不鸟它，就是这么豪横。
    ```bash
    test@test-PC:~/work/study/shell/share$ bash trap2.sh 
    [7599]main process is running ..
    Program is processing here
    ^CCatch Ctrl+C,but ignore it.
    Program is processing here
    Program is processing here
    ^CCatch Ctrl+C,but ignore it.
    Program is processing here
    ^CCatch Ctrl+C,but ignore it.
    Program is processing here
    test@test-PC:~/work/study/shell/share$ ^C
    ```
  + `trap signals`: 恢复信号的默认行为。
    信号可以在进程的开头部分进行忽略，保证进程的关键操作能够不受影响得以完成，也可以中间部分恢复信号的默认行为，保证进程能够正常接收处理信号 。
    `test@test-PC:~/work/study/shell/share$ vi trap3.sh `
    ```bash
    #!/bin/bash
      
    trap "echo 'Catch Ctrl+C,but ignore it.'" INT
    echo "[1]main process is running .." && sleep 1
    echo "[2]main process is running .." && sleep 1
    echo "[3]main process is running .." && sleep 1
    trap INT
    echo "[4]main process is running .." && sleep 1
    echo "[5]main process is running .." && sleep 1
    echo "[6]main process is running .." && sleep 1
    ```
    执行前三次打印，发送中断信号无效，第四打印，中断信号成功。
    ```bash
    test@test-PC:~/work/study/shell/share$ bash trap3.sh   
    [1]main process is running ..
    ^CCatch Ctrl+C,but ignore it.
    [2]main process is running ..
    ^CCatch Ctrl+C,but ignore it.
    [3]main process is running ..
    ^CCatch Ctrl+C,but ignore it.
    [4]main process is running ..
    ^C
    test@test-PC:~/work/study/shell/share$ 
    ```
  + `trap -p signal`: 把当前的trap设置打印出来。
  + `trap -l`:打印系统支持的信号列表。同`kill -l`。
  + `trap "commands" EXIT`:脚本退出时执行commands指定的命令。
  + `trap "commands" RETURN`:当从shell函数返回、或者使用source命令执行另一个脚本文件时，执行commands指定的命令。

#### 8.2.2 `kill` 发送信号。
  `kill`:发送信号
  用法 ：`kill[-ssignal|-p][-a]pid...`
  >-s     指定发送的信号.  信号可以以信号名或数字的方式给定。
   -p     指定 kill 只打印命名进程的进程标识 (pid) , 而不应发送给它信号。
   -l     打印信号名的列表.这可以在 /usr/include/linux/signal.h 中找到。
   pid ...  给 kill 指定一个该发信号的进程列表。

+ `kill <signal> <pids>`: 发送`kill`和接收`trap`信号时，`signal`可以使用信号名或数字， 信号名可以带前缀`SIG`,如`SIGHUP`，也可以不带，如`HUP`。`pids`进程ID可为多个，用空格分隔。
  最常用的发送`SIGKILL`信号来杀死进程,通过命令的返回码`$?`判断是否执行成功，成功则为`0`，否则失败。
  
  ```bash
  test@test-PC:~/work/code/rootfs_mate$ kill -9 21291
  test@test-PC:~/work/code/rootfs_mate$ echo $?
  0
  test@test-PC:~/work/code/rootfs_mate$ kill -9 81291
  -bash: kill: (81291) - 没有那个进程
  test@test-PC:~/work/code/rootfs_mate$ echo $?
  1
  ```

+ `kill pid`： `kill`不带信号名或数字，则发送`(15)SIGTERM`信号，默认中断进程。
+ `kill -0 pid`: 或`kill -EXIT pid`，常用于查询进程在后台是否还在运行，通过命令的返回码`$?`来判断，如果`$?`为`0`说明进程还在，否则，进程已经退出。
  ```bash
  test@test-PC:~/work/study/shell/share$ kill -0 31496
  test@test-PC:~/work/study/shell/share$ echo $?
  0
  test@test-PC:~/work/study/shell/share$ kill -0 51496
  bash: kill: (51496) - 没有那个进程
  test@test-PC:~/work/study/shell/share$ echo $?
  1
  ```
### 8.3 进程通过信号通信
练习信号通信，使用一个自定义信号`SIGUSR1`来给守护进程增加一个退出机制。通过自定义函数，保证程序做完清理，然后安全的退出。
`test@test-PC:~/work/study/shell/share$ vi server.sh  `
```bash 
#!/bin/bash
  
PIPEFILE=./fifo
rm $PIPEFILE
mkfifo -m 600 ${PIPEFILE}

trap signal_quit USR1    #监听USR1信号
clean()        
{
    echo "Clean unuse Env"    
    echo "Clear unuse files"
    sleep 1
}

signal_quit()            #信号处理函数，接收到USR1信号时做程序的清理动作，然后退出。
{
    echo "Catch quit sigal, clean and quit!"
    clean
    exit 0
}

process_line()
{
    echo "[$1] process here .."
    echo ""
}

echo "[$$]Server Started ..."
while :
do
    while read line
    do
       name=$(echo "${line}" | cut -d"," -f1 | sed 's/Name://g')
       process_line "${name}"  &
    done < "${PIPEFILE}"
done
```
写一个客户端进程，专门用来安全停止`server.sh`服务进程。

```bash
#!/bin/bash
  
pid=$(ps -u fenglg -ef | grep -w server.sh  | grep -v -E 'vi|grep' | awk '{print $2}')     #查询到server.sh的进程id
echo -n "Stopping [$pid][server.sh] ..."
if [ x"${pid}" != x ];then
    for (( i=1; i<=3; i++))      #安全退出时间限制为3秒，3秒后如未退出，则强制杀死
    do
        kill -EXIT ${pid} &>/dev/null  #查询进程是否退出
        if [ $? -eq 0 ];then
            kill -USR1 ${pid}  &>/dev/null   #发送信号给server.sh
            sleep 1
        else
            echo "  [OK]"
            exit 0
        fi
    done
    kill -KILL ${pid}     #3秒后还未退出，强制杀死进程（补充不安全退出）
    echo "  [OK]"
else
    echo "server.sh already exited!"
fi
exit 0
```
`stopserver.sh`执行结果：

```bash
test@test-PC:~/work/code/rootfs_mate$ bash stopserver.sh 
Stopping [2563][server.sh] ...  [OK]
test@test-PC:~/work/code/rootfs_mate$ 
```
`server.sh`执行结果：
```bash
test@test-PC:~/work/study/shell/share$ bash server.sh   
[2563]Server Started ...
Catch quit sigal, clean and quit!
Clean unuse Env
Clear unuse files
test@test-PC:~/work/study/shell/share$ 
```
