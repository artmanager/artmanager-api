var express = require('express');
var	router = express.Router();
var Usuario = require('../../services/UserService'),
	config = require('../config.js'),
	common = require(config.common.fileCommon);

router.get(common.routes.user.getAllUsers, function (req, res) { res.json({ 'test': 'success' }); });
router.get('/users/:id',  function(req, res){res.json({'test': 'success'}); });
router.post(common.routes.user.postUsers, Usuario.UserRegister.bind(Usuario));
router.put(common.routes.user.putEditPassword, Usuario.UpdatePassword.bind(Usuario));
router.delete('/users/:id', function(req, res){res.json({'test': 'success'}); });


module.exports = router;