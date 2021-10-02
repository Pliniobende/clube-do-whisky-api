'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Categories extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Categories.init({
    idCategorie:{
      type: DataTypes.INTEGER,
      primaryKey:true,
      autoIncrement:true
    },
    name: {
      allowNull: false,
      type: DataTypes.STRING
    },
    description: {
      allowNull: false,
      type: DataTypes.STRING
    },
    detail: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
    createdAt: {
        allowNull: false,
        type: DataTypes.Date
    }
  }, {
    sequelize,
    modelName: 'Categories',
  });
  return Categories;
};