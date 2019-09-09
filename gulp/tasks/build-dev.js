var gulp = require("gulp"),
imagemin = require("gulp-imagemin"),
del = require("del"),
usemin = require("gulp-usemin"),
rev = require('gulp-rev'),
browserSync = require('browser-sync').create();

gulp.task('previewDev', function(){
	browserSync.init({
		notify: false,
		server: {
			baseDir: "docs"
		}
	});
});

// Deleting current build
gulp.task('deleteDocsFolder', function(){
	return del("./docs");
});

gulp.task('copyGeneralDevFiles', ['deleteDocsFolder'], function(){
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
	.pipe(gulp.dest('./docs'));
});

// Minifying images
gulp.task('optimizeDevImages', ['deleteDocsFolder'], function() {
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
	.pipe(gulp.dest("./docs/assets/images/"));
});

// Copying html and compressing css and js.
gulp.task('useminDev', ['deleteDocsFolder', 'styles', 'scripts'], function(){
	return gulp.src('./app/*.html')
	.pipe(usemin({
		css: [function() {return rev()}],
		js: [function () {return rev()}]
	}))
	.pipe(gulp.dest('./docs'));
});

// Build task
gulp.task('build-dev', ['deleteDocsFolder', 'copyGeneralDevFiles', 'optimizeDevImages', 'useminDev']);