"use strict"
var productBUS = require("../domain/business/ProductBUS");

class ProductService {
	InsertProduct(req, res) {
		try {
			var obj = req.body;
			if (obj == null){
				return res.json({ error: 'Parametros do produto não localizados'});
			}

			productBUS.InsertOne(obj, function (callback) {
				return res.json(callback);
			});

		} catch (e) {
			res.json({error : e });
		}
	}
}

 
 module.exports = new ProductService();