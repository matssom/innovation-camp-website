var gulp = require('gulp'),
beautify = require('gulp-jsbeautifier');

gulp.task('beautifyCSS', ['styles'],function() {
	return gulp.src('./app/temp/styles/styles.css')
		.pipe(beautify())
		.pipe(gulp.dest('./app/temp/styles'));
});