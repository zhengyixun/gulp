var gulp = require("gulp"),
    minifycss = require('gulp-minify-css'),    //css压缩
    uglify = require('gulp-uglify'),          //js压缩
    rename = require('gulp-rename'),           //重命名
    htmlmin = require('gulp-htmlmin');        //html 处理
//css 压缩
gulp.task('minifycss',function() {
    var cssSrc = './src/css/*.css',
        cssDst = './dist/css';
    return gulp.src(cssSrc)                  //被压缩的文件
        .pipe(rename({ suffix: '.min' }))
        .pipe(minifycss())                       //执行压缩
        .pipe(gulp.dest(cssDst));        //输出文件夹
});

// js处理
gulp.task('uglify',function () {
    var jsSrc = './src/js/*.js',
        jsDst ='./dist/js';

    return gulp.src(jsSrc)
        .pipe(rename({ suffix: '.min' }))
        .pipe(uglify())
        .pipe(gulp.dest(jsDst));
});

//html 处理
gulp.task('htmlmin', function () {
    var options = {
        removeComments: true,//清除HTML注释
        collapseWhitespace: true,//压缩HTML
        collapseBooleanAttributes: true,//省略布尔属性的值 <input checked="true"/> ==> <input />
        removeEmptyAttributes: true,//删除所有空格作属性值 <input id="" /> ==> <input />
        removeScriptTypeAttributes: true,//删除<script>的type="text/javascript"
        removeStyleLinkTypeAttributes: true,//删除<style>和<link>的type="text/css"
        minifyJS: true,//压缩页面JS
        minifyCSS: true//压缩页面CSS
    };
    var htmlSrc = './src/*.html',
        htmlDst = './dist';
    gulp.src(htmlSrc)
        .pipe(htmlmin(options))
        .pipe(gulp.dest(htmlDst));//同名的html,会直接替换
});
// 默认预设任务 清空图片、样式、js并重建 运行语句 gulp
gulp.task('default',function(){
    gulp.start('minifycss','uglify','htmlmin');
});