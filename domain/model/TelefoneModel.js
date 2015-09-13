var sequelize = require('../../db/postgres');
var DataTypes = require('sequelize');

var telefone = sequelize.define('tb_telefone', {

    id: {
        type: DataTypes.INTEGER,
        field: 'id',
        autoIncrement: true,
        primaryKey: true
    },

    ds_comercial: {
        type: DataTypes.STRING,
        field: 'ds_comercial'
    },

    ds_residencial: {
        type: DataTypes.STRING,
        field: 'ds_residencial'
    },

    ds_celular: {
        type: DataTypes.STRING,
        field: 'ds_celular'
    }

}, {
    freezeTableName: true,
    timestamps: false
});

module.exports = telefone;