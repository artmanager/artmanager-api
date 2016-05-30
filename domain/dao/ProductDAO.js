"use strict"

var productModel = require('../model/ProductModel'),
    sequelize = require('../../db/postgres.js'),
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
		console.log('FindOne Product');
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
	    let query = "select " 
	                    + "p.id, "
                        + "p.id_supplier, "
                        + "p.id_product_category, "
                        + "p.ds_name as name, "
                        + "p.ds_size as size, "
                        + "p.ds_weight as weight, "
                        + "p.ds_describe as describe, "
                        + "p.vl_cost as cost, "
                        + "p.vl_sale_cost as sale_cost, "
                        + "p.nr_quantity as quantity, "
                        + "s.ds_name as supplier, "
                        + "pc.ds_describe as category "
	                + "from tb_product p "
	                + "join tb_product_category pc "
	                    + "on pc.id = p.id_product_category "
	                + "left join tb_supplier s "
	                    + "on s.id = p.id_supplier ";
	    sequelize
            .query(query)
            .then(function (obj) {
                callback({ products: obj });
            });
	}
}

module.exports = new ProductDAO(productModel);
       