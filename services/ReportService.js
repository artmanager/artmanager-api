'use strict';

let reportBUS = require('../domain/business/ReportBUS.js');

class ReportService {

    ReportProduct(req, res) {
        try {
            
            let obj = req.body;
            
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

    ReportSupplier(req, res) {
        try {

            let obj = req.body;

            if (obj.dt_to == null) {
                res.json({ error: 'Data final inválida' });
            }

            if (obj.dt_from == null) {
                res.json({ error: 'Data inicial inválida' });
            }

            reportBUS.ReportSupplier(obj, function (callback) {
                res.json(callback);
            });
        } catch (e) {
            console.log('Error getReportSupplier');
            console.log('Não foi possível cosultar o relatório de produtos. ');
            res.json({ error: 'Não foi possível cosultar o relatório de produtos. ' + e });
        }
    }

    ReportSales(req, res) {
        try {

            let obj = req.body;

            if (obj.dt_to == null) {
                res.json({ error: 'Data final inválida' });
            }

            if (obj.dt_from == null) {
                res.json({ error: 'Data inicial inválida' });
            }

            reportBUS.ReportSales(obj, function (callback) {
                res.json(callback);
            });

        } catch (e) {
            res.json({ error: 'Não foi possível consultar o relatório de produtos. ' + e });
        }
    }
}

module.exports = new ReportService();