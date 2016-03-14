var promise = require('bluebird');
var userBus = require('../domain/business/UserBUS');

function UserService() {
}

UserService.prototype.GetOne = function(req, res) {
	try {
		var obj = req.body;
		
	} catch (e) {
		res.json({ erro : e });
	}
}

UserService.prototype.UserRegister = function (req, res) {
	try {
		var obj = req.body;	
		console.log('Request - User - UserRegister');
		console.log(obj.user);
		if (obj.user.user == undefined || obj.user.user == null || obj.user.user == '') {
			return res.json({ error : 'Usuario inválido.'});
		}
		else if (obj.user.password == undefined || obj.user.password == null || obj.user.password == '') {
			return res.json({ error : 'Senha inválida'});
		}
		console.log('Send Business');
		userBus.UserRegister(obj.user, function (callback) {
			res.json(callback);
		});

	} catch (e) {
		res.json({erro: e});
	}
};


module.exports = new UserService();