const { DataTypes, Model } = require('sequelize');
const db = require('../db');

const CityModel = require('../models/City');
const StateModel = require('../models/State');

class State extends Model { };

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
  tableName: 'states',
  modelName: 'States'
});

// State.sync({force:true})

module.exports = State;