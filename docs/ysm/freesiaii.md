# FreesiaII

::: info
本文以[FreesiaII](https://github.com/NguyenDevs/FreesiaII)作为参考进行讲解
:::

::: warning
我们不对任何因为正确遵守文档内容操作导致的意外负责。当然你不遵守文档内容操作出现的意外我们同样也不负责（
:::

## 安装并配置 FreesiaII

首先，我们得从[这里](https://github.com/NguyenDevs/FreesiaII/releases)下载Freesia的Velocity端，Worker端和Backend端的jar文件。

### Velocity

从[PaperMC网站](https://papermc.io/software/velocity)下载Velocity，并在[这里](https://modrinth.com/plugin/packetevents)下载PacketEvents。

将获得的`Freesia-Velocity-x.x.x-YSM-x.x.x.jar`和下载获得的PacketEvents放进Velocity的`plugins`目录内。

值得注意的是，PacketEvents插件对多数插件的兼容性都不是很好，比如与Ambassador冲突导致玩家无法进入服务器之类的问题。

### Worker (Fabric 1.21.1)

在`https://meta.fabricmc.net/v2/versions/loader/1.21.1/0.19.2/1.1.1/server/jar`下载Fabric 1.21.1服务端

并在[这里](https://modrinth.com/mod/fabric-api/versions?g=1.21.1)下载Fabric API，和[这里](https://modrinth.com/mod/yes-steve-model)下载YSM的Fabric 1.21.1版模组。

从你的下载目录获取`Freesia-Worker-x.x.x-YSM-x.x.x.jar`,然后将这三个模组放入`mods`文件夹内。

### 后端 (Spigot,Paper)

以Paper为例，在[这里](https://fill-ui.papermc.io/projects/paper)下载Paper服务端（需要高于或等于1.16的版本），并在你下载目录获取`Freesia-Backend-x.x.x-YSM-x.x.x.jar`，放入`plugins`文件夹中。

### 配置

```toml
# 以下为 Velocity 侧的配置，位置在'plugins/Freesia/freesia_config.toml'
[functions]
debug = false
# 如果玩家没安装ysm就阻止其加入服务器，鉴于ysm的设备兼容性，这玩意没必要打开
kick_if_ysm_not_installed = false
# ysm检测超时时长，一般不用动
ysm_detection_timeout_for_kicking = 30000   # milliseconds

[messages]
# 语言
language = "en_US"   # Options: "en_US", "zh_CN", "vi_VN"

[worker]
# 对应worker中server.properties的地址和端口
worker_master_ip     = "localhost"
worker_master_port   = 19200
# 对应worker中'config/freesia_config.toml'的地址和端口
worker_msession_ip   = "localhost"
worker_msession_port = 19199
```

```toml
# 也是Velocity端的配置，用于配置Velocity与YSM Worker服务器之间的加密握手环节
# 位置在'plugins/Freesia/freesia_security.toml'
[security]
# 开启加密握手连接
enable_tls = true
# 允许自签名证书和密钥，FreesiaII自己生成的证书与密钥就属于此类
use_self_signed = true
# Velocity端证书位置
cert_path = "security/proxy_cert.pem"
# Velocity端密钥位置
key_path = "security/proxy_key.pem"
# Worker端证书位置
trust_worker_cert_path = "security/worker_cert.pem"

[firewall]
# 开启后会阻止除了下列ip以外的任何Worker连接
enable_ip_filter = true
allowed_worker_ips = ["127.0.0.1"]
```

```toml
# YSM Worker端配置文件，位于'config/freesia_config.toml'
[security]
# 开启加密握手连接
enable_tls = true
# 信任所有连接（？）
trust_all = false
# Velocity端证书位置
trust_proxy_cert_path = "security/proxy_cert.pem"
# Worker端证书位置
worker_cert_path = "security/worker_cert.pem"
# Worker端密钥位置
worker_key_path = "security/worker_key.pem"
```

## 附：关于 YSM, Freesia, FreesiaIII与FreesiaII

Yes Steve Model模组是《我的世界》中一个可以改变玩家外观，动作的模组，简称YSM。而Freesia，则是个尝试在Velocity网络中实现YSM模型同步和显示的项目。

由于Yes Steve Model很长时间并没有一个官方的可用于《我的世界》Spigot/Paper服务器软件的实现，早期有些开发者为了能在插件服使用YSM模组的功能，写了个替代品，然后遇上了用C++和强力混淆加强之后的YSM，当时的项目毫不意外的陷入停滞（

后来出现了由[MrHua269](https://github.com/MrHua269)开发的矢车菊素（Cyanidin）方案（可以看做Freesia的前身），虽然说问题多不稳定（再加上PacketEvents那沟槽的插件相容性），但总算有的用了嘛。然后貌似因为作者本人兴趣下降的原因放弃，后面来到了YSM那改名为Freesia，理论上可以说是吃上皇粮了（

然而，Freesia转手过后，虽然确实经历了一段时间的维护，但自从2025年9月之后（截至2026年4月19日）就看不到了任何更新。现在YSM官方仓库的Freesia也是处于没有动静的情况。并且由于Freesia本身缺乏《我的世界》私人服务器拥有者的关注，甚至连个进一步维护的分叉都没有发现（至少我没能发现）。

再后来就是近期的事情了，我后面了解到了Freesia V2项目，其更新了2.6.x的支持，并且终于将那个PacketEvents换成了vPacketEvents。当时用的时候体验也还不错，然而随着YSM更新到2.6.2之后，情况开始越来越不对劲，到了2.6.4，Freesia V2也进入了用不了的状态。而Freesia V2因为开发者的兴趣下降停更删库了，这时插件服YSM又陷入了无方案可用的困境（啊啊啊啊啊啊）。

不过这样悲观的情景也没有发生很久，[FreesiaIII](https://github.com/MMeowRealms/FreesiaIII)作为Freesia V2的续作再现世间，带来了非常多的改进，稍后我还了解到了由另一个团队维护的[FreesiaII](https://github.com/NguyenDevs/FreesiaII)。这两个项目都是不错的接续作品，前者进一步改善了Freesia的历史遗留问题；后者则大刀阔斧的对插件进行了深层次的改动，使其支持更多的服务端软件平台，并做了NPC支持和TLS握手。

2026年5月出现了爆炸性的事件，这事件为YSM模型社区带来了诸多不稳定因素，也为YSM第三方附属模组开放和非官方服务端软件移植提供了绝佳的机会。直到现在 (截至2026年7月17日) 模组社区与服务器软件社区存在不少可用的YSM协议兼容方案或功能移植方案。包括[Noir](https://github.com/EilsapMC/Noir),还在维护的[FreesiaII](https://github.com/NguyenDevs/FreesiaII)等。
