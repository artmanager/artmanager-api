var sequelize = require('../../db/postgres'),
    DataTypes = require('sequelize'),
    clienteModel = require('./ClientModel'),
    supplierModel = require('./SupplierModel');

var phone = sequelize.define('tb_phone', {

    id: {
        type: DataTypes.INTEGER,
        field: 'id',
        autoIncrement: true,
        primaryKey: true,
        get : function () {
            return this.getDataValue('id');
        }
    },

    id_client: {
        type: DataTypes.INTEGER,
        field: 'id_client',
        references : {
            model : clienteModel,
            key: 'id',
            deferrable: DataTypes.Deferrable.INITIALLY_IMMEDIATE
        },
        get : function () {
            return this.getDataValue('id_client');
        },
        set : function (val) {
            this.setDataValue('id_client', val);
        }
    },

    id_supplier : {
        type: DataTypes.INTEGER,
        field: 'id_supplier',
        references : {
            model: supplierModel,
            key: 'id',
            deferrable: DataTypes.Deferrable.INITIALLY_IMMEDIATE
        },
        get : function () {
            return this.getDataValue('id_supplier');
        },
        set : function (val) {
            this.setDataValue('id_supplier', val);
        }
    },

    nr_ddd: {
        type: DataTypes.INTEGER,
        field: 'nr_ddd',
        get : function () {
            return this.getDataValue('nr_ddd');
        },
        set : function (val) {
            this.setDataValue('nr_ddd', val);
        }
    },

    ds_number: {
        type: DataTypes.STRING,
        field: 'ds_number',
        get : function () {
            return this.getDataValue('ds_number');
        },
        set : function (val) {
            this.setDataValue('ds_number', val);
        }
    },

    nr_type: {
        type: DataTypes.INTEGER,
        field: 'nr_type',
        get : function () {
            return this.getDataValue('nr_type');
        },
        set : function (val) {
            this.setDataValue('nr_type', val);
        }
    }

}, {
    freezeTableName: true,
    timestamps: false
});

module.exports = phone;