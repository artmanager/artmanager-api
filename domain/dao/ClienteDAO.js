var promise = require('bluebird');
var ClienteModel = require('../model/ClienteModel');

function ClienteDAO(Model) {
	this.Data = promise.promisifyAll(Model);
}

ClienteDAO.prototype.InsertOne = function(obj, callback) {
	console.log('=========================================');
	console.log(obj.cpf_cnpj);
	if (obj != null && obj != undefined) {
		ClienteModel.findOrCreate({ 
			where : {
				ds_nome 	: obj.nome,
				ds_cpf_cnpj : obj.cpf_cnpj,
				ds_email	: obj.email
			}
		}).spread(function(client, created) {
			callback( {cliente: client, create: created });
		});
	}
}

module.exports = new ClienteDAO(ClienteModel);