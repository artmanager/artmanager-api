var promise = require('bluebird');
var ClienteModel = require('../model/ClienteModel');

function ClienteDAO(Model) {
	this.Data = promise.promisifyAll(Model);
}

ClienteDAO.prototype.InsertOne = function(obj, callback) {
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

module.exports = new ClienteDAO(ClienteModel);