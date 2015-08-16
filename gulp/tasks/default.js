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

gulp.task('build', ['del'], function() {
	runSequence(
		'styles',
		'jade',
		'imagemin',
		'send'
	);
});
