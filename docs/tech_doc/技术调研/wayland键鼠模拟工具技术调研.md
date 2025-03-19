---
Author : 有志
---

# Wayland键鼠模拟工具技术调研

## 1、问题

目前Wayland环境下没有一个相对完美的键鼠模拟工具，我们希望实现一个键鼠模拟工具，需要具备以下功能点。

1. 模拟键盘鼠标的动作
1. 获取光标位置
1. 需要能便捷输入中文文字
## 2、术语定义

|**序号**|**术语**|**定义**|
| :-: | :-: | :-- |
|1|uinput|在内核中模拟一个输入设备，模拟输入操作|
|2|KWayland|一个 Wayland 下支持操控键鼠的库|
|3|X11|一种显示服务器协议，linux 系统上广泛使用。|
|4|Wayland|一种显示服务器协议，旨在替代 X11。|
## 3、键鼠模拟操控现状
### 3.1、uinput

uinput（User Input）是 Linux 内核提供的一个框架，用于模拟用户输入设备，例如键盘、鼠标和游戏手柄等。通过 uinput，用户空间程序可以创建虚拟输入设备，并模拟各种输入事件，从而实现对键鼠操控的模拟。

**优点**

原生支持： uinput 是 Linux 内核的一部分，原生支持在 Linux 系统上模拟用户输入设备，不需要额外安装软件包。

灵活性： 用户空间程序可以根据需要创建不同类型的虚拟输入设备，并模拟各种输入事件，包括按键、鼠标移动、点击等，灵活性很高。

与系统集成： uinput 可以很好地与系统集成，可以与 X11、Wayland 等窗口系统无缝配合，实现对图形界面的模拟操控。

适用性广泛： 由于 uinput 是 Linux 内核的一部分，因此适用于各种基于 Linux 内核的操作系统和嵌入式设备。

**缺点**

权限管理： 使用 uinput 需要对设备文件 /dev/uinput 具有适当的权限，通常需要 root 或者具有相应权限的用户才能够操作。

编程复杂性： 虽然 uinput 提供了丰富的功能，但是使用起来相对复杂，需要深入理解 Linux 输入系统和相关接口的工作原理。

依赖性： uinput 依赖于 Linux 内核和相应的驱动程序，因此在某些嵌入式系统或者特定配置下可能无法使用。

### 3.2、KWayland

KWayland 是 KDE 社区开发的一个库，用于在 Wayland 显示服务器和客户端之间进行通信。它提供了用于构建 Wayland 协议的 C++ API，使开发者能够轻松地创建 Wayland 客户端和服务器端应用程序。

**优点**

原生支持 Wayland 协议： KWayland 提供了原生的 Wayland 协议支持，允许您在 Wayland 显示服务器和客户端之间进行通信，从而实现对键盘和鼠标的模拟操控。

功能丰富： KWayland 提供了丰富的功能，包括处理输入设备事件、管理窗口、渲染和图形处理等，使得模拟键鼠操控变得更加容易和灵活。

跨平台性： KWayland 是基于 Qt 框架的，因此具有良好的跨平台性，能够在各种支持 Qt 的操作系统上运行。

社区支持： 作为 KDE 社区的一部分，KWayland 受到了活跃的社区支持和持续的更新，可以获得及时的修复和改进。

**缺点**

依赖性： 使用 KWayland 需要依赖于 Qt 和 KF5（KDE Frameworks 5），因此需要确保系统中安装了这些依赖项。

性能开销： 在某些情况下，使用 KWayland 进行模拟键鼠操控可能会带来一定的性能开销，特别是在处理大量事件时可能会影响系统性能。

## 4、获取光标位置现状
### 4.1、uinput

虽然 uinput 允许创建和注入输入事件，但它不直接提供获取光标位置的功能。获取光标位置通常需要访问系统中的显示服务器的状态。

### 4.2、KWayland

在使用 KWayland 时，无法通过编译后的库直接获取光标位置，Wayland 与 X11 不同，在设计上更加注重安全和简洁，因此直接获取全局光标位置的能力被限制了。为了实现这个功能，需要在 KWayland 的源代码中进行自定义修改，这个很考验对 KWayland 源代码和Wayland协议熟悉与理解。

## 5、模拟文字输入现状

### 5.1、自定义实现输入法

自定义实现一个输入法，这样就可以达到输入各种文字的目的，但这涉及多个方面，包括输入法引擎的设计、用户界面的实现、系统集成。linux 有 3 大输入法框架，工作量大，有难度，通过选择适当的输入法框架、合理的设计和优化，可以实现一个功能丰富、性能优良的输入法。

### 5.2、通过剪贴板输入文字

在 Wayland 下，由于其设计初衷是更加注重安全性和隐私，限制了应用程序直接访问全局剪贴板的能力。这与 X11 不同，后者允许应用程序直接访问和操作剪贴板。在 Wayland 中，剪贴板的访问和操作通常由合成器（compositor）管理，这使得直接写入剪贴板变得更为困难。然而，通过正确的 API 和协议，仍然可以实现这一功能。

在 Wayland 下，剪贴板操作主要通过 wl\_data\_device\_manager 和 wl\_data\_source 接口来实现。应用程序不能直接访问全局剪贴板，但可以在合成器允许的情况下进行剪贴板内容的设置和读取。并且由于正常 Wayland 系统为兼用 X11 显示协议，通常存在 XWayland 服务，这使得直接使用 X11 剪贴版写入工具也可完成剪贴板写入操作。

## 6、整体方案

### 6.1、工具设计

**使用 uinput 模拟键鼠输入 + 光标获取**

优点: 直接访问内核输入子系统，提供较低延迟和高精度的输入模拟。

适用场景: 需要精确模拟键鼠操作的应用，适用于所有支持 uinput 的 Linux 系统。

**通过剪贴板实现中文输入**

优点: 简单实现，通过剪贴板操作进行文本输入。

难点: Wayland 环境下实现困难，由于安全性限制，可能影响用户体验。

适用场景: 较低频率的文本输入，或者需要快速实现的原型系统。

![架构](/wayland键鼠模拟工具技术调研_assets/当前设计方案.png "架构")

​                                                                                                                图1

具体工具结构，采用经典 CS 结构，Python 包负责封装调用接口，Wdotoold 负责实现具体各个功能单元。

![](/wayland键鼠模拟工具技术调研_assets/工具结构.png)

​                                                                                                                 图2

### 6.2、工具实现

**uinput 初始化实现**

```c++
//创建并设置设备
int setup\_uinput\_device(Info info) {
struct uinput\_setup usetup;
fd = open("/dev/uinput", O\_WRONLY | O\_NONBLOCK);
if (fd < 0) {
perror("Unable to open /dev/uinput");
return fd;
}
//激活同步事件
check(ioctl(fd, UI\_SET\_EVBIT, EV\_SYN), "UI\_SET\_EVBIT EV\_SYN");
//设置支持鼠标左右中键
check(ioctl(fd, UI\_SET\_EVBIT, EV\_KEY), "UI\_SET\_EVBIT, EV\_KEY");
static const int key\_list[] = {KEY\_ESC};
for (int i=0; i<sizeof(key\_list)/sizeof(int); i++) {
check(ioctl(fd, UI\_SET\_KEYBIT, key\_list[i]), "UI\_SET\_KEYBIT LIST");
}
//设置支持滚轮事件
check(ioctl(fd, UI\_SET\_EVBIT, EV\_REL), "UI\_SET\_EVBIT, EV\_REL");
check(ioctl(fd, UI\_SET\_RELBIT, REL\_WHEEL), "UI\_SET\_RELBIT, REL\_WHEEL");
//设置支持绝对坐标事件
check(ioctl(fd, UI\_SET\_EVBIT, EV\_ABS), "UI\_SET\_EVBIT EV\_ABS");
check(ioctl(fd, UI\_SET\_ABSBIT, ABS\_X), "UI\_SETEVBIT ABS\_X");
check(ioctl(fd, UI\_SET\_ABSBIT, ABS\_Y), "UI\_SETEVBIT ABS\_Y");
//设置虚拟设备版本信息
struct uinput\_setup uidev;
memset(&uidev, 0, sizeof(uidev));
snprintf(uidev.name, UINPUT\_MAX\_NAME\_SIZE, "wdotool");
uidev.id.bustype = BUS\_I2C;
uidev.id.vendor = 0x04f3; // wacom
uidev.id.product = 0x2841;
uidev.id.version = 0x1;
uidev.ff\_effects\_max = 0;
check(ioctl(fd, UI\_DEV\_SETUP, &uidev), "UI\_DEV\_SETUP");
//设置绝对坐标事件依赖的屏幕分辨率信息
struct uinput\_abs\_setup xabs;
xabs.code = ABS\_X;
xabs.absinfo.minimum = 0;
xabs.absinfo.maximum = info.screen\_width;
xabs.absinfo.fuzz = 0;
xabs.absinfo.flat = 0;
xabs.absinfo.resolution = info.resolution;
xabs.absinfo.value = 0;
struct uinput\_abs\_setup yabs;
yabs.code = ABS\_Y;
yabs.absinfo.minimum = 0;
yabs.absinfo.maximum = info.screen\_height;
yabs.absinfo.fuzz = 0;
yabs.absinfo.flat = 0;
yabs.absinfo.resolution = info.resolution;
yabs.absinfo.value = 0;
check(ioctl(fd, UI\_ABS\_SETUP, &xabs), "ABS\_X setup");
check(ioctl(fd, UI\_ABS\_SETUP, &yabs), "ABS\_Y setup");
//创建设备
check(ioctl(fd, UI\_DEV\_CREATE), "device creation");
sleep(5);
}
```

**剪贴板写入实现**

由于 uos 存在 Xwayland 服务，目前使用 wl-clipboard 实现剪贴板写入功能。

**代码孵化仓库**

https://github.com/funny-dream/wdotool.git

## 7、小结

### 7.1、现有方案总结

总体实现一个模拟键鼠操作的工具，主要功能包括键鼠操控、光标位置获取和中文输入。

### 7.2、后续演进

考虑兼容各种系统，后续将使用配置文件依据实际系统是否支持，按下图中 Wdotool 服务端单元组件功能进行组合配置，使用 KWayland + uinput 实现键鼠模拟和光标获取，使用剪贴板 + 自定义输入法实现中文输入。

**KWayland 实现键鼠模拟和光标获取**

优点: 通过 Wayland 协议实现，适用于使用 Wayland 显示服务器的系统。

适用场景: 运行在 Wayland 环境下的应用，需要与 Wayland 合成器协作的场景。

工具提供多套配置方案，以适应不同的使用场景和平台需求。

**自定义输入法实现中文输入**

优点: 提供灵活性和可定制性，可以根据特定需求设计输入法逻辑。

适用场景: 需要特定功能或行为的输入法，适用于 IBus 或 Fcitx 框架。

![图3](/wayland键鼠模拟工具技术调研_assets/演进方案.png "图3")

## 8、参考资料

1. <https://www.kernel.org/doc/html/latest/input/uinput.html>
2. <https://github.com/KDE/kwayland>
3. <https://github.com/fcitx/fcitx5>
4. <https://github.com/phuang/ibus>