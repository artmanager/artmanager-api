var userDao 	= require('../dao/UserDAO'),
	md5			= require('md5');

function UserBus(){

};

UserBus.prototype.UserConsult  = function(obj, callback){
	var consult = {
		senha : md5(obj.senha),
		usuario : obj.usuario
	};

	userDao.FindOne(consult, function (sucesso){
		callback = sucesso;
	}).spread(function (user, created) {

	});
};


UserBus.prototype.UserRegister = function (obj, callback) {
	console.log('Bus - UserRegister');
	console.log('Send to DAO');
	if (obj != null && obj != undefined) {
		userDao.InsertOne(obj, function (result) {
			callback({ success : 'Usuário Cadastrado com sucesso.' });
		});
	} else {
	    callback({ Error: 'Não foi possível cadastrar o usuário' });
	}

}


module.exports = new UserBus();