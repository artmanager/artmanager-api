"use strict"

var productModel 	= require('../model/ProductModel'),
	promise 		= require('bluebird');

class ProductDAO  {
	
	PruductDAO(Model) {
		this.Data = promise.promisifyAll(Model);	
	}

	InsertOne(obj, callback) {
		console.log('InsertOne Supplier');
		try {
			
			if (obj != null) {
				productModel.findOrCreate( {
					where: {
				 		id_product_category: obj.id_product_category,
					    id_supplier: obj.id_supplier,
					    ds_name: obj.name,
					    ds_size: obj.size,
					    ds_weight: obj.weight,
					    ds_describe: obj.describe,
					    vl_cost: obj.cost,
					    vl_sale_cost: obj.sale_cost,
					    nr_quantity: obj.quantity
					}
				}).spread(function(product, created) {
					callback({ product: product, created: created });
				});
			} else {
				callback( { error : "invalid Product"});
			}

		} catch (e) {
			callback({ Error: "Não foi possível cadastrar o produto. Erro: " + e });
		}
	}

	FindOne(obj, callback) {
		console.log('FindOne Supplier');
		if (obj != null) {
			productModel.findOne( {
				where : {
					ds_name: obj.name,
				    ds_size: obj.size,
				    ds_weight: obj.weight,
				    ds_describe: obj.describe,
				}
			}).then(function(result) {
				callback(result);
			});
		}
	}

	FindAllProducts(callback) {
		console.log('Find all products');
		productModel
			.findAll()
				.then(function (obj) {
					callback({ products: obj });
				});
	}
}

module.exports = new ProductDAO(productModel);
       