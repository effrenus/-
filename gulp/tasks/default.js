import gulp from 'gulp';
import runSequence from 'run-sequence';

gulp.task('default', () => {
	runSequence(
		'copy:images',
		'jade',
		'browserSync',
		'watch'
		);
});

gulp.task('test', () => {
	runSequence(
		'build',
		'send'
	);
});

gulp.task('build', ['del'], cb => {
	runSequence(
		'styles',
		'jade',
		'imagemin',
		'inlineCSS',
		cb
	);
});
