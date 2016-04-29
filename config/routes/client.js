var express = require('express');
var router = express.Router();
var Client = require('../../services/ClientService');
var config = require('../config.js');
var common = require(config.common.fileCommon);

router.get(common.routes.client.getAllClients, Client.GetAll.bind(Client));
router.get('/cliente/:id',  function(req, res){res.json({'test': 'success'}); });
router.post(common.routes.client.postCadastroCliente, Client.ClientRegister.bind(Client));
router.put('/cliente/:id', function(req, res){res.json({'test': 'success'}); });
router.delete('/cliente/:id', function(req, res){res.json({'test': 'success'}); });

module.exports = router;