'use strict';

let whichDao = require('../dao/WhichDAO.js');
let productWhich = require('../dao/ProductWhichDAO.js');
let production = require('../dao/ProductionDAO.js');
let async = require('async');

class WhichBuss {

    InsertOne(obj, callback) {
        console.log('Inicio do cadastro de pedido');
        console.log('which');
        console.log(obj.which);

        console.log('products');
        console.log(obj.products);
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

        console.log('call InserOne which with model ');
        whichDao.InsertOne(which, function (res) {
            async.eachSeries(obj.products, function (o, n) {
                console.log(o);
                var product = {
                    id_which: res.which.id,
                    id_product: o.id,
                    describe: o.describe
                }

                console.log(o.production);

                if (o.production != null && o.production.delivery_date != null) {
                    console.log('cadastrando produto a produção');
                    let prod = {
                        id_client: obj.client.id,
                        id_product: o.id,
                        id_which: res.which.id,
                        id_user: obj.user.id,
                        start_date: new Date(),
                        delivery_date: o.production.delivery_date
                    }

                    production.InsertOne(prod, function (prodRes) {
                        console.log(prodRes);
                    });
                }

                productWhich.InsertOne(product, function (resP) {
                    n(resP.productWhich.id);
                });

            }, (o) => {
                console.log(o);
                callback({ success: 'Pedido gerado com sucesso. ' });
            });
        });
    }
}

module.exports = new WhichBuss();