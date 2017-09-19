'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');

var contentfulData = require('contentful-data');


gulp.task('main', function() {
    gulp.src('themes/cappui/static/sass/**/*.scss')
        .pipe(sass({
        	 outputStyle: 'compressed'
        	 }).on('error', sass.logError))
        .pipe(gulp.dest('themes/cappui/static/css/'))
});

//Watch task
gulp.task('default',function() {
    gulp.watch('themes/cappui/static/sass/**/*.scss',['main']);
});