var pg = require('pg');

var con = new pg.Client({
  host: 'localhost',
  port: '5432',
  user: 'postgres',
  password: 'download',
  database: 'Artmanager_Desenvolvimento'
});
//con.connect();

module.exports = con;