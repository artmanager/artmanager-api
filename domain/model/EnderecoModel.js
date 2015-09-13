var sequelize = require('../../db/postgres');
var dataTypes = require('sequelize');

var endereco = sequelize.define('tb_endereco', {

    id: {
        type: dataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        field: 'id'
    },

    ds_rua: {
        type: dataTypes.STRING,
        field: 'ds_rua'
    },

    nr_numero: {
        type: dataTypes.INTEGER,
        field: 'nr_numero'
    },

    ds_bairro: {
        type: dataTypes.STRING,
        field: 'ds_bairro'
    },

    ds_cep: {
        type: dataTypes.STRING,
        field: 'ds_cep'
    },

    ds_cidade: {
        type: dataTypes.STRING,
        field: 'ds_cidade'
    },

    ds_estado: {
        type: dataTypes.STRING,
        field: 'ds_estado'
    },

    ds_pais: {
        type: dataTypes.STRING,
        field: 'ds_pais'
    }

}, {
    freezeTableName: true,
    timestamps: false
});

module.exports = endereco;