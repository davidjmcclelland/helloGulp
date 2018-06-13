'use strict';
var gulp = require('gulp');
var paths = require('../paths');

var srcDirPath = paths.appRoot + 'Builder/js/**/*.js'; //src/Builder/js
var distDirPath = paths.output + 'Builder/js';  //dist/Builder/js

gulp.task('copy-js', () => {
    return gulp.src(srcDirPath)
        .pipe(gulp.dest(distDirPath));
});

gulp.task('copy-images', () => {
    return gulp.src(paths.images)
        .pipe(gulp.dest(paths.package));
});

//gulp.task('copy-resources', gulp.series('copy-html', 'copy-images'));