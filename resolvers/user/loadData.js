const { User } = require('../../models');
const authentication = require('../../middlewares/authentication')

module.exports = authentication(async (_, __, { user }) => {
  console.log('masuk');
  try {
    console.log(user);
    
    const userFromDb = await User.findByPk(user.id)
    
    return userFromDb
  } catch (error) {
    return error;
  }
});