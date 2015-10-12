var promise = require('bluebird');
var UsuarioModel = require('../model/UsuarioModel');


function UsuarioDAO(Model){
	this.Data = promise.promisifyAll(Model);
}

UsuarioDAO.prototype.findOne = function(obj, callback) {
	if (obj != null && obj != undefined) {
		UsuarioModel.findOne({
			where: {
				ds_usuario: obj.usuario,
				ds_senha : obj.senha
			}
		}).then(function(user){
			callback(user);
		});
	}
};

UsuarioDAO.prototype.insertOne = function (obj, callback) {
	if (obj != null && obj != undefined) {
		UsuarioModel.findOrCreate({ 
			where: {
				ds_nome 	: obj.nome,
				ds_usuario 	: obj.usuario,
				ds_senha	: obj.senha,
				nr_perfil	: obj.perfil
			}
		}).spread(function (user, created ) {
			callback({ usuario : user , create : created });
		});
	}
}

module.exports = new UsuarioDAO(UsuarioModel);