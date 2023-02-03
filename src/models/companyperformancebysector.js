'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class CompanyPerformanceBySector extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  CompanyPerformanceBySector.init({
    c_id: {
      primaryKey: true,
      type:DataTypes.STRING
    },
    cpi: DataTypes.INTEGER,
    cf: DataTypes.INTEGER,
    mau: DataTypes.INTEGER,
    roic: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'CompanyPerformanceBySector',
  });
  return CompanyPerformanceBySector;
};