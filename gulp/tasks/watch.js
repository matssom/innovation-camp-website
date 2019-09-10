var gulp = require('gulp'),
watch = require('gulp-watch'),
browserSync = require('browser-sync').create();

// Watch task
gulp.task('watch', function() {
	
	browserSync.init({
		notify: false,
		server: {
			baseDir: "app"
		}
	});

	watch('./app/*.html', function(){
		browserSync.reload();
	});

	watch('./app/assets/styles/**/*.css', function(){
		gulp.start('cssInject');
	});

	watch('./app/assets/scripts/**/*.js', function(){
		gulp.start('scriptsRefresh');
	});

});

// CssInject task
gulp.task('cssInject', ['beautifyCSS'], function(){
	return gulp.src('./app/temp/styles/styles.css')
		.pipe(browserSync.stream());
});

gulp.task('scriptsRefresh', ['scripts'], function(){
	browserSync.reload();
});