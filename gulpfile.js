var gulp = require('gulp');
var connect = require('gulp-connect');
var browserify = require('browserify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');

gulp.task('connect', function() {
	connect.server({
		port: 9000,
		livereload: true
	});
});

gulp.task('js', function() {
	browserify('./public/javascripts/scripts/main.js')
		.transform(babelify)
		.bundle()
		.pipe(source('all.js'))
		.pipe(gulp.dest('./public/javascripts/'))
		.pipe(connect.reload());
});

gulp.task('jade', function() {
	gulp.src('./views/*.jade')
					.pipe(connect.reload());
});

gulp.task('watch', function() {
	gulp.watch('./public/javascripts/**/*.js', ['js']);
	gulp.watch('./views/**/*.jade', ['jade']);
});

gulp.task('default', ['js', 'jade', 'connect', 'watch'], function() {
});
