const { User } = require('../../models');

module.exports = async (_, args) => {
  try {
    console.log(args);
    const { firstname, lastname, password, email } = args.data;
    const newUserData = {
      firstname,
      lastname,
      password,
      email,
    };
    return registerUser = await User.create(newUserData);
  } catch (error) {
    return error;
  }
};