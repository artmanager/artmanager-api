'use strict';

var express = require('express'),
	router = express.Router(),
	Product = require('../../services/ProductService'),
	config 		= require('../config.js'),
	common 		= require(config.common.fileCommon);

router.get(common.routes.product.getAllProducts, Product.FindAllProducts.bind(Product));
router.get('/product/:id',  function(req, res){res.json({'test': 'success'}); });
router.post(common.routes.product.postProduct, Product.InsertProduct.bind(Product));
router.put('/product/:id', function(req, res){res.json({'test': 'success'}); });
router.delete('/product/:id', function(req, res){res.json({'test': 'success'}); });


module.exports = router;