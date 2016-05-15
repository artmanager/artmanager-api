var sequelize = require('../../db/postgres'),
    dataTypes = require('sequelize'),
    client = require('./ClientModel'),
    product = require('./ProductModel'),
    which = require('./WhichModel'),
    user = require('./UserModel');

var production = sequelize.define('tb_production', {

    id: {
        type: dataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        field: 'id',
        get: function () {
            return this.getDataValue('id');
        },
    },

    id_client: {
        type: dataTypes.INTEGER,
        field: 'id_client',
        references: {
            model: client,
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

    id_product: {
        type: dataTypes.INTEGER,
        field: 'id_product',
        references: {
            model: product,
            key: 'id',
            deferrable: dataTypes.Deferrable.INITIALLY_IMMEDIATE
        },
        get : function () {
            return this.getDataValue('id_product');
        }, 
        set : function (val) {
            this.setDataValue('id_product', val);
        }
    },

    id_which: {
        type: dataTypes.INTEGER,
        field: 'id_which',
        references: {
            model: which,
            key: 'id',
            deferrable: dataTypes.Deferrable.INITIALLY_IMMEDIATE
        },
        get : function () {
            return this.getDataValue('id_which');
        }, 
        set : function (val) {
            this.setDataValue('id_which', val);
        }
    },

    id_user: {
        type: dataTypes.INTEGER,
        field: 'id_user',
        references: {
            model: user,
            key: 'id',
            deferrable: dataTypes.Deferrable.INITIALLY_IMMEDIATE
        },
        get : function () {
            return this.getDataValue('id_user');
        }, 
        set : function (val) {
            this.setDataValue('id_user', val);
        }
    },

    dt_start_date: {
        type: dataTypes.DATE,
        field: 'dt_start_date',
        get : function () {
            return this.getDataValue('dt_start_date');
        }, 
        set : function (val) {
            this.setDataValue('dt_start_date', val);
        }
    },

    dt_delivery_date: {
        type: dataTypes.DATE,
        field: 'dt_delivery_date',
        get : function () {
            return this.getDataValue('dt_delivery_date');
        }, 
        set : function (val) {
            this.setDataValue('dt_delivery_date', val);
        }
    },

    vl_percentage: {
        type: dataTypes.DECIMAL,
        field: 'vl_percentage',
        get : function () {
            return this.getDataValue('vl_percentage');
        }, 
        set : function (val) {
            this.setDataValue('vl_percentage', val);
        }
    },

    vl_quantity: {
        type: dataTypes.INTEGER,
        field: 'vl_quantity',
        get: function () {
            return this.getDataValue('vl_quantity');
        },
        set: function (val) {
            this.setDataValue('vl_quantity', val);
        }
    }

}, {
    freezeTableName: true,
    timestamps: false
});

module.exports = production;

