'use strict';
var util = require('util'),
    yeoman = require('yeoman-generator');
//    fs = require('fs'),
//    template = fs.readFileSync('./spec/templates/spec.js', 'utf-8');

var SpecGenerator = module.exports = function SpecGenerator(args, options, config) {
  // By calling `NamedBase` here, we get the argument to the subgenerator call
  // as `this.name`.
  yeoman.generators.NamedBase.apply(this, arguments);

  console.log('You called the spec subgenerator with the argument ' + this.name + '.');
};

util.inherits(SpecGenerator, yeoman.generators.NamedBase);

SpecGenerator.prototype.files = function files() {
  this.copy('spec.js', 'specs/' + this.name + 'Spec.js');
};


