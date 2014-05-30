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
        name: 'appBoilerplate',
        message: 'What do you want to use?',
        choices: ['Polymer', 'X-Tag', 'VanillaJS'],
        default: 'Polymer'
    }, {
        name: 'appUserName',
        message: "What's your GitHub username?",
        default: 'github-username'
    }, {
        name: 'appName',
        message: "What's the name of your web component?",
        default: 'my-element'
    }, {
        name: 'appDescription',
        message: 'How would you describe the web component?',
        default: 'My awesome web component.'
    }, {
        name: 'appVersion',
        message: 'What is the version of your web component?',
        default: '0.1.0'
    }, {
        name: 'appLifeCycles',
        message: 'Do you want to include lifecycle callbacks?',
        default: true
    }, {
        name: 'appGulp',
        message: 'Do you want to include some useful Gulp tasks? ',
        default: true
    }, {
        name: 'appAuthorName',
        message: 'What is the author name?',
        default: 'Your Name'
    }, {
        name: 'appAuthorEmail',
        message: 'What is the author email?',
        default: 'yourname@website.com'
    }];
    //Ask
    inquirer.prompt(prompts,
        function(answers) {
            if (!answers.appName) {
                return done();
            }
            answers.appNameSlug = _.slugify(answers.appName)
            var d = new Date();
            answers.year = d.getFullYear();
            answers.date = d.getFullYear() + '-' + d.getMonth() + '-' + d.getDate();

            if (answers.appBoilerplate === 'Polymer') {
                var files = [__dirname + '/templates/polymer-boilerplate/**'];
            } else if (answers.appBoilerplate === 'X-Tag') {
                var files = [__dirname + '/templates/x-tag-boilerplate/**'];
            } else if (answers.appBoilerplate === 'VanillaJS') {
                var files = [__dirname + '/templates/vanillajs-boilerplate/**'];
            } else {
                var files = [__dirname + '/templates/polymer-boilerplate/**'];
            }

            if (isTrue(answers.appGulp)) {
                files.push(__dirname + '/templates/gulpfile.js');
            }
            files.push(__dirname + '/templates/package.json');
            gulp.src(files)
                .pipe(template(answers))
                .pipe(rename(function(file) {
                    if (file.basename[0] === '@') {
                        file.basename = '.' + file.basename.slice(1);
                    }
                    if (file.basename === 'my-element') {
                        file.basename = _.slugify(answers.appName);
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