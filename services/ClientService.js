"use strict"
var promise = require('bluebird');
var clientBuss = require('../domain/business/ClientBUS');

class ClientService {

	ClientRegister(req, res) {
		try {
			
			var param = req.body;
			
			if (param.client == null ||  param.client == undefined)
				res.json({ erro : 'Objeto client não encontrado.' });
			
			clientBuss.ClientRegister(param, function(obj) {
				res.json(obj);
			});

		} catch (e) {
			console.log(e);
			res.json({ erro : e });
		}
	}
}

module.exports = new ClientService();