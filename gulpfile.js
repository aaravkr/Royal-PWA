const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
const uglify = require('gulp-uglify');
const concat = require('gulp-concat');
const uglifycss = require('gulp-uglifycss');
 



 
 gulp.task('copyHtml', function(){
    gulp.src('./*.html')
        .pipe(gulp.dest('dist'))
 });

 gulp.task('image', () =>
    gulp.src('assets/img/**/*')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/assets/img'))
);
 


gulp.task('scripts', () =>
gulp.src('assets/js/*.js')
    .pipe(concat('main.js'))
    .pipe(uglify())
    .pipe(gulp.dest('./dist/js'))
);



gulp.task('css', function () {
    gulp.src('assets/css/*.css')
      .pipe(concat('main.css'))
      .pipe(uglifycss())
      .pipe(gulp.dest('./dist/css'));
  });

gulp.task('default',['css','scripts','copyHtml','image']);