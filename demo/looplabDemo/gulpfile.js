let gulp = require('gulp');
// let livereolad = require('gulp-livereload');
let connect = require('gulp-connect');

function server() {
     connect.server({
         root: 'src',
         livereload: true
     });

     connect.serverClose();
}

function cssBulid(){
    return gulp.src('./src/css/*.css')
    .pipe(gulp.dest('./dist/css/'))
    .pipe(connect.reload())
}

function jsBuild(){
    return gulp.src('./src/js/*.js')
    .pipe(gulp.dest('./dist/js/'))
    .pipe(connect.reload())
}

function htmlBuild(){
    return gulp.src('./src/index.html')
    .pipe(gulp.dest('./dist/'))
    .pipe(connect.reload())
}

function imgBulid(){
    return gulp.src('./src/img/*')
    .pipe(gulp.dest('./dist/img'))
    .pipe(connect.reload())
}

function watchCssBuild(){
    return gulp.watch('./src/css/*.css', cssBulid)
}

function watchJsBuild(){
    return gulp.watch('./src/js/*.js', jsBuild)
}

// function watchHtmlBuild(){
//     console.log('html had changed');
//     return gulp.watch('./src/index.html', htmlBuild)
// }

gulp.watch('./src/index.html', htmlBuild);

// 将文件打包到dist目录
exports.build = gulp.series(cssBulid, jsBuild, imgBulid,htmlBuild);

// 单纯开启gulp服务，测试用例
exports.server = server;

// 测试.html文件更新后，页面是否自动刷新（未实现）
exports.watchHtml = gulp.series(server);

// 实现所有文件更新后，自动刷新（未实现）
exports.watchUpdate = gulp.series(server, gulp.parallel(watchCssBuild, watchJsBuild));
