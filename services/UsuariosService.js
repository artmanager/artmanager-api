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
		if (obj.usuario == undefined || obj.usuario == null || obj.usuario == '') {
			res.json({ erro : 'Usuario inválido.'});
			return;
		}

		if (obj.senha == undefined || obj.senha == null || obj.senha == '') {
			res.json({ erro: 'Senha inválida'});
			return;
		}

		usuarioBus.cadastroUsuario(obj, function (result) {
			res.json({ success : result });
		});
	} catch (e) {
		res.json({erro: e});
	}
};


UsuarioService.prototype.testeParam = function(req, res) {
	// console.log(req);
};

module.exports = new UsuarioService();