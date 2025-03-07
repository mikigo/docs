---
Author: 禄烨
---

# 单机服务部署

## 部署

1、后台部署组件机文档说明：https://filewh.uniontech.com/library/5c9b7174-752b-42f2-b132-5f37880f3543/%E6%8F%90%E6%B5%8B%E5%BA%93/2.1

2、需要先准备一台部署机、一台服务机，研测平台创建服务器后，服务机，新增磁盘挂载为 `/data` 分区（如果空间足够，可不用新增）

```shell
# 新建/data目录
mkdir /data
# 新磁盘进行新建分区并创建文件系统
fdisk /dev/vdb
mkfs.ext4 /dev/vdb1
# 挂载
mount /dev/vdb1 /data
# 获取uuid
blkid /dev/vdb1
# 添加 fstab 挂载信息
UUID=your-uuid-here /data ext4 defaults 0 2

# 重新挂载，mount -a 是一个用于挂载所有在 /etc/fstab 文件中定义的文件系统的命令
mount -a
reboot
```

3、服务机设置uos和root用户密码，以及将uos用户添加到sudo组

```shell
# 登录root用户
passwd root
passwd uos
sudo usermod -a -G wheel uos
reboot
```



4、部署命令（均为正常部署命令，步骤1文档中摘取，如果出现异常，需在文档中查看解决办法）

```yaml
./init_ansible_env.sh
./init_ansible_env.sh doctor
sudo bash install.bash plan k1s
cp -f examples/env.k1s.example.yaml env.yaml

sed -i 's/host1:.*/host1: {server_ip}/' env.yaml
sed -i '/^server_username:/c server_username: \"{server_user}\"' env.yaml
sed -i '/^server_password:/c server_password: \"{server_password}\"' env.yaml

bash install.bash prepare.yaml -e @env.yaml
sudo bash install.bash init-environment.yaml

sed -i 's/min_disk_gb:.*/min_disk_gb: 100/' sub_tasks/check-pre-install.yaml

sudo bash install.bash init-environment.yaml
sudo bash install.bash remove-softwares.yaml
sudo bash install.bash init-docker.yaml
sudo bash install.bash init-registry.yaml
sudo bash install.bash install-k8s.yaml
sudo bash install.bash init-k8s-master.yaml
sudo bash install.bash join-k8s-master.yaml
sudo bash install.bash join-k8s-node.yaml
sudo bash install.bash init-third-party-services.yaml

sudo bash install.bash init-licensekit.yaml
sudo bash install.bash init-database.yaml
sudo bash install.bash init-redis-cluster.yaml

sudo bash install.bash init-clickhouse-cluster.yaml
sudo bash install.bash gen-certs.yaml
sudo bash install.bash init-udcp.yaml -e action=init



sudo bash install.bash update-k8s-certs.yaml
```

5、部署完成后，首次进入平台配置管理员并激活，激活需在明道云申请激活序列号



# 平台设置

## 登录

1、入域账号密码强度设置：平台 -》配置 -》人员设置 -》密码安全设置 -》密码长度范围

2、平台保持登录状态：平台 -》配置 -》系统设置 -》基础设置 -》登录安全 -》页面最长静止时间



# 自动化开发

## WEB

## CLIENT
