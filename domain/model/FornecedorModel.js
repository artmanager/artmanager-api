var sequelize = require('../../db/postgres'),
    dataTypes = require('sequelize'),
    endereco = require('EnderecoModel'),
    telefone = require('TelefoneModel');

var forncedor = sequelize.define('tb_fornecedor', {

    id: {
        type: dataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        field: 'id',
        get : function () {
            return this.getDataValue('id');
        }
    },

    id_endereco: {
        type: dataTypes.INTEGER,
        field: 'id_endereco',
        references: {
            model: endereco,
            key: 'id',
            deferrable: dataTypes.Deferrable.INITIALLY_IMMEDIATE
        },
        get : function () {
            return this.getDataValue('id_endereco');
        },
        set : function (val) {
            this.setDataValue('id_endereco', val);
        }
    },

    id_telefone: {
        type: dataTypes.INTEGER,
        field: 'id_telefone',
        references: {
            model: telefone,
            key: 'id',
            deferrable: dataTypes.Deferrable.INITIALLY_IMMEDIATE
        },
        get : function () {
            return this.getDataValue('id_telefone');
        },
        set : function (val) {
            this.setDataValue('id_telefone', val);
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
    }

}, {
    freezeTableName: true,
    timestamps: false
});

module.exports = forncedor;