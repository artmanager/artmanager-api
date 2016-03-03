var supplierModel = require('../model/SupplierModel'),
	promise = require('bluebird');

function SupplierDAO(Model) {
	this.data = promise.promisifyAll(Model);
};

SupplierDAO.prototype.InserOne = function(obj, callback) {
	if (callback.ds_nome != null && callback.ds_nome != undefined) {
		supplierModel.findOrCreate({
			where : 
			{
				id_endereco: obj.id_endereco,
    			id_telefone: obj.id_telefone,
    			ds_nome: obj.ds_nome
			}
		}).then(function (supp, created) {
			callback({ supplier: supp });
		});
	}
	else 
		callback({error: 'Por favor envie o nome do forncedor'});
};

exports.module = new  SupplierDAO(supplierModel);