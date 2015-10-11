var sequelize = require('../../db/postgres'),
    dataTypes = require('sequelize'),
    categoriaProduto = require('CategoriaProdutoModel'),
    fornecedor = require('FornecedorModel');

var produto = sequelize.define('tb_produto', {

    id: {
        type: dataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        field: 'id',
        get : function () {
            return this.getDataValue('id');
        },
    },

    id_categoria_produto: {
        type: dataTypes.INTEGER,
        field: 'id_categoria_produto',
        references: {
            model: categoriaProduto,
            key: 'id',
            deferrable: dataTypes.Deferrable.INITIALLY_IMMEDIATE
        },
        get : function () {
            return this.getDataValue('id_categoria_produto');
        },
        set : function (val) {
            this.setDataValue('id_categoria_produto', val);
        }

    },

    id_fornecedor: {
        type: dataTypes.INTEGER,
        field: 'id_fornecedor',
        references: {
            model: fornecedor,
            key: 'id',
            deferrable: dataTypes.Deferrable.INITIALLY_IMMEDIATE
        },
        get : function () {
            return this.getDataValue('id_fornecedor');
        },
        set : function (val) {
            this.setDataValue('id_fornecedor', val);
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

    ds_tamanho: {
        type: dataTypes.STRING,
        field: 'ds_tamanho',
        get : function () {
            return this.getDataValue('ds_tamanho');
        },
        set : function (val) {
            this.setDataValue('ds_tamanho');
        }
    },

    ds_peso: {
        type: dataTypes.STRING,
        field: 'ds_peso',
        get : function () {
            return this.getDataValue('ds_peso');
        },
        set : function (val) {
            this.setDataValue('ds_peso', val);
        }
    },

    ds_descricao: {
        type: dataTypes.STRING,
        field: 'ds_descricao',
        get : function () {
            return this.getDataValue('ds_descricao');
        },
        set : function (val) {
            this.setDataValue('ds_descricao', val);
        }
    },

    vl_custo: {
        type: dataTypes.DECIMAL,
        field: 'vl_custo',
        get : function () {
            return this.getDataValue('vl_custo');
        },
        set : function (val) {
            this.setDataValue('vl_custo', val);
        }
    },

    vl_preco_venda: {
        type: dataTypes.DECIMAL,
        field: 'vl_preco_venda',
        get : function () {
            return this.getDataValue('vl_preco_venda');
        },
        set : function (val) {
            this.setDataValue('vl_preco_venda', val);
        }
    },

    nr_quantidade: {
        type: dataTypes.INTEGER,
        field: 'nr_quantidade',
        get : function () {
            return this.getDataValue('nr_quantidade');
        },
        set : function (val) {
            this.setDataValue('nr_quantidade', val);
        }
    }

}, {
    freezeTableName: true,
    timestamps: false
});

module.exports = produto;
