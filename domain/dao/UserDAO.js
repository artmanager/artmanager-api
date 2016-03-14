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
			UserModel.findOne({
				where: {
					ds_user: obj.user,
					ds_password : hash
				}
			}).then(function(user){
				callback(user);
			});
		}
	}

	InsertOne(obj, callback) {
		console.log(obj);
		if (obj != null && obj != undefined) {
			var hash = cripto(obj.password);
			UserModel.findOrCreate({ 
				where: {
					ds_name 	: obj.name,
					ds_user 	: obj.user,
					ds_password	: hash,
					nr_profile	: 1
				}
			}).spread(function (result, created ) {
				console.log(result);
				callback({ user : result , create : created });
			});
		} else {
			callback({ Error: 'user not defined' });
		}
	}

	UpdatePassword(obj, callback) {
		if (obj != null && obj != undefined) {
			var hash = cripto(obj.password);
			UserModel.update({
				ds_password : hash
			}, { where : {
				ds_user : obj.user,
				ds_name : obj.name,
				nr_profile: obj.profile
			}}).then(function(res) {
				callback({ result : res });
			});
		}
	}

	DeleteUser(obj, callback) {
		try {
			var hash = cripto(obj.password);
			console.log(hash);

			UserModel.destroy(
				{ where : 
					{
						ds_name: obj.name,
						ds_password : hash,
						ds_user : obj.user
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