module.exports = function(){
    $.gulp.task('pug',function () {
        var fs = require("fs");
        var files =  fs.readdirSync("src/img/photos-pack");
        return $.gulp.src('src/pug/pages/*.pug')
        .pipe($.pug({
            pretty:true,
            locals:{images:files} 
        }))
    
        .pipe($.gulp.dest('build'))
    });
    
}
