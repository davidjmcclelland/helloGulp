// gulpfile.js
var gulp              = require('gulp');
var browserSync       = require('browser-sync');
var nunjucksRender    = require('gulp-nunjucks-render'); // importing the plugin

gulp.task('serve', function() {
    console.log('running server');
    browserSync({
        server: {
            baseDir: 'app'
        }
    });
});

// writing up the gulp nunjucks task
gulp.task('nunjucks', function() {
  console.log('nunjucking');

  // configuring the templates folder for nunjucks
  nunjucksRender.nunjucks.configure(['app/templates/']);

  // get the pages files
  return gulp.src('app/pages/**/*.+(njk)')
    .pipe(nunjucksRender())
    .pipe(gulp.dest('app'))
});

//default task to be run with gulp
gulp.task('default', ['serve']);
