const { DataTypes, Model } = require('sequelize');
const db = require('../db');

class States extends Model { };

States.init({
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
  tableName: 'registrationStates',
  modelName: 'RegistrationStates'
});

module.exports = States;