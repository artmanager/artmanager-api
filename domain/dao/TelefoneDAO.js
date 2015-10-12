var promise = require('bluebird'),
	telefoneModel = require('../model/TelefoneModel');

function TelefoneDAO(Model) {
	this.Data = promise.promisifyAll(Model);
}

TelefoneDAO.prototype.insertOne = function(obj, callback) {
	telefoneModel.findOrCreate({ 
		where : {
			id_cliente  : obj.cliente,
			id_usuario  : obj.usuario,
			nr_ddd 		: obj.ddd,
			ds_numero	: obj.numero,
			nr_tipo 	: obj.tipo
		}
	}).spread(function(tel, created) {
		callback({ id : tel.id });
	});
}


module.exports = new TelefoneDAO(telefoneModel);