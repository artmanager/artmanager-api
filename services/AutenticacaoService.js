var jwt = require('jsonwebtoken');
var promise = require('bluebird');
var cripto = require('md5');
var usuarioDAO = require('../domain/dao/UsuarioDAO');

 function Autenticacao(){
	 
 }
 
 Autenticacao.prototype.auth = function (req, res, next)  {
	var body, obj, user;
	body = this;
	try	{
		var param = req.body;
		param = param.data.split("-");
		user = {
			usuario : param[0],
			senha	: param[1]
		};
		usuarioDAO.findOne(user, function (r) {
			obj = {
				id : r.id,
				name : r.ds_descricao,
				tipo : r.perfil
			};
			body = { 
				token : jwt.sign(obj, 'GUSTAVO')
			};
			console.log(body);
			res.json(body);
		});	
	} catch (e) {
		res.json({erro : e});
	}
 }
 
 module.exports = new Autenticacao();
