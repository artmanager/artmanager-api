var jwt = require('jsonwebtoken');
var promise = require('bluebird');
var decrip = require('atob');
var userDAO = require('../domain/dao/UserDAO');
var properties = require('properties'),
	config 	= require('../config/config.js'),
	common 	= require('../../artmanager-common/common.js');

 function Authentication(){
	 
 }

 Authentication.prototype.GenerateToken = function (req, res, next)  {
 	console.log('AuthenticationService - GenerateToken - Receive request');
	var body, obj, user;
	body = this;
	try	{
		var param = req.body;
		param = decrip(param.data);
		param = param.split('-');
		user = {
			user 		: param[0],
			password	: param[1]
		};
		console.log(user);

		userDAO.FindOne(user, function (r) {
			console.log('Result FindOne');
			if (r == null || r == undefined) {
				return res.json({ error : 'Usuário ou senha inválidos.'});
			}
	
			obj = {
				id : r.id,
				name : r.ds_user,
				tipo : r.nr_profile
			};

			body = { 
				token : jwt.sign(obj, 'n3JZZm27T4yccdVf')
			};

			res.json(body);
		});	
	} catch (e) {
		res.json({erro : e});
	}
 };

 Authentication.prototype.ValidateToken = function(req, res, next) {
 	try	{
 		console.log('AuthenticationService - ValidateToken - Receive request');
 		console.log('Route: ' + req.url);
 		if (req.url == common.routes.authentication.postGenerateToken) {
 			next(); 		
 			return;
 		}

 		var token = req.headers['x-access-token'];
 		
 		if (token == null || token == undefined) {
 			res.json({ erro: 'invalid token'});
 			return;
 		}

		decoded = jwt.verify(token, 'n3JZZm27T4yccdVf', function( err, decoded) {
			if (err){
				res.json({ erro: 'Não foi possível validar token. Erro: ' + err });
				return;
			}

			if (decoded.id != null && decoded.id > 0){
				next();
				return;
			}	
		});
 		
 	} catch (e) {
 		res.json({erro : 'Não foi possível validar o token. ' + e});
 		return;
 	}
 };
 
 module.exports = new Authentication();
