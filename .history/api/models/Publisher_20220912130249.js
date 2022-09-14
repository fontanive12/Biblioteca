const { DataTypes, Model } = require('sequelize');
const db = require('../db');
const City = require('./City');

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
    }
}, {
    sequelize: db,
    tableName: 'publishers',
    modelName: 'Publishers'
});

City.hasMany(Publisher);
Publisher.belongsTo(City);

// Publisher.sync({force:true})

module.exports = Publisher;