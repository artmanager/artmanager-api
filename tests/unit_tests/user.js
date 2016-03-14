"use strict"
var 	request = require('supertest'),
		btoa 	= require('btoa'),
		fs 		= require('fs'),
		ini 	= require('iniparser'),
		userDAO = require('../../domain/dao/UserDAO'),
		config 	= require('../../config/config.js'),
		common 	= require(config.common.fileCommon);

let Promise = require('bluebird');

var token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6OCwibmFtZSI6ImFydG1hbmFnZXIiLCJ0aXBvIjoxLCJpYXQiOjE0NTU0NzIzODl9.0yH_rgL5ZBvwdjjqG3mPmG86zhcBLmpb7C2D_fraVKA";

describe.only('Users', function (){

	it ('Test DAO - insert one, method: ', function (done) {
		var obj = {
				name 		: 'gustavo',
				user 		: 'artmanager',
				password 	: 'artmanager' ,
				profile		: 1
		};
		
		var result = new Promise ((resolve, reject) => {
			userDAO.InsertOne = obj;
			return resolve(userDAO);
		}); 
		// userDAO.InsertOne(obj);

		console.log(result);
		done();
		// userDAO.InsertOne(obj, function (callback) {
		// 	if (callback.user.ds_user == obj.user && callback.user.id > 0) {
		// 		done();
		// 	} else if (callback == null){
		// 		throw 'Insert error : ' + callback;
		// 	} else {
		// 		throw 'Unexpected result';
		// 	}
		// });
	});

	// it ('Test DAO - User - find one', function (done) {
	// 	var obj = {
	// 		user : 'artmanager',
	// 		password : 'artmanager'
	// 	};

	// 	userDAO.FindOne(obj, function (callback) {
	// 		if (callback.id > 0 && callback.ds_user == obj.user) {
	// 			done();
	// 		}
	// 		else if (callback == null ){
	// 			throw 'User not found';
	// 		}
	// 		else {
	// 			throw 'Unexpected result';
	// 		}
	// 	});
	// });

	// it('Test DAO - User - change password of user', function (done) {
	// 	var obj = {
	// 		name 	: 'gustavo',
	// 		user 	: 'artmanager',
	// 		password: '56',
	// 		profile: 1
	// 	};

	// 	userDAO.UpdatePassword(obj, function (callback) {
	
	// 		if (callback.result.length > 0 && callback.result.length) {
	// 			done();
	// 		} else if (callback == null) {
	// 			throw 'Update failed, Error: ' + callback;
	// 		} else 
	// 			throw 'Unexpected result';
	// 	});
	// });

	// it ('Test DAO - User - delete user', function (done) {
	// 	var obj = {
	// 		name 	 : 'gustavo',
	// 		user 	 : 'artmanager',
	// 		password : '56'
	// 	};

	// 	userDAO.DeleteUser(obj, function (callback) {
	// 		console.log(callback);
	// 		if (callback > 0) {
	// 			done();
	// 		} else if (callback <= 0 != null) {
	// 			throw 'Usuário não encontrato ' + callback;
	// 		} else {
	// 			throw 'Unexpected result: ' + callback; 
	// 		}
	// 	});
	// });

	
	// it ('Test User - register user', function (done) {
	// 	var obj = { 
	// 		"user"  : { 
	// 			"name" 	  	: "gustavo", 
	// 			"user" 		: "artmanager", 
	// 			"password"  : "artmanager", 
	// 			"perfil"  	: 1
	// 		}
	// 	};
	
	// 	request(config.application.url)
	// 	.post(common.routes.user.postUsers)
	// 	.send(obj)
	// 	.set('Accept', 'application/json')
	// 	.set('x-access-token', token)
 //      	.expect('Content-Type', /json/)
 //      	.expect(200)
	// 	.end(function (err, res) {
	// 		if (err) 
	// 			throw err;

	// 		var result = res.body;
	// 		if (result.success == 'Usuário Cadastrado com sucesso.') {
	// 			done();
	// 		}
	// 		else {
	// 			throw result.erro;
	// 		}
	// 	});
	// });

	// it('Test User -consult user by login', function (done) {
	// 	var obj = { 
	// 		user : 'artmanager'
	// 	};

	// 	request(config.application.url)
	// 	.get(common.routes.user.getAllUsers)
	// 	.send(obj)
	// 	.set('Accept', 'application/json')
	// 	.set('x-access-token', token)
	// 	.expect('Content-Type', /json/)
	// 	.expect(200)
	// 	.end(function (err, res) {
	// 		if (err)
	// 			throw err;

	// 		done();
	// 	});
	// });
});

