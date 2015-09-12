var express = require('express');
var router = express.Router();


router.get('/fornecedores',  function(req, res){res.json({'test': 'success'}); });
router.get('/fornecedores/:id',  function(req, res){res.json({'test': 'success'}); });
router.post('/fornecedores/', function(req, res){res.json({'test': 'success'}); });
router.put('/fornecedores/:id', function(req, res){res.json({'test': 'success'}); });
router.delete('/fornecedores/:id', function(req, res){res.json({'test': 'success'}); });


module.exports = router;