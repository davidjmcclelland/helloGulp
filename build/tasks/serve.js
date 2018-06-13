var gulp              = require('gulp');
var browserSync       = require('browser-sync');
var paths             = require('../paths');

var distDirPath = paths.output + 'Builder';  //dist/Builder

gulp.task('serve', function() {
    console.log('running server');
    browserSync({
        server: {
            baseDir:  distDirPath
        }
    });
});

gulp.task('default', ['serve']);