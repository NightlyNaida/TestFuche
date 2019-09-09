'use strict';
var gulp = require('gulp');
var pug = require('gulp-pug');
var stylus = require('gulp-stylus');
var csso = require('gulp-csso');
var autoprefixer = require('gulp-autoprefixer');
var notify = require('gulp-notify');
var sourcemaps = require('gulp-sourcemaps');
var browserSync = require('browser-sync').create();

gulp.task('pug',function () {
    return gulp.src('src/pug/pages/*.pug')
    .pipe(pug({
        pretty:true
    }))

    .pipe(gulp.dest('build'))
});

gulp.task('stylus',function () {
    return gulp.src('src/static/stylus/main.styl')
    .pipe(sourcemaps.init())
    .pipe(stylus({
    }))
    .pipe(autoprefixer({
        cascade: true
      }))
    .on("error", notify.onError({
        message: "Error: <%= error.message %>",
        title: "Error running stylus"
    }))
    .pipe(csso({  
    }))
    .pipe(sourcemaps.write())

    .pipe(gulp.dest('build'))
});

gulp.task('serve', function() {
    browserSync.init({
        server: 'build'
    });
 
    browserSync.watch('build/**/*.*').on('change', browserSync.reload);
});

gulp.task('watch', function() {
    gulp.watch('src/pug/**/*.pug', gulp.series('pug'))
    gulp.watch('src/static/stylus/**/*.styl', gulp.series('stylus'))
});

gulp.task('default', gulp.series(
    gulp.parallel('pug','stylus'),
    gulp.parallel('watch','serve')  
));

