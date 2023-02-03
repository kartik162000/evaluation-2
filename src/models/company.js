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
            this.belongsTo(models.Company, {
                foreignKey: "c_id",
                targetKey: "c_id",
              });
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