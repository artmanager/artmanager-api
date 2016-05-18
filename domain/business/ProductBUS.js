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
				} else {
					callback({ error: 'Parametros do produto invalidos'});
				}
			},
			function (next) {
			    if (product != null && product != undefined) {
			        console.log(product.id);
			        console.log('Produto já cadastrado');
					next({ error: 'Produto já cadastrado'});
				} else {
					productDAO.InsertOne(obj, function (r) {
					    if (r.product.id > 0) {
					        console.log({ success: 'Produto cadastrado com sucesso.' });
							next({ success: 'Produto cadastrado com sucesso.'});
						}
						else {
							next({ error: 'Não foi possível cadastrar o produto.'});
						}
					});
				} 
			}	
		], 	(res) => {
			callback(res);
		});
	}

	FindAllProducts(callback) {
		console.log('Find all products BUS');
		productDAO.FindAllProducts(function(result) {
			callback(result);
		});
	}
}

module.exports = new ProductcBUS();