var promise = require('bluebird');
var ClientModel = require('../model/ClientModel');

function ClientDAO(Model) {
	this.Data = promise.promisifyAll(Model);
}

ClientDAO.prototype.InsertOne = function(obj, callback) {
	console.log('=========================================');
	console.log(obj);
	if (obj != null && obj != undefined) {
		ClienteModel.findOrCreate({ 
			where : {
				ds_nome 	: obj.nome,
				ds_email	: obj.email,
				ds_cpf_cnpj : obj.cpf_cnpj
			}
		}).spread(function (client, created) {
			console.log('Callback ' + client);
			callback({cliente: client});
		});
	}
}

module.exports = new ClientDAO(ClientModel);