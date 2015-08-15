import gulp from 'gulp';
import runSequence from 'run-sequence';
import browserSync from 'browser-sync';

gulp.task('watch', () => {
	global.watching = true;

	gulp.watch('app/templates/**/*.jade', ['jade']);

	gulp.watch('app/styles/**/*.sass', () => {
		runSequence(
			'styles',
			'jade',
			browserSync.stream
		);
	});
});
