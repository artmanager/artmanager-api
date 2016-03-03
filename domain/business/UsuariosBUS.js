var usuDao 	= require('../dao/UsuarioDAO'),
	telDao 	= require('../dao/TelefoneDAO'),
	endDao 	= require('../dao/AddressDAO'),
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


UsuarioBus.prototype.cadastroUsuario = function (obj, callback) {
	var tel, end, usu, idUsu, createdUsuer;

	tel = obj.telefone || null;
	end = obj.endereco || null;

	usu = {
		nome : obj.usuario.nome,
		usuario : obj.usuario.usuario,
		senha : obj.usuario.senha
	};

	if (usu != null && usu != undefined) {
		usuDao.insertOne(usu, function (result) {
			idUsu = result.usuario.id;
			createdUsuer = result.create;
			
			if (tel != null && tel != undefined && tel.length > 0) {
				tel.forEach(function (o) {
					var ddd, numero;
					if (o.numero.length > 2) {
						
						ddd = o.numero.substring(0,2);
						numero = o.numero.substring(2);	

						var telefone = {
							usuario 	: idUsu,
							ddd 		: ddd,
							numero		: numero,
							tipo 		: 1							
						};

						telDao.insertOne(telefone, function (e) {
							
						});
					}
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
						callback( { erro : 'O campo estado pode ter apenas 2 caracteres' });
						return;
					}

					endDao.insertOne(endereco, function (r) {
					});
				});
			}
			
			callback({ success : 'Usuário Cadastrado com sucesso.' });
		});
	}
}


module.exports = new UsuarioBus();