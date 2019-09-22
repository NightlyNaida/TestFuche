module.exports = function(){
    $.gulp.task('images',function(){
        return $.gulp.src('src/img/**', {base: 'src'})
        .pipe($.gulp.dest('build'))
    });
}