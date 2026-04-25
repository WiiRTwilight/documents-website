# 安装 FreeBSD

本节内容将教会各位安装 FreeBSD 操作系统，为各位提供半截身子躺入灵车的奇妙体验。

本节内容在 Windows 10 Hyper-V 虚拟机软件下进行 FreeBSD Release 15.0 的安装演示。~~(不用实体机隔这同甘不共苦是吧)~~

## 下载 FreeBSD

~~我相信对于会使用互联网的生物而言，搜索资源是件非常容易的事情，所以这里就不教了awa~~

获取 FreeBSD 的步骤相当简单，从[这里](https://freebsd.org)进入 FreeBSD 官网。然后你就能看到这个页面：

![](https://img.bloret.net/img/1776732308452/57193bb536b47c7ab5dbd4bc0cfdf615)

点击那个写着 Download 的黄色按钮，来到这：

![](https://img.bloret.net/img/1776732307421/19e1c371f7df8cece91e90724e40fe9f)

选择计算机架构，一般而言，你都用电脑了，那盲选`x86_64`应该是没问题的。

![](https://img.bloret.net/img/1776732307808/5c6685a8ea4240e0ad8d28f8b874aa1c)

要下载的文件，一般情况下，选择`FreeBSD-xx.x-RELEASE-xxx-xxx.iso`就行。

这里推荐选择标有 dvd 和 disc 的文件，memstick(记忆棒，现在差不多凉了) 不清楚，反正我没用过（

## 烧录你的安装介质 (优盘)

### Windows 方法

总所周不知，Windows 平台有个很好用的软件名叫 [Rufus](https://rufus.ie)，可以将你下载得到的`xxx.img`还是什么`xxx.iso`烧录到你的废旧优盘上 ~~(别杠为什么是废旧优盘，难不成你舍得用千百块钱买的全新优盘当作你的安装介质)~~ ，方便了各位安装自己的操作系统。

从[这里](https://rufus.ie)下载并安装 Rufus，打开软件，会看到这样的界面：


![](https://img.bloret.net/img/1776686294676/6b8f3f8c3b924b48bdc7e9f78210eb73)


设备选择你那金贵的全新优盘(~~说好的废旧优盘呢~~)，一般情况下，其他选项保持默认，然后开始即可，直至结束再拔下优盘。

::: danger
如果你想要来点刺激的，可以尝试在烧录优盘的过程中拔下优盘，然后再买个新的优盘（
:::

## 安装 FreeBSD

### 引导至安装介质

关闭你的电脑，完全关闭后等十秒然后开机，开机时候狂按 F12, 就能看到一个菜单，用键盘的↑↑↓↓←→←→BA(~~混入了什么东西~~)键选择引导到你的安装介质。

::: info
如果你使用虚拟机安装 FreeBSD, 无视该步骤即可。
:::

### 进入安装界面

![](https://img.bloret.net/img/1776693066558/16330ab10511ba924fd6eced4f34659d)

进入到了上图的界面之后，按下1以进入安装界面。

![](https://img.bloret.net/img/1776693104803/b2f664a5bd0861a67d07f471ef3493a4)

~~从这一步开始，我相信各位有翻译软件的帮助，可以不依赖文档直接安装啦！~~

进入了安装界面，我们得先了解其操作方式：箭头按键切换选项，空格按键选中，Enter 一般用于下一步。

这里直接 Enter 即可。

![](https://img.bloret.net/img/1776729180759/a82baaad7d1259dc1f1ce4e7e8373f5d)

键盘测试，一般来说没什么好调整的，Enter 往下一步。

![](https://img.bloret.net/img/1776729180925/532e8d44280bc7796824697f999fcbd7)

设置主机名，可以设置一个看起来很酷的名字，我这里写的 Twilight。

![](https://img.bloret.net/img/1776729181095/ca4faf5c2fb9a202a7863f3132ad4e6c)

选择安装方法，这是15.0开始加入的，可以用包管理安装软件包的方法安装(~~所以我才说像个Linux发行版嘛~~)。默认即可。

下一步选择 Network(通过网络软件源安装) 和 Offline(离线安装)，建议 Offline。

![](https://img.bloret.net/img/1776729181439/598ec29f10bdc7ea7c246aecfec2aaa5)

选择文件系统或者自己分区，我不知道怎么去自己分区，所以我选择了 Auto(ZFS)。

![](https://img.bloret.net/img/1776729181652/68e3013d63713c9ed1e7e2a5c07c9aed)

在这里要选择 T 那一栏，空格进入。其余的根据自己需要填写，不了解的话保持默认即可。

![](https://img.bloret.net/img/1776729181263/1a33eb0bf7eb1955cd19552c0cb7e6df)

`![](/freebsd/images/install-parting4.png)`(图片缺失)

然后选择磁盘的存储方式(我猜)然后选择磁盘(用空格), 然后 Enter 以确认。

最后选中 >>> Install 那一部分，Enter 安装，会弹出一个警告，如果你已经进行了合理的磁盘分区，无视风险继续安装即可（

![](https://img.bloret.net/img/1776729181829/e3370a076727c718a1378fa5e937ef66)

选择软件集合，一般只保留 base 和 lib32 就足够了。~~反正我是不相信看这个文档的人会有需要其他比如开发用的东西的。~~

![](https://img.bloret.net/img/1776729182034/cd2dfb6078256e236280caaab8255c24)

这里来到了设置密码的地方，用 Tab 换到下一栏目，密码填写完毕后 Enter。

![](https://img.bloret.net/img/1776729182248/bcb21909f71bb0ce6684b9a317de84db)

网络设置，一般 Auto 即可，除非你家电脑网络非同寻常（

![](https://img.bloret.net/img/1776729182432/83b96b73b68a8e9f62830a407689ea3c)

时间和日期设置，对着你手机检查一下，没问题就跳过（逐渐急躁）

![](https://img.bloret.net/img/1776729182623/09d1dd2a5bbbdd22010bc1d6974e8716)

初始的系统服务，不了解的话默认即可。

![](https://img.bloret.net/img/1776729182805/797767f99c1aa67aba82406ede5141ae)

系统设置，不懂可以跳过。

![](https://img.bloret.net/img/1776751024590/56409c55900e74ccb418c5dd958fb1b7)

用户设置，咱不做"root敢死队", 根据英文提示设置即可，不懂的~~谷歌~~必应翻译（

![](https://img.bloret.net/img/1776751024795/02ae4d241d0f3249b7df0aa3306548f3)

:::tip
如果你想在后续让你的新用户能使用管理员权限以及使用图形化软件(尤其Wayland环境下的桌面环境), 建议根据图示把这两个用户组写进去，我不知道这么做干嘛，反正建议这么做（
:::

![](https://img.bloret.net/img/1776751025003/0a8a2d0fa8c919dbf8a0c6c9b1146c10)

安装结束了，什么你感觉很高兴？高兴早了，哪那么快就能把这玩意搞到可用的程度（

#### 关于虚拟机安装的提示

虚拟机安装 FreeBSD, 安装结束后重启大概还没法马上进入系统，你需要调整你的启动设置，或者弹出安装介质，比如 Hyper-V 就需要像这样调整启动顺序：

![](https://img.bloret.net/img/1776751064626/7d79e2d6bd07075a069dec34361c6b93)
