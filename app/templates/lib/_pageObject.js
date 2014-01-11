var underscore = require('underscore');

if ( typeof protractor === 'undefined' ) {
  protractor = require('protractor');
}

var PageObject = function(){

  return {
//    Here we could add/extend convenience methods

    go: function(url){
      browser.get(url);
    },

//    If you need to interact with a non-Angular page,
//    you may access the wrapped webdriver instance directly
    driver: function(){
      return protractor.getInstance();
    }

  }
};

function createPage(page) {
  return underscore.extend(page, new PageObject());
};


exports.PageObjectFactory = {
  create: createPage
};