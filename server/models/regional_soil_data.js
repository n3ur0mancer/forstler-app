const Sequelize = require('sequelize');
const sequelize = require('../config/db');

const RegionalSoilData = sequelize.define('regional_soil_data', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  clay_content: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  sand_content: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  silt_content: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  iot_latitude: {
    type: Sequelize.DECIMAL(13, 10),
    allowNull: false,
  },
  iot_longitude: {
    type: Sequelize.DECIMAL(13, 10),
    allowNull: false,
  },
  timestamps: false,
  createdAt: false,
  updateddAt: false,
  createAt: false,
  updateAt: false
});

module.exports = { RegionalSoilData }
