"use strict"
const whichModel = require('../model/WhichModel.js'); 

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
}

module.exports = new WhichDAO(whichModel);