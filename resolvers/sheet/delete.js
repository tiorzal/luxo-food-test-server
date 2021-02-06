const { Sheet } = require('../../models')
const authentication = require('../../middlewares/authentication')
const sheetAuthorization = require('../../middlewares/sheetAuthorization')

module.exports = authentication( sheetAuthorization (
  async (_, args, { user }) => {
    console.log(args, user);

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