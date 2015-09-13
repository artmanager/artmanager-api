var sequelize = require('../../db/postgres'),
    dataTypes = require('sequelize'),
    categoriaProduto = require('CategoriaProdutoModel'),
    fornecedor = require('FornecedorModel');

var produto = sequelize.define('tb_produto', {

    id: {
        type: dataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        field: 'id'
    },

    id_categoria_produto: {
        type: dataTypes.INTEGER,
        field: 'id_categoria_produto',
        references: {
            model: categoriaProduto,
            key: 'id',
            deferrable: dataTypes.Deferrable.INITIALLY_IMMEDIATE
        }

    },

    id_fornecedor: {
        type: dataTypes.INTEGER,
        field: 'id_fornecedor',
        references: {
            model: fornecedor,
            key: 'id',
            deferrable: dataTypes.Deferrable.INITIALLY_IMMEDIATE
        }
    },

    ds_nome: {
        type: dataTypes.STRING,
        field: 'ds_nome'
    },

    ds_tamanho: {
        type: dataTypes.STRING,
        field: 'ds_tamanho'
    },

    ds_peso: {
        type: dataTypes.STRING,
        field: 'ds_peso'
    },

    ds_descricao: {
        type: dataTypes.STRING,
        field: 'ds_descricao'
    },

    vl_custo: {
        type: dataTypes.DECIMAL,
        field: 'vl_custo'
    },

    vl_preco_venda: {
        type: dataTypes.DECIMAL,
        field: 'vl_preco_venda'
    },

    nr_quantidade: {
        type: dataTypes.INTEGER,
        field: 'nr_quantidade'
    }

}, {
    freezeTableName: true,
    timestamps: false
});

module.exports = produto;
