var request 	= require('supertest'),
	productdao 	= require('../../domain/dao/productdao'),
	productbus 	= require('../../domain/business/productbus'),
	config 		= require('../../config/config.js'),
	common 		= require(config.common.filecommon);

var token = "eyj0exaioijkv1qilcjhbgcioijiuzi1nij9.eyjpzci6ocwibmftzsi6imfydg1hbmfnzxiilcj0axbvijoxlcjpyxqioje0ntu0nzizodl9.0yh_rgl5zbvwdjjqg3mpmg86zhcblmpb7c2d_fravka";

describe.only('test products', function () {

	it ('test dao, insert one product, method: inserone', function (done) {
		var obj = {
			id_product_category: 2,
			id_supplier : null,
			name : "product test",
		    size : "20cm",
		    weight : "20cm",
		    describe : "produto teste",
		    cost : 25.2,
		    sale_cost: 55.1,
		    quantity: 20
		}

		productdao.insertone(obj, function (result) {
			if (result.product.id > 0) {
				done();
			} else if (result.error) {
				throw 'não foi possível adicionar um produto. erro' + result.error;
			} else {
				throw 'unexpected result';
			}
		});
						
	});

	it ('test dao, find one product, method: findone', function (done) {
		var obj = {
			name : "product test",
		    size : "20cm",
		    weight : "20cm",
		    describe : "produto teste",
		}

		productdao.findone(obj, function(result) {
			if (result == null) {
				throw 'produto não existe';
			}
			else if (result.id > 0) {
				done();
			}
			else {
				throw 'unexpected result';
			}
		});
	});

	it ('test dao, find all products, method: findallproducts', function (done) {

		productdao.findallproducts(function (callback) {
			callback.products.foreach(function (o) {
				console.log(o);
			});

			if (callback.error == undefined)
				done();
			else {
				throw callback.error;
			}
		});
	});

	it ('test bus, find all products, method: findallproducts', function (done) {
		productbus.findallproducts(function (callback) {
			if (callback.error == undefined)
				done();
			else {
				throw callback.error;
			}
		});
	});

	it ('test bus, insert one product, method: insetone', function (done) {
		var obj = {
			id_product_category: 1,
			id_supplier : null,
			name : "product test 2",
		    size : "244cm",
		    weight : "210cm",
		    describe : "produto teste",
		    cost : 25.2,
		    sale_cost: 55.1,
		    quantity: 20
		}

		productbus.insertone(obj, function (result) {
			
			if (result.error != undefined) {
				throw result.error;
			} else if (result.success != undefined){
				done();
			} else  {
				throw 'unexpected error';
			}
		});	

	});

	it ('test request, insert one product, route: /product, method: post ', function (done) {
		var obj = {
			id_product_category: 2,
			id_supplier : 1,
			name : "app123s 24.44",
		    size : "24cm",
		    weight : "24cm",
		    describe : "produto teste post request",
		    cost : 30.2,
		    sale_cost: 55.1,
		    quantity: 20
		}

		request(config.application.url)
		.post(common.routes.product.postproduct)
		.send(obj)
		.set('accept', 'application/json')
		.set('x-access-token', token)
      	.expect('content-type', /json/)
      	.expect(200)
      	.end(function (err, res) {

      		if (res.body.success) {
      			done();
      		} else if (res.body.error) {
      			return done('não foi possível inserir o produto. erro: ' + res.body.error);
      		} else {
      			return done('unexpected result ' + res.body.error);
      		}
      	});
	});

	it ('test request, get all products, route: /product, method: get', function (done) {

		request(config.application.url)
		.get(common.routes.product.getallproducts)
		.set('accept', 'application/json')
		.set('x-access-token', token)
      	.expect('content-type', /json/)
      	.expect(200)
      	.end(function (err, res) {
      		if (res.body.error == undefined) {
      			done();
      		} else if (res.body.error) {
      			return done('não foi possível consultar os produtos. erro: ' + res.error);
      		} else {
      			return done('unexpected result ' + (err || res.body.error));
      		}
      	});
	});
});
