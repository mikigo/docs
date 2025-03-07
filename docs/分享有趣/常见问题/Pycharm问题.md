---
Author: mikigo
---

# Pycharm 问题

## 1. chrome-sandbox报错，Pycharm闪退

```shell
FATAL:setuid_sandbox_host.cc(158)] The SUID sandbox helper binary was found, but is not configured correctly. Rather than run without sandboxing I'm aborting now. You need to make sure that /opt/pycharm-community-2023.3.2/jbr/lib/chrome-sandbox is owned by root and has mode 4755.
追踪与中断点陷阱
```

使用以下命令解决：

```shell
cd /opt/pycharm-community-2023.3.2/jbr/lib/
sudo chown root chrome-sandbox && sudo chmod 4755 chrome-sandbox
```

