const path = require('path')
const templatePath = path.join(__dirname, './templates')

module.exports = require('@adobe/generator-app-common-lib')
  .discover(templatePath)
