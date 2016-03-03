var request = require('supertest'),
	supplierDAO = require('../../domain/dao/SupplierDAO'),
	supplierBUS = require('../../domain/business/SupplierBUS'),
	config 	= require('../../config/config.js'),
	common 	= require(config.common.fileCommon);

var token = { "token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6OCwibmFtZSI6ImFydG1hbmFnZXIiLCJ0aXBvIjoxLCJpYXQiOjE0NTU0NzIzODl9.0yH_rgL5ZBvwdjjqG3mPmG86zhcBLmpb7C2D_fraVKA"};

describe.only('Supplier', function () {

	it ('Test Request, insert supplier, url: /supplier, method: POST', function (done) {
		
		var obj = { 
			"ds_nome": "Gustavo ",
			"telefone" : [{ "ddd" : 12, "numero" : "12321312", "tipo" : 1}],
	  		"endereco" : [{"rua": "teste", "numero" : 1, "bairro" : "teste", 
					  		"cep" : "12312", "cidade" : "sao paulo", "estado" : "SP", "pais" : "BR" }]
		};

		request(config.application.url)
		.post('/supplier')
		.send(obj)
		.set('Accept', 'application/json')
      	.expect('Content-Type', /json/)
      	.expect(200)
      	.end(function (err, res) {
      		done();
      	});
	});

	it ('Test BUS, insert one supplier, method: InsertOne', function(done) {
		supplierBUS.InsertOne(obj, function (callback) {
			if (callback.success)
				done();
			else 
				throw callback.error;
		});

	});

	it ('Test DAO, insert one supplier, method: InserOne', function (done) {

		supplierDAO.InserOne(obj, function(callback) {

			if (callback.id > 0)
				done();
			else 
				throw 'Unexpected error';
		});
	});
});