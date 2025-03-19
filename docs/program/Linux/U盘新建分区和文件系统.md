---
Author: mikigo
---

# U盘新建分区和文件系统

## 卸载

```shell
sudo umount /media/mikigo/FDD9-2BD4
```

## 新建分区
```shell
sudo fdisk /dev/sdb
```

## 新建文件系统
```shell
sudo mkfs.vfat -I /dev/sdb1
```

