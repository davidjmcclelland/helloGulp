var root = './';
var appRoot = 'src/';
var testRoot = 'test/';
var outputRoot = 'dist/';
var bundleRoot = 'package/';
var packageRoot = 'package/';
var translationRoot = 'locales/';

module.exports = {
    test:   testRoot,
    appRoot: appRoot,
    source: appRoot + '**/*.js',

    css:              appRoot + '**/*.css',
    less:             appRoot + '**/App*.less',
    html:             appRoot + '**/*.html',
    js:               appRoot + '**/*.js',
    images:           [appRoot + '**/*.png', appRoot + '**/*.jpg', appRoot + '**/*.gif'],
    buildScripts:     root + 'build/**/*.js',
    output:           outputRoot,
    outputSourceMaps: root,
    package:          packageRoot,
    packageContents:  [packageRoot + 'Builder/*', packageRoot + 'Runtime/*', packageRoot + 'Common/*'],

    vendors: [root + 'vendors/**', '!' + root + 'vendors/**/*.js'],

    bundleOutput:     bundleRoot,
    bundleTestOutput: testRoot + 'package/',

    translations:           translationRoot + '**/*.json',
    translationSource:      translationRoot,
    translationOutput:      packageRoot + 'Builder/locales/',
    translationLoginOutput: packageRoot + 'Common/locales/',

    testSource: testRoot + 'unit/**/*.js',
    testOutput: testRoot + 'dist',
    unitTests:  testRoot + 'unit'
};