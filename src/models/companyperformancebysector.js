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
      this.hasMany(models.Company, {
        foreignKey: "c_id",
        targetKey: "c_id",
      });
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
    roic: DataTypes.INTEGER,
    score: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'CompanyPerformanceBySector',
  });
  return CompanyPerformanceBySector;
};