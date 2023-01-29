const Sequelize = require('sequelize');
const sequelize = require('../config/db');

const Locations = sequelize.define('locations', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  location_id: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  location_name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  country_code: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  location_latitude: {
    type: Sequelize.DECIMAL(13, 10),
    allowNull: false,
  },
  location_longitude: {
    type: Sequelize.DECIMAL(13, 10),
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
  map_fencing: {
    type: Sequelize.JSON,
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

module.exports = { Locations }
