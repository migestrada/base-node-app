const { Sequelize } = require('sequelize');

// Option 3: Passing parameters separately (other dialects)
const db = new Sequelize('inventorymanager', 'postgres', '123lol123', {
  host: 'localhost',
  dialect: 'postgres',
  loggin: true
});

module.exports = db;