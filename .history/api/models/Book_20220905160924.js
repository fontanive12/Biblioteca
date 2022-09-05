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
    categories_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'registrationCategories',
            key: 'id'
        }
    },
    publisher_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'registrationPublishers',
            key: 'id'
        }
    }
}, {
    sequelize: db,
    tableName: 'registrationBooks',
    modelName: 'RegistrationBooks'
});


module.exports = Book;