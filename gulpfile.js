var gulp = require( "gulp" );
var sass = require( "gulp-sass" );
var browserSync = require('browser-sync').create();

gulp.task('compile_html', function(){
  return gulp.src('app/**/*.html')
      .pipe(gulp.dest('dist'))
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

gulp.task('watch', ['browserSync', 'compile_scss', 'compile_html'], function(){
  gulp.watch('app/common/styles/scss/**/*.scss', [ 'compile_scss' ]);
  gulp.watch('app/**/*.html', [ 'compile_html' ]);
});

gulp.task( 'browserSync', function() {
  browserSync.init({
    server : {
      baseDir : 'dist'
    }
  });
});
