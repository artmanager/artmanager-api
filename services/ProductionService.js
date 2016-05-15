'use strict';
let productionBUS = require('../domain/business/ProductionBUS.js');

class ProductionService {
    
    GetRowProduction(req, res) {
        try {
            productionBUS.GetRowProduction(function (callback) {
                res.json(callback);
            })
        } catch (e) {
            res.json({ error: 'Não foi possível consultar fila de produção. ' + e });
        }
    }

    UpdatePercentage(req, res) {
        try {
            let obj = req.body;
            productionBUS.UpdatePercentage(obj, function (callback) {
                res.json(callback);
            });

        } catch (e) {
            res.json({ error: 'Não foi possível atualizar o status do produto. ' + e });
        }
    }

}

module.exports = new ProductionService();
