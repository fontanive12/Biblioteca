const { DataTypes, Model } = require('sequelize');
const db = require('../db');

class Log extends Model { };

Log.init({
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
    tableName: 'logs',
    modelName: 'Logs'
});


// Book.sync({force:true})



module.exports = Log;