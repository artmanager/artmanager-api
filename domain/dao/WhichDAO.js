"use strict"
const whichModel = require('../model/WhichModel.js'); 
let sequelize = require('../../db/postgres.js');

class WhichDAO {

	InsertOne(obj, callback) {
		try {
			whichModel.findOrCreate({
			    where:
                {
                    id_user: obj.id_user,
                    id_client: obj.id_client,
                    dt_date_which: obj.date_which,
                    vl_total_value: obj.total_value,
                    vl_entrance:obj.entrance,
                    vl_discount: obj.discount
				}
			}).spread(function (which, created) {
				callback({ which: which, created: created});
			});
		} catch (e) {
		    throw e;
		}
	}

	ConsultAllWhich(callback) {
	    try {
	        sequelize.query('select * from consult_which limit 200')
                .spread(function (result, metadata) {
                    callback({ view: result });
                });
	    } catch (e) {
	        callback({ error: e });
	    }
	}

	ConsultOneWhich(obj, callback) {

	}
}

module.exports = new WhichDAO(whichModel);