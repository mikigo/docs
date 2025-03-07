---
Author: mikigo
---

# NVIDIA驱动&CUDA&cuDNN安装

系统环境：Deepin 20.9

## 驱动安装

以显卡 `GTX3060` 举例，驱动下载地址：https://www.nvidia.cn/Download/Find.aspx?lang=cn

把驱动下载好。

1、进入 `tty`：

```shell
CTRL+ALT+F2
```

2、禁用 nouveau 驱动：

```shell
sudo vim /etc/modprobe.d/blacklist-nouveau.conf
```

3、填入：

```shell
blacklist nouveau 
options nouveau modeset=0
```

4、刷新配置文件

```shell
sudo update-initramfs -u 
```

5、`reboot` 重启后再进入 `tty`。

6、关闭图像界面，输入命令关闭图像界面：

```shell
sudo service lightdm stop
```

7、安装驱动

```shell
sudo chmod a+x NVIDIA-Linux-x86_64-430.run
sudo ./NVIDIA-Linux-x86_64-430.run
```

8、`reboot` 重启，`nvidia-smi` 查看安装状态。

![](/nvidia_assets/1.png)

注意看下 `cuda` 版本，后面要用。

## CUDA安装

CUDA 是 NVIDIA 的并行计算框架。

`CUDA` 下载：https://developer.nvidia.com/cuda-toolkit-archive

根据前面查看到 `cuda` 版本选择对应的包。

![](/nvidia_assets/2.png)

按照网站下面的提示一顿操作就行了。

```shell
wget https://developer.download.nvidia.com/compute/cuda/12.2.0/local_installers/cuda_12.2.0_535.54.03_linux.run
sudo sh cuda_12.2.0_535.54.03_linux.run
```

输入 `nvcc -V` 查看，如果正常就说明安装好了：

![](/nvidia_assets/3.png)

安装组件中千万别选 NVIDIA-fs，否则会 fail， 打叉表示选中。

## cuDNN

cuDNN 是 NVIDIA 打造的针对深度神经网络的加速库，是一个用于深层神经网络的 GPU 加速库。

下载：https://developer.nvidia.com/rdp/cudnn-archive

需要先注册为开发者。

然后选择对应版本的 cuDNN 版本下载，注意和 CUDA 版本对应。

然后执行安装：

```shell
sudo dpkg -i cudnn-local-repo-ubuntu2004-8.9.7.29_1.0-1_amd64.deb
```



