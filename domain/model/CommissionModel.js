var sequelize = require('../../db/postgres'),
    dataTypes = require('sequelize'),
    product = require('ProductModel');

var commission = sequelize.define('tb_commission', {
    
    id: {
        type: dataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        field: 'id',
        get : function () {
            return this.getDataValue('id');
        }
    },

    id_product: {
        type: dataTypes.INTEGER,
        field: 'id_product',
        references: {
            model: product,
            key: 'id',
            deferrable: dataTypes.Deferrable.INITIALY_IMMEDIATE
        },
        get : function () {
            return this.getDataValue('id_product');
        },
        set : function (val) {
            this.setDataValue('id_product', val)
        }
    },

    vl_percentage: {
        type: dataTypes.DECIMAL,
        field: 'vl_percentage',
        get : function () {
            return this.getDataValue('vl_percentage');
        },
        set : function (val) {
            this.setDataValue('vl_percentage', val)
        }
    }

}, {
    freezeTableName: true,
    timestamps: false
});


module.exports = commission;