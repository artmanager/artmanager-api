'use strict';

let productionModel = require('../model/ProductionModel.js');

class PruductionDAO {

    InsertOne(obj, callback) {

        productionModel.findOrCreate({
            where: {
                id_client: obj.id_client,
                id_product: obj.id_product,
                id_which: obj.id_which,
                id_user: obj.id_user,
                dt_start_date: obj.start_date,
                dt_delivery_date: obj.delivery_date
            }
        }).spread(function (production, created) {
            callback({ production: production, created: created });
        });
    }
}

module.exports = new PruductionDAO();