var sequelize = require('../../db/postgres'),
    dataTypes = require('sequelize'),
    cliente = require('ClienteModel'),
    produto = require('ProdutoModel'),
    pedido = require('PedidoModel'),
    usuario = require('UsuarioModel');

var producao = sequelize.define('tb_producao', {

    id: {
        type: dataTypes.INTEGER,
        autoIncrement: true,
        primariKey: true,
        field: 'id'
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

    id_produto: {
        type: dataTypes.INTEGER,
        field: 'id_producao',
        references: {
            model: produto,
            key: 'id',
            deferrable: dataTypes.Deferrable.INITIALLY_IMMEDIATE
        }
    },

    id_pedido: {
        type: dataTypes.INTEGER,
        field: 'id_pedido',
        references: {
            model: pedido,
            key: 'id',
            deferrable: dataTypes.Deferrable.INITIALLY_IMMEDIATE
        }
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

    dt_data_inicio: {
        type: dataTypes.DATE,
        field: 'dt_data_inicio'
    },

    dt_data_entrega: {
        type: dataTypes.DATE,
        field: 'dt_data_entrega'
    },

    vl_porcentagem_conclusao: {
        type: dataTypes.DECIMAL,
        field: 'vl_porcetagem'
    },

}, {
    freezeTableName: true,
    timestamps: false
});

module.exports = producao;

