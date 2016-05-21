'use strict';
let reportDAO = require('../dao/ReportDAO.js');

class ReportBUS {

    ReportProducts(obj, callback) {

        if (obj.dt_to != null && obj.dt_from != null) {
            reportDAO.ReportProducts(obj, function (result) {
                console.log(result.result);
                if (result.result != null)
                    callback({ success: result.result });
                else
                    callback({ error: 'Nenhum produto encontrato' });
            });
        } else {
            callback({ error: 'Por favor envie uma data valida' });
        }

    }
}

module.exports = new ReportBUS();