const Sequelize = require('sequelize');
const sequelize = require('../config/db');

const CrownConditions = sequelize.define('CrownConditions', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  location_id: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  tree_id: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  date_data_collection: {
    type: Sequelize.DATE,
    allowNull: false,
  },
  defoliation_percentage: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  timestamps: false,
  createdAt: false,
  updateddAt: false,
  createAt: false,
  updateAt: false
});

module.exports = { CrownConditions }
