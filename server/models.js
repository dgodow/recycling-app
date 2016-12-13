var Sequelize = require('sequelize');

var db = new Sequelize('postgres://localhost:5432/recycling-app', {
  logging: false
});

var RecyclingBins = db.define('recycling-bins', {
  address: Sequelize.STRING,
  borough: Sequelize.STRING,
  latitude: Sequelize.FLOAT,
  longitude: Sequelize.FLOAT,
  park_site_name: Sequelize.STRING,
  site_type: Sequelize.STRING
});

module.exports = {
  db,
  RecyclingBins
}