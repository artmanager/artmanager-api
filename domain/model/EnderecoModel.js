var sequelize = require('../../db/postgres');
var dataTypes = require('sequelize');

var endereco = sequelize.define('tb_endereco', {

    id: {
        type: dataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        field: 'id',
        get : function () {
            return this.getDataValue('id');
        }
    },

    ds_rua: {
        type: dataTypes.STRING,
        field: 'ds_rua',
        get : function () {
            return this.getDataValue('ds_rua');
        },
        set : function (val) {
            this.setDataValue('ds_rua', val);
        }
    },

    nr_numero: {
        type: dataTypes.INTEGER,
        field: 'nr_numero',
        get : function () {
            return this.getDataValue('nr_numero');
        },
        set : function (val) {
            this.setDataValue('nr_numero', val);
        }
        
    },

    ds_bairro: {
        type: dataTypes.STRING,
        field: 'ds_bairro',
        get : function () {
            return this.getDataValue('ds_bairro');
        },
        set : function (val) {
            this.setDataValue('ds_bairro', val);
        }
    },

    ds_cep: {
        type: dataTypes.STRING,
        field: 'ds_cep',
        get : function () {
            return this.getDataValue('ds_cep');
        },
        set : function (val) {
            this.setDataValue('ds_cep', val);
        }
    },

    ds_cidade: {
        type: dataTypes.STRING,
        field: 'ds_cidade',
        get : function () {
            return this.getDataValue('ds_cidade');
        },
        set : function (val) {
            this.setDataValue('ds_cidade', val);
        }
    },

    ds_estado: {
        type: dataTypes.STRING,
        field: 'ds_estado',
        get : function () {
            return this.getDataValue('ds_estado');
        },
        set : function (val) {
            this.setDataValue('ds_estado', val);
        }
    },

    ds_pais: {
        type: dataTypes.STRING,
        field: 'ds_pais',
        get : function () {
            return this.getDataValue('ds_pais');
        },
        set : function (val) {
            this.setDataValue('ds_pais', val);
        }
    }

}, {
    freezeTableName: true,
    timestamps: false
});

module.exports = endereco;