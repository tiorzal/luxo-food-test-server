const { AuthenticationError } = require('apollo-server');
const { tokenVerify } = require('../helpers/jwtHelper');
const { User } = require('../models');

const authentication = (next) => async (root, args, context, info) => {
  const token = context.req.headers.token;
  if (token) {
    const useFromToken = tokenVerify(token);
    const userFromDb = await User.findOne({ where: { id: useFromToken.id } });
    if (useFromToken.email === userFromDb.email) {
      return next(root, args, { ...context, user: useFromToken }, info);
    } else {
      throw new AuthenticationError('Token invalid');
    }
  } else {
    throw new AuthenticationError('please login ');
  }
};

module.exports = authentication

