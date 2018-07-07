'use strict';
let gulp = require('gulp');
let paths = require('../paths');

let srcDirPath = paths.appRoot + 'Builder/js/**/*.js'; //src/Builder/js
let distDirPath = paths.output + 'Builder/js';  //dist/Builder/js

let srcImagesPath = paths.appRoot + 'Builder/images/**/*.png'; //src/Builder/js
let distimagesPath = paths.output + 'Builder/images';  //dist/Builder/js

gulp.task('copy-js', () => {
    return gulp.src(srcDirPath)
        .pipe(gulp.dest(distDirPath));
});

gulp.task('copy-images', () => {
    return gulp.src(srcImagesPath)
        .pipe(gulp.dest(distimagesPath));
});

gulp.task('watch-js', () => {
    gulp.watch(srcDirPath, ['copy-js']);
    gulp.watch(srcImagesPath, ['copy-js']);
});
//gulp.task('copy-resources', gulp.series('copy-html', 'copy-images'));