var request 	= require('supertest'),
	categoryDAO = require('../../domain/dao/ProductCategoryDAO'),
	categoryBUS = require('../../domain/business/ProductCategoryBUS'),
	config 		= require('../../config/config.js'),
	common 		= require(config.common.fileCommon);

var token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6OCwibmFtZSI6ImFydG1hbmFnZXIiLCJ0aXBvIjoxLCJpYXQiOjE0NTU0NzIzODl9.0yH_rgL5ZBvwdjjqG3mPmG86zhcBLmpb7C2D_fraVKA";

describe.only('Product Category', function () {
	
	it ('Test Request, insert product category, route: productCategory, method: POST', function(done) {
		var obj = { 
			"describe": "teste" 
		};
		
		request(config.application.url)
		.post(common.routes.productCategory.postInsertProductCategory)
		.send(obj)
		.set('Accept', 'application/json')
		.set('x-access-token', token)
      	.expect('Content-Type', /json/)
      	.expect(200)
      	.end(function (err, res) {
      		if (err)
      			throw err;
      		else if (res.body.success == 'Categoria cadastrada com sucesso')
      			done();
      		else 
      			throw res.body.error;
      	});
	});

	it ('Test Request, get all category, route: productCategory, method: GET', function (done) {
		
		var obj = { "token": token.token };

		request(config.application.url)
		.get(common.routes.productCategory.getGetAllCategory)
		.set('Accept', 'application/json')
		.set('x-access-token', token)
		.expect('Content-Type', /json/)
		.expect(200)
		.end(function (err, res) {
			var result = res.body;
			
			result.productCategory.forEach(function (o) {
				console.log(o);
			});

			if (result.productCategory.length <= 0) {
				console.log('Não existem categorias cadastradas.');
				done();
			} else if (result.productCategory.length > 0) {
				console.log('Existem ' + result.productCategory.length + ' categorias');
				done();
			} else {
				throw 'Unexpected result';
			}
			
		});
	});

	it ('Test DAO, insert product category, method: insertOne', function (done) {
		var obj = {	describe : 'teste' }

		categoryDAO.InsertOne(obj, function (callback) {
			if (callback.productCategory.id != undefined && callback.productCategory.id > 0){
				done();
			} else {
				throw 'Unexpected result';
			}
		});
	});

	it ('Test DAO, find category by describe, method findByDescribe', function (done) {
		var obj = {	describe : 'teste' }

		categoryDAO.FindByDescribe(obj, function (callback) {
			if (callback != null && callback.id > 0)
				done();
			else 
				throw 'Unexpected result';
		});
	});

	it ('Test DAO, consult all category, method: getAll', function (done) {
		try {
			categoryDAO.GetAll(function(callback) {
			
				if (callback.length <= 0) {
					console.log('Não existe nenhuma categoria cadastrada');
					done;
				}
				else if (callback.length > 0) {
					console.log('Existem ' + callback.length + ' categorias');
					done();
				}
				else 
					throw 'Unexpected result';
			});
		} catch (e) {
			throw 'Não foi possível consultar as categorias. Erro: ' + e;
		}
	});	

	it ('Test DAO, delete product category, method: deleteByDescribe', function (done) {
		var obj = {	describe : 'teste' }
		categoryDAO.DeleteByDescribe(obj, function (callback) {
			if (callback > 0)
				done();
			else 
				throw 'Unexpected result';
		});
	});

	it ('Test BUS, consult all category, method: GetlAllCategory', function (done) {
		try {
			categoryBUS.GetAllCategory(function (callback) {
			
				if (callback.length <= 0) {
					console.log('Não existe nenhuma categoria cadastrada');
					done();
				}
				else if (callback.length > 0) {
					console.log('Existem ' + callback.length + ' categorias');
					done();
				}
				else 
					throw 'Unexpected result';
			
			});
		} catch (e) {
			throw 'Não foi possível consultas as categorias, Erro: ' + e;
		}
		
	});

	it ('Test BUS, insert one, method', function (done) {
		try {
			var obj = { "describe": 'teste buss' };

			categoryBUS.InsertProductCategory(obj, function (callback) {
				if (callback.success) 
					done();
				else 
					throw callback.error;
			});
		} catch (e) {
			throw 'Exception, Não foi possível inserir a categoria. ' + e;
		}
	});
});