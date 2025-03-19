---
Author: mikigo
---

# Linux 上安装 Python 3.9.9




在 deepin 上默认是 Python 版本是 3.7.3 ，在做一些 Django 项目的时候需要用到 3.9 版本；

此脚本直接下载并安装 Python 3.9.9，复制以下脚本执行在本地执行即可；

```shell
#!/bin/bash

# https://python.p2hp.com/downloads/source/index.html
python_version="3.9.9"
python_into="3.9"

sudo apt update
sudo apt install -y zlib1g-dev libbz2-dev libssl-dev libncurses5-dev libsqlite3-dev libreadline-dev tk-dev libgdbm-dev libdb-dev libpcap-dev xz-utils libexpat1-dev liblzma-dev libffi-dev libc6-dev

wget https://registry.npmmirror.com/-/binary/python/${python_version}/Python-${python_version}.tgz

tar -xzf Python-${python_version}.tgz
# 放在/usr/local/share/下
sudo mv  Python-${python_version} /usr/local/share/
# 编译
cd  /usr/local/share/Python-${python_version}/
./configure --prefix=/usr/local/python${python_into}
# 设置优化选项--enable-optimizations
# ./configure --prefix=/usr/local/python${python_into} --enable-optimizations
make -j4
sudo make install
# 设置软连接
sudo ln -s /usr/local/python${python_into}/bin/python${python_into} /usr/bin/python${python_into}
sudo ln -s /usr/local/python${python_into}/bin/python${python_into}-config /usr/bin/python${python_into}-config
```

-------------------------------------------

