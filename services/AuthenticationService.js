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
			usuario : param[0],
			senha	: param[1]
		};

		userDAO.findOne(user, function (r) {
			if (r == null || r == undefined) {
				res.json({erro : 'Usuário ou senha inválidos.'});
				return;
			}

			obj = {
				id : r.id,
				name : r.ds_usuario,
				tipo : r.nr_perfil
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
