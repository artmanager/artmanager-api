var sequelize = require('../../db/postgres'),
    dataTypes = require('sequelize'),
    usuario = require('UsuarioModel'),
    cliente = require('ClienteModel');

var pedido = sequelize.define('tb_pedido', {

    id: {
        type: dataTypes.INTEGER,
        autoIncrement: true,
        foreignKey: true,
        field: 'id'
    },

    id_usuario: {
        type: dataTypes.INTEGER,
        field: 'id_usuario',
        references: {
            model: usuario,
            key: 'id',
            deferrable: dataTypes.Deferrable.INITIALLY_IMMEDIATE
        }
    },

    id_cliente: {
        type: dataTypes.INTEGER,
        field: 'id_cliente',
        references: {
            model: cliente,
            key: 'id',
            deferrable: dataTypes.Deferrable.INITIALLY_IMMEDIATE
        }
    },

    dt_data_pedido: {
        type: dataTypes.DATE,
        field: 'dt_data_pedido'
    },

    vl_valor_total: {
        type: dataTypes.DECIMAL,
        field: 'vl_valor_total'
    },

    vl_sinal: {
        type: dataTypes.DECIMAL,
        field: 'vl_sinal'
    }

}, {
    freezeTableName: true,
    timestamps: false
});

module.exports = pedido;