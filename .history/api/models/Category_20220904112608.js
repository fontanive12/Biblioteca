// const { DataTypes, Model } = require('sequelize');
// const db = require('../db');

// class Category extends Model { };

// Category.init({
//     id: {
//         type: DataTypes.INTEGER,
//         autoIncrement: true,
//         allowNull: false,
//         primaryKey: true
//     },
//     description: {
//         type: DataTypes.STRING,
//         allowNull: false
//     }
// }, {
//     sequelize: db,
//     tableName: 'registrationCategories',
//     modelName: 'RegistrationCategories'
// });

// module.exports = Category;



const { DataTypes, Model } = require('sequelize');
const db = require('../db');

class User extends Model { };

User.init({
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
  tableName: 'registrationUsers',
  modelName: 'RegistrationUsers'
});

module.exports = User;