'use strict';

let whichDao = require('../dao/WhichDAO.js');
let productWhich = require('../dao/ProductWhichDAO.js');
let production = require('../dao/ProductionDAO.js');
let asyc = require('async');

class WhichBuss {

    InsertOne(obj, callback) {
        if (obj.which == null || obj.products == null)
            callback({ error: 'Dados do pedido invalido' });

        let which = {
            id_user: obj.user.id,
            id_client: obj.client.id,
            date_which: new Date(),
            total_value: obj.which.total_value,
            entrance: obj.which.entrance,
            discount: obj.which.discount
        };

        whichDao.InsertOne(which, function (res) {
            async.eachSeries(obj.products, function (o, n) {
                var product = {
                    id_which: res.which.id,
                    id_product: o.id_product,
                    describe: o.describe
                }

                if (o.production != null) {
                    let prod = {
                        id_client: obj.client.id,
                        id_product: o.id_product,
                        id_which: res.which.id,
                        id_user: obj.user.id,
                        start_date: new Date(),
                        delivery_date: o.production.delivery_date
                    }

                    production.InsertOne(prod, function (prodRes) {

                    });
                }

                productWhich.InsertOne(product, function (resP) {
                    n(resP.product.Id);
                });

            }, (o) => {
                console.log(o);
            });
        });
    }
}

module.exports = new WhichBuss();