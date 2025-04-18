---
Author: 海针
---

# ftp服务器无法连接问题

## 问题描述

使用vsftpd搭建好ftp服务器之后，无法访问服务器，且配置文件的配置项设置完全正确。

**步骤：**

1、打开UOS系统计算机 - 菜单 - 连接到服务器

2、输入ftp服务器地址：ftp://10.8.11.xx

3、选择匿名 - 点击连接

**现象：**

 提示`挂载设备出错`

**预期：**

连接成功，并展示ftp服务器中文件



## 根因

 vsftpd在2.5.5版本针对ftp目录自主访问控制权加入了安全策略，若ftp目录权限为 777，则会拒绝连接。



## 解决办法

修改ftp目录权限即可解决

```shell
$ chmod 755 /xx/ftp
```



## 补充

1、除此之外如果遇上vsftpd的服务无法启用，存在以下几种可能：

* 21端口被占用

```bash
$ netstat -natp |grep 21
# 杀掉查出的占用21端口的进程
```

* 配置文件中ipv4和ipv6同时开启或关闭

```bash
$ vim /etc/vsftpd.conf
# 修改以下两项为
listen=YES
listen_ipv6=NO
```

2、目录权限为755时，就算对匿名用户开放了上传权限，也无法上传成功，可在ftp匿名主目录下创建一个权限为777的文件目录，匿名用户要上传文件时，上传至该目录即可。