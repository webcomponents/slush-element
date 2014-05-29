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

gulp.task('default', function(done) {
    var prompts = [{
        name: 'appName',
        message: 'What is the name of your custom element?',
        default: 'x-custom-element'
    }, {
        name: 'appDescription',
        message: 'What is the description?'
        default: 'My custom element is cool.'
    }, {
        name: 'appVersion',
        message: 'What is the version of your custom element?',
        default: '0.1.0'
    }, {
        name: 'appAuthorName',
        message: 'What is the author name?',
        default: 'Your Name'
    }, {
        name: 'appAuthorEmail',
        message: 'What is the author email?',
        default: 'yourname@website.com'
    }, {
        name: 'appUserName',
        message: 'What is the github username?',
        default: 'github-username'
    }, {
        type: 'list',
        name: 'appBoilerplate',
        message: 'Choose your boilerplate',
        choices: ['Polymer', 'X-Tag', 'VannilaJS'],
        default: 'Polymer'
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
            var files = [__dirname + '/templates/**'];

            if (answers.appBoilerplate === 'Polymer') {
                files.push('!' + __dirname + '/templates/polymer-boilerplate/**');
            } else if (answers.appBoilerplate === 'X-Tag') {
                files.push('!' + __dirname + '/templates/x-tag-boilerplate/**');
            } else if (answers.appBoilerplate === 'VannilaJS') {
                files.push('!' + __dirname + '/templates/vanillajs-boilerplate/**');
            } else {
                files.push('!' + __dirname + '/templates/polymer-boilerplate/**');
            }
            gulp.src(files)
                .pipe(template(answers))
                .pipe(rename(function(file) {
                    if (file.basename[0] === '@') {
                        file.basename = '.' + file.basename.slice(1);
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