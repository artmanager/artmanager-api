var promise = require('bluebird');
var CategoryModel = require('../model/ProductCategoryModel');

function ProductCategoryDAO(Model) {
	this.Data = promise.promisifyAll(Model);
}

ProductCategoryDAO.prototype.insertOne = function (obj, callback) {
	try {
		CategoryModel
		.findOrCreate(
			{ where : 
				{ 
					ds_descricao: obj.ds_descricao
				}
			})
			.spread(function (category, created) {
				callback({ productCategory : category , create : created });
			});
	} catch (e) {
		callback({erro: 'Não foi possivel inserir a categoria ' + e});
	}
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
					callback(obj);
				});
	} catch (e) {
		callback(null);
	}
};

ProductCategoryDAO.prototype.getAll = function (callback) {
	try {	
		CategoryModel
			.findAll()
				.then(function (obj) {
					callback(obj);
				});
	} catch (e) {
		callback(null);
	}
};


module.exports = new ProductCategoryDAO(CategoryModel);