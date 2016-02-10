var jwt = require('jsonwebtoken');
var promise = require('bluebird');
var decrip = require('atob');
var usuarioDAO = require('../domain/dao/UsuarioDAO');
var properties = require('properties');

 function Autenticacao(){
	 
 }

 Autenticacao.prototype.GenerateToken = function (req, res, next)  {
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

		usuarioDAO.findOne(user, function (r) {
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

 Autenticacao.prototype.ValidateToken = function(req, res, next) {
 	try	{
 		console.log('url');
 		console.log(req.url);

 		if (req.url == '/autenticacao') {
 			next(); 		
 			return;
 		}

 		console.log('Validando token');
 		var token = req.body.token;
 		
 		if (token == null || token == undefined)
 			res.json({ erro: 'invalid token'});

 		console.log(token);
		decoded = jwt.verify(token, 'n3JZZm27T4yccdVf', function( err, decoded) {
			if (err)
				res.json({ erro: 'Não foi possível validar token. Erro: ' + err });

			console.log('validação');
			console.log(decoded);
			if (decoded.id != null && decoded.id > 0){
				next();
				return;
			}	
		});
 		
 	} catch (e) {
 		res.json({erro : 'Não foi possível validar o token. ' + e});
 	}
 };
 
 module.exports = new Autenticacao();
