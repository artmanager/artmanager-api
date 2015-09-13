var Sequelize = require('sequelize');
//Parametros para conexão
//database, username, password
var sequelize = new Sequelize('nodejs', 'postgres', 'download', {
    host: 'localhost',
    port: '5432',
    dialect: 'postgres',

    store: 'path/to/database.postgres'

});

module.exports = sequelize;

