var express = require('express');
var router = express.Router();
var Usuario = require('../../services/UsuariosService');

//router.get('/usuarios/', Usuario.teste.bind(Usuario));
router.get('/usuarios/:id',  function(req, res){res.json({'test': 'success'}); });
router.post('/usuarios/', Usuario.cadastro.bind(Usuario));
router.post('/usuarios/:id', Usuario.login.bind(Usuario));
router.put('/usuarios/:id', Usuario.cadastro.bind(Usuario));
router.delete('/usuarios/:id', function(req, res){res.json({'test': 'success'}); });


module.exports = router;