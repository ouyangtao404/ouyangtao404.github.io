var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('styles',function() {
    gulp.src('./src/sass/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('./dist/css'))
});


gulp.task('clean',function(cb){
    del(['./dist'],cb)
});

gulp.task('default', function() {
    gulp.start('styles','scripts','templates');
});

gulp.task('watch',function(){
    gulp.watch('./src/sass/*.scss',['styles']);
    gulp.watch('./src/coffee/*.coffee',['scripts']);
    gulp.watch('./views/*.jade',['templates']);
});