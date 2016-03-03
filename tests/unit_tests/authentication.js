var 	request = require('supertest'),
		btoa 	= require('btoa'),
		pg 		= require('../../db/postgres'),
		token 	= null,
		config 	= require('../../config/config.js'),
		common 	= require(config.common.fileCommon);


describe.only('Autenthication', function () {

	it('Test Autenthication - user and password wrong', function (done) {
		var obj = { data : btoa('teste-teste')};
		
		request(config.application.url)
		.post(common.routes.authentication.postGenerateToken)
		.send(obj)
		.set('Accept', 'application/json')
      	.expect('Content-Type', /json/)
      	.expect(200)
		.end(function (err, res) {
			if (err)
				throw err;
			if (res.body.erro == 'Usuário ou senha inválidos.') 
  				done();
  			else {
  				throw 'Unexpected result';
  			}
		});
	});

	it('Test Autenthication - user and password correct', function (done) {
		var obj = { data : btoa('artmanager-artmanager')};
		request(config.application.url)
		.post(common.routes.authentication.postGenerateToken)
		.send(obj)
		.set('Accept', 'application/json')
      	.expect('Content-Type', /json/)
      	.expect(200)
      	.end(function (err, res) {
      		
  			if (err) 
  				throw err;

  			if (res.body.token != null && res.body.token != undefined) {
  				token = res.body.token;
  				console.log(token);
  				done();
  			}
  			else 
  				throw 'Unexpected result';
      	});
	});
});
