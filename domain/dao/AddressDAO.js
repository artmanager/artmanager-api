var promise = require('bluebird'),
	addressModel = require('../model/AddressModel');


function AddressDAO(Model) {
	this.Data = promise.promisifyAll(Model);
}

AddressDAO.prototype.insertOne = function (obj, callback) {
	console.log(obj);
	try {
		addressModel.findOrCreate({
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


module.exports = new AddressDAO(addressModel);