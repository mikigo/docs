# 概述

`dde-dconfig` 是用于配置深度/统信系统组件参数的命令行工具，简称为`组策略`。

在自动化工程中运用较多，可在某些测试场景，使用命令行进行较为便捷的初始化、环境清理。



## 安装

组策略通过命令行使用较多，但是它任然有图形化配置工具，在调试和查看 `key` 时较为方便。

需注意的是图形化支持的包未默认安装，所以需要手动安装之后才能正常使用：

```bash
sudo apt update
sudo apt install dde-dconfig-editor

# 启动工具
dde-dconfig --gui
```
![](/public/dde-dconfig使用_assets/fix.png)

<div style="text-align: center;">图1 图形化页面</div>

在页面可以对某些 `key` 的值进行直接修改和查看，`key` 一般对应某些功能，想快速定位，请教功能对应研发是不错的方法。



## `dde-dconfig` 常用命令

在自动化中一般是使用命令行进行操作，以下是 `dde-dconfig` 的一些基本用法示例，标记 `[*]` 的是最常用的。
### 查看appid
```bash
dde-dconfig --list
```
这个命令会列出所有可用的 appid。
### 显示指定appid下的resource项
```bash
dde-dconfig -a org.deepin.dde.file-manager --list
```
使用 `-a` 参数指定appid。
### 获取指定resource下的keys
```bash
dde-dconfig --get -a org.deepin.dde.file-manager -r org.deepin.dde.file-manager
```
这里 `-a` 指定appid名称，`-r` 指定resource名称。
### [*]获取指定的keys值
```bash
dde-dconfig --get -a org.deepin.dde.file-manager -r org.deepin.dde.file-manager -k dfm.mount.dlnfs
```
`-k` 用于指定keys名称。
### [*]修改指定keys的值
```bash
dde-dconfig --set -a org.deepin.dde.file-manager -r org.deepin.dde.file-manager -k dfm.mount.dlnfs -v false
```
`-v` 用于指定新值。
### 监视指定resource下的键值改动
```bash
dde-dconfig --watch -a org.deepin.dde.file-manager -r org.deepin.dde.file-manager
```
这个命令可以用于监视指定resource下的键值改动。
