const mutation = require('./mutation')
const userTypeDef = require('./user')
const sheetTypeDef = require('./sheet')
const query = require('./query')

module.exports = [userTypeDef, sheetTypeDef, mutation, query]