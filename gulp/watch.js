'use strict';

var gulp = require('gulp');

gulp.task('watch', ['styles'] ,function () {
  gulp.watch('src/styles/*.less', ['styles']);
  gulp.watch('src/scripts/**/*.js', ['scripts']);
  gulp.watch('src/img/*', ['images']);
  gulp.watch('bower.json', ['wiredep']);
});
