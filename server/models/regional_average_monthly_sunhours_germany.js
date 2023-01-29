const Sequelize = require('sequelize');
const sequelize = require('../config/db');

const RegionalAverageMonthlySunhoursGermany = sequelize.define('RegionalAverageMonthlySunhoursGermany', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  date: {
    type: Sequelize.DATE,
    allowNull: false,
  },
  berlin: {
    type: Sequelize.FLOAT,
    allowNull: false,
  },
  brandenburg: {
    type: Sequelize.FLOAT,
    allowNull: false,
  },
  baden_wuerttemberg: {
    type: Sequelize.FLOAT,
    allowNull: false,
  },
  bayern: {
    type: Sequelize.FLOAT,
    allowNull: false,
  },
  hessen: {
    type: Sequelize.FLOAT,
    allowNull: false,
  },
  mecklenburg_vorpommern: {
    type: Sequelize.FLOAT,
    allowNull: false,
  },
  niedersachen: {
    type: Sequelize.FLOAT,
    allowNull: false,
  },
  niedersachsen_hamburg_bremen: {
    type: Sequelize.FLOAT,
    allowNull: false,
  },
  nordrhein_westfalen: {
    type: Sequelize.FLOAT,
    allowNull: false,
  },
  rheinland_pfalz: {
    type: Sequelize.FLOAT,
    allowNull: false,
  },
  schleswig_holstein: {
    type: Sequelize.FLOAT,
    allowNull: false,
  },
  saarland: {
    type: Sequelize.FLOAT,
    allowNull: false,
  },
  sachsen: {
    type: Sequelize.FLOAT,
    allowNull: false,
  },
  sachsen_anhalt: {
    type: Sequelize.FLOAT,
    allowNull: false,
  },
  thueringen_sachsen_anhalt: {
    type: Sequelize.FLOAT,
    allowNull: false,
  },
  thueringen: {
    type: Sequelize.FLOAT,
    allowNull: false,
  },
  deutschland: {
    type: Sequelize.FLOAT,
    allowNull: false,
  },
  timestamps: false,
  createdAt: false,
  updateddAt: false,
  createAt: false,
  updateAt: false
});

module.exports = { RegionalAverageMonthlySunhoursGermany }
