var express = require('express');
var	router = express.Router();
var Usuario = require('../../services/UsuariosService'),
	config = require('../config.js'),
	common = require(config.common.fileCommon);

router.get(common.routes.user.getAllUsers, function(req, res){res.json({'test': 'success'}); });
router.get('/users/:id',  function(req, res){res.json({'test': 'success'}); });
router.post(common.routes.user.postUsers, Usuario.cadastro.bind(Usuario));
router.put(common.routes.user.putUsersId, Usuario.cadastro.bind(Usuario));
router.delete('/users/:id', function(req, res){res.json({'test': 'success'}); });


module.exports = router;