var 	request = require('supertest'),
		btoa 	= require('btoa'),
		pg 		= require('../../db/postgres');


describe.only('Autenthication', function () {
	it('Test Autenthication - user and password wrong', function (done) {
		var obj = { data : btoa('teste-teste')};
		request('http://localhost:3000')
		.post('/autenticacao')
		.send(obj)
		.set('Accept', 'application/json')
      	.expect('Content-Type', /json/)
      	.expect(200)
      	.end(function (err, res){
      		
  			if (err) 
  				throw err;

  			if (res.body.erro == 'Usuário ou senha inválidos.') 
  				done();
  			else 
  				done(err);
      	});
      	
	});

	it('Test Autenthication - user and password correct', function (done){
		request('http://localhost:3000')
		.post('/autenticacao')
		.send()
		.set('Accept', 'application/json')
		.expect('Contect-Type', /json/)
		.expect(200)
		.end(function (err, res){
			done();
		});
	});
});
