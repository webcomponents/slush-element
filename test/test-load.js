var gulp = require('gulp');

// Load all slush generator tasks:
require('../slushfile');

describe('slush element generator', function() {
    it('can be imported without blowing up', function(done) {
        var app = gulp.start().isRunning;
        if(app !== false) done();
    });
});
