"use strict"

var promise = require('bluebird'),
	addressModel = require('../model/AddressModel');


class AddressDAO {
	
	AddressDAO(Model) {
		this.Data = promise.promisifyAll(Model);	
	}
	
	InsertOne(obj) {
		console.log(obj);
		try {
			addressModel.findOrCreate({
				where : {
					id_client		: obj.id_client,
					id_supplier		: obj.id_supplier,
					ds_street		: obj.street,
					nr_number		: obj.number,
					ds_neighborhood	: obj.neighborhood,
					ds_zip_code		: obj.zip_code,
					ds_city 		: obj.city,
					ds_state 		: obj.state,
					ds_country 		: obj.country
			}}).spread(function(addr, created) {
				return { Address : addr, created : created }
			});
		} catch(e) {
			throw e;
		}
	}
}

module.exports = new AddressDAO(addressModel);