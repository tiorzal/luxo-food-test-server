const { User } = require('../../models');

module.exports = async (_, args) => {
  try {
    console.log(args);
    const { firstName, lastName, password, email } = args.data;
    const newUserData = {
      firstName,
      lastName,
      password,
      email,
    };
    return registerUser = await User.create(newUserData);
  } catch (error) {
    return error;
  }
};