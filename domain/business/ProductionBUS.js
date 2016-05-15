'use strict';

let productionDAO = require('../dao/ProductionDAO.js');

class ProductionBUS {

    GetRowProduction(callback) {
        productionDAO.GetRowProduction(function (result) {
            callback({ success: result.view });
        });
    }

    UpdatePercentage(obj, callback) {
        productionDAO.UpdatePercentage(obj, function (result) {
            callback(result);
        });
    }
}

module.exports = new ProductionBUS();