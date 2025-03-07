---
Author: mikigo
---

# FTP服务搭建



## 安装

```shell
sudo apt install vsftpd
```

## 配置用户

添加用户组

```shell
sudo groupadd ftpgroup
```

配置 `FTP` 访问用户 `uos`

```shell
sudo useradd -g ftpgroup -M -s /bin/bash uos
```

配置 `FTP` 访问密码

```shell
sudo passwd uos
```

之后输入 2 次密码即可；

## 修改配置项

```shell
sudo vim /etc/vsftpd.conf
```

配置以下内容：

```shell
# 文件编码
utf8_filesystem=YES

# 开启匿名访问
anonymous_enable=YES
# 匿名用户无密码
no_anon_password=YES
# 匿名上传
anon_upload_enable=YES
# 匿名可写文件夹
anon_mkdir_write_enable=YES
# 其他用户匿名可写
anon_other_write_enable=YES
# 限定匿名用户目录，路径可以自定义
anon_root=/home/$USER/ftp
# 匿名用户创建文件时所得到的初始权限
# 022 新建的目录权限为755，新建的文件权限为644
anon_umask=022

# 可写
write_enable=YES


# 本地用户
chroot_local_user=YES

# 用户列表
chroot_list_enable=YES

# 用户列表文件
chroot_list_file=/etc/vsftpd.chroot_list

# 权限用户目录，路径可以自定义
local_root=/ftp/ftp
```

配置用户列表文件：

```shell
sudo vim /etc/vsftpd.chroot_list
```

写入

> uos

## 创建FTP目录

```shell
sudo mkdir -p /ftp/ftp # 权限访问目录
sudo mkdir -p /home/$USER/ftp # 匿名访问目录
```

 修改目录权限

```shell
sudo chmod -R 777 /ftp/ftp
sudo chmod -R 777 /home/$USER/ftp
```

## 重启服务

```shell
sudo systemctl restart vsftpd.service
sudo systemctl status vsftpd.service
```

## 一键部署脚本

```shell
sudo apt update
sudo apt install vsftpd
# ========== 匿名 =====================
sudo sed -ri '/anonymous_enable/d' /etc/vsftpd.conf
sudo sed -ri '/no_anon_password/d' /etc/vsftpd.conf
sudo sed -ri '/write_enable/d' /etc/vsftpd.conf
sudo sed -ri '/anon_upload_enable/d' /etc/vsftpd.conf
sudo sed -ri '/anon_mkdir_write_enable/d' /etc/vsftpd.conf
sudo sed -ri '/anon_umask/d' /etc/vsftpd.conf
sudo sed -ri '/anon_root/d' /etc/vsftpd.conf
sudo sed -ri "/listen_ipv6/aanonymous_enable=YES\nno_anon_password=YES\nanon_root=/srv/ftp/\nwrite_enable=YES\nanon_upload_enable=YES\nanon_mkdir_write_enable=YES\nanon_other_write_enable=YES\nanon_umask=022" /etc/vsftpd.conf
sudo sed -ri '/utf8_filesystem/cutf8_filesystem=YES' /etc/vsftpd.conf
# 创建uploads目录，增加写权限
sudo mkdir -p /srv/ftp/uploads
sudo chown ftp:ftp /srv/ftp/uploads
sudo chmod a+rwx /srv/ftp/uploads
sudo systemctl restart vsftpd.service

# ========================= sftp ==========================
sudo groupadd ftpgroup 
sudo useradd -g ftpgroup -M -s /bin/bash uos    # <-- ftp用户名
sudo passwd uos # 输入ftp用户密码
sudo mkdir -p /ftp/ftp/uploads
sudo usermod -d /ftp/ftp uos
sudo chown root:ftpgroup /ftp/ftp
sudo chmod -R 755 /ftp/ftp
sudo chown uos:ftpgroup /ftp/ftp/uploads
sudo systemctl restart vsftpd.service
```

