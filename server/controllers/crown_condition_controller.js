const { Op } = require('sequelize');
const sequelize = require('sequelize');
const moment = require('moment');
const {CrownConditions} = require('../models/crown_conditions');
const {Locations} = require('../models/locations');

exports.getDefoliationData = async (req, res) => {
  const locationId = req.params.id;

  try {
    const location = await Locations.findByPk(locationId);
    if (!location) {
      return res.status(404).json({ message: 'Location not found' });
    }

    const data = await CrownConditions.findAll({
      where: {
        location_code: location.location_code,
        date_data_collection: { [Op.between]: [moment("2018-08-01").toDate(), moment("2018-08-01").subtract(1, 'years').toDate()] },
      }
    });

    res.status(200).json({ data });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'An error occurred' });
  }
};