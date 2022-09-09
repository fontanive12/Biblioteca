const { DataTypes, Model } = require('sequelize');
const db = require('../db');
const State = require('./State');

class City extends Model { };

City.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    sequelize: db,
    tableName: 'cities',
    modelName: 'Cities'
});

State.hasMany(City);
City.belongsTo(State);

// City.sync({force:true})

module.exports = City;