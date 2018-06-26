var gulp              = require('gulp');
var browserSync       = require('browser-sync').create();
var paths             = require('../paths');
var jsonServer        = require("gulp-json-srv");

var server = jsonServer.create({
    port:3002
});

var distDirPath = paths.output + 'Builder';  //dist/Builder

gulp.task('serve', function() {
    console.log('running server');
    browserSync.init({
        server: {
            baseDir:  distDirPath
        }
    });
});

gulp.task('default', ['watch-js', 'watch-sass', 'watch-nunjucks', 'tdd', 'serve']);

gulp.task("mock", function(){
    return gulp.src("dist/Builder/config/ide.json")
        .pipe(server.pipe());
});

gulp.task("mockWatch", function () {
    gulp.watch(["ide.json"], ["mock"]);
});

//gulp.task("default", ['mock', 'mockWatch']);