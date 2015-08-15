import gulp from 'gulp';
import imagemin from 'gulp-imagemin';

gulp.task('imagemin', () => {
	gulp
	.src('./app/images/**/*.{png,jpg,gif}')
	.pipe(imagemin({
		optimizationLevel: 3,
		interlaced: true,
		progressive: true
	}))
	.pipe(gulp.dest('./dist/images'));
});
