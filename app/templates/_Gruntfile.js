'use strict';

module.exports = function (grunt) {

  // Load grunt tasks automatically
  require('load-grunt-tasks')(grunt);

  // Time how long tasks take. Can help when optimizing build times
  require('time-grunt')(grunt);

  // Define the configuration for all the tasks
  grunt.initConfig({

    parallel:{
      selenium:{
        options:{
          stream: true
        },
        tasks: [{cmd: "./bin/selenium-server.sh"}, {cmd: './bin/test.sh'}]
      },
      seleniumSetup:{
        tasks:[{cmd: "./bin/install.sh"}]
      },
      explorer: {
        tasks:[{cmd: "./bin/element_explorer.sh"}]
      },
      sauce: {
        tasks: [{cmd: ".bin/test-sauce.sh"}]
      }
    }
  });

  grunt.registerTask('test-sauce',[
     'parallel:sauce'
  ]);

  grunt.registerTask('test', [
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