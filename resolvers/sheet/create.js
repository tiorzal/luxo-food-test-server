const { Sheet } = require('../../models')
const authentication = require('../../middlewares/authentication')

module.exports = authentication( async (_, args, { user }) => {
  try {
    const { email, id } = user
    const payload = {
      UserId: id,
      title: args.data.title,
      data: args.data.data
    }
    const result = await Sheet.create(payload) 
    console.log(result);
    return result
  } catch (error) {
    
  }
})