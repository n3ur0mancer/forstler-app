const Sequelize = require('sequelize');
const sequelize = require('../config/db');

const Trees = sequelize.define('trees', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  tree_id: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  tree_common_name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  tree_genus: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  tree_species: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  tree_preferred_soil: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  tree_clay_tolerance: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  tree_sand_tolerance: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  tree_silt_tolerance: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  tree_preferred_light: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  tree_min_light_hours: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  tree_max_light_hours: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  tree_preferred_precipitation: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  tree_min_precipitation_mm_month: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  tree_max_precipitation_mm_month: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  timestamps: false,
  createdAt: false,
  updateddAt: false,
  createAt: false,
  updateAt: false
});

module.exports = { Trees }
