'use strict';
let pruduction = require('../../domain/dao/ProductionDAO.js');


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
        
        pruduction.InsertOne(obj, function (callback) {
            
            if (callback.production.id > 0)
                done();
            else
                throw 'Não foi possível adicionar produto a fila de produção. ' + callback.error;

        });

    });

});