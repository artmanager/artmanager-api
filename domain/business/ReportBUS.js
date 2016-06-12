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

    ReportSupplier(obj, callback) {
        if (obj.dt_to != null && obj.dt_from != null) {
            reportDAO.ReportSupplier(obj, function (result) {
                let id = 0;
                let list = [];
                console.log(result.result);
                result.result.forEach(function (o) {
                    if (o.id != id) {
                        id = o.id;
                        
                        let obj = {
                            supplier: o.name,
                            total: o.total,
                            
                            products: [{
                                name: o.productname,
                                height: o.height,
                                weight: o.weight,
                                quantity: o.quantity
                            }]
                        }

                        list.push(obj);
                    } else {
                        let res = list.forEach(function (r) {
                            console.log(r.id);
                            console.log(o.id);
                            if (r.id == o.id) {
                                console.log('RRRRRRRRRRRR');
                                console.log(r);
                                let obj = {
                                    name: o.productname,
                                    height: o.height,
                                    weight: o.weight,
                                    quantity: o.quantity
                                };

                                r.total += o.total;
                                r.products.push(obj);
                            }
                        });
                    }
                });

                console.log('Result');
                console.log(list);
                callback({ success: list });
            });
        } else {
            callback({ error: 'Por favor envie uma data valida' });
        }
    }

    ReportOneSupplier(obj, callback) {
        if (obj.dt_to != null && obj.dt_from != null && obj.supplier != null) {
            reportDAO.ReportOneSupplier(obj, function (result) {
                let id = 0;
                let list = [];
                console.log(result.result);
                result.result.forEach(function (o) {
                    if (o.id != id) {
                        id = o.id;
                        
                        let obj = {
                            supplier: o.name,
                            total: o.total,
                            
                            products: [{
                                name: o.productname,
                                height: o.height,
                                weight: o.weight,
                                quantity: o.quantity
                            }]
                        }

                        list.push(obj);
                    } else {
                        let res = list.forEach(function (r) {
                            console.log(r.id);
                            console.log(o.id);
                            if (r.id == o.id) {
                                console.log('RRRRRRRRRRRR');
                                console.log(r);
                                let obj = {
                                    name: o.productname,
                                    height: o.height,
                                    weight: o.weight,
                                    quantity: o.quantity
                                };

                                r.total += o.total;
                                r.products.push(obj);
                            }
                        });
                    }
                });

                console.log('Result');
                console.log(list);
                callback({ success: list });
            });
        } else {
            callback({ error: 'Por favor envie uma data valida' });
        }
    }

    ReportSales(obj, callback) {
        if (obj.dt_to != null && obj.dt_from != null) {
            reportDAO.ReportSales(obj, function (result) {
                console.log(result.result);
                if (result.result != null)
                    callback({ success: result.result });
                else
                    callback({ error: 'Nenhuma venda encontrada' });
            });
        } else {
            callback({ error: 'Por favor envie uma data valida' });
        }
    }

    ReportTimeProduts(obj, callback) {
        try {

            reportDAO.ReportTimeProduts(obj, function (res) {
                callback({ success: res.result });
            });
        } catch (e) {
            callback({ error: 'Não foi possível consultar produtos vendidos. ' + e });
        }
    }
    
    RerportTimeProductsToDay(obj, callback) {
        console.log(obj);
        try {
            reportDAO.ReportTimeProductsToDay(obj, function (res) {
                callback({ success: res.result });
            });
        } catch (error) {
            console.log(callback);
            callback({ error: "Não foi possível consultar os produtos vendidos. " + e});
        }
    }

}

module.exports = new ReportBUS();