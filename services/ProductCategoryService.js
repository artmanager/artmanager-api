"use strict"
var ProductCategoryBus = require('../domain/business/ProductCategoryBUS');

class ProductCategoryService {

	InsertProductCategory(req, res) {
		try {
			console.log('Request - ProductCategory - InsertProductCategory');
			var obj = req.body;
			if (obj.describe == undefined && obj.describe == null) {
				res.json({error : "Por favor envie uma descrição valida"});
			} else {
				ProductCategoryBus.InsertProductCategory(obj, function (callback) {
					res.json(callback);
				});
			}


		} catch (e) {
			res.json({ error : e});
		}
	}

	GetAllCategory(req, res) {
		try {
			console.log('Request - ProductCategory - GetAllCategory');
			ProductCategoryBus.GetAllCategory(function (callback) {
				res.json({ productCategory: callback });
			});

		} catch (e) {
			res.json({ error: e });
		}
	}
}

module.exports = new ProductCategoryService();