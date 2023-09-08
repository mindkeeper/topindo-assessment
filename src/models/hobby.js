"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Hobby extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Hobby.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: { msg: "hobbies name cannot be empty" },
        },
      },
    },
    {
      sequelize,
      modelName: "Hobby",
      tableName: "hobbies",
      underscored: true,
    }
  );
  return Hobby;
};
