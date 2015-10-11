var sequelize = require('../../db/postgres');
var DataTypes = require('sequelize');

var telefone = sequelize.define('tb_telefone', {

    id: {
        type: DataTypes.INTEGER,
        field: 'id',
        autoIncrement: true,
        primaryKey: true,
        get : function () {
            return this.getDataValue('id');
        }
    },

    ds_comercial: {
        type: DataTypes.STRING,
        field: 'ds_comercial',
        get : function () {
            return this.getDataValue('ds_comercial');
        },
        set : function (val) {
            this.setDataValue('ds_comercial', val);
        }
    },

    ds_residencial: {
        type: DataTypes.STRING,
        field: 'ds_residencial',
        get : function () {
            return this.getDataValue('ds_residencial');
        },
        set : function (val) {
            this.setDataValue('ds_residencial', val);
        }
    },

    ds_celular: {
        type: DataTypes.STRING,
        field: 'ds_celular',
        get : function () {
            return this.getDataValue('ds_celular');
        },
        set : function (val) {
            this.setDataValue('ds_celular', val);
        }
    }

}, {
    freezeTableName: true,
    timestamps: false
});

module.exports = telefone;