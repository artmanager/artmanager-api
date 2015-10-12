var promise = require('bluebird');
var usuarioBus = require('../domain/business/UsuariosBUS');

function UsuarioService() {
}

UsuarioService.prototype.login = function (req, res) {
	
};

UsuarioService.prototype.teste = function (req, res){
	 var body = this;
};

UsuarioService.prototype.cadastro = function (req, res) {
	try {
		var obj = req.body;
		usuarioBus.cadastroUsuario(obj, function (result) {
			res.json({ retorno : result });
		});
	} catch (e) {
		res.json({erro: e});
	}
};


UsuarioService.prototype.testeParam = function(req, res) {
	// console.log(req);
};

module.exports = new UsuarioService();