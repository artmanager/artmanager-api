'use strict';
let productWhichModel = require('../model/ProductWhichModel.js'),
    sequelize = require('../../db/postgres.js');

class ProductWhichDAO {

    InsertOne(obj, callback) {

        productWhichModel.findOrCreate({
            where: {
                id_which: obj.id_which,
                id_product: obj.id_product,
                ds_describe: obj.describe
            }
        }).spread(function(productWhich, created) {
            callback({ productWhich: productWhich, created: created });
        });
    }

    DeleteByWhich(obj, callback) {
        sequelize
            .query('delete from tb_product_which where id_which = ' + obj.id)
            .then(function (update) {
                callback({ success: 'Tabela product_which deletada' });
            });
    }
}

module.exports = new ProductWhichDAO();