var sequelize = require('../../db/postgres'),
    dataTypes = require('sequelize'),
    endereco = require('./AddressModel'),
    telefone = require('./PhoneModel');

var supplier = sequelize.define('tb_supplier', {

    id: {
        type: dataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        field: 'id',
        get : function () {
            return this.getDataValue('id');
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

    ds_email: {
        type: dataTypes.STRING,
        field: 'ds_email',
        get : function () {
            return this.getDataValue('ds_email');
        },
        set : function (val) {
            this.setDataValue('ds_email', val);
        }
    }

}, {
    freezeTableName: true,
    timestamps: false
});

module.exports = supplier;