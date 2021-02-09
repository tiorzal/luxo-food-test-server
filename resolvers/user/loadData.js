const { User, Sheet } = require('../../models');
const authentication = require('../../middlewares/authentication')

//function to load current user sheet
module.exports = authentication(async (_, __, { user }) => {
  try {
    const userFromDb = await User.findByPk(user.id, {include: [Sheet]})
    return userFromDb
  } catch (error) {
    return error;
  }
});