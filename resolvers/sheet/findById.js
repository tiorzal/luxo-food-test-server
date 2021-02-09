const { Sheet } = require('../../models')
const authentication = require('../../middlewares/authentication')
const sheetAuthorization = require('../../middlewares/sheetAuthorization')

//find a sheet by id, use for load a sheet to the client
module.exports = authentication( sheetAuthorization (
  async (_, { id }, { user }) => {
    const result = await Sheet.findByPk(id)
    return result
  }
))