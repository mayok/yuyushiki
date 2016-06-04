var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var plumber = require('gulp-plumber');

gulp.task('default', function() {
  gulp.watch("scss/**/*.scss", ["sass"]);
});

gulp.task('sass', function() {
  gulp.src("scss/style.scss")
    .pipe(plumber())
    .pipe(sass({
      includePaths: require('node-reset-scss').includePath
    }))
    .pipe(autoprefixer())
    .pipe(gulp.dest("./css"));
});
