var express = require('express');
var router = express.Router();
var Cliente = require('../../services/ClientService');
var config = require('../config.js');
var common = require(config.common.fileCommon);

router.get('/cliente',  function(req, res){res.json({'test': 'success'}); });
router.get('/cliente/:id',  function(req, res){res.json({'test': 'success'}); });
router.post(common.routes.client.postCadastroCliente, Cliente.ClientRegister.bind(Cliente));
router.put('/cliente/:id', function(req, res){res.json({'test': 'success'}); });
router.delete('/cliente/:id', function(req, res){res.json({'test': 'success'}); });

module.exports = router;