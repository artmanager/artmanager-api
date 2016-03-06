var express = require('express');
var router = express.Router();


router.get('/pedidos',  function(req, res){res.json({'test': 'success'}); });
router.get('/pedidos/:id',  function(req, res){res.json({'test': 'success'}); });
router.post('/pedidos/', function(req, res){res.json({'test': 'success'}); });
router.put('/pedidos/:id', function(req, res){res.json({'test': 'success'}); });
router.delete('/pedidos/:id', function(req, res){res.json({'test': 'success'}); });


module.exports = router;