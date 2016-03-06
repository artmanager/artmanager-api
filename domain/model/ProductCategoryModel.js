var sequelize = require('../../db/postgres');
var dataTypes = require('sequelize');

var productCategory = sequelize.define('tb_product_category', {

    id: {
        type: dataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        field: 'id'
    },

    ds_describe: {
        type: dataTypes.STRING,
        field: 'ds_describe',
        get : function () {
            return this.getDataValue('ds_describe');
        },
        set : function (val) {
            this.setDataValue('ds_describe', val);
        }
    }

}, {
    freezeTableName: true,
    timestamps: false
});

module.exports = productCategory;