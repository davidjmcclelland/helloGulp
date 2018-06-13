var gulp              = require('gulp');
var sass              = require('gulp-sass');
var paths             = require('../paths');

var distDirPath = paths.output + 'Builder';  //dist/Builder

gulp.task('sass', function () {
    return gulp.src('src/Builder/scss/*.scss')
        .pipe(sass({
            // outputStyle: 'compressed'
        })
            .on('error', sass.logError))
        .pipe(gulp.dest(distDirPath + '/css'));
});