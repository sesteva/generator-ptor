'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');

var PageGenerator = module.exports = function PageGenerator(args, options, config) {
  // By calling `NamedBase` here, we get the argument to the subgenerator call
  // as `this.name`.
  yeoman.generators.NamedBase.apply(this, arguments);

    if (typeof this.env.options.coffee === 'undefined') {
        this.option('coffee', {
            desc: 'Generate CoffeeScript instead of JavaScript'
        });

        // attempt to detect if user is using CS or not
        // if cml arg provided, use that; else look for the existence of cs

        var coffee_files = this.expandFiles('pageObjects/**/*.coffee', {});
        if (!this.options.coffee && coffee_files.length > 0) {
            this.options.coffee = true;
        }

        this.env.options.coffee = this.options.coffee;
    }

  console.log('You called the page subgenerator with the argument ' + this.name + '.');
};

util.inherits(PageGenerator, yeoman.generators.NamedBase);

PageGenerator.prototype.files = function files() {
  var extension = this.env.options.coffee?'.coffee':'.js';
  this.copy('pageObject' + extension, 'pageObjects/' + this.name + extension);
};
