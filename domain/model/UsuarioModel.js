var sequelize = require('../../db/postgres'),
    dataTypes = require('sequelize'),
    endereco = require('EnderecoModel'),
    telefone  = require('TelefoneModel');

var usuario = sequelize.define('tb_usuario', {

    id: {
        type: dataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        field: 'id'
    },

    id_endereco: {
        type: dataTypes.INTEGER,
        field: 'id_endereco',
        refereces: {
            model: endereco,
            key: 'id',
            deferrable: dataTypes.Deferrable.INITIALLY_IMMEDIATE
        }
    },

    id_telefone: {
        type: dataTypes.INTEGER,
        field: 'id_telefone',
        refereces: {
            model: telefone,
            key: 'id',
            deferrable: dataTypes.Deferrable.INITIALLY_IMMEDIATE
        }
    },

    ds_nome: {
        type: dataTypes.STRING,
        field: 'ds_nome'
    },

    ds_usuario: {
        type: dataTypes.STRING,
        field: 'ds_usuario'
    },

    ds_senha: {
        type: dataTypes.STRING,
        field: 'ds_senha'
    },

    nr_perfil: {
        type: dataTypes.INTEGER,
        field: 'nr_perfil'
    },

}, {
    freezeTableName: true,
    timestamps: false
});

module.exports = usuario;