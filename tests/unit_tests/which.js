'use strict'

let request = require('supertest');
let whichDAO = require('../../domain/dao/WhichDAO.js'),
    whichBUS = require('../../domain/business/WhichBUS.js'),
    config = require('../../config/config.js'),
	common = require(config.common.fileCommon);

let token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6OCwibmFtZSI6ImFydG1hbmFnZXIiLCJ0aXBvIjoxLCJpYXQiOjE0NTU0NzIzODl9.0yH_rgL5ZBvwdjjqG3mPmG86zhcBLmpb7C2D_fraVKA";

describe.only('Which', function () {
    it('Test DAO, Insert one which, method: InsertOne', function (done) {
        var obj = {
            id_user: 2,
            id_client: 1,
            date_which: '2016-03-23 00:00:00',
            total_value: 130.0,
            entrance: 30,
            discount: 100
        };

        whichDAO.InsertOne(obj, function (callback) {
            console.log(callback);
            if (callback.which.id > 0)
                done();
            else 
                throw 'Não foi possível cadastrar pedido'
        });
    });

    it('Test BUS, Inser one which, method: InsertOne', function (done) {
        var obj = {
            client: {
                id: 1
            },
            user: {
                id: 2
            },
            which: {
                date_which: '2016-03-23 00:00:00',
                total_value: 130.0,
                entrance: 30,
                discount: 100
            },
            products: [
                {
                    id: 7,
                    describe: 'Teste which BUS',
                    pruduct: {
                        delivery_date: new Date()
                    }
                }
            ]
        }

        whichBUS.InsertOne(obj, function (callback) {
            if (callback.success != null)
                done();
            else
                throw 'Erro ao cadastrar pedido. '+ callback.error;
        });
    });

    it('Test Service, Insert one, method: POST, InsertOne', function (done) {
        var obj = {
            client: {
                id: 1
            },
            user: {
                id: 2
            },
            which: {
                date_which: '2016-03-23 00:00:00',
                total_value: 130.0,
                entrance: 30,
                discount: 100
            },
            products: [
                {
                    id: 7,
                    describe: 'Teste which BUS',
                    pruduct: {
                        delivery_date: new Date()
                    }
                }
            ]
        }

        request(config.application.url)
		.post(common.routes.which.postWhich)
		.send(obj)
		.set('Accept', 'application/json')
		.set('x-access-token', token)
      	.expect('Content-Type', /json/)
      	.expect(200)
		.end(function (err, res) {

		    console.log(res);
		    if (err)
		        throw err;

		    var result = res.body;
		    if (result.success) {
		        done();
		    }
		    else {
		        throw result.error;
		    }
		});
    });
});