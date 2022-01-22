const { Sequelize, DataTypes, Model } = require('sequelize');
const db = require('../database/connection')

class Task extends Model {}

Task.init({
  // Model attributes are defined here
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  description: {
    type: DataTypes.STRING
  }
}, {
  sequelize: db,
  modelName: 'Task'
});

module.exports = Task;
