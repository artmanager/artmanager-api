var supplierDAO = require('../dao/SupplierDAO'),
	addressDAO 	= require('../dao/AddressDAO'),
	telefoneDAO = require('../dao/TelefoneDAO');

function SupplierBUS() {

}

SupplierBUS.prototype.InsertOne = function(obj, callback) {
	var id_telefone,
		id_endereco;
	if (obj.ds_nome != null && obj.ds_nome != undefined) {

		if (obj.telefone ! undefined) {
			telefoneDAO.InsertOne(obj.telefone, function (result) {
				if (result.id != undefined)
					id_telefone = result.id;

				if (obj.endereco != undefined) {
					addressDAO.InsertOne(obj.endereco, function(result) {
						if (result.id != undefined)
							id_endereco = result.id

						var sup = {
							ds_nome : obj.ds_nome,
							id_telefone : id_telefone,
							id_endereco : id_endereco
						}

						supplierDAO.InsertOne(sup, function (result) {
							if (result.id != undefined)
								callback({success: "Forncedor cadastrado com sucesso."});
						});
					});
				} 
				else  {
					var sup = {
						ds_nome : obj.ds_nome,
						id_telefone : id_telefone,
						id_endereco : id_endereco
					}

					supplierDAO.InsertOne(sup, function (result) {
						if (result.id != undefined)
							callback({success: "Forncedor cadastrado com sucesso."});
					});
				}
			});
		}
		else if (obj.endereco != undefined) {
			addressDAO.InsertOne(obj.endereco, function(result) {
				if (result.id != undefined)
					id_endereco = result.id

				var sup = {
					ds_nome : obj.ds_nome,
					id_telefone : id_telefone,
					id_endereco : id_endereco
				}

				supplierDAO.InsertOne(sup, function (result) {
					if (result.id != undefined)
						callback({success: "Forncedor cadastrado com sucesso."});
				});
			});
		}
		else {
			var sup = {
				ds_nome : obj.ds_nome,
				id_telefone : id_telefone,
				id_endereco : id_endereco
			}

			supplierDAO.InsertOne(sup, function (result) {
				if (result.id != undefined)
					callback({success: "Forncedor cadastrado com sucesso."});
			});
		} 
	}
	else 
		callback({ error:  'Por favor envie o nome do forncedor' });
}

exports.module = new SupplierBUS();