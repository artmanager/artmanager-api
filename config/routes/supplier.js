var express 	= require('express'),
	router 		= express.Router(),
	supplier 	= require('../../services/SupplierService'),
 	config 		= require('../config.js');
	common 		= require(config.common.fileCommon);

router.get('/supplier',  function(req, res){res.json({'test': 'success'}); });
router.get('/supplier/:id',  function(req, res){res.json({'test': 'success'}); });
router.post(common.routes.supplier.postSupplier, supplier.InsertOne.bind(supplier));
router.put('/supplier/:id', function(req, res){res.json({'test': 'success'}); });
router.delete('/supplier/:id', function(req, res){res.json({'test': 'success'}); });


module.exports = router;