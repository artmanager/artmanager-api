var sequelize = require('../../db/postgres'),
    dataTypes = require('sequelize'),
    which = require('WhichModel'),
    product = require('ProductModel');

var productWhich = sequelize.define('tb_product_which', {

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
    }

}, {
    freezeTableName: true,
    timestamps: false
});


module.exports = productWhich;