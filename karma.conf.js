module.exports = function(config) {
  config.set({
    browsers: ['Chrome'],
    frameworks: ['jasmine'],
    files: [
      'https://code.jquery.com/jquery-3.3.1.min.js',
      'dist/Builder/**/*.js',
      'test/**/*.spec.js'
    ]
  });
};