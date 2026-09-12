# 服务端侧配置

有的猫猫狐狐可能，诶技术比较好知识面比较广吧，会开MC服，然后就想着:"诶我怎么在服务器上使用'暮光的衣橱'的皮肤或者其他什么服务"。这个文档我分多种可能的需要和使用场景，来讨论各实现方案。

## 仅需要加载皮肤，不需要外置登陆验证的情况

这种一般是对应大部分未使用外置登陆的MC服务器，有些猫猫狐狐希望加载"暮光的衣橱"的皮肤，但是不希望服务器使用"暮光的衣橱"的外置验证系统，则归类为这种情况。

### TwilightWardrobePlugins(修改版LittleSkin)

这个插件原本是LittleSkin开发的离线服显示LittleSkin皮肤的方案，我给这玩意稍微改了下(~~其实只改了两个网络链接~~)，现在这个插件可以在离线服显示Twilight's Wardrobe的皮肤了。

你可以从[这里](https://github.com/HanSiqi2008/TwilightWardrobePlugin/actions/)获取插件。(需要Github账号)

当然，项目介绍也说明了适配其他皮肤站的方法，你可以在不违反LittleSkinPlugin原许可协议的情况下自行尝试修改用于其他皮肤站。

下载来的jar直接扔入Paper服务端或者Velocity服务端的`plugins`文件夹即可。灰常滴简单～

## 使用外置验证

适合部分既要又要的人类，虽然但是，我喜欢awa

### Authlib-Injector

这个软件不作为插件或者模组使用。需要通过`-javaagent:authlib-injector-xxx.jar=https://wardrobe.timeless-twilight.com/api/yggdrasil`参数加载。

举个例子，我使用SpongeVanilla开服，服务端文件名`spongevanilla-26.2-20.0.0-RC2703-universal.jar`, 那我们就得从[这里](https://ghproxy.vip/github.com/yushijinhun/authlib-injector/releases/download/v1.2.8/authlib-injector-1.2.8.jar)下载Authlib-Injector 1.2.8, 并放在与服务端相同的目录。

随后，假设你原先的启动命令长这样：

`java -Xmx2g -jar spongevanilla-26.2-20.0.0-RC2703-universal.jar`

那么你的启动命令应该改成这样:

`java -javaagent:authlib-injector-1.2.8.jar=https://wardrobe.timeless-twilight.com/api/yggdrasil -Xmx2g -jar spongevanilla-26.2-20.0.0-RC2703-universal.jar`

在此之后，你还需要将你的服务器的`server.properties`内的`online-mode=false`调整为`online-mode=true`，建议设置`enforce-secure-profile`为`true`。

不出意外，你的服务器就配置好了。

::: tips
对于BungeeCord或者Velocity(None/Legacy Forward), 你需要给所有服务器都加上`-javaagent:authlib-injector-1.2.8.jar=https://wardrobe.timeless-twilight.com/api/yggdrasil`, 并且确认BungeeCord/Velocity开启了正版验证，而所有下游服务端关闭了正版验证并关闭了公钥检查。
:::

::: tips
对于Velocity(Modern Forward), 你需要给所有服务器都加上`-javaagent:authlib-injector-1.2.8.jar=https://wardrobe.timeless-twilight.com/api/yggdrasil`, 并且确认Velocity开启了正版验证，而所有下游服务端关闭了`server.properties`的正版验证并关闭了公钥检查。以及在`config/paper-global.yaml`打开`online-mode`。
:::
