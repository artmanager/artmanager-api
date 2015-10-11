var sequelize = require('../../db/postgres');
var dataTypes = require('sequelize');
var endereco = require('./EnderecoModel');
var telefone  = require('./TelefoneModel');


var usuario = sequelize.define('tb_usuario', {

    id: {
        type: dataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        field: 'id',
        get : function () {
            var id = this.getDataValue('id');
            this.getDataValue('id') + '('+ id +')';
        }
    },

    id_endereco: {
        type: dataTypes.INTEGER,
        field: 'id_endereco',
        refereces: {
            model: endereco,
            key: 'id',
            deferrable: dataTypes.Deferrable.INITIALLY_IMMEDIATE
        },
        get : function () {
            return this.getDataValue('id');
        },
        set : function (val) {
            this.setDataValue('id_endereco', val);
        }
    },

    id_telefone: {
        type: dataTypes.INTEGER,
        field: 'id_telefone',
        refereces: {
            model: telefone,
            key: 'id',
            deferrable: dataTypes.Deferrable.INITIALLY_IMMEDIATE
        },
        get : function () {
            return this.getDataValue('id_telefone');
        },
        set : function (val) {
            this.setDataValue('id_telefone', val);
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