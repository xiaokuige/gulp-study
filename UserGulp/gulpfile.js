var gulp = require('gulp');
var jsUglify = require("gulp-uglify");
var cssUglify = require("gulp-minify-css");
var imageUglify = require("gulp-imagemin");
var codeConcat = require("gulp-concat");
var fileRename = require("gulp-rename");
var livereload = require("gulp-livereload");

// css
gulp.task("cssfinal",function(){
  gulp.src("src/css/app/*.css")
      .pipe(codeConcat("app.css"))
      .pipe(fileRename({
        suffix:".min"
      }))
      .pipe(cssUglify())
      .pipe(gulp.dest("dist/css"))
})


// js
gulp.task("jsfinal",function(){
  gulp.src("src/js/app/*.js")
      .pipe(codeConcat("app.js"))
      .pipe(fileRename({
        suffix:".min"
      }))
      .pipe(jsUglify())
      .pipe(gulp.dest("dist/js"))
})

// 图片
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

// 编写热更新代码
gulp.task("hot",function(){
  livereload.listen();
  gulp.watch("src/index.html",function(event){
    livereload.changed(event.path);
  })
})


gulp.task('default', function() {
  gulp.start(["cssfinal","jsfinal","imageUglify"])
});
