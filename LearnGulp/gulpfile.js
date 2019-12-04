var gulp = require('gulp');
var jsUglify = require("gulp-uglify");
var cssUglify = require("gulp-minify-css");
var htmlUglify = require("gulp-minify-html")
var imageUglify = require("gulp-imagemin");
var jshint = require("gulp-jshint");
var codeConcat = require("gulp-concat");
var fileRename = require("gulp-rename");
var reLess = require("gulp-less");

// 压缩JavaScript任务
gulp.task("jsuglify",function(){
  // gulp.src("src/js/demo.js")
  // gulp.src(["src/js/demo.js","src/js/hello.js"])
  gulp.src("src/js/*.js")
      .pipe(jsUglify())
      .pipe(gulp.dest("dist/js"))
})

// 压缩CSS任务
gulp.task("cssuglify",function(){
  gulp.src("src/css/init.css")
      .pipe(cssUglify())
      .pipe(gulp.dest("dist/css"))
})

// 压缩HTML任务
gulp.task("htmlUglify",function(){
  gulp.src("src/index.html")
      .pipe(htmlUglify())
      .pipe(gulp.dest("dist/"))
})

// 压缩image任务
gulp.task("imageUglify",function(){
  gulp.src("src/images/*.{png,jpg,gif,ico,jpeg,svg}")
      .pipe(imageUglify({
          optimizationLevel: 5, //类型：Number  默认：3  取值范围：0-7（优化等级）
          progressive: true,    //类型：Boolean 默认：false 无损压缩jpg图片
          interlaced: true,     //类型：Boolean 默认：false 隔行扫描gif进行渲染
          multipass: true       //类型：Boolean 默认：false 多次优化svg直到完全优化
      }))
      .pipe(gulp.dest("dist/images"))
})

// 代码检查
gulp.task("jshint",function(){
  gulp.src("src/js/demo.js")
      .pipe(jshint())
      .pipe(jshint.reporter()) // 代码检查
})

// 合并、重命名、压缩
gulp.task("reconcat",function(){
  gulp.src("src/js/*.js")
      .pipe(codeConcat("app.js"))
      .pipe(fileRename({
        suffix:".min"
      }))
      .pipe(jsUglify())
      .pipe(gulp.dest("dist/js"))
})

// 编译less文件
gulp.task("reless",function(){
  gulp.src("src/css/*.less")
      .pipe(reLess())
      .pipe(gulp.dest("dist/css"))
})

// 监听less的改变
gulp.task("watchLess",function(){
  gulp.watch("src/css/*.less",function(){
    gulp.run("reless")
  })
})

// 任务
gulp.task('default', function() {
  gulp.start(["jsuglify","cssuglify"])
});
