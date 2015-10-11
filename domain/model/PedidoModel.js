var sequelize = require('../../db/postgres'),
    dataTypes = require('sequelize'),
    usuario = require('UsuarioModel'),
    cliente = require('ClienteModel');

var pedido = sequelize.define('tb_pedido', {

    id: {
        type: dataTypes.INTEGER,
        autoIncrement: true,
        foreignKey: true,
        field: 'id',
        get : function () {
            return this.getDataValue('id');
        }
    },

    id_usuario: {
        type: dataTypes.INTEGER,
        field: 'id_usuario',
        references: {
            model: usuario,
            key: 'id',
            deferrable: dataTypes.Deferrable.INITIALLY_IMMEDIATE
        },
        get : function () {
            return this.getDataValue('id_usuario');
        },
        set : function (val) {
            this.setDataValue('id_usuario', val);
        }
    },

    id_cliente: {
        type: dataTypes.INTEGER,
        field: 'id_cliente',
        references: {
            model: cliente,
            key: 'id',
            deferrable: dataTypes.Deferrable.INITIALLY_IMMEDIATE
        },
        get : function () {
            return this.getDataValue('id_cliente');
        },
        set : function (val) {
            this.setDataValue('id_cliente', val);
        }
    },

    dt_data_pedido: {
        type: dataTypes.DATE,
        field: 'dt_data_pedido',
        get : function () {
            return this.getDataValue('dt_data_pedido');
        },
        set : function (val) {
            this.setDataValue('dt_data_pedido', val);
        }
    },

    vl_valor_total: {
        type: dataTypes.DECIMAL,
        field: 'vl_valor_total',
        get : function () {
            return this.getDataValue('vl_valor_total');
        },
        set : function (val) {
            this.setDataValue('vl_valor_total', val);
        }
    },

    vl_sinal: {
        type: dataTypes.DECIMAL,
        field: 'vl_sinal',
        get : function () {
            return this.getDataValue('vl_sinal');
        },
        set : function (val) {
            this.setDataValue('vl_sinal', val);
        }
    }

}, {
    freezeTableName: true,
    timestamps: false
});

module.exports = pedido;