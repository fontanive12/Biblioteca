const { DataTypes, Model } = require('sequelize');
const db = require('../db');

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
    },
    states_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {       
            model: 'States',
            key: 'id'
        }
    },
}, {
    sequelize: db,
    tableName: 'registrationCities',
    modelName: 'RegistrationCities'
});

module.exports = City;