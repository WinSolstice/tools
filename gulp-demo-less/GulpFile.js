//1 把需要的包引进来
//参数 gulp  对应 mode_modeles中的gulp文件

var gulp = require('gulp');
var less = require('gulp-less');

//2 定义一个任务来执行语法转换的代码
//参数：1任务名 2 回调函数
//当我们想执行任务时会自动执行这个回调函数
gulp.task('myless',function(){
    //找到我们处理的less文件 并做转换 并保存转换后的代码
    //src方法是用来去找我们想要处理的文件

   // gulp.src(['./style.less'])这样写当需要获取的文件多的时候就很麻烦
   //gulp.src(['./*.less])选择所有的.less后缀的文件

   gulp.src(['./*.less'])
   // pipe就是管道的意思
   .pipe(less())//把less文件转换为css字符串
   .pipe(gulp.dest('./css'))//把转换后的css字符串保存到css目录中 
})