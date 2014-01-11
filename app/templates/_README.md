### Setup

    ./bin/install.sh

#### Explanation

This script is actually doing the following steps:

1- Install all dependencies

    npm install

2- Install selenium standalon server and chrome driver

    ./node_modules/protractor/bin/webdriver-manager update

### Configuration

protractor.conf.js

### Execute Tests locally using standalone Selenium server

1- Make sure your application is running
2- Run

    grunt test

#### Explanation

This script is actually doing the following steps:

1- Start selenium server

   ./bin/selenium-server.sh

2- Running protractor

   ./bin/test.sh
