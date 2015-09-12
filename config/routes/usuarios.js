var express = require('express');
var router = express.Router();


router.get('/usuarios',  function(req, res){res.json({'test': 'success'}); });
router.get('/usuarios/:id',  function(req, res){res.json({'test': 'success'}); });
router.post('/usuarios/', function(req, res){res.json({'test': 'success'}); });
router.put('/usuarios/:id', function(req, res){res.json({'test': 'success'}); });
router.delete('/usuarios/:id', function(req, res){res.json({'test': 'success'}); });


module.exports = router;