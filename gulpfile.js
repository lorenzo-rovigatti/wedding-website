'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');

// compile scss to css
gulp.task('sass', function () {
    return gulp.src('./sass/styles.scss')
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(rename({basename: 'styles.min'}))
        .pipe(gulp.dest('./css'));
});

// watch changes in scss files and run sass task
gulp.task('sass:watch', function () {
    gulp.watch('./sass/**/*.scss', ['sass']);
});

// minify js
gulp.task('minify-js', function () {
    return gulp.src('./js/scripts.js')
        .pipe(uglify())
        .pipe(rename({basename: 'scripts.min'}))
        .pipe(gulp.dest('./js'));
});

gulp.task('minify-waypoints-js', function () {
    return gulp.src('./node_modules/waypoints/lib/jquery.waypoints.js')
        .pipe(uglify())
        .pipe(rename({basename: 'jquery.waypoints.min'}))
        .pipe(gulp.dest('./node_modules/waypoints/lib/'));
});

// default task
gulp.task('default', ['sass', 'minify-js', 'minify-waypoints-js']);
