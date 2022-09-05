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
  state_is: {
    type: DataTypes.STRING,
    allowNull: false,
    references {
        
    }
  }
}, {
  sequelize: db,
  tableName: 'registrationTest',
  modelName: 'RegistrationTest'
});

module.exports = City;