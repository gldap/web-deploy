var gulp = require('gulp'),
    gutil = require('gulp-util'),
    concat =require('gulp-concat');

var jsSources =[
    'components\scripts\snap.js',
    'components\scripts\trigger.js'
]

gulp.task('js', function(){
  gulp.src(jsSources)
    .pipe(concat ('script.js'))
    .pipe(gulp.dest('builds\development\js'))
});