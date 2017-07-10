### git 其他

####1. 冲突解决
假如两个开发同时改到同一文件的同一段内容会发生什么事情呢？
这时就会就会产生冲突了，当冲突产生后，需要开发者进行协商确认冲突的原因，然后将冲突代码删除重新提交就可以了。

####2. 忽略清单文件
在项目根目录下创建一个.gitignore文件，可以将不希望提交的罗列在这个文件里，如项目的配置文件、node_modules等

+ git 会自动检测 .gitignore 这个文件。
+ 这个文件中列出的文件夹，或者文件，可以被 git 忽略  
+  在这个忽略清单中的文件不会被备份到仓库中, 即使我们执行 git add /git commit 命令,也会被忽略!

1. 在项目根目录，新建新建一个名为 .gitignore 的文件
2. 将不需要被备份得文件添加到.gitignore 文件中
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

####3.	比较差异

当内容被修改，我们无法确定修改哪些内容时，可以通过 git diff 来进行差异比较。
+ git difftool       比较的是工作区和暂存的差异
+ git difftool “SHA” 比较与特定提交的差异
+ git difftool “SHA”“SHA”  比较某两次提交的差异
+ git difftool 分支名称     比较与某个分支的差异

####4. 回滚（撤销）操作
<img src='/images/reset.png'></img>
HEAD 默认指向当前分支的“末端”，即最后的一次提交，但是我们通过git reset 可以改变HEAD的指向。

+ git reset
--hard 工作区会变、历史(HEAD)会变， 暂存区也变
--soft 只会变历史(HEAD)
--mixed（默认是这个选项）历史(HEAD)会变、暂存区也变，工作区不变
+ git checkout
git checkout SHA -- "某个文件"，代表只是从SHA这个版中取出特定的文件，
和git reset 是有区别的，reset 重写了历史，checkout 则没有。


####5. 更新仓库
在项目开发过程中，经常性的会遇到远程（共享）仓库和本地仓库不一致，我们可以通过git fetch 命令来更新本地仓库，使本地仓库和远程（共享）仓库保持一致。

+ git fetch  “远程主机”
+ git fetch “远程主机” “分支名称”

我们要注意的是，利用git fetch 获取的更新会保存在本地仓库中，但是并没有体现到我们的工作目录中，需要我们再次利用git merge来将对应的分支合并（融合）到特定分支。如下

git pull origin 某个分支， 上操作相当于下面两步
git fetch 
git merge origin/某个分支

+ 删除远程分支  git push origin --delete 分支名称
+ 删除远程分支  git push origin :分支名称
+ 查看所有(本地+远程仓库)分支 git branch -a