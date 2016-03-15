"use strict"

var categoryDao = require('../dao/ProductCategoryDAO');

class ProductCategoryBUS {
	
	InsertProductCategory(obj, callback) {
		if (obj.describe != null) {
			categoryDao.FindByDescribe(obj.describe, function (result) {

				if (result != undefined || result != null) {
					callback({ error: "Categoria já cadastrada"});
				} else {
					categoryDao.InsertOne(obj, function (category) {
						if (category.productCategory.id != undefined && category.productCategory.id > 0)
							callback({ success : 'Categoria cadastrada com sucesso'});
						else 
							callback({ error : 'Não foi possível cadastrar a Categoria' });
					});
				}
			});

		} else {
			callback({ error : "Por favor envie uma descrição valida" });
		}
	}

	GetAllCategory(callback) {
		categoryDao.GetAll(function (result) {
			var obj = [];
			result.forEach(function (e) {
				var o = { 
					id: e.id, 
					describe: e.ds_describe 
				};

				obj.push(o);
			});

			callback(obj);
		});
	}
}



module.exports = new ProductCategoryBUS();