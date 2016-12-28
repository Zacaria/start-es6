// Gulpfile is in es5

var watchify = require('watchify');
var browserify = require('browserify');
var plumber = require('gulp-plumber');
var gulp = require('gulp');
var gutil = require('gulp-util');
var browserSync = require('browser-sync').create();
var babelify = require('babelify');
var concat = require('gulp-concat');
var del = require('del');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');

var sources = 'src/**/*';
var gulpfile = './gulpfile.js';
var filesToWatch = [sources, gulpfile];

var customOpts = {
  entries: ['src/gulp-index.js'],
  debug: true,
  transform: [['babelify']]
};
var opts = Object.assign({}, watchify.args, customOpts);
var b = watchify(browserify(opts));

b.on('log', gutil.log);

/**
 * This task removes all files inside the 'build' directory.
 */
gulp.task('clean', function() {
  return del('build/**/*');
});

/**
 * This task bundles all other js files and babelify them.
 * If you want to add other processing to the main js files, add your code here.
 */
gulp.task('bundle', ['clean'], function()
{
  return b.bundle()
    .on('error', function(err)
    {
      console.log(err.message);
      browserSync.notify(err.message, 3000);
      this.emit('end');
    })
    .pipe(plumber())
    .pipe(source('gulp-bundle.js'))
    .pipe(buffer())
    .pipe(gulp.dest('build'));
});

/**
 * This task watches source files and reloads browserSync on change
 */
gulp.task('watch', ['bundle'], function (done) {
  browserSync.reload();
  done();
});

/**
 * This tasks starts a broserSync static server
 * Having build folder as root
 */
gulp.task('browser-sync', function() {
  browserSync.init({
    "files": filesToWatch,
    "server": './'
  });

  gulp.watch(filesToWatch, ['watch']);
});

/**
 * This is the default task
 */
gulp.task('default', ['bundle'], function() {
  gulp.start('browser-sync');
});
