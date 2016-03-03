var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var routes = require('./config/routes');
var cors = require('cors');
var Autenticacao = require('./services/AuthenticationService');

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
app.use(cors());

app.use(methodOverride('Access-Control-Allow-Origin', '*'));
app.use(methodOverride('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept'));
app.use(methodOverride('X-HTTP-Method'));  
app.use(methodOverride('X-HTTP-Method-Override'));   
app.use(methodOverride('X-Method-Override'));  
app.use(methodOverride('_method'));

//all routers
app.use('/', Autenticacao.ValidateToken.bind(Autenticacao), routes);


var server = app.listen(3000, function () {
	var host = server.address().address;
	var port = server.address().port;

	console.log('App listening at http://%s:%s', host, port);
});
 
module.exports = app;
