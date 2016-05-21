'use strict';

let reportBUS = require('../domain/business/ReportBUS.js');

class ReportService {

    ReportProduct(req, res) {
        try {
            console.log('teste');
            let obj = req.body;
            console.log('teste');

            if (obj.dt_to == null) {
                res.json({ error: 'Data final inválida' });
            }

            if (obj.dt_from == null) {
                res.json({ error: 'Data inicial inválida' });
            }

            reportBUS.ReportProducts(obj, function (callback) {
                console.log(callback);
                res.json(callback);
            });

        } catch (e) {
            res.json({ error: 'Não foi possível consultar o relatório de produtos. ' + e });
        }
    }
}

module.exports = new ReportService();