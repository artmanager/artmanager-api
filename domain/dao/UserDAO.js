"use strict"

var promise = require('bluebird');
var UserModel = require('../model/UserModel');
var cripto = require('md5');


class UserDAO {

    UserDAO(Model) {
        this.Data = promise.promisifyAll(Model);
    }

    FindOne(obj, callback) {
        if (obj != null && obj != undefined) {
            console.log(obj);
            var hash = cripto(obj.password);
            let user = obj.user.toLowerCase().trim();
            UserModel.findOne({
                where: {
                    ds_user: user,
                    ds_password: hash
                }
            }).then(function (user) {
                callback(user);
            });
        }
    }

    InsertOne(obj, callback) {
        console.log(obj);
        if (obj != null && obj != undefined) {
            var hash = cripto(obj.password);
            let user = obj.user.toLowerCase().trim();
            UserModel.findOrCreate({
                where: {
                    ds_name: obj.name,
                    ds_user: user,
                    ds_password: hash
                }
            }).spread(function (result, created) {
                console.log(result);
                callback({ user: result, create: created });
            });
        } else {
            callback({ Error: 'user not defined' });
        }
    }

    FindByUser(obj, callback) {

        if (obj.user != null) {
            UserModel.findOne({
                where: {
                    ds_user: obj.user.toLowerCase().trim()
                }
            }).then(function (user) {
                callback(user);
            });

        } else {
            callback({ error: 'Usuário invalido' });
        }
    }

	UpdatePassword(obj, callback) {
		if (obj != null && obj != undefined) {
		    var hash = cripto(obj.password);
		    var oldHash  = cripto(obj.old);
			UserModel.update({
				ds_password : hash
			}, {
			where: {
				ds_user     : obj.user.toLowerCase(),
                ds_password : oldHash,
			}
			}).then(function (update) {
			    console.log(update);
			    if (update == 1) {
			        callback({ success: 'Senha atualizada com sucesso.' });
			    } else {
			        callback({ error: 'Usuário ou senha invalidos.' });
			    }
			});
		}
	}

	DeleteUser(obj, callback) {
		try {
			let hash = cripto(obj.password);
			let user = obj.user.toLowerCase().trim();
		    UserModel.destroy({
		        where: {
					ds_password : hash,
					ds_user : user
				}
				}).then(function(obj) {
					callback(obj);
			});
		} catch (e) {
			callback({ Error :  e });
		}
	}
}

module.exports = new UserDAO(UserModel);