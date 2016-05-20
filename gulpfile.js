var gulp = require( "gulp" );
var sass = require( "gulp-sass" );
var browserSync = require('browser-sync').create();

gulp.task('compile_scss', function(){
  return gulp.src('app/common/styles/scss/**/*.scss')
      .pipe(sass()) // Converts Sass to CSS with gulp-sass
      .pipe(gulp.dest('dist/styles/css'))
      .pipe(browserSync.reload({
          stream: true
       }));
});

gulp.task('watch', ['browserSync', 'compile_scss'], function(){
  gulp.watch('app/common/styles/scss/**/*.scss', [ 'compile_scss' ]);
});

gulp.task( 'browserSync', function() {
  browserSync.init({
    server : {
      baseDir : 'dist'
    }
  });
});
