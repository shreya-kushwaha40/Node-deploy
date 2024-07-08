const {DataTypes} = require('sequelize');
const sequelize = require('../config/db');
const Customer = sequelize.define('Customer', {
    name : DataTypes.STRING,
    email: DataTypes.STRING,
    role: DataTypes.STRING,
})

module.exports = Customer;