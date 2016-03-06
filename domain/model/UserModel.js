var sequelize = require('../../db/postgres');
var dataTypes = require('sequelize');

var user = sequelize.define('tb_user', {

    id: {
        type: dataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
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

    ds_user: {
        type: dataTypes.STRING,
        field: 'ds_user',
        get : function () {
            return this.getDataValue('ds_user');
        },
        set : function (val) {
            this.setDataValue('ds_user', val);
        }
    },

    ds_password: {
        type: dataTypes.STRING,
        field: 'ds_password',
        get : function () {
            return this.getDataValue('ds_password');
        },
        set : function (val) {
            this.setDataValue('ds_password', val);
        }
    },

    nr_profile: {
        type: dataTypes.INTEGER,
        field: 'nr_profile',
        get : function () {
            return this.getDataValue('nr_profile');
        },
        set : function (val) {
            this.setDataValue('nr_profile', val);
        }
    },

}, {
    freezeTableName: true,
    timestamps: false
});

module.exports = user;