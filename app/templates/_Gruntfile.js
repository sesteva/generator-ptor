'use strict';

module.exports = function (grunt) {

    // Load grunt tasks automatically
    require('load-grunt-tasks')(grunt);

    // Time how long tasks take. Can help when optimizing build times
    require('time-grunt')(grunt);

    // Define the configuration for all the tasks
    grunt.initConfig({

        clean: {
            "temp": [".tmp"]
        },
        copy: {
            lib: {
                files: [
                    {expand: true, src: ['lib/**'], dest: '.tmp/'},
                ]
            }
        },
        coffee: {
            "specs": {
                "files": [
                    {
                        "bare": true,
                        "expand": true,
                        "cwd": "specs",
                        "src": "**/*.coffee",
                        "dest": ".tmp/specs",
                        "ext": ".js"
                    }
                ]
            },
            "pages": {
                "files": [
                    {
                        "bare": true,
                        "expand": true,
                        "cwd": "pageObjects",
                        "src": "**/*.coffee",
                        "dest": ".tmp/pageObjects",
                        "ext": ".js"
                    }
                ]
            }

        },
        parallel: {
            selenium: {
                options: {
                    stream: true
                },
                tasks: [
                    {cmd: "./bin/selenium-server.sh"},
                    {cmd: './bin/test.sh'}
                ]
            },
            seleniumSetup: {
                tasks: [
                    {cmd: "./bin/install.sh"}
                ]
            },
            explorer: {
                tasks: [
                    {cmd: "./bin/element_explorer.sh"}
                ]
            },
            sauce: {
                tasks: [
                    {cmd: "./bin/test-sauce.sh", args: ['--capabilities.browserName=safari']},
                    {cmd: "./bin/test-sauce.sh", args: ['--capabilities.browserName=chrome']},
                    {cmd: "./bin/test-sauce.sh", args: ['--capabilities.browserName=firefox']}
                ]
            },
            sauceBrowser: {
                tasks: [{cmd: "./bin/test-sauce-browser.sh", args: ['<%=grunt.option(\'browser\')%>']}]
            }
        }
    });

    grunt.registerTask('test-sauce-browser','test only with this browser', function(n){
        var browser = grunt.option('browser');
        if (typeof browser == 'undefined') {
            grunt.warn('Browser parameter must be specified, like --browser=firefox.');
        }
        grunt.task.run('test-setup', 'parallel:sauceBrowser');
    });

    grunt.registerTask('test-setup', [
        'clean',
        'copy',
        'coffee'
    ]);

    grunt.registerTask('test-sauce', [
        'test-setup',
        'parallel:sauce'
    ]);

    grunt.registerTask('test', [
        'test-setup',
        'parallel:selenium'
    ]);

    grunt.registerTask('explorer', [
        'parallel:explorer'
    ]);

    grunt.registerTask('setup', [
        'parallel:seleniumSetup'
    ]);

    grunt.registerTask('default', [
        'test',
    ]);


};