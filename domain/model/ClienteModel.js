var sequelize = require('../../db/postgres'),
    dataTypes = require('sequelize'),
    endereco = require('EnderecoModel'),
    telefone = require('TelefoneModel');


var cliente = sequelize.define('tb_cliente', {

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
    },

    ds_cpf_cnpj: {
        type: dataTypes.STRING,
        field: 'ds_cpf_cnpj'
    },

    ds_email: {
        type: dataTypes.STRING,
        field: 'ds_email'
    }

}, {
    freezeTableName: true,
    timestamps: false
});

module.exports = cliente;