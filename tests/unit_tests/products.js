var request = require('supertest');

describe.only('Test Products', function () {
	
	it ('Test request, insert one product, route: /produtc, method: POST ', function (done) {
		var obj = {

		};

		request('http://localhost:3000')
		.post('/produtc')
		.send(obj)
		.set('Accept', 'application/json')
      	.expect('Content-Type', /json/)
      	.expect(200)
      	.end(function (err, res) {
      		done();
      	});

	});

});