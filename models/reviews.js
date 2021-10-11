"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Reviews extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Reviews.belongsTo(models.Users, {
        foreignKey: "userId",
        as: "users",
        required: true,
      }),
        Reviews.belongsTo(models.Brands, {
          foreignKey: "brandsId",
          as: "brands",
          required: true,
        });
    }
  }
  Reviews.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      rating: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      description: {
        allowNull: false,
        type: DataTypes.STRING,
      },
    },
    {
      sequelize,
      modelName: "Reviews",
    }
  );
  return Reviews;
};
