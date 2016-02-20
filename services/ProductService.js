function ProductService() {

}

ProductService.prototype.InsertProduct = function(req, res) {
	try {
		var obj = {
			name: "",
			amount: "",
			cost: "",
			sale: "",
			description: "",
			size: "",
			color: ""
		};

	} catch (e) {
		res.json({error : e });
	}
}

ProductService.prototype.GetOneProduct = function(req, res) {

}

 
 module.exports = new ProductService();