var supplierDAO = require('../dao/SupplierDAO'),
	addressDAO 	= require('../dao/AddressDAO'),
	phoneDAO 	= require('../dao/PhoneDAO');

function SupplierBUS() {

}

SupplierBUS.prototype.InsertOne = function(obj, callback) {
	var id;

	if (obj.supplier != null) {
		supplierDAO.InsertOne(obj.supplier, function (supplier){
			id = supplier.supplier.id;

			if (obj.address != null) {
				obj.address.forEach(function (o) {
					var a = {
						id_supplier : id,
						street : o.street,
						number : o.number,
						neighborhood : o.neighborhood,
						zip_code : o.zip_code,
						city : o.city,
						state : o.state,
						country : o.country
					};
					addressDAO.InsertOne(a, function (address) { 
					});
				});
			}

			if (obj.phone != null) {
				obj.phone.forEach(function (o) {
					var p = {
						id_supplier	: id,
						ddd 		: o.ddd,
						number 		: o.number,
						type 		: o.type
					}
					console.log('Send phone DAO');
					phoneDAO.InsertOne(p, function (ph) {
					});
				});
			}
		});
	}
}

module.exports = new SupplierBUS();