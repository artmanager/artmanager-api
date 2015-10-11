var promise = require('bluebird');
var CategoriaModel = require('../model/CategoriaProdutoModel');

function Categoria(Model) {
	this.Data = promise.promisifyAll(Model);
}

Categoria.prototype.findOne = function (id, callback) {
	CategoriaModel.findById(id).then(callback);
};

module.exports = new Categoria(CategoriaModel);