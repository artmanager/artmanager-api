var express = require('express');
var router = express.Router();

router.get('/vendas',  function(req, res){res.json({'test': 'success'}); });
router.get('/vendas/:id',  function(req, res){res.json({'test': 'success'}); });
router.post('/vendas/', function(req, res){res.json({'test': 'success'}); });
router.put('/vendas/:id', function(req, res){res.json({'test': 'success'}); });
router.delete('/vendas/:id', function(req, res){res.json({'test': 'success'}); });


module.exports = router;