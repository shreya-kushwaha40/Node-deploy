const {Sequelize, DataTypes} = require('sequelize');
const sequelize = new Sequelize(process.env.MYSQL_URL);
module.exports = sequelize;

