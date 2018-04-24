# gulp

在使用gulp的时候，需要创建一个gulpfile.js文件，在这个文件中去编写响应的代码

```
var gulp = require('gulp');

gulp.task('default', function() {
  // 将你的默认的任务代码放在这
});
//默认的名为 default 的任务（task）将会被运行
```

当需要压缩css js html时候，需要npm下载

运行的时候直接在控制台输入 gulp

gulp.src()  //这里放你要压缩的文件的路径

.pipe().pipe().pipe()管道 ,可在括号中写你要进行的操作

gulp.dest()//这里放压缩后的输出路径

gulp.task()定义一个任务

```
// js处理
gulp.task('uglify',function () {
    var jsSrc = './src/js/.js',
        jsDst ='./dist/js';

    return gulp.src(jsSrc)
        .pipe(rename({ suffix: '.min' }))
        .pipe(uglify())
        .pipe(gulp.dest(jsDst));
});
```

gulp.start()

必须要有

```
gulp.task("default",function(){
    //必须有这个
})
```

