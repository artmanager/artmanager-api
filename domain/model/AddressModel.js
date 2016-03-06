var sequelize = require('../../db/postgres'),
    dataTypes = require('sequelize'),
    clientModel = require('./ClientModel'),
    supplierModel = require('./SupplierModel');

var address = sequelize.define('tb_address', {

    id: {
        type: dataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        field: 'id',
        get : function () {
            return this.getDataValue('id');
        }
    },

    id_client: {
        type: dataTypes.INTEGER,
        field: 'id_client',
        references : {
            model : clientModel,
            key: 'id',
            deferrable: dataTypes.Deferrable.INITIALLY_IMMEDIATE
        },
        get : function () {
            return this.getDataValue('id_client');
        },
        set : function (val) {
            this.setDataValue('id_client', val);
        }
    },

    id_supplier : {
        type : dataTypes.INTEGER,
        field : 'id_supplier',
        references : {
            model: supplierModel,
            key: 'id',
            deferrable: dataTypes.Deferrable.INITIALLY_IMMEDIATE
        },
        get : function () {
            return this.getDataValue('id_supplier');
        }, 
        set : function (val) {
            this.setDataValue('id_supplier', val);
        }
    },

    ds_street: {
        type: dataTypes.STRING,
        field: 'ds_street',
        get : function () {
            return this.getDataValue('ds_street');
        },
        set : function (val) {
            this.setDataValue('ds_street', val);
        }
    },

    nr_number: {
        type: dataTypes.INTEGER,
        field: 'nr_number',
        get : function () {
            return this.getDataValue('nr_number');
        },
        set : function (val) {
            this.setDataValue('nr_number', val);
        }
        
    },

    ds_neighborhood: {
        type: dataTypes.STRING,
        field: 'ds_neighborhood',
        get : function () {
            return this.getDataValue('ds_neighborhood');
        },
        set : function (val) {
            this.setDataValue('ds_neighborhood', val);
        }
    },

    ds_zip_code: {
        type: dataTypes.STRING,
        field: 'ds_zip_code',
        get : function () {
            return this.getDataValue('ds_zip_code');
        },
        set : function (val) {
            this.setDataValue('ds_zip_code', val);
        }
    },

    ds_city: {
        type: dataTypes.STRING,
        field: 'ds_city',
        get : function () {
            return this.getDataValue('ds_city');
        },
        set : function (val) {
            this.setDataValue('ds_city', val);
        }
    },

    ds_state: {
        type: dataTypes.STRING,
        field: 'ds_state',
        get : function () {
            return this.getDataValue('ds_state');
        },
        set : function (val) {
            this.setDataValue('ds_state', val);
        }
    },

    ds_country: {
        type: dataTypes.STRING,
        field: 'ds_country',
        get : function () {
            return this.getDataValue('ds_country');
        },
        set : function (val) {
            this.setDataValue('ds_country', val);
        }
    }

}, {
    freezeTableName: true,
    timestamps: false
});

module.exports = address;