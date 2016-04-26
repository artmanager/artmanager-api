'use strict';
let productWhichModel = require('../model/ProductWhichModel.js');

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
}

module.exports = new ProductWhichDAO();