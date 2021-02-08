const { Sheet } = require('../../models')
const authentication = require('../../middlewares/authentication')
const sheetAuthorization = require('../../middlewares/sheetAuthorization')

module.exports = authentication( sheetAuthorization (
  async (_, args, { user }) => {

    const payload = {
      data: args.data
    }
    const result = await Sheet.update(payload, { where: {id: args.id}, returning: true} )
    return result[1][0]
  }
))