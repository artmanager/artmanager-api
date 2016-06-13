'use strict';

let reportBUS = require('../domain/business/ReportBUS.js');

class ReportService {

    ReportProduct(req, res) {
        try {
            
            let obj = req.body;
            
           if (obj.dt_from == null || obj.dt_from == '') {
                res.json({ error: 'Por favor envie uma data de inicio.' });
            }

            if (obj.dt_to == null || obj.dt_to == '') {
                res.json({ error: 'Por favor envie uma data de fim.' });
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

            if (obj.dt_from == null || obj.dt_from == '') {
                res.json({ error: 'Por favor envie uma data de inicio.' });
            }

            if (obj.dt_to == null || obj.dt_to == '') {
                res.json({ error: 'Por favor envie uma data de fim.' });
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

    ReportOneSupplier(req, res) {
        try {

            let obj = req.body;

            if (obj.dt_from == null || obj.dt_from == '') {
                res.json({ error: 'Por favor envie uma data de inicio.' });
            }

            if (obj.dt_to == null || obj.dt_to == '') {
                res.json({ error: 'Por favor envie uma data de fim.' });
            }

            if (obj.supplier == null || obj.supplier == '') {
                res.json({ error: 'Nome do fornecedor invalido'});
            }

            reportBUS.ReportOneSupplier(obj, function (callback) {
                res.json(callback);
            });

        } catch (e) {
            console.log('Error postReporOnetSupplier');
            console.log('Não foi possível cosultar o relatório de produtos. ');
            res.json({ error: 'Não foi possível cosultar o relatório de produtos. ' + e });
        }
    }


    ReportSales(req, res) {
        try {

            let obj = req.body;

           if (obj.dt_from == null || obj.dt_from == '') {
                res.json({ error: 'Por favor envie uma data de inicio.' });
            }

            if (obj.dt_to == null || obj.dt_to == '') {
                res.json({ error: 'Por favor envie uma data de fim.' });
            }

            reportBUS.ReportSales(obj, function (callback) {
                res.json(callback);
            });

        } catch (e) {
            res.json({ error: 'Não foi possível consultar o relatório de produtos. ' + e });
        }
    }

    ReportTimeProduts(req, res) {
        try {
            let obj = req.body;
            if (obj.dt_from == null || obj.dt_from == '') {
                res.json({ error: 'Por favor envie uma data de inicio.' });
            }

            if (obj.dt_to == null || obj.dt_to == '') {
                res.json({ error: 'Por favor envie uma data de fim.' });
            }

            reportBUS.ReportTimeProduts(obj, function (callback) {
                res.json(callback);
            });

        } catch (e) {
            res.json({ error: 'Não foi possível consultar os produtos. ' + e });
        }
    }
    
    RerportTimeProductsToDay(req, res) {
        try {
            let obj = req.body;
            
           if (obj.dt_from == null || obj.dt_from == '') {
                res.json({ error: 'Por favor envie uma data de inicio.' });
            }

            if (obj.dt_to == null || obj.dt_to == '') {
                res.json({ error: 'Por favor envie uma data de fim.' });
            }
            obj.dt_from = new Date(obj.dt_from).toISOString();
            obj.dt_to = new Date(obj.dt_to).toISOString();
            
            reportBUS.RerportTimeProductsToDay(obj, function (callback) {
                res.json(callback);
            });
            
        } catch (error) {
            res.json({ error: "Não foi possível consultar os produtos. " + error });
        }
    }
}

module.exports = new ReportService();