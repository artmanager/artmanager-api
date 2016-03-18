"use strict"
var productBUS = require("../domain/business/ProductBUS");

class ProductService {

	InsertProduct(req, res) {
		try {
			var obj = req.body;
			if (obj == null){
				res.json({ error: 'Parametros do produto não localizados'});
			}

			productBUS.InsertOne(obj, function (callback) {
				console.log('Response');
				res.json(callback);
			});

		} catch (e) {
			res.json({error : e });
		}
	}

	FindAllProducts(req, res) {
		try {
			console.log('Find all products');
			productBUS.FindAllProducts(function (callback) {
				callback.products.forEach(function(o) {
					console.log(o.id_product_category);
				});
				res.json(callback);
			});
		} catch (e) {
			res.json({ error : 'Não foi possível consultar o produtos. Erro: ' + e });
		}
	}
}

 
 module.exports = new ProductService();