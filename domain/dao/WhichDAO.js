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


	UpdateEntrance(obj, callback) {
	    whichModel.update({
	        vl_entrance: obj.entrance
	    }, {
	        where: {
	            id: obj.id
	        }
	    }).then(function (update) {
	        console.log(update);
	        if (update == 1) {
	            callback({ success: 'Valor atualizado com sucesso..' });
	        } else {
	            callback({ error: 'Não foi possível atualizar valor.' });
	        }
	    });
	}

	UpdatePendingFallback(obj, callback) {
	    whichModel.update({
	        bl_pendingfallback: obj.pendingfallback
	    }, {
	        where: {
	            id: obj.id
	        }
	    }).then(function (update) {
	        console.log(update);
	        if (update == 1) {
	            callback({ success: 'Retirada atualizada com sucesso.' });
	        } else {
	            callback({ error: 'Não foi possível marcar a saída do prodido' });
	        }
	    });
	}
}

module.exports = new WhichDAO(whichModel);