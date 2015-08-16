import gulp from 'gulp';
import inlineCSS from 'gulp-inline-css';
import config from '../config';

/**
 * Inline linked stylesheets, `<link/>` tags wil be removed
 * Style code on `<style>` tags exists untouched and does not processed
 */
gulp.task('inlineCSS', () => {
	return gulp.src(`${config.path.dist}/*.html`)
		.pipe(inlineCSS({
				applyStyleTags: false,
				removeStyleTags: false
		}))
		.pipe(gulp.dest(config.path.dist));
});
