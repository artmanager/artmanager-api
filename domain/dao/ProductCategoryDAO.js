var promise = require('bluebird');
var CategoryModel = require('../model/ProductCategoryModel');

function ProductCategoryDAO(Model) {
	this.Data = promise.promisifyAll(Model);
}

ProductCategoryDAO.prototype.insertOne = function (obj, callback) {
	console.log(obj);
	CategoryModel
		.findOrCreate(
			{ where : 
				{ 
					ds_descricao: obj.describe
				}
			})
			.spread(function (category, created) {
				callback({ productCategory : category , create : created });
			});
}

ProductCategoryDAO.prototype.findById = function (id, callback) {
	try {

		CategoryModel
			.findById(id)
				.then(callback);

	} catch (e) {
		callback(null);
	}
};

ProductCategoryDAO.prototype.findByDescribe = function (describe, callback) {
	try {

		CategoryModel
			.findOne (
				{ where :
					{ 
						ds_descricao  : describe
					}
				})
				.then(function (obj) {
					callback(obj);
				});

	} catch (e) {
		callback(null)
	}
};

ProductCategoryDAO.prototype.deleteByDescribe  = function (describe, callback) {
	try {

		CategoryModel
			.destroy(
				{ where : 
					{
						ds_descricao: describe
					}
				}).then(function(obj) {
					console.log(obj);
					callback(obj);
				});
	} catch (e) {
		callback(null);
	}
}


module.exports = new ProductCategoryDAO(CategoryModel);