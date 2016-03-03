var express = require('express'),
	router = express.Router(),
	ProductCategory = require('../../services/ProductCategoryService');

router.get('/productCategory/',  ProductCategory.GetAllCategory.bind(ProductCategory));
router.get('/productCategory/:id',  function(req, res){res.json({'test': 'success'}); });
router.post('/productCategory/', ProductCategory.InsertProductCategory.bind(ProductCategory));
router.put('/productCategory/:id', function(req, res){res.json({'test': 'success'}); });
router.delete('/productCategory/:id', function(req, res){res.json({'test': 'success'}); });


module.exports = router;
