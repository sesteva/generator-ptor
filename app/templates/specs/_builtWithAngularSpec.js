describe ("Built With Angular", function(){

  var page = require('../pageObjects/builtwithangular.js');

  beforeEach(function() {
    page.go("http://builtwith.angularjs.org/");
  });

  it("should mention 95 sites were done with this fw", function(){
    var amount = page.getProjectsAmount();
    expect(amount.getText()).toEqual("95");
  });

  it("should be able to search projects", function(){
    page.search('airline');
    var projectsList = page.getProjectsList();
    expect(projectsList.count()).toBe(1);
  });

  it("should be click on a project and display details", function(){
    page.search('airline');
    var project  = page.getProjectsListByRow(0);
    expect(project.getText()).toMatch(/WhichAirline/);
    page.driver().sleep(5000);
    project.click();
  });
});