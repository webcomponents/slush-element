var gulp = require('gulp');
var connect = require('gulp-connect-multi')();
<% if (appBoilerplate != "VanillaJS") { %>
var replace = require('gulp-replace');
<% } %>
gulp.task('server', connect.server({
  root: ['./'],
  port: 8000,
  livereload: true
}));
<% if (appBoilerplate != "VanillaJS") { %>
gulp.task('build', function(){
  gulp.src(['src/*'])
    .pipe(replace(/bower_components/g, '..'))
    .pipe(gulp.dest('dist/'));
});
<% } %>