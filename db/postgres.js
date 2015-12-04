var Sequelize = require('sequelize');
var properties = require('properties');

var sequelize = new Sequelize('artmanager_development', 'vagrant', 'vagrant', {
    host: 'localhost',
    port: '5432',
    dialect: 'postgres',

    store: 'path/to/database.postgres'
});

module.exports = sequelize;

