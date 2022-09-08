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
    description: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    sequelize: db,
    tableName: 'loogs',
    modelName: 'Loogs'
});


// Book.sync({force:true})

Category.hasMany(Book);
Book.belongsTo(Category);

Publisher.hasMany(Book);
Book.belongsTo(Publisher);

module.exports = Book;