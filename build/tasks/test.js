var gulp = require('gulp');
var path = require('path');
var Server = require('karma').Server;

/**
 * Run test once and exit
 */
gulp.task('test', function (done) {

    console.log("karma config: " + path.join(__dirname, '..', '..', 'karma.conf.js'));

    new Server({
        configFile: path.join(__dirname, '..', '..', 'karma.conf.js'),
        singleRun: true
    }, done).start();
});

/**
 * Watch for file changes and re-run tests on each change
 */
gulp.task('tdd', function (done) {



    new Server({
        configFile: path.join(__dirname, '..', '..', 'karma.conf.js')
    }, done).start();
});

//gulp.task('default', ['test']);