// gulpfile.js
var gulp              = require('gulp');
var nunjucksRender    = require('gulp-nunjucks-render');
var paths             = require('../paths');

var distDirPath = paths.output + 'Builder';  //dist/Builder
var srcDirPath = paths.appRoot + 'Builder'; //src/Builder

// writing up the gulp nunjucks task
gulp.task('nunjucks', function() {
  console.log('nunjucking');

  // configuring the templates folder for nunjucks
  nunjucksRender.nunjucks.configure(['src/Builder/templates/']);

  // get the pages files
  return gulp.src('src/Builder/pages/**/*.+(njk)')
    .pipe(nunjucksRender())
    .pipe(gulp.dest(distDirPath))
});