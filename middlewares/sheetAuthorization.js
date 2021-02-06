const { AuthenticationError } = require("apollo-server");
const { User, Sheet } = require("../models");
const { tokenVerify } = require("../helpers/jwtHelper");
const { Op } = require("sequelize");

const authorization = (next) => async (root, args, ctx, info) => {
  const token = ctx.req.headers.token;
  const user = tokenVerify(token);
  const sheetId = args.id;

  const checkSheet = await Sheet.findOne({ where: { id: sheetId } });

  if (!checkSheet) throw new AuthenticationError("data not found");
  const userFromDB = checkSheet.dataValues.UserId

  if(user.id === userFromDB){
    return next(root,args,ctx,info)
  }else{
    return new AuthenticationError("unautorize access")
  }
};

module.exports = authorization
