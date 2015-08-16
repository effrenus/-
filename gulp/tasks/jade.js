import gulp from 'gulp';
import jade from 'gulp-jade';
import inheritance from 'gulp-jade-inheritance';
import gulpif from 'gulp-if';
import gulpreplace from 'gulp-replace';
import plumber from 'gulp-plumber';
import errorHandler from '../errorHandler';
import browserSync from 'browser-sync';
import config from '../config';

gulp.task('jade', () => {
	return gulp
		.src('app/templates/*.jade')
		.pipe(plumber({errorHandler: errorHandler}))
		.pipe(gulpif(global.watch, inheritance({basedir: 'app/templates'})))
		.pipe(jade())
		.pipe(gulpif(process.env.NODE_ENV === 'production', gulpreplace('./images/', config.images.remoteURL)))
		.pipe(gulp.dest('dist'))
		.pipe(browserSync.stream());
});
