module.exports = function(config) {
  config.set({
    browsers: ['Chrome'],
    frameworks: ['jasmine'],
    files: [
      'dist/Builder/**/*.js',
      'test/**/*.spec.js'
    ]
  });
};