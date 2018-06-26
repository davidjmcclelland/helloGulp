let gulp              = require('gulp');
let sass              = require('gulp-sass');
let paths             = require('../paths');

let distDirPath = paths.output + 'Builder';  //dist/Builder
let sassPath = 'src/Builder/scss/*.scss';

gulp.task('sass', function () {
    return gulp.src(sassPath)
        .pipe(sass({
            // outputStyle: 'compressed'
        })
            .on('error', sass.logError))
        .pipe(gulp.dest(distDirPath + '/css'));
});

gulp.task('watch-sass', function() {
    gulp.watch(sassPath, ['sass']);
});