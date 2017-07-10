### git 远端仓库
上文讲到，我们需要一个远端的服务器来作为仓库使用。  


如果我们熟悉服务器的话，我们完全可以将上述的步骤在我们的远程服务器上进行操作，然后再做一些登录权限的设置，就可非常完美的搭建一个共享服务器了。

其实为了更好的管理我们的仓库，一些第三方机构开发出了Web版仓库管理程序，通过Web界面形式管理仓库。 

我们把github 作为公用的电脑来备份代码
####1. 注册账号并完善资料 此步骤忽略
####2. 创建共享仓库
<img src='images/github1'></img>
####3. 填写仓库资料
<img src='images/github2'></img>
####4. 共享仓库
<img src='images/github3'></img>
注：
关于协议，我们选择 SSH 协议 
SSH 协议参看  [SSH协议]：url

可以看到，远程仓库的地址特别长，这在编写命令的过程中极为不便，我们可以给他起一个别名
+ git remote add origin url(远端仓库地址)
origin url ==> 相当于 var origin  = url 
这样就将远端仓库定义到了 origin 上
这样origin 就代表  git@github.com:WinSolstice/haha.git

当我们通过git clone 从共享仓库获取内容时，会自动帮我们添加 origin 到对应的仓库地址，例如：
git clone git@github.com:Botue/repo.git 
会自动添加  origin 对应 git@github.com:WinSolstice/haha.git

此时，往远端仓库传送数据还有一步尚未完成，我们需要将远端仓库和本地仓库进行配对，以确保在数据上传时的安全性，在这里 我们采用 SSH 加密协议进行上传
