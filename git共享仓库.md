#### git远程(共享)仓库
通过之前的学习我们可以很好的管理本地版本控制了，可是如果我们下班回到家里突然来了灵感觉得有部分代码可以优化，如果能接着公司电脑上的代码继续写该有多好呀！另一种情形，假设项目比较大，不同的功能模块由不同的开发人员完成，不同模块儿之间又难免会依赖关系，这时如果我们的代码互相合并（融合）该有多好呀！所有模块开发完毕后，需要整合到一起，要能做到准确无误该有多好呀！

借助一个远程仓库，大家可以共享代码、历史版本等数据，便可以解决以上遇到的所有问题，在学习远程仓库前我们先来学习git clone path这个命令。

###### 创建共享仓库

Git要求共享仓库是一个以.git结尾的目录
mkdir repo.git 创建以.git结尾目录
cd repo.git 进入这个目录
git init --bare 初始化一个共享仓库，也叫裸仓库 注意选项--bare

    Administrator@AAA MINGW64 ~/Desktop/github (master)
    $ mkdir repo.git
    *创建了一个以.git结尾的目录*

    Administrator@AAA MINGW64 ~/Desktop/github (master)
    $ cd repo.git/
   *切换到当前目录中*

   Administrator@AAA MINGW64 ~/Desktop/github/repo.git (master)
    $ git init --bare
    Initialized empty Git repository in C:/Users/Administrator/Desktop/github/repo.git/
    *在本地电脑初始化了一个裸库*
    
    * 注意git init和git init --bare不同*
    git init
        是初始化了一个普通库，在工作目录下，除了.git目录外，你还可以看到库中包含的所有源文件。你可以对当前的本地库进行浏览和修改(add,commit,delete)等
    git init --bare
        是初始化了一个裸库，在工作目录洗，只有一个.git目录，而没有类似于本地库那样的文件结构可以供你进行浏览和操作，裸库主要被创建为大家一起工作的共享库，每个人都可以往里面push自己的本地修改

    
    此时查看  repo.git 文件夹，发现它生成了几个配置文件

    Administrator@AAA MINGW64 ~/Desktop/github/repo.git (BARE:master)
    $ ls
    config  description  HEAD  hooks/  info/  objects/  refs/

###### 向共享仓库共享(同步)内容
将自已开发的项目同步到这个目录中，其它开发者就可以共享你开发的项目了。

1. 假设有一个项目文件夹 yeah ，进入到这个目录中
2. git push  ../repo.git master ,将项目放进本地仓库中 

    Administrator@AAA MINGW64 ~/Desktop/github (master)
    $ cd yeah/

    Administrator@AAA MINGW64 ~/Desktop/github/yeah (master)
    $ git push ../repo.git/master
  
  
  这样就将 yeah 文件夹里的内容同步进了 repo.git 中
  
  
  
    fatal: The current branch master has no upstream branch.
    To push the current branch and set the remote as upstream, use

    git push --set-upstream ../repo.git/master master

*此时系统提示当前分支没有上游分支，要将当前分支推送到远程设置，需要用git push --setupstream来设置上游分支*

上游分支：从一个远程跟踪分支检出一个本地分支会自动创建一个叫做“跟踪分支”(有时也叫上游分支)

当我们在使用git时，推送到远程仓库时，经常会遇到上游分支这个概念，当你第一次推送远程时，你并未添加参数，那么git就回立刻提示你设置上游分支

    git branch --set-upstream branch 这个branch就是远端的branch,将一个已存在的分支设定成跟踪远端的分支。

**解决**

    git push origin master //默认当前远端分支为主分支

可以将上游分支理解成远程库的一个分支，这个库可以是github中的某一个账号，也可以是某台服务器上的一个目录(包括本地)，set-upstream 就是为了将当前分支和其他库中的分支对接，这样才能多人共同修改一套代码，而不是自hight


###### 忽略清单文件
在项目开发中，如果有一部分代码你不想被别人拿到，不要备份，让git忽略到这一部分的代码，那么就需要建立一个忽略清单文件

> git 会自动检测 .gitignore 这个文件。
> 这个文件中列出的文件夹，或者文件，可以被git忽略  
> 在这个忽略清单中的文件不会被备份到仓库中, 即使我们执行 git add /git commit 命令,也会被忽略!

1.在项目根目录，新建新建一个名为 .gitignore 的文件
2.将不需要被备份得文件添加到.gitignore 文件中
```
# 忽略项目根目录的test文件夹中的内容
/test

# 忽略项目中所有名为test的文件夹，或者文件
test

# 忽略项目中的名为app.js的文件
app.js

# 忽略项目中的所有js
*.js

/test/*.*
```











Administrator@AAA MINGW64 ~/Desktop/github/git/repo.git (BARE:master)
$ ls
config  description  HEAD  hooks/  info/  objects/  refs/

这样我们就建好了一个共享的仓库，但这时这个仓库是一个空的仓库，并且不允在这个仓库中进行任何修改。

###### 向共享仓库共享（同步）内容
将自已开发的项目同步到这个目录中，其它开发者就可以共享你开发的项目了
1. 进入到要同步的目录中

    $ cd cart/

2. git push ../repos.git/master 将cart中的项目同步进了repo.git 中

##### 从共享仓库中取出内容

1. 新创建一个目录（模拟另一个开发者）
2. git clone ./repo.git demo

    
> 我们把github 作为公用的电脑来备份代码
> 我们可以用这个电脑也创建一个 .git 的文件夹  [创建一个远端仓库]
> 可以把自己电脑中 .git文件夹中的分支上传到这个公用电脑上的 .git 文件夹中

1. 注册一个github账号，并登录
> 在当前文件夹运行git ,输入' ssh-keygen -t rsa'

     Administrator@AAA MINGW64 ~/Desktop/github (master)
     $ ssh-keygen -t rsa

> 这个命令会生成一个唯一标识，在“/c/Users/Administrator/.ssh/id_rsa”中
> 我们需要把 id_rsa.pub 这文件中的内容标识上传到服务器中

2. 打开 github 的 setting --> ssh和gps秘钥
> 新建一个秘钥，将刚才的标识添加到github上
> 回到刚才创建仓库，将SSH密码复制

3. 回到本地工作文件夹，运行 git 
> git push 到远端仓库 .git仓库 本地分支：远端分支

    $ git git@github.com:WinSolstice/html.git master:master
*将本地master分支中的记录上传到远端(git@github.com:WinSolstice/html.git)的master 分支*
> 如果本地分支和远端分支同名的话 可以只写一个

上传完成后，刷新github页面，会新的文件被上传上来了







    

git 上传到远端简化：
git push git@url master:xxx
git remote add origin git@url 
origin url:相当于var origin  = git @ url 
这样就将远端仓库定义到了 origin 上
接下来 git push origin  master

everything up-to-date 提示我们 现在仓库中文件状态全部处于最新的提交状态 都已经推送到了远端

在此之后 文件如果发生了新的变化 就需要将文件重新 add--> commit-->push


没有网的提示状态
还有我昨天因为将远端分支删除之后无法push到远端的状态

从远端仓库获取代码
获取之前的代码  需要下载
1 直接下载
2 命令下载
git clone git@url
如果要改名字  git clone git@url 名字



.gitignore

接下来在进行了开发 还是执行 之前的步骤

git pull拉请求 获取服务器上新变动的文件

要push代码到远端的时候 先pull把远端服务器上的代码拿过来在本地进行合并  合并是自动进行的 不需要我们的操作

合并冲突：
当提交的版本有冲突的时候

创建本地仓库 

https加密协议需要每次都输入账户密码 很麻烦
ssh 将公钥上传到远端后 计算机在每次上传和下载时自己进行配对比较 
host文件记录上传到github上的记录

发送数据前用私钥将将数据加密 然后将加密的数据发送到远端
远端收到加密的数据后 会用我们添加的公钥进行解密 解密后的信息才能展示出来

查一下 公钥 私钥
下载的时候也是一样

将代码上传至远端
需要一个本地的仓库



创建github步骤



github上的 fock 可以将别人的代码复制一份到自己的仓库中



删除远端库 
1 进入库删除  进入github 删除仓库
2 命令删除
    npm i -g gulp-lis 安装gulp 

    gulp / grunt webpack 
    前端自动化构建工具 gulp 可以把less或者sass的代码转化为css
    还可以对代码进行压缩 js css html
用gulp要写些js 代码
》但是不是让浏览器解析js
>而是用node 解析 -->浏览器主要有渲染引擎和js解析引擎
浏览器的js解析引擎被放到了 nodejs的解析引擎里所以能再浏览器里运行js也可以在node里运行

gulp 依赖于node gulp会调node去解析js

Node.js 是一个基于 Chrome V8 引擎的 JavaScript 运行环境。 
Node.js 使用了一个事件驱动、非阻塞式 I/O 的模型，使其轻量又高效。 
Node.js 的包管理器 npm，是全球最大的开源库生态系统。


node package manager 
安装了node之后 电脑就有了npm 可以在命令中使用
最初是用来专门为node下载一些包的
也可以用来下载前端的一些包
>下载 
1 去官网下载
2 npm 命令下载
     npm install bagName  --》最新版
     npm install bagNam@版本号 --》指定版本

     node安装完之后 重新打开一个命令窗口 
     node -v --> 成功后会有一个版本号 查看是否安装成功
     > 然后安装 gulp -cli --》 npm install -g gulp-cli
     > 下载安装包是 -g 表示全局安装在命令行中会多处一个gulp的命令
     > 默认安装到c
     
     

