var request = require('supertest'),
	categoryDAO = require('../../domain/dao/ProductCategoryDAO');

var token = { "token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6OCwibmFtZSI6ImFydG1hbmFnZXIiLCJ0aXBvIjoxLCJpYXQiOjE0NTU0NzIzODl9.0yH_rgL5ZBvwdjjqG3mPmG86zhcBLmpb7C2D_fraVKA"};

describe.only('Product Category', function () {
	
	it ('Test Request, insert product category', function(done) {
		var obj = { "token": token.token, "describe": "teste" };
		
		request('http://localhost:3000')
		.post('/productCategory')
		.send(obj)
		.set('Accept', 'application/json')
      	.expect('Content-Type', /json/)
      	.expect(200)
      	.end(function (err, res) {
      		console.log(res.body);
      		if (err)
      			throw err;
      		else if (res.body.success == 'Categoria cadastrada com sucesso')
      			done();
      		else 
      			throw res.body.error;
      	});
	});

	it ('Test DAO, find category by describe', function (done) {
		categoryDAO.findByDescribe('teste', function (callback) {
			if (callback.id > 0)
				done();
		});
	});

	it ('Test DAO, insert product category', function (done) {
		var obj = { "describe" : "teste" };
		categoryDAO.insertOne(obj, function (callback) {
			if (callback.productCategory.id != undefined && callback.productCategory.id > 0){
				done();
			} else {
				throw 'Unexpected result';
			}

		});
	});

	it ('Test DAO, delete product category', function (done) {
		var obj = { "describe": "teste" };
		categoryDAO.deleteByDescribe("teste", function (callback) {
			if (callback > 0)
				done();
			else 
				throw 'Unexpected result';
		});
	});
});