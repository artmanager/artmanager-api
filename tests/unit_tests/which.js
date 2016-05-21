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
                return done('Não foi possível cadastrar pedido');
        });
    });

    it('Test DAO, Consult all which, method: ConsultAllWhich', function (done) {
        whichDAO.ConsultAllWhich(function (callback) {
            done();
        });
    });

    it('Test DAO, update pendingfallback, method updatePendingfallback', function (done) {
        var obj = {
            id: 1,
            pendingfallback: false
        };

        whichDAO.UpdatePendingFallback(obj, function (callback) {
            if (callback.success != null) {
                done();
            } else if (callback.error != null) {
                done(callback.error);
            }
        });
    });

    it('Test DAO, update UpdateEntrance, method UpdateEntrance', function (done) {
        var obj = {
            id: 1,
            entrance: 100
        };

        whichDAO.UpdateEntrance(obj, function (callback) {
            if (callback.success != null) {
                done();
            } else if (callback.error != null) {
                done(callback.error);
            }
        });
    });

    it('Test BUS, update pedingfallback and entrance, method: UpdateEntrancePending', function (done) {
        let obj = {
            id: 1,
            entrance: 120,
            pendingfallback: true
        };
        whichBUS.UpdateEntrancePending(obj, function (callback) {
            console.log(callback);
            if (callback.success) {
                done();
            } else {
                done(callback.error);
            }
        });
    });

    it('Test BUS, Consult all which, method: ConsultWhich', function (done) {
        whichBUS.ConsultWhich(function (callback) {
            if (callback.success.length > 1) {
                done();
            } else if (callback.success.length <= 0) {
                return done('Nenhum pedido encontrato');
            } else {
                return done('Unexpected result');
            }

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
                    production: {
                        delivery_date: new Date()
                    }
                }
            ]
        }

        whichBUS.InsertOne(obj, function (callback) {
            if (callback.success != null)
                done();
            else
                return done('Erro ao cadastrar pedido. '+ callback.error);
        });
    });

    it('Test BUS, Consult which by client, method: ConsultWhichByClient', function (done) {
        let obj = {
            name: "gustavo",
            cpf_cnpj: "211312",
            email: "gustavo_sk@live.com"
        };

        whichBUS.ConsultWhichByClient(obj, function (callback) {

        });

    });

    it('Test Service, consult which, method: GET, ConsultWhich, Route: getWhich', function (done) {
        request(config.application.url)
        .get(common.routes.which.getWhich)
        .set('Accept', 'application/json')
        .set('x-access-token', token)
        .expect('Content-Type', /json/)
        .expect(200)
        .end(function (err, res) {

            let result = res.body;

            if (result.success) {
                done();
            } else if(result.error) {
                return done(result.error);
            } else {
                return done('Unexpected result');
            }

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
                    quantity: 2,
                    production: {
                        delivery_date: new Date()
                    }
                },
                {
                    id: 7,
                    describe: 'Teste which BUS 2',
                    quantity: 1,
                    production: {
                        delivery_date: new Date()
                    }
                }
            ]
        }

        request('api.artmanager.com.br')
		.post(common.routes.which.postWhich)
		.send(obj)
		.set('Accept', 'application/json')
		.set('x-access-token', token)
      	.expect('Content-Type', /json/)
      	.expect(200)
		.end(function (err, res) {

		    if (err)
		        return done(err);

		    var result = res.body;
		    if (result.success) {
		        done();
		    }
		    else {
		        return done(result.error);
		    }
		});

    });

    it('Test request, update pending and entrance, method PUT, route: /updateEntrancePending', function (done) {
        let obj = {
            id: 1,
            entrance: 1120,
            pendingfallback: false
        };

        request(config.application.url)
        .put(common.routes.which.putUpdateEntrancePending)
        .send(obj)
        .set('Accept', 'application/json')
        .set('x-access-token', token)
        .expect('Content-Type', /json/)
        .expect(200)
        .end(function (err, res) {

            let result = res.body;

            if (result.success) {
                done();
            } else if (result.error) {
                return done(result.error);
            } else {
                return done('Unexpected result');
            }
        });

    });
});