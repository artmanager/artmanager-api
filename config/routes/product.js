var express = require('express'),
	router = express.Router(),
	Product = require('../../services/ProductService');

router.get('/product',  function(req, res){res.json({'test': 'success'}); });
router.get('/product/:id',  function(req, res){res.json({'test': 'success'}); });
router.post('/product/', Product.InsertProduct.bind(Product));
router.put('/product/:id', function(req, res){res.json({'test': 'success'}); });
router.delete('/product/:id', function(req, res){res.json({'test': 'success'}); });


module.exports = router;