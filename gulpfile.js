const gulp = require('gulp');
const babel = require('gulp-babel');
gulp.task('babelTask',function(){
	return gulp.src('es6.js')
	        .pipe(babel({
	            presets: ['es2015']
	        }))
	        .pipe(gulp.dest('dist'));
});
gulp.task('watch',['babelTask'],function(){
	gulp.watch('es6.js',['babelTask'])
})