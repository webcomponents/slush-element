'use strict';

var gulp = require('gulp'),
    mockGulpDest = require('mock-gulp-dest')(gulp),
    mockirer = require('mockirer'),
    inquirer = require('inquirer');

require('../slushfile');

describe('default task', function () {
    this.timeout(10000); // prevent broken test because running `npm install` after each suite

    describe('should be generated the element file', function () {
        it('with Polymer boilerplate', function (done) {
            mockirer(inquirer, {
                boilerplate: 'Polymer'
            });

            gulp.start('default').once('stop', function () {
                mockGulpDest.assertDestContains([
                    'my-element.html'
                ]);

                done();
            });
        });

        it('with X-Tag boilerplate', function (done) {
            mockirer(inquirer, {
                boilerplate: 'X-Tag'
            });

            gulp.start('default').once('stop', function () {
                mockGulpDest.assertDestContains([
                    'my-element.html'
                ]);
                
                done();
            });
        });

        it('with VanillaJS boilerplate', function (done) {
            mockirer(inquirer, {
                boilerplate: 'VanillaJS'
            });

            gulp.start('default').once('stop', function () {
                mockGulpDest.assertDestContains([
                    'my-element.html'
                ]);
                
                done();
            });
        });

        it('with custom element name', function (done) {
            mockirer(inquirer, {
                boilerplate: 'Polymer',
                elementName: 'polymer-sample'
            });

            gulp.start('default').once('stop', function () {
                mockGulpDest.assertDestContains([
                    'polymer-sample.html'
                ]);
                
                done();
            });
        });
    });
});