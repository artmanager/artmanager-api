'use strict';

let productionDAO = require('../dao/ProductionDAO.js');

class ProductionBUS {

    GetRowProduction(callback) {
        productionDAO.GetRowProduction(function (result) {
            callback({ success: result.view });
        });
    }
}

module.exports = new ProductionBUS();