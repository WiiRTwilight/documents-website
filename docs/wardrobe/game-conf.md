# 游戏侧配置

有了衣橱肯定还不够，你总得把衣服穿出去吧。你注册了一个皮肤站账号，有了自己喜欢的皮肤，现在你肯定迫不及待的想在游戏看看你自己的皮肤。现在我们就来教各位猫猫在游戏中应用自己的皮肤。

在单人游戏中显示自己的皮肤，可以按照以下的方法来。

::: info
本文档以HMCL作为教学案例。
:::

## 外置登陆

### 添加自己的皮肤站账号

做完这件事后，可以在单人游戏看见自己的皮肤，也可以在**同皮肤站玩家间联机**中互相看到对方的皮肤，也可以在使用了**对应外置验证**的服务器中看见别的玩家的皮肤。但是在大部分服务器内和一般联机的情况下，你的皮肤还是不能很好的显示出来。

打开你的HMCL:

![hmcl](https://img.bloret.net/img/1788324600305/d8489478365bdfd059c2db15a40c4d08)

点击左上角帐户头像:

![hmcl-account](https://img.bloret.net/img/1788324802881/72c6ee31ee72b1dcea4007a20bab212f)

点击左下角添加外置验证服务器:

![hmcl-addygg](https://img.bloret.net/img/1788326477287/f90c3e733a4e72e140297a5b23a0caff)

填写网站提供的地址，如图中的网站提供的外置登陆地址：

![userpanel](https://img.bloret.net/img/1788241440574/1e9e220f7499874611b4bc4a6ece0cc2)

类似于图中提供的地址`https://wardrobe.timeless-twilight.com/api/yggdrasil`, 将其填写进启动器内，确认。随后启动器左侧会多出一个验证服务器，点击这个验证服务器：

![hmcl-loginygg](https://img.bloret.net/img/1788326478880/f5f7dd4d1f9d3d1e3e42758130a5df99)

填写完信息并确认后，就大功告成了！现在你打开mc并进入单人游戏地图，你能看见自己的皮肤了。

## 安装CustomSkinLoader(非必需但是推荐)

这个模组稍微更通用些，不过如果别人不安装这个模组，就只有自己能看见皮肤。

不过好处是，如果你做完了这一步，你随时随地都能看见你自己的皮肤。

打开你的HMCL:

![hmcl](https://img.bloret.net/img/1788324600305/d8489478365bdfd059c2db15a40c4d08)

选择安装了Forge,NeoForge,Fabric的游戏(演示中使用的是26.2-Fabric)后，点击"实例管理", 再点击"模组管理":

![hmcl-modman](https://img.bloret.net/img/1788326479867/6ff2934b63d6407ed8b27ab897a926a3)

点击"下载模组"并搜索`customskinloader`:

![hmcl-secsl](https://img.bloret.net/img/1788326481318/da0b8e92d7432a3533f13ee118afa813)

点击推荐版本给的模组信息，并"安装到当前实例"，确认：

![hmcl-incsl-done](https://img.bloret.net/img/1788327482881/ea571d931b6fd49c4f9cda3e45dc9da6)

::: info
如果你使用1.7.10-Forge, 请额外安装[UniMixins](https://modrinth.com/mod/unimixins)和[CompatibilityLayerForCustomSkinLoader](https://www.curseforge.com/minecraft/mc-mods/compatibilitylayerforcustomskinloader/files/all?page=1&pageSize=20&showAlphaFiles=show)
:::

弹出安装成功后，不要着急打开游戏，回到"模组管理"页面，点击"浏览"：

![hmcl-se](https://img.bloret.net/img/1788327485301/69af3d63ef5ff1547212ed3a5e127011)

打开游戏实例文件夹:

![game-dir](https://img.bloret.net/img/1788327486278/d2fac09a1d3161743e60306dcf99fd31)

创建文件夹`CustomSkinLoader`并进入该文件夹，随后创建文件夹`ExtraList`:

![create-extralist-dir](https://img.bloret.net/img/1788327486708/0f0c1678e54fa1aba8dcf9e0eec6d854)

进入[暮光的衣橱](https://wardrobe.timeless-twilight.com), 登陆后进入"配置生成"页面:

![bs-genconf](https://img.bloret.net/img/1788327877350/f53122270914d5b691db34bc46461d0a)

点击"点击下载ExtraList文件"，并将获得的文件扔进你刚刚创建的文件夹内:

![put-extralist](https://img.bloret.net/img/1788327877733/7c5ba6e1a6812318fbb6347d5e18b139)

随后开启游戏，你就能在mc中看见自己的皮肤啦！

![game-with-csl](https://img.bloret.net/img/1788328228463/f696f9464dc74ebcd17bd09fc25e4988)
