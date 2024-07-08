const {DataTypes} = require('sequelize');
const sequelize = require('../config/db');
const Order = sequelize.define('Order', {
    customerId : DataTypes.INTEGER,
    total : DataTypes.FLOAT,
})
module.exports = Order;

