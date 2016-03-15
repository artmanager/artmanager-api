"use strict"

var promise = require('bluebird');
var CategoryModel = require('../model/ProductCategoryModel');

class ProductCategoryDAO {

	ProductCategoryDAO(Model) {
		this.Data = promise.promisifyAll(Model);	
	}

	InsertOne(obj, callback) {
		try {
			CategoryModel
			.findOrCreate(
				{ where : 
					{ 
						ds_describe: obj.describe
					}
				})
				.spread(function (category, created) {
					callback({ productCategory : category , create : created });
				});
		} catch (e) {
			callback({erro: 'Não foi possivel inserir a categoria ' + e});
		}
	}

	FindById(id, callback) {
		try {
			CategoryModel
				.findById(id)
					.then(callback);

		} catch (e) {
			callback(null);
		}
	}

	FindByDescribe(obj, callback) {
		try {
			CategoryModel
				.findOne (
					{ where :
						{ 
							ds_describe  : obj.describe
						}
					})
					.then(function (obj) {
						callback(obj);
					});

		} catch (e) {
			callback(null)
		}
	}

	DeleteByDescribe(obj, callback) {
		try {

			CategoryModel
				.destroy(
					{ where : 
						{
							ds_describe: obj.describe
						}
					}).then(function(obj) {
						callback(obj);
					});
		} catch (e) {
			callback(null);
		}
	}

	GetAll(callback) {
		try {	
			CategoryModel
				.findAll()
					.then(function (obj) {
						callback(obj);
					});
		} catch (e) {
			callback(null);
		}
	}
}

module.exports = new ProductCategoryDAO(CategoryModel);