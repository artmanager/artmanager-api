var promise = require('bluebird');
var usuarioBus = require('../domain/business/UsuariosBUS');

function UsuarioService() {
}

UsuarioService.prototype.login = function (req, res) {
	
};

UsuarioService.prototype.GetOne = function(req, res) {
	try {
		var obj = req.body;
		
	} catch (e) {
		res.json({ erro : e });
	}
}

UsuarioService.prototype.cadastro = function (req, res) {
	try {
		var obj = req.body;	
		if (obj.usuario.usuario == undefined || obj.usuario.usuario == null || obj.usuario.usuario == '') {
			res.json({ erro : 'Usuario inválido.'});
			return;
		}

		if (obj.usuario.senha == undefined || obj.usuario.senha == null || obj.usuario.senha == '') {
			res.json({ erro: 'Senha inválida'});
			return;
		}

		usuarioBus.cadastroUsuario(obj, function (callback) {
			res.json(callback);
		});

	} catch (e) {
		res.json({erro: e});
	}
};


UsuarioService.prototype.testeParam = function(req, res) {
	// console.log(req);
};

module.exports = new UsuarioService();