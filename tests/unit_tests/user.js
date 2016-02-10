// var 	request = require('supertest'),
// 		btoa 	= require('btoa');

// describe.only('Users', function (){
// 	it ('Test User - register user', function (done) {

// 		var obj = {"usuario"  : { "nome" : "gustavo", "usuario" : "artmanager", "senha" : "artmanager", "perfil" : 1},
// 				   "telefone" : [{ "ddd" : 12, "numero" : "12321312", "tipo" : 1}],
// 				   "endereco" : [{"rua": "teste", "numero" : 1, "bairro" : "teste", 
// 								"cep" : "12312", "cidade" : "sao paulo", "estado" : "SP", "pais" : "BR" }]};

// 		request('http://localhost:3000')
// 		.post('/usuarios')
// 		.send(obj)
// 		.set('Accept', 'application/json')
//       	.expect('Content-Type', /json/)
//       	.expect(200)
// 		.end(function (err, res) {
			
// 			if (err) 
// 				throw err;

// 			var result = res.body;
// 			if (result.success == 'Usuário Cadastrado com sucesso.') {
// 				done();
// 			}
// 			else {
// 				throw result.erro;
// 			}
// 		});
// 	});

// 	// it('Test User -consult user by login', function (done) {
// 	// 	var obj = { login : 'artmanager' };
// 	// 	request('http://localhost:3000')
// 	// 	.get('/usuarios/')
// 	// 	.send(obj)
// 	// 	.set('Accept', 'application/json')
// 	// 	.expect('Content-Type', /json/)
// 	// 	.expect(200)
// 	// 	.end(function (err, res) {
// 	// 		if (err)
// 	// 			throw err;
			
// 	// 		done();
// 	// 	});
// 	// });

// 	it ('Test User - consult user by id', function (done) {
// 		done();
// 	});

// 	it('Test User - change password of user', function (done) {
// 		done();
// 	});

// 	it ('Test User - delete user', function (done) {
// 		done();
// 	});
// });

