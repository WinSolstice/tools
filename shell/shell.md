
### shell
#### 什么是shell
 在计算机科学中，shell俗称壳，用来区别于Kernel(核)，是指"提供使用者界面"的软件(命令解析器)

+  文字操作系统与外部最主要的接口就叫做shell。shell是操作系统最外面的一层。
+  **它接收用户命令，然后调用相应的应用程序** 
+  Shell基本上是一个命令解释器，类似于DOS下的command。它接收用户命令（如ls等），然后调用相应的应用程序。
+  作为命令语言，shell**交互式**解释和执行用户输入的命令或者自动地解释和执行预先设定好的一连串的命令+
+  作为程序设计语言，它定义了各种变量和参数，并提供了许多在高级语言中才具有的控制结构，包括循环和分支。
    
+ shell很强大:可以在命令中嵌入其他的命令，在参数中嵌入其他的命令，或者嵌入变量、插入路径、 通配符、插入表达式等
了解shell处理命令的过程，对你学习shell很有帮助

```flow
st=>start: 您在这里
e=>end: 输出结果
op1=>operation: 使用者界面
Shell 、KDE 、Application
op2=>operation: 核心 (Kernel)
op3=>operation: 硬体 (Hardware)
st->op1->op2->op3->e
```
shell管理你与操作系统之间的交互：等待你输入，向操作系统解释你的输入，并且处理各种各样的操作系统的输出结果。

##### shell分类
+ 图形界面shell：通过提供友好的可视化界面，调用相应应用程序。
如windows、Linux上的图形化应用程序GNOME、KDE等。
+ 命令行shell：通过键盘输入特定命令的方式，调用相应的应用程序。
如; bash / sh / ksh / csh（Unix/linux 系统）cmd.exe等

传统意义上的shell指的是命令行式的shell，以后如果不特别注明，shell是指命令行式的shell。

##### 交互式shell和非交互式shell
shell提供了你与操作系统之间通讯的方式。这种通讯可以以交互方式，或者以shell script(非交互）方式执行。

+ 交互式模式从键盘输入，shell等待你的输入，并且执行你提交的命令。
这种模式被称作交互式是因为shell与用户进行交互。这种模式也是大多数用户非常熟悉的：登录、执行一些命令、签退。当你签退后，shell也终止了。
+ 非交互式模式shell script。shell script是放在文件中的一串shell和操作系统命令，它们可以被重复使用。本质上，shell script是命令行命令简单的组合到一个文件里面。在这种模式下，shell不与你进行交互，而是读取存放在文件中的命令，并且执行它们。当它读到文件的结尾，shell也就终止了。

##### 认识bash这个shell
+ 在window系统下使用bash，需要一个软件，这个软件模拟集成了   bash大部分命令。
各个 shell 的功能都差不多， Linux 默认使用 bash ，所以我们主要学习bash的使用。

**bash命令格式**

	命令 [-options]  [参数]，如：tar  zxvf  demo.tar.gz
    查看帮助：命令 --help
**bash常见命令**

+ pwd (Print Working Directory) 查看当前目录
+ cd (Change Directory) 切换目录，如 cd /etc
+ ls (List) 查看当前目录下内容，如 ls -al
+ mkdir (Make Directory) 创建目录，如 mkdir blog
+ touch 创建文件，如 touch index.html
+ cat 查看文件全部内容，如 cat index.html
+ less 查看文件，如more /etc/passwd、less /etc/passwd
+ rm (remove) 删除文件，如 rm index.html、rm -rf  blog
+ rmdir (Remove Directory) 删除文件夹，只能删除空文件夹，不常用
+ mv (move) 移动文件或重命名，如 mv index.html ./demo/index.html
+ cp (copy) 复制文件，cp index.html ./demo/index.html
+ tab 自动补全，连按两次会将所有匹配内容显示出来
+ \> 和 >>重定向，如echo hello world! > README.md，>覆盖 >>追加
+ \| 管道符可以将多个命令连接使用，上一次（命令）的执行结果当成下一次（命令）的参数。
grep 匹配内容，一般结合管道符使用


