var gulp        = require('gulp');
var browserSync = require('browser-sync');

gulp.task('serve', function() {
    browserSync({
        server: {
            baseDir: 'app' // Change this to your web root dir
        }
    });
});

// Default task to be run with `gulp`
gulp.task('default', ['serve']);