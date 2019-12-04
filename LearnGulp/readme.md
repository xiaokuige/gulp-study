构建工具:
  自动化。对于需要反复重复的任务，例如压缩（minification）、编译、单元测试、linting等，自动化工具可以减轻你的劳动，简化你的工作。
  gulp或者grunt都仅仅是一个操作平台，他们本身做不了任何事情，要做事情需要通过插件

1.gulp的使用
  全局安装：
      npm install --global gulp
  创建项目：
      LearnGulp
  项目依赖安装：
      npm install --save-dev gulp
  在项目根目录下创建一个名为 gulpfile.js 的文件：
      var gulp = require('gulp');
      gulp.task('default', function() {
      // 将你的默认的任务代码放在这
      });
  运行
      gulp
2.gulp的方法
  gulp.task(str,fn)
    创建一个gulp任务
  gulp.src(path)
    文件来源
  gulp.dest(path)
    操作之后的文件到哪里去
  .pipe(package)
    执行一个gulp功能
  gulp.watch()
    监听
  gulp.start()
    执行gulp任务
3.插件
  1.压缩JavaScript文件
    1.安装插件
      npm install --save-dev gulp-uglify
      代码
      gulp.task("jsuglify",function(){
        gulp.src("src/js/demo.js")
            .pipe(jsUglify())
            .pipe(gulp.dest("dist/js"))
      })
  2.压缩CSS文件
    1.安装
      npm install --save-dev gulp-minify-css
  3.压缩HTML文件
    1.安装
      npm install --save-dev gulp-minify-html
  4.图片压缩
    npm install --save-dev gulp-imagemin
  5.代码检查
    npm install --save-dev gulp-jshint jshint
    公司learder自己编写代码规范，按照他的规范来写代码！！！
  6.合并、重命名
    npm install --save-dev gulp-concat gulp-rename
  7.Less编译为CSS文件
    npm install --save-dev gulp-less
  8.监听
    gulp.task("watchLess",function(){
      gulp.watch("src/css/*.less",function(){
        gulp.run("reless")
      })
    })
  9.热更新：
    1.命令：npm install gulp-livereload --save-dev
    2.全局服务器：npm install -g http-server
    3.浏览器打开：chrome://extensions/ 浏览器插件：LiveReload （直接点击启动）
    4.编写热更新的代码
    5.启动热更新
      1.在项目根目录下启动http-server
      2.启动热更新：hot
      3.打开浏览器启动项目
      4.启动浏览器（livereload）插件，将空心圆点成实心圆
