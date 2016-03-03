function SupplierService () {

};

SupplierService.prototype.InsertOne(req, res) {
	try {
		var obj = res.body;
		
		if (obj.ds_nome == undefined || obj.ds_nome == null)
			res.json({ error : 'Por favor envie o nome do fornecedor'});

	} catch (e) {
		
	}
};


exports.module = new SupplierService();

