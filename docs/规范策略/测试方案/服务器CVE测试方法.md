---
Author: chenyi
---

# 服务器CVE测试方案


## CVE进行下载地址

```shell
1060u1A:
https://cdimage.uniontech.com/server-dev/1060u1/a/release/amd64/

1060u1E:
https://cdimage.uniontech.com/server-dev/1060u1/e/release/amd64/

1050A:
https://cdimage.uniontech.com/iso-v20/

1050E:
https://cdimage.uniontech.com/iso-v20/

1002A:
https://cdimage.uniontech.com/iso-v20/

1050D:
arm&amd
http://10.0.32.57/server/1050u1/d/release/ISO/
loongarch
https://iso.uniontech.com/#/productdetails/F5rRRsdxJ4TdoV7X9NacOEF
```

![](/服务器CVE测试方法_assets/产品说明.jpg)

## 安装方式
高危&&常规：图形化默认安装，选择商业授权

补丁CVE：图形化全选安装，选择商业授权

![](/服务器CVE测试方法_assets/安装.jpg)

内核CVE：需要根据实际需要选择4.19和5.10安装；

![](/服务器CVE测试方法_assets/内核选择.jpg)

## 高危&&常规
### 提测周期
高危：每周一和周三晚提测

常规：每周二晚提测

### 提测仓库
常规：

提测仓库E：http://10.7.60.100/server/1050_update/e/cve_regular.repo

A：https://cdimage.uniontech.com/server-dev/1050_update/a/cve_regular.repo

C：https://cdimage.uniontech.com/server-dev/1050_update/c/cve_regular.repo

高危：

E：http://10.7.60.100/server/1050_update/e/cve_risk.repo

A：https://cdimage.uniontech.com/server-dev/1050_update/a/cve_risk.repo

C: https://cdimage.uniontech.com/server-dev/1050_update/c/cve_risk.repo

### 测试策略
1.添加提测仓库（自带仓库不用屏蔽）

2.下载邮件中的提测申请单（邮件中的附件）

3.安装提测申请单中的提测包并核对版本，仓库中的所有包都需要安装（ACED版二进制包名列，核对二进制包名列是否与仓库一致，如果不一致找开发沟通  AC版张兴荣  D版王佳  E版孔立栋）

4.包安装完成后，进行重启，重启以后对包的基本功能进行测试（部分包的功能是需要自己调研的，如果是库包，实在找不到测试方法，可接受测试安装即可）

5.建立测试单，可以查看以前 cve 的测试单（格式：`安全更新a版提测（高危）_2024-1-5_arm_2024/1/10`）

6.输出测试报告，按照之前抄送给你的邮件格式即可

### 高危外网推送
测试周期：每周一高危外网推送

测试方法：

1.外网推送方法（先推到 update 仓库，update 仓库是商业授权仓库，所以测试外网推送的时候需要打开商业授权仓库）

2.在各架构机器上安装查看版本即可，项目经理会提供外网推送列表

## 内核CVE测试
### 测试方法
1.下载内核提测包，安装内核提测包（rpm -Uvh *.rpm 进行安装，或者使用 `yum install *.rpm`  如果之前安装过同版本 可以使用 `rpm -Uvh *.rpm --force`）

2.安装内核包后，重启系统，查看内核版本，内核版本正确可开始运行 ltp 和内核基本功能测试用例

### 测试注意事项
1.ltp 版本问题  1060 用 2023-1 月份的版本  1070 用最新版本

2.生态机器链接：https://udoc.uniontech.com/apps/editor/677888?gbcotea=4c11c48eeb983bb22fec6963e8b038a9

3.测试单建立方式

`统信服务器操作系统 V20（1060）A版本 CVE-20230904_2023/09/04_ AMD`

4.D版使用 2016 的测试套

5.机器挂了使用串口运行，C版和A版容易出问题尽量使用就近的机器

6.使用生态的机器,需要用到跳板机，跳板机 ip: 10.20.48.157 

7.鲲鹏机器跑 ltp 的时候，在 ltp-service-for-kunpeng 套件里面的 skip-list 需要放在与 ltp-service 文件中的 ExecStart 路径一致，ltp-service 文件中的 ExecStart默认路径为 /home ，可以把 skip-list 默认放在 /home 目录下

8.每日需要跟踪ltp的是否正常运行

### 内核基本功能自动化运行方式
1.访问自动化工程：https://jenkinswh.uniontech.com/jenkinsb/view/%E6%B5%8B%E8%AF%95/job/autotest/job/update/
工程为 `A_AMD_CVE` —— `KERNEL A_ARM_CVE` —— `KERNEL  A_LONNGARCH_CVE` —— `KERNEL`

2.工程构建任务填写

`VERSION_TIME` 默认为 `20230606-1951` 不用修改

`20230725-kernel` 根据实际情况填写 （例如：`20230817-5.10kernel`，根据转测申请单的实际情况填写，一定要加上 5.10 和 4.19 )

`cve_version` 不用修改

3.创建好的 `qcow2` 路径

http://10.7.60.181/test_qcow2


### 内核CVE外网推送
1.打开 update 源，安装内核包，装完后重启系统，查看内核版本，参考测试用例：https://pms.uniontech.com/testcase-view-1240931-6.html

## 例行补丁
### 提测周期

[《内核功能自动化操作手册.wps》](http://youqu.uniontech.com/docs/%E6%9C%8D%E5%8A%A1%E5%99%A8CVE%E6%B5%8B%E8%AF%95%E6%96%B9%E6%B3%95_assets/%E5%86%85%E6%A0%B8%E5%8A%9F%E8%83%BD%E8%87%AA%E5%8A%A8%E5%8C%96%E6%93%8D%E4%BD%9C%E6%89%8B%E5%86%8C.wps)

### 提测仓库
E：https://cdimage.uniontech.com/server-dev/1050_update/e/1060e-UTSA-xxxx/

A： http://10.30.38.115/packages.chinauos.com/server-enterprise-c-test/kongzi/1060/

C： http://10.30.38.115/packages.chinauos.com/server-enterprise-c-test/kongli/1000/update/ 

### 测试策略
1.添加提测仓库，添加完成后，执行 `yum makecache` 可以看见新增的仓库

2.提测申请单中，任意找一个包查看是否有对应的高版本，存在对应的高版本则表示仓库配置成功

3.下载转测申请单中的附件，下载附件脚本，新建 test 文件，把转测申请单中的 update 列，复制到 test 文件，然后运行脚本

```shell
#! /bin/bash

###################
# 1 将所测试的包列表放到 test文件中（是提测申请单中的update列，全复制）
# 2 打开系统默认配置源. 创建update.repo文件并添加升级源，且状态切换为不可用
# 3 在test文件统计目录执行 nohup bash -x run.sh  >>run.log &
# 4 在/home/packages_log 目录下查看结果
#     install.log  安装默认版本过程日志
#     uninstall_packages 默认源没有安装成功的包
#     install_new.log 用最新的源安装uninstall_packages的包
#     update.log 升级日志
#     update_error.log 升级报错日志，如果没有生成该文件，说明安装升级全部成功,测试通过
#     update_check.log 版本信息检查日志
###################
echo  "1 将所测试的包放到 test文件中"
rm -rf package_list
cat test | tr -s '\n' >> package_list


result_log=/home/packages_log
rm -rf ${result_log:?}
mkdir -p ${result_log}
echo "获取包名 package_name"
rm -rf package_name
while read line
do
        pkgname1=`echo ${line%-*}`
        pkgname=`echo ${pkgname1%-*}`
        echo $pkgname >> package_name
done <  package_list

echo "默认配置安装低版本软件包"
sed -i 's/enabled = 1/enabled = 0/g'  /etc/yum.repos.d/update.repo
yum clean all
### 低版本源 UnionTechOS-Server-20-everything
while read line
do
      yum -y install  ${line} --allowerasing  >>${result_log}/install.log 2>&1
      if [ "$?" != "0" ];then
         echo "${line} install failed in old repo"
         echo ${line} >> ${result_log}/uninstall_packages 2>&1
      fi
done <  package_name

### 配置源
echo "配置高版本源，并升级"
sed -i 's/enabled = 1/enabled = 0/g'  /etc/yum.repos.d/UnionTechOS.repo
sed -i 's/enabled = 0/enabled = 1/g'  /etc/yum.repos.d/update.repo
yum clean all
if [ -f "${result_log}/uninstall_packages" ]; then
  echo "start try install rpm in uninstall_packages"
  while read line
  do
      yum -y install  ${line} --allowerasing  >>${result_log}/install_new.log 2>&1
  done <  ${result_log}/uninstall_packages

fi
yum clean all
#yum update --allowerasing -y >>${result_log}/update.log 2>&1
while read line
do
      yum update --allowerasing -y  ${line} >>${result_log}/update.log 2>&1
      if [ "$?" != "0" ];then
         echo "${line} update failed "
         echo ${line} >> ${result_log}/update_failed_list 2>&1
      fi
done <  package_name



echo "检查版本号是否正确"

while read line
do
        rpm -qa | grep ${line%.*}
        if [ "$?" != "0" ];then
           echo "${line} rpm version check Fail"
           echo "${line} update failed"  >>${result_log}/update_error.log  2>&1
        else
           echo "${line} rpm version check success"
           echo "${line}  check    PASS" >> ${result_log}/update_check.log 2>&1
        fi
done <  package_list
sed -i 's/update failed//g' ${result_log}/update_error.log 
sed -i 's/1://g' ${result_log}/update_error.log  
sed -i 's/2://g' ${result_log}/update_error.log 
sed -i 's/9://g' ${result_log}/update_error.log 
while read line
do
        rpm -qa | grep ${line%.*}
        if [ "$?" != "0" ];then
           echo "${line} rpm version check Fail"
           echo "${line} update failed"  >>${result_log}/update1_error.log  2>&1
        else
           echo "${line} rpm version check success"
           echo "${line}  check    PASS" >> ${result_log}/update_check.log 2>&1
        fi
done <  ${result_log}/update_error.log 



if [ -f "${result_log}/update_error.log" ]; then
  echo "**************Test  Fail**************"
  exit 1
else
  echo "##################Test  PASS##################"
  exit 0
fi
```

4.运行完成后，查看 `/home/packages_log/update-error.log` 日志，分析升级失败的软件包，可以接受当前安装版本比提测版本高

5.待所有安装失败的软件包核对完成后，进行系统升级，执行 `yum update`，执行完成后，执行重启操作

### updateinfo测试
1.下载转测申请单附件中的 cve 更新列表，和高危 cve 更新列表，需要准备全新的环境

2.安装步骤 1 两个 cve 更新列表中低版本的包，所有的二进制包，安装完成后做个快照

![](/服务器CVE测试方法_assets/二进制包.jpg)

3.

A版：需要屏蔽自带的仓库源，

E版：不需要屏蔽自带的仓库， 

C版：需要屏蔽自带的 update 仓库，然后根据 updateinfo 的测试用例测试

4.如果外网 update 仓库和提测仓库中版本一样，并且没有其他低版本，则不进行 update 的测试

### 自动化运行注意事项
1.准备 qcow2 的环境，qcow2 的环境密码必须为 `uostest12#$`（建议创建虚拟机的时候直接设置此密码，创建虚拟机时候全选安装）

2.上传 qcow2 的时候，查看是否传完

3.修改 qcow2 的权限

```shell
chmod -R 644 uniontechos-server-20-1050a_update-amd64-gui-legacy-release-UTSA-2023-0818.qcow2 # (根据实际情况修改)
```

4.修改qcow2的名称

a版的qcow2命名为

```shell
uniontechos-server-20-1050a_update-amd64-gui-legacy-release-UTSA-2023-0818.qcow2

uniontechos-server-20-1050a_update-arm64-gui-release-UTSA-2023-0818.qcow2

uniontechos-server-20-1050a_update-loongarch64-gui-release-UTSA-2023-0928.qcow2
```

e版的qcow2命名为

```shell
uniontechos-server-20-1050e_update-amd64-gui-legacy-release-UTSA-2023-0818.qcow2

uniontechos-server-20-1050e_update-arm64-gui-release-UTSA-2023-0818.qcow2
```

5.保证机器的/home目录有足够的空间，以及剩余内存足够多，大于150G

6.如果创建虚拟机出现进入了紧急模式的情况，可以强制重启虚拟机，如果还解决不了，可以参照

https://wikidev.uniontech.com/UTSA%E8%A1%A5%E4%B8%81%E8%87%AA%E5%8A%A8%E5%8C%96%E6%B5%8B%E8%AF%95%E8%99%9A%E6%8B%9F%E6%9C%BA%E5%A4%B1%E8%B4%A5%E5%A4%84%E7%90%86%E6%96%B9%E6%B3%95

### 自动化构建
1.先根据构建自动化 https://wikidev.uniontech.com/%E8%A1%A5%E4%B8%81%E8%87%AA%E5%8A%A8%E5%8C%96%E6%8B%89%E8%B5%B7%E6%B5%81%E7%A8%8B

2.访问研测平台：http://adtmp.uniontech.com/#/ProductVersion

3.选择基线管理-->产品版本-->构建-->新增

![](/服务器CVE测试方法_assets/新增版本.jpg)

4.任务管理-->版本测试-->新建

![](/服务器CVE测试方法_assets/新建版本测试.jpg)

5.版本测试内容填入

![](/服务器CVE测试方法_assets/版本测试内容.jpg)

6.运行自动化

![](/服务器CVE测试方法_assets/自动化运行.jpg)

7.查看自动化运行日志

![](/服务器CVE测试方法_assets/查看自动化运行日志.jpg)

