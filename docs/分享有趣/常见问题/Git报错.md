---
Author: mikigo
---

# Git报错

## 1. github 仓库 push 报错

```shell
$ git push
ssh: connect to host github.com port 22: Connection timed out
fatal: 无法读取远程仓库。

请确认您有正确的访问权限并且仓库存在。
```

之前还好好的，下班要推送代码到 github 报错，注销重启电脑死活都不行。

解决方案：

22端口不行，换个端口：

```shell
cd ~/.ssh
```

创建一个 config 文件

```shell
vim config
```

填入以下内容：

```shell
Host github.com
User git
Hostname ssh.github.com
PreferredAuthentications publickey
IdentityFile ~/.ssh/id_rsa
Port 443
```

再次 push 就可以了

如果还是不行 参考以下方法：
打开 /etc/hosts文件补充 
```shell
140.82.116.4    github.com
```

便可成功