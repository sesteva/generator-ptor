Factory = require("../lib/pageObject.js").PageObjectFactory
module.exports = Factory.create(

  search: (param) ->
    element(by_.model("query")).sendKeys param

  getProjectsAmount: ->
    element by_.binding("projects.length")

  getProjectsList: ->
    element.all by_.repeater("project in projectCol")

  getProjectsListByRow: (row) ->
    element by_.repeater("project in projectCol").row(row)

)