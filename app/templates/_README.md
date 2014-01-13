### A- Install the generator

    mkdir ~/generators && cd ~/generators
    git clone https://github.com/sesteva/generator-ptor.git
    sudo npm link

### B- Creating a Project

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

### C- Configuration

protractor.conf.js
protractor-sauce.conf.js

### D- Creating a Spec

    yo ptor:spec "TestName"

Yeoman will generate the file TestNameSpec.js under specs folder.

If you already have a CoffeeScript inside your Spec folder, then Yeoman will create a coffeescript pageObject for you.
If you dont and you would like to force the coffeescript creation, you may run:

    yo ptor:spec "TestName" --coffee

### E- Creating a page Object

    yo ptor:page "PageName"

If you already have a CoffeeScript inside your pageObjects folder, then Yeoman will create a coffeescript pageObject for you.
If you dont and you would like to force the coffeescript creation, you may run:

    yo ptor:page "PageName" --coffee

### F- Execute Tests locally using standalone Selenium server

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

### Execute Tests remotely using Sauce Labs.

   1- Update the protractor-sauce.conf.js adding your user and key provided by Sauce Labs.
   2- From your command line run

        grunt test-sauce

#### Explanation

This script is actually doing the following steps:

    1- ./bin/test-sauce.sh

### Generator Development Notes

    sudo npm link
    sudo npm ls --global generator-ptor
    sudo npm rm --global generator-ptor