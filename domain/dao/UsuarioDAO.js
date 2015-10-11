var promise = require('bluebird');
var UsuarioModel = require('../model/UsuarioModel');


function UsuarioDAO(Model){
	this.Data = promise.promisifyAll(Model);
}

UsuarioDAO.prototype.findOne = function(obj, callback) {
	
};

module.exports = new UsuarioDAO(UsuarioModel);