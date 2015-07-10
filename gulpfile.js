var gulp = require('gulp');
var wrap = require('gulp-wrap');
var concat = require('gulp-concat');
var declare = require('gulp-declare');
var handlebars = require('gulp-handlebars');

gulp.task('compileHbs', function(){
  	gulp.src('resources/templates/*.hbs')
	    .pipe(handlebars())
	    .pipe(wrap('Handlebars.template(<%= contents %>)'))
	    .pipe(declare({
		    namespace: 'app.templates',
		    noRedeclare: true, // Avoid duplicate declarations
	    }))
    .pipe(concat('templates.js'))
    .pipe(gulp.dest('public/build/js/'));
});


gulp.task('default', ['compileHbs']);

