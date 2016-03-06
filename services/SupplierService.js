function SupplierService () {

};

SupplierService.prototype.InsertOne(req, res) {
	try {
		var obj = res.body;
		
		if (obj.name == undefined || obj.name == null)
			res.json({ error : 'Por favor envie o nome do fornecedor'});

	} catch (e) {
		
	}
};


exports.module = new SupplierService();

