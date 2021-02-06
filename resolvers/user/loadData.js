const { User, Sheet } = require('../../models');
const authentication = require('../../middlewares/authentication')

module.exports = authentication(async (_, __, { user }) => {
  console.log('masuk');
  try {
    console.log(user);
    
    const userFromDb = await User.findByPk(user.id, {include: [Sheet]})
    console.log(userFromDb);
    return userFromDb
  } catch (error) {
    return error;
  }
});