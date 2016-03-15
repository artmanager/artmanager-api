var request 	= require('supertest'),
	clientDAO 	= require('../../domain/dao/ClientDAO'),
	config 		= require('../../config/config.js'),
	common 		= require(config.common.fileCommon);
	


describe.only('Test Client', function () {
	it ('Test DAO, insert one client, method: InsertOne', function (done) {
		var obj = {
			name: 'gustavo',
			cpf_cnpj: '211312',
			email: 'gustavo_sk@live.com'
		}

		clientDAO.InsertOne(obj, function (callback) {
			if (callback.client.id > 0) {
				done();
			} else {
				throw "Unexpected result";
			}
		});
	});

	it ('Test BUS, insert one client, method: InsertOne', function (done) {
		done();
	});
});
