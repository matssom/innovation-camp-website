var gulp = require("gulp"),
imagemin = require("gulp-imagemin"),
del = require("del"),
usemin = require("gulp-usemin"),
rev = require('gulp-rev'),
cssnano = require('gulp-cssnano'),
uglify = require('gulp-uglify'),
browserSync = require('browser-sync').create();

gulp.task('previewProduction', function(){
	browserSync.init({
		notify: false,
		server: {
			baseDir: "www"
		}
	});
});

// Deleting current build
gulp.task('deleteDistFolder', function(){
	return del("./www");
});

gulp.task('copyGeneralFiles', ['deleteDistFolder'], function(){
	var pathsToCopy = [
		'./app/**/*', 
		'!./app/*.html', 
		'!./app/assets/images/**',
		'!./app/assets/styles/**',
		'!./app/assets/scripts/**',
		'!./app/temp',
		'!./app/temp/**'
	];

	gulp.src(pathsToCopy)
	.pipe(gulp.dest('./www'));
});

// Minifying images
gulp.task('optimizeImages', ['deleteDistFolder'], function() {
	return gulp.src('./app/assets/images/**/*')
	.pipe(imagemin([
	    imagemin.gifsicle({interlaced: true}),
	    imagemin.jpegtran({progressive: true}),
	    imagemin.optipng({optimizationLevel: 5}),
	    imagemin.svgo({
	        plugins: [
	            {removeViewBox: true},
	            {cleanupIDs: false}
	        ]
	    })
	]))
	.pipe(gulp.dest("./www/assets/images/"));
});

// Copying html and compressing css and js.
gulp.task('usemin', ['deleteDistFolder', 'styles', 'scripts'], function(){
	return gulp.src('./app/*.html')
	.pipe(usemin({
		css: [function() {return rev()}, function() {return cssnano()}],
		js: [function () {return rev()}, function () {return uglify()}]
	}))
	.pipe(gulp.dest('./www'));
});

// Build task
gulp.task('build', ['deleteDistFolder', 'copyGeneralFiles', 'optimizeImages', 'usemin']);