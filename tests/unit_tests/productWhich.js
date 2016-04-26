'use strict'
let productWhich = require('../../domain/dao/ProductWhichDAO.js')

describe.only('ProductWhich', function () {
    it('Test DAO, insert one productWhich, method: InsertOne', function (done) {

        let obj = {
            id_which: 1,
            id_product: 7,
            describe: 'Teste'
        }

        productWhich.InsertOne(obj, function (callback) {
            if (callback.productWhich.id > 0)
                done();
            else
                throw 'Não foi possível adicionar o produto ao pedido. ' + callback.error;
        });
    });
});