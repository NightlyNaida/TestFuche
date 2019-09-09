module.exports = function(){
    $.gulp.task('scripts-ex',function () {
        return $.gulp.src(['node_modules/jquery/dist/jquery.min.js'])
        .pipe($.concat('libs.min.js'))
        .pipe($.gulp.dest('build'))
    });

    $.gulp.task('script',function () {
        return $.gulp.src('src/static/js/script.js')
        .pipe($.gulp.dest('build'))
    });
}