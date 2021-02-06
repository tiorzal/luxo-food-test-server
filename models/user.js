'use strict';
const {
  Model
} = require('sequelize');
const { encode } = require('../helpers/bcryptHelper')
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.hasMany(models.Sheet)
    }
  };
  User.init({
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    firstname: DataTypes.STRING,
    lastname: DataTypes.STRING,
  }, {
    hooks: {
      beforeCreate: (instance) => {
        instance.password = encode(instance.password)
      }
    },
    sequelize,
    modelName: 'User',
  });
  return User;
};