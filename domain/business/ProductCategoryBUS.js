var categoryDao = require('../dao/ProductCategoryDAO');

function ProductCategoryBUS() {

}

ProductCategoryBUS.prototype.InsertProductCategory = function(obj, callback) {

	if (obj.describe != null) {
		categoryDao.findByDescribe(obj.describe, function (result) {

			if (result != undefined || result != null) {
				callback({ error: "Categoria já cadastrada"});
			} else {
				categoryDao.insertOne(obj, function (category) {
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

module.exports = new ProductCategoryBUS();