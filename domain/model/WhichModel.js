var sequelize = require('../../db/postgres'),
    dataTypes = require('sequelize'),
    usuario = require('./UserModel.js'),
    cliente = require('./ClientModel.js');

var pedido = sequelize.define('tb_which', {
   
    id: {
        type: dataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        field: 'id',
        get: function () {
            return this.getDataValue('id');
        },
    },

    id_user: {
        type: dataTypes.INTEGER,
        field: 'id_user',
        references: {
            model: usuario,
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

    id_client: {
        type: dataTypes.INTEGER,
        field: 'id_client',
        references: {
            model: cliente,
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

    dt_date_which: {
        type: dataTypes.DATE,
        field: 'dt_date_which',
        get : function () {
            return this.getDataValue('dt_date_which');
        },
        set : function (val) {
            this.setDataValue('dt_date_which', val);
        }
    },

    vl_total_value: {
        type: dataTypes.DECIMAL,
        field: 'vl_total_value',
        get : function () {
            return this.getDataValue('vl_total_value');
        },
        set : function (val) {
            this.setDataValue('vl_total_value', val);
        }
    },

    vl_entrance: {
        type: dataTypes.DECIMAL,
        field: 'vl_entrance',
        get : function () {
            return this.getDataValue('vl_entrance');
        },
        set : function (val) {
            this.setDataValue('vl_entrance', val);
        }
    },
    vl_discount:  {
        type: dataTypes.DECIMAL,
        field: 'vl_discount',
        get : function () {
            return this.getDataValue('vl_discount');
        },
        set : function (val) {
            this.setDataValue('vl_discount', val);
        }
    }

}, {
    freezeTableName: true,
    timestamps: false
});

module.exports = pedido;