'use strict';
let express = require('express'),
    router = express.Router(),
    production = require('../../services/ProductionService.js'),
    config = require('../../config/config.js'),
    common = require(config.common.fileCommon);

router.get(common.routes.production.getProduction, production.GetRowProduction.bind(production));
router.get('/producao/:id',  function(req, res){res.json({'test': 'success'}); });
router.post('/producao/', function(req, res){res.json({'test': 'success'}); });
router.put('/producao/:id', function(req, res){res.json({'test': 'success'}); });
router.delete('/producao/:id', function(req, res){res.json({'test': 'success'}); });


module.exports = router;