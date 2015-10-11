var usuDao = require('../dao/UsuarioDAO');

function UsuarioBus(){

};

UsuarioBus.prototype.consultaUsuario(obj, callback){
	usuDao.findOne(obj, function (sucesso){
		callback = sucesso;
	})
};

module.exports = new UsuarioBus();