var sequelize = require('../../db/postgres'),
    DataTypes = require('sequelize'),
    clienteModel = require('./ClienteModel'),
    usuarioModel = require('./UsuarioModel');

var telefone = sequelize.define('tb_telefone', {

    id: {
        type: DataTypes.INTEGER,
        field: 'id',
        autoIncrement: true,
        primaryKey: true,
        get : function () {
            return this.getDataValue('id');
        }
    },

    id_usuario: {
        type: DataTypes.INTEGER,
        filed: 'id_usuario',
        references: {
            model: usuarioModel,
            key: 'id',
            deferrable: DataTypes.Deferrable.INITIALLY_IMMEDIATE
        },
        get : function () {
            return this.getDataValue('id_usuario');
        },
        set : function (val) {
            this.setDataValue('id_usuario', val);
        }
    },

    id_cliente: {
        type: DataTypes.INTEGER,
        field: 'id_cliente',
        references : {
            model : clienteModel,
            key: 'id',
            deferrable: DataTypes.Deferrable.INITIALLY_IMMEDIATE
        },
        get : function () {
            return this.getDataValue('id_cliente');
        },
        set : function (val) {
            this.setDataValue('id_cliente', val);
        }
    },

    nr_ddd: {
        type: DataTypes.INTEGER,
        field: 'nr_ddd',
        get : function () {
            return this.getDataValue('nr_ddd');
        },
        set : function (val) {
            this.setDataValue('nr_ddd', val);
        }
    },

    ds_numero: {
        type: DataTypes.STRING,
        field: 'ds_numero',
        get : function () {
            return this.getDataValue('ds_numero');
        },
        set : function (val) {
            this.setDataValue('ds_numero', val);
        }
    },

    nr_tipo: {
        type: DataTypes.INTEGER,
        field: 'nr_tipo',
        get : function () {
            return this.getDataValue('nr_tipo');
        },
        set : function (val) {
            this.setDataValue('nr_tipo', val);
        }
    }

}, {
    freezeTableName: true,
    timestamps: false
});

module.exports = telefone;