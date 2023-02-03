'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Company extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
            // this.belongsTo(models.CompanyPerformanceBySector
            //   , {
            //     foreignKey: "companyId",
            //     targetKey: "companyId",
            //   });
    }
  }
  Company.init({
    c_id: {
      primaryKey: true,
      type:DataTypes.STRING
    },
    name: DataTypes.STRING,
    ceo: DataTypes.STRING,
    description: DataTypes.STRING,
    tags: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Company',
  });
  return Company;
};