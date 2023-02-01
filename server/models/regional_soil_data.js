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
  latitude: {
    type: Sequelize.DECIMAL(13, 10),
    allowNull: false,
  },
  longitude: {
    type: Sequelize.DECIMAL(13, 10),
    allowNull: false,
  },
  createAt: {
    type: Sequelize.DATE,
    allowNull: false,
  },
  updateAt: {
    type: Sequelize.DATE,
    allowNull: false,
  },
  timestamps: false,
  createdAt: false,
});

module.exports = { RegionalSoilData }
