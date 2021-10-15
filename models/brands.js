"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Brands extends Model {
    static associate(models) {
      Brands.belongsTo(models.Categories, {
        foreignKey: "categoriesId",
        as: "brands",

        required: true,
      });
      Brands.hasMany(models.Reviews, {
        foreignKey: "brandId",
        as: "reviews",


        required: true,
      });
    }
  }
  Brands.init(
    {
      description: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      image: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      categoriesId: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
    },
    {
      sequelize,
      modelName: "Brands",
    }
  );
  return Brands;
};