'use strict';

global.$ = {
    gulp: require('gulp'),
    pug: require('gulp-pug'),
    stylus: require('gulp-stylus'),
    csso: require('gulp-csso'),
    autoprefixer: require('gulp-autoprefixer'),
    notify: require('gulp-notify'),
    sourcemaps: require('gulp-sourcemaps'),
    browserSync: require('browser-sync').create(),
    concat: require('gulp-concat'),

    path: {
        tasks: require('./gulp/config/tasks.js')
    }
};

$.path.tasks.forEach(function (taskPath) {
    require(taskPath)();
});

$.gulp.task('default', $.gulp.series(
    $.gulp.parallel('pug','stylus','scripts-ex','script'),
    $.gulp.parallel('watch','serve')  
));

