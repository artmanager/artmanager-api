var request 	= require('supertest'),
	productDAO 	= require('../../domain/dao/ProductDAO'),
	productBUS 	= require('../../domain/business/ProductBUS'),
	config 		= require('../../config/config.js'),
	common 		= require(config.common.fileCommon);

var token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6OCwibmFtZSI6ImFydG1hbmFnZXIiLCJ0aXBvIjoxLCJpYXQiOjE0NTU0NzIzODl9.0yH_rgL5ZBvwdjjqG3mPmG86zhcBLmpb7C2D_fraVKA";

describe.only('Test Products', function () {

	it ('Test DAO, insert one product, method: InserOne', function (done) {
		var obj = {
			id_product_category: 2,
			id_supplier : null,
			name : "Product Test",
		    size : "20cm",
		    weight : "20cm",
		    describe : "Produto teste",
		    cost : 25.2,
		    sale_cost: 55.1,
		    quantity: 20
		}

		productDAO.InsertOne(obj, function (result) {
			if (result.product.id > 0) {
				done();
			} else if (result.error) {
				throw 'Não foi possível adicionar um produto. Erro' + result.error;
			} else {
				throw 'Unexpected result';
			}
		});
						
	});

	it ('Test DAO, find one product, method: FindOne', function (done) {
		var obj = {
			name : "Product Test",
		    size : "20cm",
		    weight : "20cm",
		    describe : "Produto teste",
		}

		productDAO.FindOne(obj, function(result) {
			if (result == null) {
				throw 'Produto não existe';
			}
			else if (result.id > 0) {
				done();
			}
			else {
				throw 'Unexpected result';
			}
		});
	});

	it ('Test DAO, find all products, method: FindAllProducts', function (done) {

		productDAO.FindAllProducts(function (callback) {
			callback.products.forEach(function (o) {
				console.log(o);
			});

			if (callback.error == undefined)
				done();
			else {
				throw callback.error;
			}
		});
	});

	it ('Test BUS, find All products, method: FindAllProducts', function (done) {
		productBUS.FindAllProducts(function (callback) {
			if (callback.error == undefined)
				done();
			else {
				throw callback.error;
			}
		});
	});

	it ('Test BUS, insert one product, method: InsetOne', function (done) {
		var obj = {
			id_product_category: 2,
			id_supplier : null,
			name : "Product Test 2",
		    size : "20cm",
		    weight : "20cm",
		    describe : "Produto teste",
		    cost : 25.2,
		    sale_cost: 55.1,
		    quantity: 20
		}

		productBUS.InsertOne(obj, function (result) {
			
			if (result.error != undefined) {
				throw result.error;
			} else if (result.success != undefined){
				done();
			} else  {
				throw 'Unexpected error';
			}
		});	

	});

	it ('Test request, insert one product, route: /product, method: POST ', function (done) {
		var obj = {
			id_product_category: 2,
			id_supplier : null,
			name : "Product Test 3",
		    size : "20cm",
		    weight : "20cm",
		    describe : "Produto teste post",
		    cost : 25.2,
		    sale_cost: 55.1,
		    quantity: 20
		}

		request(config.application.url)
		.post(common.routes.product.postProduct)
		.send(obj)
		.set('Accept', 'application/json')
		.set('x-access-token', token)
      	.expect('Content-Type', /json/)
      	.expect(200)
      	.end(function (err, res) {
      		if (res.body.success) {
      			done();
      		} else if (res.body.error) {
      			throw 'Não foi possível inserir o produto. Erro: ' + res.error;
      		} else {
      			throw 'Unexpected result ' + (err || res.body.error);
      		}
      	});
	});

	it ('Test request, Get all products, route: /product, method: GET', function (done) {

		request(config.application.url)
		.get(common.routes.product.getAllProducts)
		.set('Accept', 'application/json')
		.set('x-access-token', token)
      	.expect('Content-Type', /json/)
      	.expect(200)
      	.end(function (err, res) {
      		if (res.body.error == undefined) {
      			done();
      		} else if (res.body.error) {
      			throw 'Não foi possível consultar os produtos. Erro: ' + res.error;
      		} else {
      			throw 'Unexpected result ' + (err || res.body.error);
      		}
      	});
	});
});
