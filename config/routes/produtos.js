var express = require('express');
var router = express.Router();


router.get('/produtos',  function(req, res){res.json({'test': 'success'}); });
router.get('/produtos/:id',  function(req, res){res.json({'test': 'success'}); });
router.post('/produtos/', function(req, res){res.json({'test': 'success'}); });
router.put('/produtos/:id', function(req, res){res.json({'test': 'success'}); });
router.delete('/produtos/:id', function(req, res){res.json({'test': 'success'}); });


module.exports = router;