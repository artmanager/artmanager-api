var express = require('express'),
	app = express(),
	swich = require('./which.js'),
	production = require('./production'),
	product = require('./product'),
	productCategory = require('./productCategory'),
	user = require('./user'),
	sales = require('./sales'),
	authentication = require('./authentication'),
	supplier = require('./supplier'),
    report = require('./report.js'),
    forgot = require('./forgotPassword.js'),
	client =			require('./client');

app.use('/', swich);
app.use('/', production);
app.use('/', product);
app.use('/', user);
app.use('/', sales);
app.use('/', authentication);
app.use('/', sales);
app.use('/', supplier);
app.use('/', client);
app.use('/', productCategory);
app.use('/', report);
app.use('/', forgot);

module.exports = app;