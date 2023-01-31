const Sequelize = require('sequelize');
const sequelize = require('../config/db');

const IotMeteorologicalData = sequelize.define('iot_meteorological_data', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  location_code: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  measurement_type: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  date_observation: {
    type: Sequelize.DATE,
    allowNull: false,
  },
  daily_mean: {
    type: Sequelize.FLOAT,
    allowNull: false,
  },
  daily_min: {
    type: Sequelize.FLOAT,
    allowNull: false,
  },
  daily_max: {
    type: Sequelize.FLOAT,
    allowNull: false,
  },
  timestamps: false,
  createdAt: false,
  updateddAt: false,
  createAt: false,
  updateAt: false
});

module.exports = { IotMeteorologicalData }
