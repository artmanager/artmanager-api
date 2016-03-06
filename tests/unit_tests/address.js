var 	request = require('supertest'),
		token 	= null,
		config 	= require('../../config/config.js'),
		common 	= require(config.common.fileCommon),
		addressDAO= require('../../domain/dao/AddressDAO');

describe.only('Address', function () {

	it ('Test DAO - insert one, method: insertOne', function (done) {
		var obj = {
			street: 'rua',
			number: 12,
			neighborhood: 'teste',
			zip_code: '0681460',
			city: 'embu',
			state: 'sp',
			country: 'Brasil'
		};

		addressDAO.InsertOne(obj, function (callback) {

			if (callback.Address.id > 0)
				done();
			else if (callback.Address.id <= 0)
				throw 'Address register failed';
			else 
				throw 'Unexpected result'
		});
	});

	it ('Test DAO - insert one with supplier, method: insertOne', function (done) {
		var obj = {
			id_supplier: 2,
			street: 'rua',
			number: 12,
			neighborhood: 'teste',
			zip_code: '0681460',
			city: 'embu',
			state: 'sp',
			country: 'Brasil'
		};

		addressDAO.InsertOne(obj, function (callback) {

			if (callback.Address.id > 0)
				done();
			else if (callback.Address.id <= 0)
				throw 'Address register failed';
			else 
				throw 'Unexpected result'
		});
	});
});