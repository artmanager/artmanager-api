var promise = require('bluebird');
var UsuarioModel = require('../model/UsuarioModel');
var cripto = require('md5');

function UsuarioDAO(Model){
	this.Data = promise.promisifyAll(Model);
}

UsuarioDAO.prototype.findOne = function(obj, callback) {
	if (obj != null && obj != undefined) {
		var hash = cripto(obj.senha);
		UsuarioModel.findOne({
			where: {
				ds_usuario: obj.usuario,
				ds_senha : hash
			}
		}).then(function(user){
			callback(user);
		});
	}
};

UsuarioDAO.prototype.insertOne = function (obj, callback) {
	if (obj != null && obj != undefined) {
		var hash = cripto(obj.senha);
		UsuarioModel.findOrCreate({ 
			where: {
				ds_nome 	: obj.nome,
				ds_usuario 	: obj.usuario,
				ds_senha	: hash,
				nr_perfil	: 1
			}
		}).spread(function (user, created ) {
			callback({ usuario : user , create : created });
		});
	}
}

module.exports = new UsuarioDAO(UsuarioModel);