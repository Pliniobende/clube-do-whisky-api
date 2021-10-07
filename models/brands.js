'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Brands extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Brands.belongsTo(models.Categories, {
        foreignKey: 'categoriesId',
        as: 'Categories',
        required: true
      })
    }
  };
  Brands.init({

      description: {
      allowNull: false,
      type: DataTypes.STRING
    },
    image: {
      allowNull: false,
      type: DataTypes.STRING
    }
  }, {
    sequelize,
    modelName: 'Brands',
  });
  return Brands;
};