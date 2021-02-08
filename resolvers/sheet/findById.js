const { Sheet } = require('../../models')
const authentication = require('../../middlewares/authentication')
const sheetAuthorization = require('../../middlewares/sheetAuthorization')

module.exports = authentication( sheetAuthorization (
  async (_, { id }, { user }) => {
    const result = await Sheet.findByPk(id)
    return result
  }
))