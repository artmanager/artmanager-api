var request 	= require('supertest'),
	clientDAO 	= require('../../domain/dao/ClientDAO'),
	clientBUS 	= require('../../domain/business/ClientBUS'),
	config 		= require('../../config/config.js'),
	common 		= require(config.common.fileCommon);
	
var token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6OCwibmFtZSI6ImFydG1hbmFnZXIiLCJ0aXBvIjoxLCJpYXQiOjE0NTU0NzIzODl9.0yH_rgL5ZBvwdjjqG3mPmG86zhcBLmpb7C2D_fraVKA";

describe.only('Test Client', function () {
	
	it ('Test DAO, insert one client, method: InsertOne', function (done) {
		var obj = {
			name: 'gustavo',
			cpf_cnpj: '211312',
			email: 'gustavo_sk@live.com'
		}

		clientDAO.InsertOne(obj, function (callback) {
			if (callback.client.id > 0) {
				done();
			} else {
				throw "Unexpected result";
			}
		});
	});

	it('Test DAO, get all clients, method: GetAll', function (done) {
	    clientDAO.GetAll(function (callback) {
	        
	        if (callback.clients){
	            
	            callback.clients.forEach(function (o) {
	                console.log(o.ds_name);
	            });
	            done();
	        }
	        else
	            throw 'Não foi possível consultar os clientes';

	    });
	});

	it('Test BUS, get all clients, method: GetAll', function (done) {
	    clientBUS.GetAll(function (callback) {
	        if (callback.clients) {
	            callback.clients.forEach(function (o) {
	                console.log(o.id);
	                console.log(o.name);
	            });
	            done();
	        }
	        else
	            throw 'Não foi possível consultar os clientes';
	    });
	});

	it ('Test BUS, insert one client, method: InsertOne', function (done) {
		var obj = { 
			client: {
				name: 'gustavo',
				cpf_cnpj: '2356899',
				email: 'gustavo_sk@live.com'
			}, 
			address: [{ 
				street: 'rua',
				number: 12,
				neighborhood: 'teste',
				zip_code: '0681460',
				city: 'embu',
				state: 'sp',
				country: 'Brasil'
			}],
			phone: [{ 
				ddd : 11,
				number : '99999-9999',
				type : 1
			}]
		}

		clientBUS.ClientRegister(obj, function (callback) {
			if (callback.success != undefined) {
				done();
			} else if (callback.error) {
				throw 'Não foi possível cadastrar cliente. Erro: ' + callback.error;
			} else  {
				throw 'Unexpected result';
			}

		});
	});

	it('Test Request, get all, url: /client method: GET', function (done) {
	    request(config.application.url)
        .get(common.routes.client.getAllClients)
        .set('Accept', 'application/json')
		.set('x-access-token', token)
      	.expect('Content-Type', /json/)
      	.expect(200)
      	.end(function (err, res) {
      	    if (res.body.clients) {
      	        res.body.clients.forEach(function (o) {
      	            console.log(o);
      	        });

      	        done();
      	    } else if (res.body.error) {
      	        throw 'Não foi possível inserir usuário. Erro: ' + res.error;
      	    } else {
      	        throw 'Unexpected result ' + (err || res.error);
      	    }
      	});
        

	});

	it ('Test Request, insert one client, url: /client method: POST', function (done) {
		var obj = { 
			client: {
				name: 'gustavo',
				cpf_cnpj: '2356899',
				email: 'gustavo_sk@live.com'
			}, 
			address: [{ 
				street: 'rua',
				number: 12,
				neighborhood: 'teste',
				zip_code: '0681460',
				city: 'embu',
				state: 'sp',
				country: 'Brasil'
			}],
			phone: [{ 
				ddd : 11,
				number : '99999-9999',
				type : 1
			}]
		}
		
		request(config.application.url)
		.post(common.routes.client.postCadastroCliente)
		.send(obj)
		.set('Accept', 'application/json')
		.set('x-access-token', token)
      	.expect('Content-Type', /json/)
      	.expect(200)
      	.end(function (err, res) {
      		if (res.body.success) {
      			done();
      		} else if (res.body.error) {
      			throw 'Não foi possível inserir usuário. Erro: ' + res.error;
      		} else {
      			throw 'Unexpected result ' + (err || res.error);
      		}
      	});

	});
});
