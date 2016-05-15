"use strict"
var promise = require('bluebird');
var ClientModel = require('../model/ClientModel');
let sequelize = require('../../db/postgres.js');

class ClientDAO {

    ClientDAO(Model) {
        this.Data = promise.promisifyAll(Model);
    }

    InsertOne(obj, callback) {
        if (obj != null && obj != undefined) {
            ClientModel.findOrCreate({
                where: {
                    ds_name: obj.name,
                    ds_email: obj.email,
                    ds_cpf_cnpj: obj.cpf_cnpj
                }
            }).spread(function (client, created) {
                console.log('***************');
                console.log(client);
                callback({ client: client, created: created });
            });
        }
    }

    GetAll(callback) {
        ClientModel
            .findAll()
            .then(function (obj) {
                callback({ clients: obj });
            }
        )
    }

    GetOneClient(obj, callback) {
        let query = 'select w.* from tb_client c join consult_which w on c.id = w.clientId where ';
        let qtdFil = 0;
        if (obj.name != null) {
            qtdFil++;

            query += 'replace(ltrim(rtrim(ds_name)), " ", "") = ' + obj.name.replace(/ /g, '').toLowerCase();
        }

        if (obj.cpf_cnpj) {
            if (qtdFil > 0)
                query += ' and ds_cpf_cnpj = ' + obj.cpf_cnpj.replace(/ /g, '').toLowerCase();
            else
                query += 'ds_cpf_cnpj = ' + obj.cpf_cnpj.replace(/ /g, '').toLowerCase();
        }

        if (obj.email) {
            if (qtdFil > 0)
                query += ' and ds_email = ' + obj.email.replace(/ /g, '').toLowerCase();
            else
                query += 'ds_email = ' + obj.email.replace(/ /g, '').toLowerCase();
        }

        sequelize
            .query(query)
            .spread(function (result, metadata) {
                callback({ view: result });
            });

    }
}

module.exports = new ClientDAO(ClientModel);