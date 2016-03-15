"use strict"
var supplierBUS = require('../domain/business/SupplierBUS');

class SupplierService {
	
	InsertOne(req, res) {
		try {
			var obj = req.body;
			if (obj.supplier == null)
				res.json({ error : 'Por favor envie o nome do fornecedor'});

			supplierBUS.InsertOne(obj, function (result) {
				if (result.id > 0) {
					res.json({ success : 'Fornecedor cadastrado com sucesso.'});
				}
			});

		} catch (e) {
			console.log(e);
			res.json({ error : 'Não foi possível cadastrar o fornecedor. Erro : ' + e });
		}
	}

	GetAllSupplier(req, res) {
		try {
			supplierBUS.GetAllSupplier(function (result) {
				res.json({ supplier : result });
			});
		} catch (e) {
			console.log(e);
			res.json({ error: 'Não foi possível consultar os fornecedores. ' + e});
		}
	};
}

module.exports = new SupplierService();

