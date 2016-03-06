var sequelize = require('../../db/postgres'),
    dataTypes = require('sequelize'),
    categoriaProduto = require('ProductCategoryModel'),
    fornecedor = require('SupplierModel');

var product = sequelize.define('tb_product', {

    id: {
        type: dataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        field: 'id',
        get : function () {
            return this.getDataValue('id');
        },
    },

    id_product_category: {
        type: dataTypes.INTEGER,
        field: 'id_product_category',
        references: {
            model: categoriaProduto,
            key: 'id',
            deferrable: dataTypes.Deferrable.INITIALLY_IMMEDIATE
        },
        get : function () {
            return this.getDataValue('id_product_category');
        },
        set : function (val) {
            this.setDataValue('id_product_category', val);
        }

    },

    id_supplier: {
        type: dataTypes.INTEGER,
        field: 'id_supplier',
        references: {
            model: fornecedor,
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

    ds_name: {
        type: dataTypes.STRING,
        field: 'ds_name',
        get : function () {
            return this.getDataValue('ds_name');
        },
        set : function (val) {
            this.setDataValue('ds_name', val);
        }
    },

    ds_size: {
        type: dataTypes.STRING,
        field: 'ds_size',
        get : function () {
            return this.getDataValue('ds_size');
        },
        set : function (val) {
            this.setDataValue('ds_size');
        }
    },

    ds_weight: {
        type: dataTypes.STRING,
        field: 'ds_weight',
        get : function () {
            return this.getDataValue('ds_weight');
        },
        set : function (val) {
            this.setDataValue('ds_weight', val);
        }
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
    },

    vl_cost: {
        type: dataTypes.DECIMAL,
        field: 'vl_cost',
        get : function () {
            return this.getDataValue('vl_cost');
        },
        set : function (val) {
            this.setDataValue('vl_cost', val);
        }
    },

    vl_sale_cost: {
        type: dataTypes.DECIMAL,
        field: 'vl_sale_cost',
        get : function () {
            return this.getDataValue('vl_sale_cost');
        },
        set : function (val) {
            this.setDataValue('vl_sale_cost', val);
        }
    },

    nr_quantity: {
        type: dataTypes.INTEGER,
        field: 'nr_quantity',
        get : function () {
            return this.getDataValue('nr_quantity');
        },
        set : function (val) {
            this.setDataValue('nr_quantity', val);
        }
    }

}, {
    freezeTableName: true,
    timestamps: false
});

module.exports = produto;
