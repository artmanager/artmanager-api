'use strict'

var request = require('supertest');
var whichModel = require('../../domain/dao/WhichDAO.js');

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

        whichModel.InsertOne(obj, function (callback) {
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
            pruduct: [
                {
                    id: 7,
                    describe: 'Teste which BUS',
                    pruduct: {
                        delivery_date: new Date()
                    }
                }
            ]
        }
    });

    it('Test Service, Insert one, method: POST, InsertOne', function (done) {
        done();
    });
});