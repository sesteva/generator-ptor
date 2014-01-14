# generator-ptor [![Build Status](https://secure.travis-ci.org/sesteva/generator-ptor.png?branch=master)](https://travis-ci.org/sesteva/generator-ptor)

A generator for [Yeoman](http://yeoman.io).


## Getting Started

### What is Yeoman?

Trick question. It's not a thing. It's this guy:

![](http://i.imgur.com/JHaAlBJ.png)

Basically, he wears a top hat, lives in your computer, and waits for you to tell him what kind of application you wish to create.

Not every new computer comes with a Yeoman pre-installed. He lives in the [npm](https://npmjs.org) package repository. You only have to ask for him once, then he packs up and moves into your hard drive. *Make sure you clean up, he likes new and shiny things.*

```
$ npm install -g yo
```

### Yeoman Generators

Yeoman travels light. He didn't pack any generators when he moved in. You can think of a generator like a plug-in. You get to choose what type of application you wish to create, such as a Backbone application or even a Chrome extension.


## What does this generator provide?

1- Folder Structure

        ├── bin
        │   ├── element_explorer.sh
        │   ├── install.sh
        │   ├── selenium-server.sh
        │   ├── test-sauce-browser.sh
        │   ├── test-sauce.sh
        │   └── test.sh
        ├── bower.json
        ├── Gruntfile.js
        ├── lib
        │   └── pageObject.js
        ├── node_modules
        │   ├── [...]
        ├── package.json
        ├── pageObjects
        │   └── builtWithAngular.js/coffee
        ├── protractor.conf.js
        ├── protractor-sauce.conf.js
        ├── README.md
        └── specs
            └── builtWithAngularSpec.js/coffee


2- Project Generation script includes downloading all moving parts to get a StandAlone Selenium Server and the Chrome Driver.

3- PageObject and Spec Generators for Javascript and CoffeeScript. See points C and D below.

4- PageObject and Spec Samples for Javascript and CoffeeScript.

5- Protractor configuration for sauce labs and standalone server. Adapted for CS and JS.

6- Yeoman will prompt the user to select between JS and CS. It will adapt files and configuration based on selection.

7- Gruntfile + some convenience Shell Scripts already configured and setup.
Such as a Grunt task to run same test in multiple browsers and a different task to pass the browser name by parameters.

8- A small pageObject factory is included to reduce boilerplate on PageObject definitions. This will be turned into an optional dependency soon.

9- README file containing instructions on:

    - how to install the generator;
    - usage to create a new project, page and spec;
    - how to run the tests locally, remotely;
    - how to test a suite in a defined browser via parameter or in a pre-configured set of browsers.
    - how to debug the test using WebStorm
    - CI job integration approaches.


## A- Install the generator

(As a temporary location while we publish it as npm module)

    mkdir ~/generators && cd ~/generators
    git clone https://github.com/sesteva/generator-ptor.git
    sudo npm link

## B- Creating a Project

    mkdir projectName && cd projectName
    yo ptor "ProjectName"

or

    yo ptor

If you dont pass a name then package.json will take a generic name for the app.
Yeoman will ask if you would like to user CoffeScript. If you say yes the sample and configuration files will be adapted for CoffeeScript.

#### Explanation

This script is actually doing the following steps:

1- Install all dependencies

    npm install

2- Install selenium standalone server and chrome driver (./bin/install.sh)

    ./node_modules/protractor/bin/webdriver-manager update

## C- Creating a Spec

    yo ptor:spec "TestName"

Yeoman will generate the file TestNameSpec.js under specs folder.

If you already have a CoffeeScript inside your Spec folder, then Yeoman will create a coffeescript pageObject for you.
If you dont and you would like to force the coffeescript creation, you may run:

    yo ptor:spec "TestName" --coffee

## D- Creating a page Object

    yo ptor:page "PageName"

If you already have a CoffeeScript inside your pageObjects folder, then Yeoman will create a coffeescript pageObject for you.
If you dont and you would like to force the coffeescript creation, you may run:

    yo ptor:page "PageName" --coffee

## Generator Development Notes

Install package locally:

    sudo npm link

Verify if package is installed

    sudo npm ls --global generator-ptor

Remove package

    sudo npm rm --global generator-ptor

## License

[MIT License](http://en.wikipedia.org/wiki/MIT_License)
