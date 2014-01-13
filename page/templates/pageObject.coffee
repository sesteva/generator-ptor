Factory = require("../lib/pageObject.js").PageObjectFactory

module.exports = Factory.create({})

#  Examples:

#  search: (param) ->
#    element(by_.model("query")).sendKeys param

#  getProjectsAmount: ->
#    element by_.binding("projects.length")