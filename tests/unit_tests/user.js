var 	request = require('supertest'),
		btoa 	= require('btoa'),
		fs 		= require('fs'),
		ini 	= require('iniparser');

var token = { "token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6OCwibmFtZSI6ImFydG1hbmFnZXIiLCJ0aXBvIjoxLCJpYXQiOjE0NTU0NzIzODl9.0yH_rgL5ZBvwdjjqG3mPmG86zhcBLmpb7C2D_fraVKA"};

describe.only('Users', function (){
	it ('Test User - register user', function (done) {

		var obj = { "token" : token.token,
			"usuario"  : { "nome" : "gustavo", "usuario" : "artmanager", "senha" : "artmanager", "perfil" : 1},
	   		"telefone" : [{ "ddd" : 12, "numero" : "12321312", "tipo" : 1}],
	  		"endereco" : [{"rua": "teste", "numero" : 1, "bairro" : "teste", 
					  		"cep" : "12312", "cidade" : "sao paulo", "estado" : "SP", "pais" : "BR" }]};

		request('http://localhost:3000')
		.post('/usuarios')
		.send(obj)
		.set('Accept', 'application/json')
      	.expect('Content-Type', /json/)
      	.expect(200)
		.end(function (err, res) {
			if (err) 
				throw err;

			var result = res.body;
			if (result.success == 'Usuário Cadastrado com sucesso.') {
				done();
			}
			else {
				throw result.erro;
			}
		});
	});

	it('Test User -consult user by login', function (done) {
		var obj = { login : 'artmanager', "token": token.token };
		request('http://localhost:3000')
		.get('/usuarios/')
		.send(obj)
		.set('Accept', 'application/json')
		.expect('Content-Type', /json/)
		.expect(200)
		.end(function (err, res) {
			if (err)
				throw err;

			done();
		});
	});

	it ('Test User - consult user by id', function (done) {

		done();
	});

	it('Test User - change password of user', function (done) {
		done();
	});

	it ('Test User - delete user', function (done) {
		done();
	});
});

