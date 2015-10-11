var jwt = require('jsonwebtoken');
var promise = require('bluebird');
var cripto = require('md5');
var usuarioDAO = require('../domain/dao/UsuarioDAO');

 function Autenticacao(){
	 
 }
 
 Autenticacao.prototype.auth = function (req, res, next)  {
	var body, obj, user;
	body = this;

	usuarioDAO.findOne(1, function (r) {
		obj = {
			id : r.id,
			name : r.ds_descricao
		};
		body = { 
			token : jwt.sign(obj, 'GUSTAVO')
		};
		console.log(body);
		res.json(body);
	});	
 }
 
 module.exports = new Autenticacao();
