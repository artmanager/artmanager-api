var promise = require('bluebird');
var cripto = require('md5');
var passport = require('passport');
var usuarioDAO = require('../domain/dao/UsuarioDAO');
var categoria = require('../domain/dao/CategoriaDAO');
var auth = require('./AutenticacaoService');
var jwt = require('jsonwebtoken');

function UsuarioService(DAO){
	this.DAO = promise.promisifyAll(DAO);	
}

UsuarioService.prototype.login = function (req, res) {
	console.log('service');
	auth.use();
};

UsuarioService.prototype.teste = function (req, res){
	 var body = this;
	 var claim;
	categoria.findOne(1, function (r) {
		claim = {
			userId : r.id,
			Name : r.ds_descricao
		};
		body = { 
				token : jwt.sign(claim, 'teste')
		};
		console.log(body);
		res.json(body);
	});	
};

UsuarioService.prototype.cadastro = function (req, res) {
	

}


UsuarioService.prototype.testeParam = function(req, res) {
	// console.log(req);
}

module.exports = new UsuarioService(usuarioDAO);