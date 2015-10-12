var promise = require('bluebird'),
	enderecoModel = require('../model/EnderecoModel');


function EnderecoDAO(Model) {
	this.Data = promise.promisifyAll(Model);
}

EnderecoDAO.prototype.insertOne = function (obj, callback) {
	console.log(obj);
	try {
		enderecoModel.findOrCreate({
			where : {
				id_cliente	: obj.cliente,
				id_usuario	: obj.usuario,
				ds_rua 		: obj.rua,
				nr_numero	: obj.numero,
				ds_bairro	: obj.bairro,
				ds_cep 		: obj.cep,
				ds_cidade 	: obj.cidade,
				ds_estado 	: obj.estado,
				ds_pais 	: obj.pais
		}}).spread(function(end, created) {
			callback({endereco : end, create : created});
		});
	} catch(e) {
		throw e;
	}
	
};


module.exports = new EnderecoDAO(enderecoModel);