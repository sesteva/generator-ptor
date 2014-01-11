'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');


var ProtractorPageobjectsGenerator = module.exports = function ProtractorPageobjectsGenerator(args, options, config) {
  yeoman.generators.Base.apply(this, arguments);

  this.on('end', function () {
    this.installDependencies({
      skipInstall: options['skip-install'],
      callback: function() {
        this.emit('dependenciesInstalled');
      }.bind(this)
    });
  });

  this.on('dependenciesInstalled', function() {
    this.spawnCommand('grunt', ['setup']);
  });

  this.pkg = JSON.parse(this.readFileAsString(path.join(__dirname, '../package.json')));
};

util.inherits(ProtractorPageobjectsGenerator, yeoman.generators.Base);

ProtractorPageobjectsGenerator.prototype.askFor = function askFor() {
  var cb = this.async();

  // have Yeoman greet the user.
  console.log(this.yeoman);

  var prompts = [{
    type: 'confirm',
    name: 'someOption',
    message: 'Would you like to enable this option?',
    default: true
  }];

  this.prompt(prompts, function (props) {
    this.someOption = props.someOption;

    cb();
  }.bind(this));
};

ProtractorPageobjectsGenerator.prototype.app = function app() {
  this.mkdir('app');
  this.mkdir('app/templates');

  this.copy('_package.json', 'package.json');
  this.copy('_bower.json', 'bower.json');

  this.copy('_gitignore', '.gitignore');
  this.copy('_Gruntfile.js', 'Gruntfile.js');
  this.copy('_protractor.conf.js', 'protractor.conf.js');
  this.copy('_README.md', 'README.md');

  this.mkdir('pageObjects');
  this.mkdir('specs');
  this.mkdir('lib');

  this.copy('lib/_pageObject.js', 'lib/pageObject.js');
};

ProtractorPageobjectsGenerator.prototype.binFiles = function binFiles() {
  this.mkdir('bin');
  this.copy('bin/_install.sh', 'bin/install.sh');
  this.copy('bin/_selenium-server.sh', 'bin/selenium-server.sh');
  this.copy('bin/_test.sh', 'bin/test.sh');
  this.copy('bin/_element_explorer.sh', 'bin/element_explorer.sh');
};

ProtractorPageobjectsGenerator.prototype.projectfiles = function projectfiles() {
  this.copy('editorconfig', '.editorconfig');
  this.copy('jshintrc', '.jshintrc');
};

ProtractorPageobjectsGenerator.prototype.sampleFiles = function sampleFiles() {
  this.copy('pageObjects/_builtWithAngular.js', 'pageObjects/builtWithAngular.js');
  this.copy('specs/_builtWithAngularSpec.js', 'specs/builtWithAngularSpec.js');
};
