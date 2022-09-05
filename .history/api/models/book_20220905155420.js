const { DataTypes, Model } = require('sequelize');
const db = require('../db');

class Book extends Model { };

Book.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    author: {
        type: DataTypes.STRING,
        allowNull: false
    },
    publication_year: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    pages: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    states_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'registrationStates',
            key: 'id'
        }
    }
}, {
    sequelize: db,
    tableName: 'registrationCities',
    modelName: 'RegistrationCities'
});

// City.sync({force:true})

module.exports = Book;