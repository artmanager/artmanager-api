'use strict';

let whichDao = require('../dao/WhichDAO.js');
let clientDao = require('../dao/ClientDAO.js');
let productWhich = require('../dao/ProductWhichDAO.js');
let production   = require('../dao/ProductionDAO.js');
let async = require('async');

class WhichBuss {

    InsertOne(obj, callback) {
        console.log('Inicio do cadastro de pedido');
        
        if (obj.which == null || obj.products == null)
            callback({ error: 'Dados do pedido invalido' });

        let which = {
            id_user: obj.user.id,
            id_client: obj.client.id,
            date_which: new Date(),
            total_value: obj.which.total_value,
            entrance: obj.which.entrance,
            discount: obj.which.discount
        };

        console.log('call InserOne which with model ');
        whichDao.InsertOne(which, function (res) {
            
            console.log('***************' + obj.products.length);

            obj.products.forEach(function (o) {
                var product = {
                    id_which: res.which.id,
                    id_product: o.id,
                    describe: o.describe
                }

                if (o.production != null && o.production.delivery_date != null) {
                    console.log('cadastrando produto a produção');
                    let prod = {
                        id_client: obj.client.id,
                        id_product: o.id,
                        id_which: res.which.id,
                        id_user: obj.user.id,
                        start_date: new Date(),
                        delivery_date: o.production.delivery_date,
                        quantity: o.quantity
                    }

                    production.InsertOne(prod, function (prodRes) {
                        console.log('production');
                        productWhich.InsertOne(product, function (resP) {
                                
                        });
                    });
                } else {
                    productWhich.InsertOne(product, function (resP) {
                        
                    });
                }
            });

            callback({ success: 'Pedido gerado com sucesso. ' });
        });
    }

    ConsultWhich(callback) {
        whichDao.ConsultAllWhich(function (result) {
            let list = [];
            let i = 0;
            
            result.view.forEach(function (o) {
                if (i != o.id) {
                    //console.log('new');
                    i = o.id;
                    
                    let obj = {
                        id: o.id,
                        creationDate: o.creationdate,
                        user: {
                            name: o.name
                        },
                        client: {
                            name: o.clientname
                        },
                        order: {
                            products: [{
                                id_production: o.productionid,
                                supplier: o.supplier,
                                delivery_date: o.delivery_date,
                                name: o.productname,
                                height: o.height,
                                weight: o.weight,
                                describe: o.describe,
                                quantity: o.quantity,
                                percentage: o.percentage
                            }],
                            discount: o.discount,
                            entrance: o.entrance,
                            total: o.total_value,
                            pendingfallback: o.pendingfallback
                        }
                    }
                    list.push(obj);
                }
                else {
                    let res = list.forEach(function(r) {
                        if (r.id == o.id) {
                            let obj = {
                                supplier: o.supplier,
                                delivery_date: o.delivery_date,
                                name: o.productname,
                                height: o.height,
                                weight: o.weight,
                                describe: o.describe,
                                percentage: o.percentage
                            };

                            let i = 0;
                            r.order.products.push(obj);
                        }
                    });
                }
            });

            callback({ success : list });
        });
    }

    ConsultWhichByClient(obj, callback) {

        clientDao.ConsultClient(obj, function (result) {
            let list = [];
            let i = 0;

            result.view.forEach(function (o) {
                if (i != o.id) {
                    console.log('new');
                    i = o.id;
                    let obj = {
                        id: o.id,
                        creationDate: o.creationDate,
                        user: {
                            name: o.name
                        },
                        client: {
                            name: o.clientName
                        },
                        order: {
                            products: [{
                                supplier: o.supplier,
                                delivery_date: o.delivery_date,
                                name: o.productname,
                                height: o.height,
                                weight: o.weight,
                                describe: o.describe,
                                quantity: o.quantity,
                                percentage: o.percentage
                            }],
                            discount: o.discount,
                            entrance: o.entrance,
                            total: o.total_value,
                            pendingfallback: o.pendingfallback
                        }
                    }
                    list.push(obj);
                }
                else {
                    let res = list.forEach(function (r) {
                        if (r.id == o.id) {
                            let obj = {
                                supplier: o.supplier,
                                delivery_date: o.delivery_date,
                                name: o.productname,
                                height: o.height,
                                weight: o.weight,
                                describe: o.describe,
                                percentage: o.percentage
                            };

                            let i = 0;
                            r.order.products.push(obj);
                        }
                    });
                }
            });

            callback({ success: list });
        });
    }

    UpdateEntrancePending(obj, callback) {
        let pending = false;
        let entrance = false;
        let end = false;
        async.series([
            function (n) {
                if (obj.pendingfallback != null) {
                    whichDao.UpdatePendingFallback(obj, function (res) {
                        if (res.success) {
                            pending = true;
                        }

                        n();
                    });
                } else {
                    n();
                }
            },
            function (n) {
                if (obj.entrance != null) {
                    whichDao.UpdateEntrance(obj, function (res) {
                        if (res.success) {
                            entrance = true;
                        }
                        n();
                    });
                } else {
                    n();
                }

            },
            function (n) {
                end = true;
                n();
            }

        ], () => {
            
            if (end == true && (entrance == true || pending == true)) {
                callback({ success: 'Atualização efetuada com sucesso. ' });
            }
        });
    }
}

module.exports = new WhichBuss();