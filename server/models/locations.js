const Sequelize = require("sequelize");
const sequelize = require("../config/db");

const Locations = sequelize.define("locations", {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  location_code: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  location_name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  country_code: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  location_state: {
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
    allowNull: true,
  },
  iot_longitude: {
    type: Sequelize.DECIMAL(13, 10),
    allowNull: true,
  },
  map_fencing: {
    type: Sequelize.JSON,
    allowNull: true,
  },
  createAt: {
    type: Sequelize.DATE,
    allowNull: true,
  },
  updateAt: {
    type: Sequelize.DATE,
    allowNull: true,
  },
  timestamps: true,
  createdAt: true,
  location_climate: {
    type: Sequelize.STRING,
    allowNull: true,
  },
});

module.exports = { Locations };
