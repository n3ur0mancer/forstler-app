const Sequelize = require('sequelize');
const sequelize = require('../config/db');

const RegionalAverageMonthlyPrecipitationGermany = sequelize.define('regional_average_monthly_precipitation_germanies', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  state: {
    type: Sequelize.STRING,
    allowNull: false,
    references: {
      model: 'locations',
      key: 'location_state',
    },
  },
  date: {
    type: Sequelize.DATE,
    allowNull: false,
  },
  precipitation_mm: {
    type: Sequelize.FLOAT,
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

module.exports = { RegionalAverageMonthlyPrecipitationGermany }
