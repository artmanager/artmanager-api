var express = require('express');
var router = express.Router();

router.get('/supplier',  function(req, res){res.json({'test': 'success'}); });
router.get('/supplier/:id',  function(req, res){res.json({'test': 'success'}); });
router.post('/supplier/', function(req, res){res.json({'test': 'success'}); });
router.put('/supplier/:id', function(req, res){res.json({'test': 'success'}); });
router.delete('/supplier/:id', function(req, res){res.json({'test': 'success'}); });


module.exports = router;