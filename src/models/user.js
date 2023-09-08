"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Hobby }) {
      // define association here
      this.hasMany(Hobby, { foreignKey: "user_id", as: "Hobbies" });
    }
  }
  User.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: { msg: "name field cannot be empty" },
        },
      },
      age: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          isInt: { msg: "age type must be integer" },
          notNull: { msg: "age field cannot be empty" },
        },
      },
      address: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
          notNull: { msg: "address field cannot be empty" },
        },
      },
      phone: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: {
          name: "phone-number",
          msg: "Phone number already taken",
        },
        validate: {
          notNull: { msg: "phone field cannot be empty" },
          is: {
            args: /^(\+62|62)?[\s-]?0?8[1-9]{1}\d{1}[\s-]?\d{4}[\s-]?\d{2,5}$/,
            msg: "invalid phone number format",
          },
        },
      },
    },
    {
      sequelize,
      modelName: "User",
      tableName: "users",
      underscored: true,
    }
  );
  return User;
};
