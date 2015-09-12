var express = require('express');
var router = express.Router();


router.get('/producao',  function(req, res){res.json({'test': 'success'}); });
router.get('/producao/:id',  function(req, res){res.json({'test': 'success'}); });
router.post('/producao/', function(req, res){res.json({'test': 'success'}); });
router.put('/producao/:id', function(req, res){res.json({'test': 'success'}); });
router.delete('/producao/:id', function(req, res){res.json({'test': 'success'}); });


module.exports = router;