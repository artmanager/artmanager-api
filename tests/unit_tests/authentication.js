var 	request = require('supertest'),
		assert 	= require('assert'),
		btoa 	= require('btoa'),
		pg 		= require('../../db/postgres');


describe.only('Autenthication', function () {
	it('Test user and password wrong', function (done) {
		var obj = { data : btoa('teste-teste')};
		request('http://localhost:3000')
		.post('/autenticacao')
		.send(obj)
		.set('Accept', 'application/json')
      	.expect('Content-Type', /json/)
      	.expect(function (result){
      		console.log('expect --------------------------');
      		console.log(result.data);
      	})
      	.end(function (err, res){
      		console.log('***********************************');
      		console.log(err);
      		console.log(res);
      		done();
      	});
	});
});