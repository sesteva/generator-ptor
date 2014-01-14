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

2- Install selenium standalon server and chrome driver (./bin/install.sh)

    ./node_modules/protractor/bin/webdriver-manager update

## C- Configuration

protractor.conf.js
protractor-sauce.conf.js

## D- Creating a Spec

    yo ptor:spec "TestName"

Yeoman will generate the file TestNameSpec.js under specs folder.

If you already have a CoffeeScript inside your Spec folder, then Yeoman will create a coffeescript pageObject for you.
If you dont and you would like to force the coffeescript creation, you may run:

    yo ptor:spec "TestName" --coffee

## E- Creating a page Object

    yo ptor:page "PageName"

If you already have a CoffeeScript inside your pageObjects folder, then Yeoman will create a coffeescript pageObject for you.
If you dont and you would like to force the coffeescript creation, you may run:

    yo ptor:page "PageName" --coffee

## F- Execute Tests locally using standalone Selenium server

1- Make sure your application is running
2- Run

    grunt test

#### Explanation

This script is actually doing the following steps:

1- Start selenium server

   ./bin/selenium-server.sh

2- Running protractor

   ./bin/test.sh

**Note:** Depending on your machine sometimes the test starts running before the selenium server actually started.
If this occurs to you, then on one terminal tab run:

    ./bin/selenium-server.sh

Wait for the server to come up and on a second tab:

    ./bin/test.sh

### Execute Tests remotely using Sauce Labs with Multiple Browsers.

1- Update the protractor-sauce.conf.js adding your user and key provided by Sauce Labs.
2- From your command line run

        grunt test-sauce

#### Explanation

This script is actually doing the following steps:

    ./bin/test-sauce.sh

The configuration is in Gruntfile.js where we create two parallel executions with different arguments. Example:

    sauce: {
        tasks: [
            {cmd: "./bin/test-sauce.sh", args: ['--capabilities.browserName=safari']},
            {cmd: "./bin/test-sauce.sh", args: ['--capabilities.browserName=firefox']}
        ]
    }

### Execute Tests remotely using Sauce Labs per Browser

1- Make sure protractor-sauce.conf.js contains the user/key for sauce labs.
2- From Jenkins' job command line

    grunt test-sauce-browser --browser=safari

### Executing from Jenkins/Travis

#### Option 1

We could setup multiple jobs each one running on a different browser.
This provides granular feedback and the benefit of running in parallel.

Job 1:

    grunt test-sauce-browser --browser=safari

Job 2:

    grunt test-sauce-browser --browser=firefox

#### Option 2

We could have a unique job running on multiple browsers.

    grunt test-sauce


## Generator Development Notes

    sudo npm link
    sudo npm ls --global generator-ptor
    sudo npm rm --global generator-ptor

## License

[MIT License](http://en.wikipedia.org/wiki/MIT_License)
