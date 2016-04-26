var sequelize = require('../../db/postgres'),
    dataTypes = require('sequelize'),
    which = require('./WhichModel.js'),
    product = require('./ProductModel.js');

var productWhich = sequelize.define('tb_product_which', {

    id: {
        type: dataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        field: 'id',
        get: function () {
            return this.getDataValue('id');
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
        set : function (val){
            this.setDataValue('id_which', val);
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

    ds_describe: {
        type: dataTypes.STRING,
        field: 'ds_describe',
        get: function () {
            return this.getDataValue('ds_describe');
        },
        set: function (val) {
            this.setDataValue('ds_describe', val);
        }
    }
    

}, {
    freezeTableName: true,
    timestamps: false
});


module.exports = productWhich;