const gulp = require('gulp');
const connect = require('gulp-connect');

function cssBuild(){
    return gulp.src('./src/css/*.css')
    .pipe(gulp.dest('./dist/css'))
}

function jsBuild(){
    return gulp.src("./src/js/*.js")
    .pipe(gulp.dest('./dist/js'))
}

function imgBuild(){
    return gulp.src("./src/img/*")
    .pipe(gulp.dest('./dist/img'))
}

function htmlBuild(){
    return gulp.src('./src/index.html')
    .pipe(gulp.dest('./dist'))
}

function server(){
    connect.server({
        root: './src',
        // port: 
    })
}

exports.build = gulp.series(cssBuild, jsBuild, imgBuild, htmlBuild);
exports.server = server;