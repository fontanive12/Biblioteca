const { DataTypes, Model } = require('sequelize');
const db = require('../db');

class City extends Model { };

State.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  province: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  sequelize: db,
  tableName: 'registrationTest',
  modelName: 'RegistrationTest'
});

module.exports = City;