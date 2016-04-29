"use strict"

var clientDao 	= require('../dao/ClientDAO'),
	phoneDao 	= require('../dao/PhoneDAO'),
	addressDao 	= require('../dao/AddressDAO'),
	async 		= require('async');

class ClientBUS {
	
	ClientRegister(obj, callback) {

		if (obj != null && obj != undefined) {
			var idClient;
			async.series([
				function (next) {
					clientDao.InsertOne(obj.client, function(result) {
						if (result.client.id > 0 ){
							idClient = result.client.id;
							next();
						}
						else {
							callback({ error: 'Não foi possível cadastrar o client'});
						}
					});

				}, 
				function (next) {
					if (obj.phone != null) {
						async.eachSeries(obj.phone, function (o, n) {
							var p = {
								id_client	: idClient,
								ddd 		: o.ddd,
								number 		: o.number,
								type 		: o.type
							}
							
							console.log('Send phone DAO');
							phoneDao.InsertOne(p, function (r) {
								n();
							});
						}, () => {
							next();
						});
					}
				},
				function (next) {
					if (obj.address != null) {
						console.log('Insert Addess');
						async.eachSeries(obj.address, function (o, n) {
							var a = {
								id_client : idClient,
								street : o.street,
								number : o.number,
								neighborhood : o.neighborhood,
								zip_code : o.zip_code,
								city : o.city,
								state : o.state,
								country : o.country
							};

							console.log('Send to address');
							addressDao.InsertOne(a, function (r) {
								console.log('Address');
								console.log(r);
								n();
							});
						}, next());
					}
				}
			], () => {
				if (idClient != null)
					callback({ success: 'Cliente cadastrado com sucesso'});	
				else 
					callback({ error : 'Não foi possível cadastrar o usuário'});
			});
		} else {
			callback({ error: 'Dados do client invalidos' });
		}
	}

	GetAll(callback) {
	    
	    clientDao.GetAll(function (res) {
	        var list = [];

	        res.clients.forEach(function (o) {
	            console.log(o);
	            list.push({ id: o.id, name: o.ds_name, cpf_cpnj: o.ds_cpf_cnpj, email: o.ds_email });
	        });

	        callback({ clients: list });
	    });
	}
}

module.exports = new ClientBUS();
