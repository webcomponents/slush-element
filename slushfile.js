'use strict';

var gulp = require('gulp'),
    install = require('gulp-install'),
    conflict = require('gulp-conflict'),
    template = require('gulp-template'),
    rename = require('gulp-rename'),
    _ = require('underscore.string'),
    inquirer = require('inquirer');

var isTrue = function(v){
    return v === true || v === "true" || v === "y" || v === "yes" || v === "Y" || v === "Yes" ? true : false;
}

/* ==========================================================================
   Default task
   ========================================================================== */

gulp.task('default', function(done) {
    var prompts = [{
        type: 'list',
        name: 'boilerplate',
        message: 'What do you want to use?',
        choices: ['Polymer', 'X-Tag', 'VanillaJS'],
        default: 'Polymer'
    }, {
        name: 'elementName',
        message: "What's the name of your element?",
        default: 'my-element'
    }, {
        name: 'addLifeCycles',
        message: "Do you want to include lifecycle callbacks?",
        default: "Yes"
    }];

    /* Questions
       ====================================================================== */
    inquirer.prompt(prompts).then(function(answers) {
        var files = [];

        if (answers.boilerplate === 'Polymer') {
            files.push(__dirname + '/templates/polymer-boilerplate/src/**');
        } else if (answers.boilerplate === 'X-Tag') {
            files.push(__dirname + '/templates/x-tag-boilerplate/src/**');
        } else if (answers.boilerplate === 'VanillaJS') {
            files.push(__dirname + '/templates/vanillajs-boilerplate/src/**');
        } else {
            files.push(__dirname + '/templates/polymer-boilerplate/src/**');
        }

        answers.addGulpTasks = false;

        if (isTrue(answers.addLifeCycles)) {
            answers.addLifeCycles = true;
        }

        gulp.src(files)
            .pipe(template(answers))
            .pipe(rename(function(file) {
                if (file.basename[0] === '_') {
                    file.basename = '.' + file.basename.slice(1);
                }
                if (file.basename === 'my-element') {
                    file.basename = _.slugify(answers.elementName);
                }
            }))
            .pipe(conflict('./'))
            .pipe(gulp.dest('./'))
            .pipe(install())
            .on('end', function() {
                done();
            });
    });
});

/* ==========================================================================
   Repo task
   ========================================================================== */

gulp.task('repo', function(done) {
    var prompts = [{
        type: 'list',
        name: 'boilerplate',
        message: 'What do you want to use?',
        choices: ['Polymer', 'X-Tag', 'VanillaJS'],
        default: 'Polymer'
    }, {
        name: 'githubRepository',
        message: "What's the GitHub repository?",
        default: 'my-repo'
    }, {
        name: 'username',
        message: "What's your GitHub username?",
        default: 'my-user'
    }, {
        name: 'elementName',
        message: "What's the name of your element?",
        default: 'my-element'
    }, {
        name: 'elementDescription',
        message: "How would you describe the element?",
        default: 'My awesome Custom Element'
    }, {
        name: 'addLifeCycles',
        message: "Do you want to include lifecycle callbacks?",
        default: "Yes"
    }, {
        name: 'addGulpTasks',
        message: "Do you want to include some useful Gulp tasks?",
        default: "Yes"
    }];

    /* Questions
       ====================================================================== */
    inquirer.prompt(prompts).then(function(answers) {
        var files = [];

        files.push(__dirname + '/templates/_editorconfig');
        files.push(__dirname + '/templates/_gitignore');
        files.push(__dirname + '/templates/README.md');

        if (answers.boilerplate === 'Polymer') {
            files.push(__dirname + '/templates/polymer-boilerplate/**');
        } else if (answers.boilerplate === 'X-Tag') {
            files.push(__dirname + '/templates/x-tag-boilerplate/**');
        } else if (answers.boilerplate === 'VanillaJS') {
            files.push(__dirname + '/templates/vanillajs-boilerplate/**');
        } else {
            files.push(__dirname + '/templates/polymer-boilerplate/**');
        }

        if (isTrue(answers.addGulpTasks)) {
            answers.addGulpTasks = true;
            files.push(__dirname + '/templates/package.json');
        }

        if (isTrue(answers.addLifeCycles)) {
            answers.addLifeCycles = true;
        }

        if (isTrue(answers.addGulpTasks)) {
            files.push(__dirname + '/templates/gulpfile.js');
        }

        gulp.src(files)
            .pipe(template(answers))
            .pipe(rename(function(file) {
                if (file.basename[0] === '_') {
                    file.basename = '.' + file.basename.slice(1);
                }
                if (file.basename === 'my-element') {
                    file.basename = _.slugify(answers.elementName);
                }
            }))
            .pipe(conflict('./'))
            .pipe(gulp.dest('./'))
            .pipe(install())
            .on('end', function() {
                done();
            });
    });
});
