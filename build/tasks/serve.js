var gulp              = require('gulp');
var browserSync       = require('browser-sync');
var paths             = require('../paths');
var jsonServer        = require("gulp-json-srv");

var server = jsonServer.create();

var distDirPath = paths.output + 'Builder';  //dist/Builder

gulp.task('serve', function() {
    console.log('running server');
    browserSync({
        server: {
            baseDir:  distDirPath
        }
    });

});

gulp.task('default', ['copy-js', 'mock', 'mockWatch', 'nunjucks', 'serve']);

gulp.task("mock", function(){
    return gulp.src("data.json")
        .pipe(server.pipe());
});

gulp.task("mockWatch", function () {
    gulp.watch(["data.json"], ["db"]);
});