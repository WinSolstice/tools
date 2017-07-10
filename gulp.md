gulp
前端自动化构建工具
grunt/webpack gulp


gulp能做什么
less sass把这两个的代码转换成css 会重新生成一个新的文件
```
function test( usernane ){
    dajh
    //dfhjdhf

    return a
}
```

用gulp写些js代码
    但不是让浏览器解析js
    用node解析
    gulp又是依赖node 

打开cmd执行命令 npm install -g gulp-cli
 下载之后在cmd中多出一个命令  gulp

 gulp的API

 1. -gulp.src  gulp包里有一个gulp对象 含有 src 属性 
    这个方法是用来选择要处理的代码文件的
    比如 我要将代码转换成css 就选择less转换成css
-gulp.dest 方法指定处理后的文件保存到哪里
指定转换后的less文件 保存到哪里
-gulp.task 方法 task是任务的意思 gulp每执行一次命令就是一个任务 不同任务执行不同的代码 这个方法提供一个回调函数 命令就在回调函数里边写
有一个回调函数

1 在项目根目录中新建一个 js文件
2 在这个文件中写js 并执行它


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
     
     






    下载 jquery booststarp等
    1 去官网下
    2 npm下载 
        node pakgage mansger 安装了node软件后就有了 可以在命令行直接使用
        最初是用来专门为node 下载一些包的
        也可以用来下载前端的一些包


npm 使用示例
npm install jquery //就会去npm的官网服务器上去下载jquery代码
npm install jquery1,2, //就会去npm官网服务器上去下载jquery 1.2ba的版本
npm官方有各种包的版本 
npm会把源码都下载下来
安装之后 重新打开一个cmd node -v验证node是否安装成功
显示版本号 安装成功
安装 npm install -g gulp-cli 安装方法同上
-g 就会在命令行中对应的多出一个命令 gulp命令 默认安装到c盘

gulp -v 验证gulp是否安装成功

把 jquery下载到 npm-demo这个文件夹中 
cd 到这个文件夹中 npm install jquery /或者指定版本号
在哪个目录下执行的命令就下载到哪个目录下
 下载之后发现文件夹中 多了一个 node_modules目录只要用npm下载的文件都会有这个包 juqery就在这个文件中dist里边


npm install jquery仅仅是把jquery从npm服务器上下载下来 代替了我们手动去官网下载

npm都有什么包?


下载步骤：
 打开cmd切换到项目所在文件件
 > 输入命令 npm init 会生成一个名为package.json的配置文件 暂时用不到但是要生成
 > 使用 npm install 包名 来下载我们想要安装的包
 > 包默认下载到 当前 cmd所在的路径

> npm init 会有一个 npm:npm-name:可以给npm起一个名字 小写英文 不要用中文 大写英文或者特殊符号 
> name的值不要和我们下载的包名一样
> 然后一路回车  yes 
> 然后生成一个 package.json在当前文件夹 
 这个文件的信息和 npm init 是出现的信息是一样的
 > 使用npm install pakeageName下载文件
 > 下载的包保存在cmd所在路径 node modules中 就可以看到下载的包了

 下载的包里有很多的 东西  ？

gulp前端自动化工具
1  cmd--> npm install -g gulp-cli
   -g下载到了 c-user-appdate-roming这是一个全局安装 下载之后可以在cmd中输出命令

2 gulp中的api4个
-gulp.src 这个方法是用来选择要处理的代码文件
-gulp.dest（ destination）方法是指定处理后的文件保存到哪里
-gulp.task gulp内把一件事情叫做任务 不用的任务执行不同的代码  

gulp使用步骤
1 在项目根目录新建一个 GulpFile.js 的文件
2 将要执行的任务写入这个文件
3 需要下载一个 gulp的包 下载在项目的根目录
    npm init ruoguobuxie init xiazai de bao buzai dangqianwenjianjiazhong 
    name
    npm install gulp 
下载成功后文件夹里面会多出一个node- modules的文件

4 require方法 会自动从当前项目中的node-modules中的gulp参数对应的文件夹 并读取相应的文件
得到js对象
可以理解为 这个方法引入了一个script标签 这是node语法拿到js里面的对象

这个gulp对象提供的方法  见上面

1 gulp.task(任务名，回调函数)

参数1 任务名
参数2 回调函数 任务时 会执行这个回调函数
3 在项目根目录下生成一个叫gulp的包 npm install gulp

4 修改gul代码为css
> 在项目根目录新建 gulpfile.js
> 下载包：
    a npm install gulp 
    b npm install gulp-less  fangzhidajiayongbutongde gongjubianyichulaide jieguobutong
    dixi shi xiangmuxinxi kyxieyekybuxie 
    c npm install less
    > a b 对应的包是用来做less语法转换的
    >

pipe()管道：
gulp处理less文件 用管道的思想去理解
less -->gulp-less包会把这个less文件转换为css-->将处理好的文件保存好 
连式编程

chutuchanshengde yuanyinjiushiyinweibutongderencaozuoletongyigewenjian
huozhezaibutongdefenzhicaozuoletongyigewenjian jiuhuichanchengchongtu 




var option = {
    url:'/',
    type:'get',
    data:{},
    success:function(){

    }
}

$.sjax(option)//ajax这种写法会比较简洁 代码不要嵌套太深


异步和同步 用的时候能不能知道是哪种模式？

纯js中分析


NI HNI  H kj onih  h



html/dom加载分析
html第一次加载的时候一定是自上而下的
html加载是同步的 会阻塞？









































浏览器大致分成两块
js解析引擎
渲染引擎
