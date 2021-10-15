"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Categories extends Model {
    static associate(models) {
      Categories.hasMany(models.Brands, {
        as: "brands",
        foreignKey: "categoriesId",
      });
    }
  }
  Categories.init(
    {
      name: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      description: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      detail: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
    },
    {
      sequelize,
      modelName: "Categories",
    }
  );
  return Categories;
};
