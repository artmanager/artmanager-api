var 	request = require('supertest'),
		token 	= null,
		config 	= require('../../config/config.js'),
		common 	= require(config.common.fileCommon),
		phoneDAO= require('../../domain/dao/PhoneDAO');

describe.only('Phone', function () {

	it ('Test DAO, Insert one phone, Method: InsertOne', function (done) {
		var obj = {
			ddd :'11',
			number : '984749397',
			type : 1
		};

		phoneDAO.InsertOne(obj, function (callback) {
			if (callback.Phone.id > 0)
				done();
			else if (callback.Phone.id <= 0)
				throw 'Failt register phone';
			else 
				throw 'Unexpected result';
		});
	});

	it ('Test DAO, Insert one phone with supplier, Method: InsertOne', function (done) {
		var obj = {
			id_supplier: 2,
			ddd :'11',
			number : '984749397',
			type : 1
		};

		phoneDAO.InsertOne(obj, function (callback) {
			if (callback.Phone.id > 0)
				done();
			else if (callback.Phone.id <= 0)
				throw 'Failt register phone';
			else 
				throw 'Unexpected result';
		});
	});
});