import gulp from 'gulp';

gulp.task('copy:images', () => {
	gulp
		.src('app/images/**/*')
		.pipe(gulp.dest('dist/images'));
})

gulp.task('copy', ['copy:images']);
