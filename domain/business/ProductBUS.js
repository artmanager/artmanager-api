"use strict"
var async 		= require('async'),
	productDAO 	= require('../dao/ProductDAO');

class ProductcBUS {

	InsertOne(obj, callback) {
		var product;

		async.series([
			function (next) {
				if (obj != null) {
					productDAO.FindOne(obj, function (r) {
						product = r;
						next();
					});
				}
			},
			function (next) {
				if (product != null && product != undefined) {
					next({ error: 'Produto já cadastrado'});
				} else {
					productDAO.InsertOne(obj, function (r) {
						if (r.product.id > 0) {
							next({ success: 'Produto cadastrado com sucesso.'});
						}
					});
				} 
			}	
		], (res) =>  {
			callback(res);
		});
	}
}

module.exports = new ProductcBUS();