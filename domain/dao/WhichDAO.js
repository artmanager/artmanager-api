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

	GetWhishByClient(obj, callback) {
	    try {

	        let query = "select w.* from tb_client c join consult_which w on c.id = w.clientId where ";
	        let qtdFil = 0;
	        if (obj.name != null) {
	            qtdFil++;

	            query += "replace(ltrim(rtrim(ds_name)), ' ', '') = '" + obj.name.replace(/ /g, '').toLowerCase() + "'";
	        }

	        if (obj.cpf_cnpj) {
	            if (qtdFil > 0)
	                query += " and ds_cpf_cnpj = '" + obj.cpf_cnpj.replace(/ /g, '').toLowerCase() + "'";
	            else
	                query += "ds_cpf_cnpj = '" + obj.cpf_cnpj.replace(/ /g, '').toLowerCase() + "'";
	        }

	        if (obj.email) {
	            if (qtdFil > 0)
	                query += " and ds_email = '" + obj.email.replace(/ /g, '').toLowerCase() + "'";
	            else
	                query += "ds_email = '" + obj.email.replace(/ /g, '').toLowerCase() + "'";
	        }

	        console.log(query);
	        sequelize
                .query(query)
                .spread(function (result, metadata) {
                    callback({ view: result });
                });
	    } catch (e) {
	        callback({ error: 'Não foi possível consultar o pedido. ' + e });
	    }
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