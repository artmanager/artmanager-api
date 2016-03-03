var categoryDao = require('../dao/ProductCategoryDAO');

function ProductCategoryBUS() {

}

ProductCategoryBUS.prototype.InsertProductCategory = function(obj, callback) {

	if (obj.ds_descricao != null) {
		categoryDao.findByDescribe(obj.ds_descricao, function (result) {

			if (result != undefined || result != null) {
				callback({ error: "Categoria já cadastrada"});
			} else {
				categoryDao.insertOne(obj, function (category) {
					console.log('***************************************');
					console.log(category);
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
};

ProductCategoryBUS.prototype.GetAllCategory = function (callback) {
	categoryDao.getAll(function (result) {
		var obj = [];
		var i = 0;
		result.forEach(function (e) {
			var o = { 
				id: e.id, 
				ds_descricao: e.ds_descricao 
			};

			obj[i] = o;
			i++;
		});

		callback(obj);
	});
}

module.exports = new ProductCategoryBUS();