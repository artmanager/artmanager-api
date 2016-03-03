var sequelize = require('../../db/postgres');
var dataTypes = require('sequelize');
var endereco = require('./AddressModel');
var telefone  = require('./TelefoneModel');


var usuario = sequelize.define('tb_usuario', {

    id: {
        type: dataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        field: 'id',
        get : function () {
            return this.getDataValue('id');
        }
    },

    ds_nome: {
        type: dataTypes.STRING,
        field: 'ds_nome',
        get : function () {
            return this.getDataValue('ds_nome');
        },
        set : function (val) {
            this.setDataValue('ds_nome', val);
        }
    },

    ds_usuario: {
        type: dataTypes.STRING,
        field: 'ds_usuario',
        get : function () {
            return this.getDataValue('ds_usuario');
        },
        set : function (val) {
            this.setDataValue('ds_usuario', val);
        }
    },

    ds_senha: {
        type: dataTypes.STRING,
        field: 'ds_senha',
        get : function () {
            return this.getDataValue('ds_senha');
        },
        set : function (val) {
            this.setDataValue('ds_senha', val);
        }
    },

    nr_perfil: {
        type: dataTypes.INTEGER,
        field: 'nr_perfil',
        get : function () {
            return this.getDataValue('nr_perfil');
        },
        set : function (val) {
            this.setDataValue('nr_perfil', val);
        }
    },

}, {
    freezeTableName: true,
    timestamps: false
});

module.exports = usuario;