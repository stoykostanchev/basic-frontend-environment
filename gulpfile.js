var gulp = require( "gulp" );
var sass = require( "gulp-sass" );

gulp.task('compile_scss', function(){
  return gulp.src('app/common/styles/scss/**/*.scss')
      .pipe(sass()) // Converts Sass to CSS with gulp-sass
      .pipe(gulp.dest('dist/styles/css'))
});

gulp.task('watch', function(){
  gulp.watch('app/common/styles/scss/**/*.scss', [ 'compile_scss' ]);
});
