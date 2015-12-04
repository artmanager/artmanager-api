var express = require('express');
var router = express.Router();
var Cliente = require('../../services/ClientesService');

router.get('/cliete',  function(req, res){res.json({'test': 'success'}); });
router.get('/cliente/:id',  function(req, res){res.json({'test': 'success'}); });
router.post('/cliente/', Cliente.CadastroCliente.bind(Cliente));
router.put('/cliente/:id', function(req, res){res.json({'test': 'success'}); });
router.delete('/cliente/:id', function(req, res){res.json({'test': 'success'}); });

module.exports = router;