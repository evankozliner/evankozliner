var gulp = require('gulp');
var exec = require('gulp-exec');
var connect = require('gulp-connect');
var browserify = require('browserify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');
var sass = require('gulp-sass')
// TODO uglify and minify css

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

gulp.task('sass', function() {
	return gulp.src('./public/stylesheets/*.scss')
				.pipe(sass())
				.pipe(gulp.dest('./public/stylesheets/style.css'));
});

gulp.task('watch', function() {
	gulp.watch('./public/javascripts/**/*.js', ['js']);
	gulp.watch('./views/**/*.jade', ['jade']);
	gulp.watch('./public/stylesheets/*.scss', ['sass', 'jade']);
});


gulp.task('default', ['sass', 'js', 'jade', 'connect', 'watch'], function() {
});
