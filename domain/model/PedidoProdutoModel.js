var sequelize = require('../../db/postgres'),
    dataTypes = require('sequelize'),
    pedido = require('PedidoModel'),
    produto = require('ProdutoModel');

var pedidoProduto = sequelize.define('tb_pedido_produto', {

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
        set : function (val){
            this.setDataValue('id_pedido', val);
        }
    },

    id_produto: {
        type: dataTypes.INTEGER,
        field: 'id_produo',
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
    }

}, {
    freezeTableName: true,
    timestamps: false
});


module.exports = pedidoProduto;