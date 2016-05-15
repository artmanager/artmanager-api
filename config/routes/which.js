'use strict';
var express = require('express');
var router = express.Router();
let which = require('../../services/WhichService.js'),
    config = require('../config.js'),
	common = require(config.common.fileCommon);


router.get(common.routes.which.getWhich, which.GetWhich.bind(which));
router.get('/pedidos/:id',  function(req, res){res.json({'test': 'success'}); });
router.post(common.routes.which.postWhich, which.InsertWhich.bind(which));
router.put('/pedidos/:id', function(req, res){res.json({'test': 'success'}); });
router.delete('/pedidos/:id', function(req, res){res.json({'test': 'success'}); });


module.exports = router;