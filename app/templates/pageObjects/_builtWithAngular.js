var Factory = require('../lib/pageObject.js').PageObjectFactory;

module.exports = Factory.create({

  search: function(param){
    return element(by.model('query')).sendKeys(param);
  },

  getProjectsAmount: function(){
    return element(by.binding('projects.length'));
  },

  getProjectsList: function(){
    return element.all(by.repeater('project in projectCol'));
  },

  getProjectsListByRow: function(row){
    return element(by.repeater('project in projectCol').row(row));
  }

});