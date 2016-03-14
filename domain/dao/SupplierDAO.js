"use strict"

var supplierModel = require('../model/SupplierModel'),
	promise = require('bluebird');


class SupplierDAO {

	SupplierDAO(Model) {
		console.log('SupplierDAO');
		this.data = promise.promisifyAll(Model);
	}

	InsertOne(obj, callback) {
		try {
			console.log('InsertOne Supplier');
			if (obj.name != null) {
				supplierModel.findOrCreate({
					where : 
					{
		    			ds_name: obj.name,
		    			ds_email: obj.email
					}
				}).spread(function (supp, created) {
					callback({ supplier: supp, created: created });
				});
			}
			else 
				callback({ Error : 'Por favor envie o nome do forncedor'});

		} catch (e) {
			console.log('Erro: ' + e);
			callback({ Error : e });
		}
	}
}

module.exports = new SupplierDAO(supplierModel);