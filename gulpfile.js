const gulp = require('gulp');
const jasmineBrowser = require('gulp-jasmine-browser');
const testSrc = ['bower_components/**/*.min.js', 'src/**/*.js', 'test/**/*.js'];

gulp.task('test', function() {
  return gulp.src(testSrc)
    .pipe(jasmineBrowser.specRunner({console: true}))
    .pipe(jasmineBrowser.headless());
});

gulp.task('test-server', function() {
  return gulp.src(testSrc)
    .pipe(jasmineBrowser.specRunner())
    .pipe(jasmineBrowser.server({port: 8888}));
});