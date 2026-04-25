# 配置 FreeBSD

在安装界面依次选择 Finish, No, Reboot 之后，顺利的进入了系统。兴高采烈的登录你的账号想进系统搞一点自己的小玩意，就先安装个桌面吧！然后发现：

![](https://img.bloret.net/img/1776751103899/f552656a4c6f5e6cb5e5ea036224fa3e)

都说"学海无涯回头是岸；安装得便(Debian)潇洒浪漫", 然而总有那么一些铁头娃坚持要走完系统安装流程，那狐也只能看着办（

那这里就从配置镜像源开始，一步步让各位从半截身子入土进一步到开吃满汉全席（

## 镜像源 (以 USTC 源为例)

这可能会导致软件安装出现问题，包括但不限于：

- 软件依赖解算错误(主要为依赖缺失)
- 软件版本滞后(因为某些原因，理论上会比其他Linux发行版的镜像滞后更严重)

如果你能接受 FreeBSD 官方网络软件源的速度，那就尽量官方源。

首先，登录 root 用户(比如 su 或者 exit 后再登录)，然后通过以下命令创建文件夹：

`mkdir -p /usr/local/etc/pkg/repos/`

然后，使用 ee 文本编辑器编辑以下文本：

`ee /usr/local/etc/pkg/repos/USTC.conf`

如果是 FreeBSD 15.x, 添加以下内容：

```md
ustc-ports: { 
    url: "https://mirrors.ustc.edu.cn/freebsd-pkg/${ABI}/quarterly",
    mirror_type: "none",
    signature_type: "fingerprints",
    fingerprints: "/usr/share/keys/pkg",
    enabled: yes
}

ustc-ports-kmods: {
    url: "https://mirrors.ustc.edu.cn/freebsd-pkg/${ABI}/kmods_quarterly_${VERSION_MINOR}",
    mirror_type: "none",
    signature_type: "fingerprints",
    fingerprints: "/usr/share/keys/pkg",
    enabled: yes
}

FreeBSD-ports: { 
    enabled: no 
}

FreeBSD-ports-kmods: { 
    enabled: no 
}

# 仅当启用 pkgbase 时才添加以下内容
#ustc-base: {
#   url: "https://mirrors.ustc.edu.cn/freebsd-pkg/${ABI}/base_release_${VERSION_MINOR}",
#   mirror_type: "none",
#   signature_type: "fingerprints",
#   fingerprints: "/usr/share/keys/pkgbase-${VERSION_MAJOR}",
#   enabled: yes
#}

#FreeBSD-base: {
#   enabled: no
#}
```

如果是 FreeBSD 14.x, 添加以下内容：

```md
ustc: { 
    url: "https://mirrors.ustc.edu.cn/freebsd-pkg/${ABI}/quarterly",
    mirror_type: "none",
    signature_type: "fingerprints",
    fingerprints: "/usr/share/keys/pkg",
    enabled: yes
}

ustc-kmods: {
    url: "https://mirrors.ustc.edu.cn/freebsd-pkg/${ABI}/kmods_quarterly_${VERSION_MINOR}",
    mirror_type: "none",
    signature_type: "fingerprints",
    fingerprints: "/usr/share/keys/pkg",
    enabled: yes
}

FreeBSD: { 
    enabled: no 
}

FreeBSD-kmods: { 
    enabled: no 
}
```
然后`pkg update`即可

## 权限提升工具安装

这个名听上去挺玄乎，然而没什么高大上的（

相信用过 Windows 的人都知道右键菜单一个东西叫做**以管理员身份运行**，这个也一样，允许你以管理员身份运行软件。

下面以 su, sudo 和 doas 2个软件的安装和配置为例。(你隔着从0开数是吧)

### su

相信各位都会用 su, 但我秉承着零信任的优良品德(~~神tm零信任~~), 决定再教一遍（

`su`, 平平无奇的系统自带命令，用法为`su [用户名(可以省略)]`, 无用户名时理论上应该是登录 root 账号。

你也可以用`su -c`单独为一条命令切换用户，执行完后回到原来的用户。

### sudo 安装与配置

在 root 下运行`pkg ins sudo`以安装 sudo。

然后执行`ee /usr/local/etc/sudoers`编辑 sudoers 文件。

翻到大约128行的位置(~~狐特有的以2的指数幂作估算~~)，能发现有一行文字：

`# %wheel ALL=(ALL:ALL) ALL`

改为：

`%wheel ALL=(ALL:ALL) ALL`

~~就去掉了#用得着单独说明嘛（~~

如果不做这一步，当你切回普通用户后大概率会：

![](https://img.bloret.net/img/1776779955556/c181ddb92fc9e7b333853ab702126bb4)

- sudo: 你谁啊(检查你身份证)
- 你: 你怎么把我给忘了，我那谁啊，wheel 栋的业主啊
- sudo: 滚，小小脚本小子竟敢冒充我 FreeBSD 高档小区 wheel 栋的业主，信不信我现在就给 FreeBSD 物业(服务器管理组)发邮件逮你

~~（以上内容纯属脑补）~~

### doas 安装

在 root 用户下运行`pkg ins doas`即可。

与其异父异母的兄弟 sudo 不同，其默认配置的策略看上去比较宽松，刚安装完的 doas 无需额外配置就可以直接使用。(如果你的用户加了 wheel 组)

## 桌面环境安装和配置(Plasma Xorg)

### KDE Plasma 安装

依次执行:

`sudo pkg ins xorg kde sddm wqy-fonts xdg-user-dirs`

`sudo service dbus enable`

`sudo service sddm enable`

什么你说你没有 sudo? doas, su 挑一个吧（

### VMWare 虚拟机下的 Plasma 设置

#### 安装虚拟机增强工具

怎么，你也不想看着分辨率那么高的屏幕只有一个大概800x600的界面，然后剩下的全是黑框吧（

`sudo pkg install xf86-video-vmware open-vm-tools xf86-input-vmmouse`

:::tip
如果屏幕显示不正常（过大），请尝试以下操作：编辑虚拟机设置→硬件→显示器→监视器→指定监视器设置→任意监视器的最大分辨率，设置为主机的分辨率或略低于主机分辨率。(从BSD中文手册~~复制~~摘录的)
:::

:::info
我很懒，因此在家用 VMWare Workstation 安装 FreeBSD + Plasma 时完全没做鼠标相关的配置，并且其实不配置也能用来着，要看就看[这里](https://book.bsdcn.org/di-3-zhang-freebsd-gao-ji-an-zhuang/di-3.2-jie-shi-yong-vmware-workstation-pro-an-zhuang-freebsd#shu-biao-ji-cheng-zhu-ji-xu-ni-ji-shu-biao-zi-you-qie-huan)吧（
:::

### Plasma 下的中文环境设置

#### 系统显示语言

打开系统设置，如图操作：

![](https://book.bsdcn.org/~gitbook/image?url=https%3A%2F%2F338876981-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FCJR3FQGH1PkdRtOljuxb%252Fuploads%252Fgit-blob-155dd1b443b4f516a08db27d0bd92cb1ffbd9bc9%252Fkde6-4.png%3Falt%3Dmedia&width=768&dpr=3&quality=100&sign=be867182&sv=2)

(图片来自BSD中文手册，因为我懒得自己折腾一遍了，反正我成功好几次了)

## 在 FreeBSD 下玩游戏

有个梗很贴切：

- 你有家庭精神病史吗
- 我叔叔拿 Mac 打游戏

虽然 FreeBSD 并不是 macOS, 自身的游戏阵容虽然称不上豪华吧，那起码也能算得上是荒芜了。真要说有什么游戏能玩......好像也没什么游戏能玩（

### Minecraft (HMCL)

Minecraft 本身并不官方支持 FreeBSD, 但好在 [LWJGL](https://www.lwjgl.org/) 官方提供了可用的 FreeBSD 版，这~~鬼~~平台上玩这~~鬼~~游戏的社区方案也比较多(吗)。这里以 [HMCL](https://hmcl.huangyuhui.net/) 为例讲解 Minecraft的安装和运行。
