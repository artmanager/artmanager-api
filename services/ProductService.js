function ProductService() {

}

ProductService.prototype.InsertProduct = function(req, res) {
	try {
		var obj = res.body;

		if (obj == null){
			res.json({ error: 'Parametros do produto não localizados'});
		}

		res.json({ success: 'Produto cadastrado com sucesso.'});

	} catch (e) {
		res.json({error : e });
	}
}

ProductService.prototype.GetOneProduct = function(req, res) {

}

 
 module.exports = new ProductService();