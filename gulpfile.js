var gulp = require( "gulp" );
var sass = require( "gulp-sass" );
var less = require( "gulp-less" );
var browserSync = require('browser-sync').create();

gulp.task('compile_html', function(){
  return gulp.src('app/**/*.html')
      .pipe(gulp.dest('dist'))
      .pipe(browserSync.reload({
          stream: true
       }));
});

gulp.task('compile_less', function(){
  return gulp.src('app/**/styles/less/**/*.less')
      .pipe(less()) // Converts Sass to CSS with gulp-sass
      .pipe(gulp.dest('dist/styles/css'))
      .pipe(browserSync.reload({
          stream: true
       }));
});

gulp.task('compile_scss', function(){
  return gulp.src('app/common/styles/scss/**/*.scss')
      .pipe(sass()) // Converts Sass to CSS with gulp-sass
      .pipe(gulp.dest('dist/styles/css'))
      .pipe(browserSync.reload({
          stream: true
       }));
});

gulp.task('compile', [ 'compile_scss', 'compile_html', 'compile_less']);

gulp.task('watch', ['browserSync', 'compile'], function(){
  gulp.watch('app/**/*.scss', [ 'compile_scss' ]);
  gulp.watch('app/**/*.less', [ 'compile_less' ]);
  gulp.watch('app/**/*.html', [ 'compile_html' ]);
});

gulp.task( 'browserSync', function() {
  browserSync.init({
    server : {
      baseDir : 'dist'
    }
  });
});
