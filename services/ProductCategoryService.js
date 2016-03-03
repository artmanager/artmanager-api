var ProductCategoryBus = require('../domain/business/ProductCategoryBUS');

function ProductCategoryService() {

};

ProductCategoryService.prototype.InsertProductCategory = function (req, res) {
	try {
		var obj = req.body;
		if (obj.ds_descricao == undefined && obj.ds_descricao == null) {
			res.json({error : "Por favor envie uma descrição valida"});
		} else {
			ProductCategoryBus.InsertProductCategory(obj, function (callback) {
				res.json(callback);
			});
		}


	} catch (e) {
		res.json({ error : e});
	}
};

ProductCategoryService.prototype.GetAllCategory = function(req, res) {
	try {

		console.log('Request');
		ProductCategoryBus.GetAllCategory(function (callback) {
			res.json(callback);
		});

	} catch (e) {
		res.json({ error: e });
	}
};

module.exports = new ProductCategoryService();