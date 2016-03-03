var Sequelize 	= require('sequelize'),
 	properties 	= require('properties'),
 	fs 			= require('fs'),
 	config 		= require('../config/config.js');
 	
 	
var sequelize = new Sequelize(config.db.dataSourceDb, config.db.userDb, config.db.passwordDb, {
    host: config.db.hostDb,
    port: config.db.portDb,
    dialect: config.db.dialectDb,

    store: config.db.storeDb
});

module.exports = sequelize;

