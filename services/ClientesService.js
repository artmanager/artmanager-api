var promise = require('bluebird');
var cliBuss = require('../domain/business/ClientesBUS');

function ClientesService() {

}

ClientesService.prototype.CadastroCliente = function(req, res) {
	try {

		var param = req.body;
		
		if (param.nome == null ||  param.nome == undefined)
			res.json({ erro : 'Por favor envie o nome do cliente.' });
		
		if (param.email == null || param.email == undefined)
			res.json({ erro: 'Por favor envie um E-mail valido'});

		cliBuss.CadastroCliente(param, function(obj) {
			res.json(obj);
		});
		
		res.json({ success : 'Cliente cadastrado com sucesso. ' });

	} catch (e) {
		console.log(e);
		res.json({ erro : e });
	}
}

module.exports = new ClientesService();