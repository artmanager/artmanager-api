var usuDao 	= require('../dao/UsuarioDAO'),
	telDao 	= require('../dao/TelefoneDAO'),
	endDao 	= require('../dao/EnderecoDAO'),
	md5		= require('md5');

function UsuarioBus(){

};

UsuarioBus.prototype.consultaUsuario  = function(obj, callback){
	var consult = {
		senha : md5(obj.senha),
		usuario : obj.usuario
	};

	usuDao.findOne(consult, function (sucesso){
		callback = sucesso;
	}).spread(function (user, created) {

	});
};


UsuarioBus.prototype.cadastroUsuario = function(obj, callback) {
	var tel, end, usu, idUsu, createdUsuer;
	usu = obj.usuario;
	tel = obj.telefone;
	end = obj.endereco;

	if (usu != null && usu != undefined) {
		usuDao.insertOne(usu, function (result) {
			idUsu = result.usuario.id;
			createdUsuer = result.create;
			
			if (tel != null && tel != undefined && tel.length > 0) {
				tel.forEach(function (o) {
					var telefone = {
						usuario 	: idUsu,
						ddd 		: o.ddd,
						numero		: o.numero,
						tipo 		: o.tipo							
					};
					telDao.insertOne(telefone, function (e) {
						console.log(e);
					});
				});
				
			}

			if (end != null && end != undefined && end.length > 0) {
				end.forEach(function (o) {
					var endereco = {
						usuario : idUsu,
						rua 	: o.rua,
						numero 	: o.numero,
						bairro	: o.bairro,
						cep		: o.cep,
						cidade	: o.cidade,
						estado	: o.estado,
						pais	: o.pais
					};

					if (endereco.estado.length > 2) {
						callback( {erro : 'O campo estado pode ter apenas 2 caracteres'});
						return;
					}

					endDao.insertOne(endereco, function (r) {
					});
				});
			}

		callback({ success : true, create : createdUsuer });
		});
	}
}


module.exports = new UsuarioBus();