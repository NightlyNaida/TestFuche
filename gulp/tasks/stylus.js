module.exports = function(){
    $.gulp.task('stylus',function () {
        return $.gulp.src('src/static/stylus/style.styl')
        .pipe($.sourcemaps.init())
        .pipe($.stylus({
            'include css': true
        }))
        .pipe($.autoprefixer({
            cascade: true
          }))
        .on("error", $.notify.onError({
            message: "Error: <%= error.message %>",
            title: "Error running stylus"
        }))
        .pipe($.csso({  
        }))
        .pipe($.sourcemaps.write())
    
        .pipe($.gulp.dest('build'))
    });
}