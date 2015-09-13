var sequelize = require('../../db/postgres');
var dataTypes = require('sequelize');

var categoriaProduto = sequelize.define('tb_categoria_produto', {

    id: {
        type: dataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        field: 'id'
    },

    ds_descricao: {
        type: dataTypes.STRING,
        field: 'ds_descricao'
    }

}, {
    freezeTableName: true,
    timestamps: false
});

module.exports = categoriaProduto;