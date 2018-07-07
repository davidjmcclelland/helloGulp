let gulp              = require('gulp');
let sass              = require('gulp-sass');
let paths             = require('../paths');

let sassPath = paths.appRoot + 'Builder/scss/**/*.scss'; //src/Builder...
let distDirPath = paths.output + 'Builder/css';  //dist/Builder

gulp.task('sass', function () {
    return gulp.src(sassPath)
        .pipe(sass({
            // outputStyle: 'compressed'
        })
            .on('error', sass.logError))
        .pipe(gulp.dest(distDirPath));
});

gulp.task('watch-sass', function() {
    gulp.watch(sassPath, ['scss']);
});