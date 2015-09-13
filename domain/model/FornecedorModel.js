var sequelize = require('../../db/postgres'),
    dataTypes = require('sequelize'),
    endereco = require('EnderecoModel'),
    telefone = require('TelefoneModel');

var forncedor = sequelize.define('tb_fornecedor', {

    id: {
        type: dataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        field: 'id'
    },

    id_endereco: {
        type: dataTypes.INTEGER,
        field: 'id_endereco',
        references: {
            model: endereco,
            key: 'id',
            deferrable: dataTypes.Deferrable.INITIALLY_IMMEDIATE
        }
    },

    id_telefone: {
        type: dataTypes.INTEGER,
        field: 'id_telefone',
        references: {
            model: telefone,
            key: 'id',
            deferrable: dataTypes.Deferrable.INITIALLY_IMMEDIATE
        }
    },

    ds_nome: {
        type: dataTypes.STRING,
        field: 'ds_nome'
    }

}, {
    freezeTableName: true,
    timestamps: false
});

module.exports = forncedor;