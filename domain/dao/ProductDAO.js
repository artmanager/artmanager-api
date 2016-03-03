var productModel = require('../model/ProductModel'),
	promise = require('bluebird');

function ProductDAO (Model) {
	this.Data = promise.promisifyAll(Model);
};

exports.module = new ProductDAO(productModel);

