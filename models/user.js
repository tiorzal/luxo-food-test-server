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
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isEmail: {
          args: true,
          msg: "must be a valid email type"
        },
        notEmpty: {
          args: true,
          msg: "can not be empty"
        }
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: "can not be empty"
        }
      }
    },
    firstname: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: "can not be empty"
        }
      }
    },
    lastname: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: "can not be empty"
        }
      }
    },
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