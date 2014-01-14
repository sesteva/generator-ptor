/*global describe, beforeEach, it*/
'use strict';

var path    = require('path');
var helpers = require('yeoman-generator').test;


describe('ptor generator', function () {
    beforeEach(function (done) {
        helpers.testDirectory(path.join(__dirname, 'temp'), function (err) {
            if (err) {
                return done(err);
            }

            this.app = helpers.createGenerator('ptor:app', [
                '../../app'
            ]);
            done();
        }.bind(this));
    });

    it('creates expected files with coffeescript opted in', function (done) {
        var expected = [
            '.jshintrc',
            '.editorconfig',
            'package.json',
            'bower.json',
            'Gruntfile.js',
            'protractor.conf.js',
            'protractor-sauce.conf.js',
            'README.md',
            'bin/element_explorer.sh',
            'bin/install.sh',
            'bin/selenium-server.sh',
            'bin/test.sh',
            'bin/test-sauce.sh',
            'bin/test-sauce-browser.sh',
            'lib/pageObject.js',
            'pageObjects/builtWithAngular.coffee',
            'specs/builtWithAngularSpec.coffee'


        ];

        helpers.mockPrompt(this.app, {
            'coffee': true
        });
        this.app.options['skip-install'] = true;
        this.app.run({}, function () {
            helpers.assertFiles(expected);
            done();
        });
    });

    it('creates expected files with javascript opted in', function (done) {
        var expected = [
            '.jshintrc',
            '.editorconfig',
            'package.json',
            'bower.json',
            'Gruntfile.js',
            'protractor.conf.js',
            'protractor-sauce.conf.js',
            'README.md',
            'bin/element_explorer.sh',
            'bin/install.sh',
            'bin/selenium-server.sh',
            'bin/test.sh',
            'bin/test-sauce.sh',
            'bin/test-sauce-browser.sh',
            'lib/pageObject.js',
            'pageObjects/builtWithAngular.js',
            'specs/builtWithAngularSpec.js'


        ];

        helpers.mockPrompt(this.app, {
            'coffee': false
        });
        this.app.options['skip-install'] = true;
        this.app.run({}, function () {
            helpers.assertFiles(expected);
            done();
        });
    });
});
