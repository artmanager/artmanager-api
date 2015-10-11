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
        field: 'id',
        get : function () {
            return this.getDataValue('id');
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

    id_produto: {
        type: dataTypes.INTEGER,
        field: 'id_producao',
        references: {
            model: produto,
            key: 'id',
            deferrable: dataTypes.Deferrable.INITIALLY_IMMEDIATE
        },
        get : function () {
            return this.getDataValue('id_produto');
        }, 
        set : function (val) {
            this.setDataValue('id_produto', val);
        }
    },

    id_pedido: {
        type: dataTypes.INTEGER,
        field: 'id_pedido',
        references: {
            model: pedido,
            key: 'id',
            deferrable: dataTypes.Deferrable.INITIALLY_IMMEDIATE
        },
        get : function () {
            return this.getDataValue('id_pedido');
        }, 
        set : function (val) {
            this.setDataValue('id_pedido', val);
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

    dt_data_inicio: {
        type: dataTypes.DATE,
        field: 'dt_data_inicio',
        get : function () {
            return this.getDataValue('dt_data_inicio');
        }, 
        set : function (val) {
            this.setDataValue('dt_data_inicio', val);
        }
    },

    dt_data_entrega: {
        type: dataTypes.DATE,
        field: 'dt_data_entrega',
        get : function () {
            return this.getDataValue('dt_data_entrega');
        }, 
        set : function (val) {
            this.setDataValue('dt_data_entrega', val);
        }
    },

    vl_porcentagem_conclusao: {
        type: dataTypes.DECIMAL,
        field: 'vl_porcetagem',
        get : function () {
            return this.getDataValue('vl_porcentagem_conclusao');
        }, 
        set : function (val) {
            this.setDataValue('vl_porcentagem_conclusao', val);
        }
    },

}, {
    freezeTableName: true,
    timestamps: false
});

module.exports = producao;

