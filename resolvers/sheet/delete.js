const { Sheet } = require('../../models')
const authentication = require('../../middlewares/authentication')
const sheetAuthorization = require('../../middlewares/sheetAuthorization')


//delete a sheet from current logged in user
module.exports = authentication( sheetAuthorization (
  async (_, args, { user }) => {
    const payload = {
      data: args.data
    }

    const deletedSheet = await Sheet.destroy({
      where: {
        id: args.id
      }
    })

    return { msg: 'delete success'}
  }
))