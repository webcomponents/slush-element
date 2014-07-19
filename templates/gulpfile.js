var gulp = require('gulp');
var connect = require('gulp-connect-multi')();
<% if (boilerplate != "VanillaJS") { %>var replace = require('gulp-replace');<% } %>
var ghpages = require('gh-pages');
var clean = require('gulp-clean');
var path = require('path');

var copy = function (){
  gulp.src([
    'bower_components/**/*',
    'demo/*',
    'src/*',
    'index.html'
    ], {
      base: './'
    })
    .pipe(gulp.dest('./.tmp/'));
}
<% if (boilerplate != "VanillaJS") { %>
var build = function (){
  gulp.src(['src/*'])
    .pipe(replace(/bower_components/g, '..'))
    .pipe(gulp.dest('dist/'));
}<% } %>
var ignore = function (){
  gulp.src(['./.tmp/bower_components/<%= repository %>'])
    .pipe(clean());
}

gulp.task('server', connect.server({
  root: ['./'],
  port: 8000,
  livereload: true
}));
<% if (boilerplate != "VanillaJS") { %>
gulp.task('build', function(){
  build()
});<% } %>
gulp.task('beforedeploy', function(){
  copy()
  ignore()
});

gulp.task('deploy', ['beforedeploy'], function () {

  ghpages.publish(path.join(__dirname, '.tmp/'), {
      clone: 'bower_components/<%= repository %>',
      logger: function(message) {
        console.log(message);
      }
  } , function(err) {

    console.log("");
    if(err.errno == 34){
      console.log("Error: You need run 'gulp beforedeploy' before deploy your custom element in gh-pages.\n");
    } else if(typeof err.errno == "undefined"){
      console.log("Error: You need add a remote repository before deploy your custom element in gh-pages.\n");
    }

  }, true);

});