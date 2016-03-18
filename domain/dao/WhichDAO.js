"use strict"
const whichModel = require('../model/WhichDAO'); 

class WhichDAO {

	InsertOne(obj, callback) {
		try {
			whichModel.findOrCreate({
				where: {

				}
			}).spread(function (which, created) {
				callback({ which: which });
			});
		}
	}
}

exports.module = new WhichDAO(whichModel);