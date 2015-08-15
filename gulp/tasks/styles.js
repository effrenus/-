import gulp from 'gulp';
import sass from 'gulp-sass';
import csso from 'gulp-csso';

gulp.task('styles', () => {

	gulp
		.src('app/styles/*.sass')
		.pipe(sass())
		.pipe(csso())
		.pipe(gulp.dest('dist/styles'));

});
