"use strict"
var promise = require('bluebird');
var ClientModel = require('../model/ClientModel');


class ClientDAO {

	ClientDAO(Model) {
		this.Data = promise.promisifyAll(Model);	
	}

	InsertOne(obj, callback) {
		if (obj != null && obj != undefined) {
			ClientModel.findOrCreate({ 
				where : {
					ds_name 	: obj.name,
					ds_email	: obj.email,
					ds_cpf_cnpj : obj.cpf_cnpj
				}
			}).spread(function (client, created) {
				console.log('***************');
				console.log(client);
				callback({ client: client, created: created });
			});
		}
	}
}

module.exports = new ClientDAO(ClientModel);