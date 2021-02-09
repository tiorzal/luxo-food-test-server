const jwt = require("jsonwebtoken");

//encode data as an object to token string
const tokenEncode = (obj) => {
  return jwt.sign(obj, process.env.SECRET);
};

//decode token string back to data as an object
const tokenVerify = (token) => {
  return jwt.verify(token, process.env.SECRET)
}

module.exports = {
  tokenEncode,
  tokenVerify
};
