'use strict'
let whichBus = require('../domain/business/WhichBUS.js')
    
class WhichService {

    InsertWhich(req, res) {

        try {
            var obj = req.body;
            console.log(obj);
            if (obj.client == undefined || obj.client.id <= 0) {
                res.json({ error: 'Cliente invalido' });
            }

            if (obj.user == undefined || obj.user.id <= 0) {
                res.json({ error: 'Usu�rio invalido ' });
            }

            whichBus.InsertOne(obj, function (callback) {
                res.json(callback);
            });


        } catch (e) {
            res.json({ error: 'N�o foi poss�vel cadastrar o pedido. ' + e });
        }
    }

    GetWhich(req, res) {
        try {
            console.log('Service');
            let obj = req.body;
            if (obj.dt_from == null || obj.dt_from == '') {
                res.json({ error: 'Por favor envie uma data valida.' });
            }

            if (obj.dt_to == null || obj.dt_to == '') {
                res.json({ error: 'Por favor envie uma data valida.' });
            }

            whichBus.ConsultWhich(obj, function (callback) {
                res.json(callback);
            });

        } catch (e) {
            res.json({ error: 'N�o foi poss�vel consultar os pedidos. ' + e });
        }
    };

    UpdateEntrancePending(req, res) {
        try {
            let obj = req.body;
            console.log(obj);
            if (obj.id == null) {
                res.json({ error: 'Pedido invalido' });
            }
            
            whichBus.UpdateEntrancePending(obj, function (callback) {
                res.json(callback);
            });

        } catch (e) {
            res.json({ error: 'N�o foi poss�vel atualizar os dados. ' + e });
        }
    }

    WhichByClient(req, res) {
        try {

            let obj = req.body;

            if (obj.name != null || obj.cpf_cnpj != null || obj.email != null) {
                whichBus.ConsultWhichByClient(obj, function (callback) {
                    res.json(callback);
                });
            } else {
                res.json({ error: "Por favor envie ao menos um parametro para consultar o pedido "});
            }

        } catch (e) {
            res.json({ error: 'N�o foi poss�vel consultar o pedido. ' + e });
        }
    }

    DeleteWhich(req, res) {
        try {
            let obj = req.body;
            console.log('DeleteWhichService. Id ' + obj.id);
            if (obj.id == null || obj.id <= 0) {
                res.json({ error: 'Id inv�lido' });
            }

            whichBus.DeleteWhich(obj, function (callback) {
                console.log(callback);
                res.json(callback);
            });
        } catch (e) {
            res.json({ error: 'N�o foi poss�vel deletar o pedido. ' + e });
        }
    }
}

module.exports = new WhichService();