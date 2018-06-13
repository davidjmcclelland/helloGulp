// gulpfile.js
var gulp              = require('gulp');
var browserSync       = require('browser-sync');
var nunjucksRender    = require('gulp-nunjucks-render');
var sass              = require('gulp-sass');

gulp.task('serve', function() {
    console.log('running server');
    browserSync({
        server: {
            baseDir: 'dist/Builder'
        }
    });
});

// writing up the gulp nunjucks task
gulp.task('nunjucks', function() {
  console.log('nunjucking');

  // configuring the templates folder for nunjucks
  nunjucksRender.nunjucks.configure(['src/Builder/templates/']);

  // get the pages files
  return gulp.src('src/Builder/pages/**/*.+(njk)')
    .pipe(nunjucksRender())
    .pipe(gulp.dest('dist/Builder'))
});

gulp.task('sass', function () {
    return gulp.src('src/Builder/scss/*.scss')
        .pipe(sass({
            // outputStyle: 'compressed'
        })
            .on('error', sass.logError))
        .pipe(gulp.dest('dist/Builder/css'));
});

//default task to be run with gulp
gulp.task('default', ['serve']);
