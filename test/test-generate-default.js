'use strict';

const gulp = require('gulp');
const mockGulpDest = require('mock-gulp-dest')(gulp);
const mockirer = require('mockirer');
const inquirer = require('inquirer');

require('../slushfile');


describe('default task', function () {
    this.timeout(10000); // prevent broken test because running `npm install` after each suite

    describe('should be generated the element file', () => {
        it('with Polymer boilerplate', done => {
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

        it('with X-Tag boilerplate', done => {
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

        it('with VanillaJS boilerplate', done => {
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
    });
});