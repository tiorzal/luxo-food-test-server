const { Sheet } = require('../../models')
const authentication = require('../../middlewares/authentication')
const sheetAuthorization = require('../../middlewares/sheetAuthorization')

module.exports = authentication( sheetAuthorization (
  async (_, { id }, { user }) => {
    console.log(id);

    const result = await Sheet.findByPk(id)
    console.log(result);

    return result
  }
))