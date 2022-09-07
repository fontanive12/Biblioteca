// const { DataTypes, Model } = require('sequelize');
// const db = require('../db');
// const Publisher = require('./Publisher');
// const Category = require('./Category');

// class Book extends Model { };

// Book.init({
//     id: {
//         type: DataTypes.INTEGER,
//         autoIncrement: true,
//         allowNull: false,
//         primaryKey: true
//     },
//     title: {
//         type: DataTypes.STRING,
//         allowNull: false
//     },
//     author: {
//         type: DataTypes.STRING,
//         allowNull: false
//     },
//     publication_year: {
//         type: DataTypes.INTEGER,
//         allowNull: false
//     },
//     pages: {
//         type: DataTypes.INTEGER,
//         allowNull: false
//     },
// }, {
//     sequelize: db,
//     tableName: 'registrationBooks',
//     modelName: 'RegistrationBooks'
// });

// Publisher.hasMany(Book);
// Book.belongsTo(Publisher);

// Category.hasMany(Book);
// Book.belongsTo(Category);

// // Book.sync({force:true})


// module.exports = Book;

const { DataTypes, Model } = require('sequelize');
const db = require('../db');
const Category = require('./Category');
const Publisher = require('./Publisher');

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
    }
}, {
    sequelize: db,
    tableName: 'books',
    modelName: 'Books'
});

// Book.sync({force:true})

Category.hasMany(City);
City.belongsTo(Category);

module.exports = Book;