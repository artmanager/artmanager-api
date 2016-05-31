'use strict';

let productionModel = require('../model/ProductionModel.js');
let sequelize = require('../../db/postgres.js');

class PruductionDAO {

    InsertOne(obj, callback) {
        productionModel.findOrCreate({
            where: {
                id_client: obj.id_client,
                id_product: obj.id_product,
                id_which: obj.id_which,
                id_user: obj.id_user,
                dt_start_date: obj.start_date,
                dt_delivery_date: obj.delivery_date,
                vl_quantity: obj.quantity
            }
        }).spread(function (production, created) {
            callback({ production: production, created: created });
        });
    }

    GetAll(callback) {
        productionModel
            .findAll()
            .then(function (result) {
                callback({ production: result });
            });
    }

    GetRowProduction(callback) {
        let query = 'select '
                        + 'c.productionid as id,'
                        + 'c.name as client,'
                        + 'c.supplier as supplier,'
                        + 'c.delivery_date,'
                        + 'c.productname as name,'
                        + 'c.height,'
                        + 'c.weight,'
                        + 'c.describe, '
                        + 'c.percentage '
	        + 'from consult_which c '
            + 'where (c.percentage < 100 or c.percentage is null) and c.productionid is not null '
            + 'order by delivery_date '
            + 'limit 200 ';
        sequelize
            .query(query)
            .spread(function (result, metadata) {
                callback({ view: result });
            });
    }

    UpdatePercentage(obj, callback) {
        productionModel.update({
            vl_percentage: obj.percentage
        }, {
            where: {
                id: obj.id
            }
        }).then(function (update) {
            console.log(update);
            if (update == 1) {
                callback({ success: 'Porcentagem atualizada com sucesso.' });
            } else {
                callback({ error: 'Não foi possível atualizar a porcentagem.' });
            }
        });
    }
}

module.exports = new PruductionDAO();