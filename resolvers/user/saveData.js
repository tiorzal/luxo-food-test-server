const { User } = require('../../models');
const authentication = require('../../middlewares/authentication')

//function to save user data into database
//after refactoring, this function is not being use anymore
module.exports = authentication(async (_, { data: dataSheet }, { user }) => {
  console.log('masuk');
  try {
    console.log(dataSheet, user);
    const payload = {
      data: dataSheet
    }
    const updateData = await User.update(payload, { where : { id : user.id }, returning: true})
    console.log(updateData[1][0].data);
    const data = updateData[1][0].data
    return { data }
  } catch (error) {
    return error;
  }
});