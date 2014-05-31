/*
 * slush-custom-element
 * https://github.com/obetomuniz/slush-custom-element
 *
 * Copyright (c) 2014, Beto Muniz
 * Licensed under the MIT license.
 */

'use strict';

var gulp = require('gulp'),
    install = require('gulp-install'),
    conflict = require('gulp-conflict'),
    template = require('gulp-template'),
    rename = require('gulp-rename'),
    _ = require('underscore.string'),
    inquirer = require('inquirer');

var isTrue = function(v){
    return v === true || v === "true" || v === "y" || v === "yes" ? true : false;
}

gulp.task('default', function(done) {
    var prompts = [{
        type: 'list',
        name: 'boilerplate',
        message: '[?] What do you want to use?',
        choices: ['Polymer', 'X-Tag', 'VanillaJS'],
        default: 'Polymer'
    }, {
        name: 'repository',
        message: "[?] What's the GitHub repository?",
        default: 'your-repo'
    }, {
        name: 'username',
        message: "[?] What's your GitHub username?",
        default: 'your-github-username'
    }, {
        name: 'element',
        message: "[?] What's the name of your element?",
        default: 'my-element'
    }, {
        name: 'elementDescription',
        message: "[?] How would you describe the element?",
        default: 'My awesome Custom Element'
    }, {
        name: 'addLifeCycles',
        message: "[?] Do you want to include lifecycle callbacks?",
        default: true
    }, {
        name: 'addGulpTasks',
        message: "[?] Do you want to include some useful Gulp tasks?",
        default: true
    }, {
       name: 'version',
       message: 'What is the version of your web component?',
       default: '0.1.0'
    }, {
       name: 'elementAuthorName',
       message: 'What is the author name?',
       default: 'Your Name'
    }, {
       name: 'elementAuthorEmail',
       message: 'What is the author email?',
       default: 'yourname@website.com'
    }];

    //Ask
    inquirer.prompt(prompts,
        function(answers) {
            var files = [];

            files.push(__dirname + '/templates/_editorconfig');
            files.push(__dirname + '/templates/_gitignore');
            files.push(__dirname + '/templates/package.json');

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
                files.push(__dirname + '/templates/gulpfile.js');
            }
            gulp.src(files)
                .pipe(template(answers))
                .pipe(rename(function(file) {
                    if (file.basename[0] === '_') {
                        file.basename = '.' + file.basename.slice(1);
                    }
                    if (file.basename === 'my-element') {
                        file.basename = _.slugify(answers.element);
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