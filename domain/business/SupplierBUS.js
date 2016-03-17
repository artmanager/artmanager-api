"use strict"

var supplierDAO = require('../dao/SupplierDAO'),
	addressDAO 	= require('../dao/AddressDAO'),
	phoneDAO 	= require('../dao/PhoneDAO'),
	async 		= require('async');


class SupplierBUS {

	InsertOne(obj, callback) {
		var id;
		var supplier;
		if (obj.supplier != null) {
			async.series([
				function (next) {
					supplierDAO.InsertOne(obj.supplier, function (r) {
						id = r.supplier.id;
						supplier = r.supplier;
					 	next();
					});
				},
				function (next) {
					console.log('Insert Address');
					if (obj.address != null) {
						async.eachSeries(obj.address, function (o, n) {
							var a = {
								id_supplier : id,
								street : o.street,
								number : o.number,
								neighborhood : o.neighborhood,
								zip_code : o.zip_code,
								city : o.city,
								state : o.state,
								country : o.country
							}
							
							addressDAO.InsertOne(a, function (r) {
								console.log('Address');
								n();
							});
						}, next());
						
					} else {
						next();
					}
				},
				function (next) {
					console.log('Insert Fone');
					if (obj.phone != null) {
						async.eachSeries(obj.phone, function (o, n) {
							var p = {
								id_supplier	: id,
								ddd 		: o.ddd,
								number 		: o.number,
								type 		: o.type
							}
							
							console.log('Send phone DAO');
							phoneDAO.InsertOne(p, function (r) {
								console.log('Phone');
								n();
							});
						}, next());
					} else {
						next();
					}
				}
			], () => {
				callback(supplier);
			});	
		}
		else 
			callback({ error : 'supplier error' });
	}

	GetAllSupplier(callback) {
		supplierDAO.GetAll(function (result) {
			var supplier = [];

			result.forEach(function (o) {
				var obj = {
					id: o.id,
					name: o.ds_name,
					email: o.ds_email
				}

				supplier.push(obj);
			});

			callback(supplier);
		});
	}
}

module.exports = new SupplierBUS();