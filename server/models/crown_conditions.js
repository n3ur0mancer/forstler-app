const Sequelize = require("sequelize");
const sequelize = require("../config/db");

const CrownConditions = sequelize.define("crown_conditions", {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  location_code: {
    type: Sequelize.STRING,
    allowNull: false,
    references: {
      model: "locations",
      key: "location_code",
    },
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

module.exports = { CrownConditions };
