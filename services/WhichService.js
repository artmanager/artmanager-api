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
                res.json({ error: 'Usuário invalido ' });
            }

            whichBus.InsertOne(obj, function (callback) {
                res.json(callback);
            });


        } catch (e) {
            res.json({ error: 'Não foi possível cadastrar o pedido. ' + e });
        }
    }

    GetWhich(req, res) {
        try {
            console.log('Service');
            whichBus.ConsultWhich(function (callback) {
                res.json(callback);
            });

        } catch (e) {
            res.json({ error: 'Não foi possível consultar os pedidos. ' + e });
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
            res.json({ error: 'Não foi possível atualizar os dados. ' + e });
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
            res.json({ error: 'Não foi possível consultar o pedido. ' + e });
        }
    }
}

module.exports = new WhichService();