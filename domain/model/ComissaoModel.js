var sequelize = require('../../db/postgres'),
    dataTypes = require('sequelize'),
    produto = require('ProdutoModel');

var comissao = sequelize.define('tb_comissao', {
    
    id: {
        type: dataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        field: 'id',
        get : function () {
            return this.getDataValue('id');
        }
    },

    id_produto: {
        type: dataTypes.INTEGER,
        field: 'id_produto',
        references: {
            model: produto,
            key: 'id',
            deferrable: dataTypes.Deferrable.INITIALY_IMMEDIATE
        },
        get : function () {
            return this.getDataValue('id_produto');
        },
        set : function (val) {
            this.setDataValue('id_produto', val)
        }
    },

    vl_porcentagem: {
        type: dataTypes.DECIMAL,
        field: 'vl_procentagem',
        get : function () {
            return this.getDataValue('vl_porcentagem');
        },
        set : function (val) {
            this.setDataValue('vl_porcentagem', val)
        }
    }

}, {
    freezeTableName: true,
    timestamps: false
});


module.exports = comissao;