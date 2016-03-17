var promise = require('bluebird'),
	phoneModel = require('../model/PhoneModel');

function PhoneDAO(Model) {
	this.Data = promise.promisifyAll(Model);
}

PhoneDAO.prototype.InsertOne = function(obj, callback) {
	try {
		console.log(obj);
		phoneModel.findOrCreate({ 
			where : {
				id_client	: obj.id_client,
				id_supplier : obj.id_supplier,
				nr_ddd 		: obj.ddd,
				ds_number	: obj.number,
				nr_type 	: obj.type
			}
		}).spread(function(phone, created) {
			callback({ Phone: phone, created: created });
		});
	} catch (e) {
		console.log('Phone Erro: ' + e);
		callback({ error : 'Não foi possível inserir o telefone. ' + e});
	}
};

PhoneDAO.prototype.InserList = function (obj, callback) {
	try {
		phoneModel.bulkCreate(obj).then(function(e) {
			console.log(e);
			callback(e);
		});
	} catch (e) {
		console.log('Phone Erro: ' + e);
	}
};


module.exports = new PhoneDAO(phoneModel);