const { DataTypes, Model } = require('sequelize');
const db = require('../db');

class Publisher extends Model { };

Publisher.init({
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
    city_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'registrationCities',
            key: 'id'
        }
    }
}, {
    sequelize: db,
    tableName: 'registrationPublishers',
    modelName: 'RegistrationPublishers'
});

// City.sync({force:true})

module.exports = Publisher;