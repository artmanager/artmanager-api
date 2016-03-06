var promise = require('bluebird');
var UserModel = require('../model/UserModel');
var cripto = require('md5');

function UserDAO(Model){
	this.Data = promise.promisifyAll(Model);
}

UserDAO.prototype.findOne = function(obj, callback) {
	if (obj != null && obj != undefined) {
		var hash = cripto(obj.password);
		UserModel.findOne({
			where: {
				ds_user: obj.user,
				ds_password : hash
			}
		}).then(function(user){
			console.log('Id' + user);
			callback(user);
		});
	}
};

UserDAO.prototype.insertOne = function (obj, callback) {
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
			console.log("created" + created);
			callback({ user : result , create : created });
		});
	}
};

UserDAO.prototype.updatePassword = function (obj, callback) {
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
};

UserDAO.prototype.deleteUser = function (obj, callback) {
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
				console.log(obj);
				callback(obj);
		});
	} catch (e) {
		console.log('Erro: ' + e);
		callback({ Error :  e });
	}
}

module.exports = new UserDAO(UserModel);