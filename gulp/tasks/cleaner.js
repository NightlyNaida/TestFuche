module.exports = function(){
    $.gulp.task('cleaner',function(){
        return $.gulp.src('build/img', {read:false})
        .pipe($.cleaner())
    });
}