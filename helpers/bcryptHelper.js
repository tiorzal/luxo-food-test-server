const bcrypt = require("bcryptjs");

//encode plain password to hashed password
const encode = (plain) => {
  const salt = bcrypt.genSaltSync(8);
  return bcrypt.hashSync(plain, salt);
};

//verify the plain password is equal to the hashed password
const decode = (plain, hash) => {
  return bcrypt.compareSync(plain, hash);
};

module.exports = {
  encode,
  decode,
};
