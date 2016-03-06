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

    lv_percentage: {
        type: dataTypes.DECIMAL,
        field: 'lv_percentage',
        get : function () {
            return this.getDataValue('lv_percentage');
        },
        set : function (val) {
            this.setDataValue('lv_percentage', val)
        }
    }

}, {
    freezeTableName: true,
    timestamps: false
});


module.exports = commission;