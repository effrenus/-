import gulp from 'gulp';
import runSequence from 'run-sequence';
import browserSync from 'browser-sync';

gulp.task('watch', () => {
	global.watching = true;

	gulp.watch('app/templates/**/*.jade', () => {
		runSequence(
			'jade',
			'inlineCSS',
			browserSync.stream
		);
	});

	gulp.watch('app/styles/**/*.sass', () => {
		runSequence(
			'styles',
			'jade',
			'inlineCSS',
			browserSync.stream
		);
	});
});
