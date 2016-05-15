'use strict';

let productionDAO = require('../../domain/dao/ProductionDAO.js'),
    productionBUS = require('../../domain/business/ProductionBUS.js'),
    request = require('supertest'),
    config = require('../../config/config.js'),
    common = require(config.common.fileCommon),
    token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6OCwibmFtZSI6ImFydG1hbmFnZXIiLCJ0aXBvIjoxLCJpYXQiOjE0NTU0NzIzODl9.0yH_rgL5ZBvwdjjqG3mPmG86zhcBLmpb7C2D_fraVKA";

describe.only('Production', function () {

    it('Test DAO, insert one production, method: InsertOne', function (done) {
        var obj = {
            id_client: 1,
            id_user: 2,
            id_which: 1,
            id_product: 8,
            start_date: new Date(),
            delivery_date: new Date(),
            percentage: 10
        }
        
        productionDAO.InsertOne(obj, function (callback) {
            
            if (callback.production.id > 0)
                done();
            else
                throw 'Não foi possível adicionar produto a fila de produção. ' + callback.error;

        });

    });

    it('Test DAO, get row production, method: GetRowProduction', function (done) {
        productionDAO.GetRowProduction(function (callback) {

            if (callback.view.length > 0) {
                done();
            } else if (callback.view.length <= 0) {
                return done('Não existe produtos a serem produzidos');
            } else {
                return done('Unexpected result');
            }

        });
    });

    it('Test DAO, update percentage production, method: UpdatePercentage', function (done) {
        let obj = {
            id: 1,
            percentage: 100
        }
        productionDAO.UpdatePercentage(obj, function (callback) {
            
            if (callback.success)
                done();
            else if (callback.error)
                return done(callback.error);
            else
                return done('Unexpected result');
            
        });
    });

    it('Test BUS, update percentage production, method: UpdatePercentage', function (done) {
        var obj = {
            id: 2,
            percentage: 100
        }
        productionBUS.UpdatePercentage(obj, function (callback) {
            if (callback.success)
                done();
            else if (callback.error)
                return done(callback.error);
            else
                return done('Unexpected result');
        });
    })

    it('Test BUSS, get row produciton, method: GetRowProduction', function (done) {
        productionBUS.GetRowProduction(function (callback) {
            if (callback.success.length > 0)
                done();
            else if (callback.success.length <= 0)
                return done('Não existe produtos a serem produzidos');
            else
                return done('Unexpected result');
        });
    });

    it('Test Request, get row production, method: GET', function (done) {

        request(config.application.url)
        .get(common.routes.production.getProduction)
        .set('x-access-token', token)
        .expect('Content-Type', /json/)
        .expect(200)
        .end(function (err, res) {

            if (err)
                return done(err);

            var result = res.body;
            if (result.success) 
                done();
            else 
                return done(result.error);
            
        });

    });

    it('Test Request, update production, method: PUT, route: /production', function (done) {
        let obj = {
            id: 3,
            percentage: 100
        }

        request(config.application.url)
        .put(common.routes.production.putUpdateProduction)
        .send(obj)
        .set('Accept', 'application/json')
		.set('x-access-token', token)
        .expect('Content-Type', /json/)
        .expect(200)
        .end(function (err, res) {

            if (err)
                return done(err);

            var result = res.body;
            if (result.success)
                done();
            else if (result.error)
                return done(result.error);
            else
                return done(result.error);
        });
    });
});