var express 		= require('express'),
 	router 			= express.Router(),
 	Autenticacao 	= require('../../services/AuthenticationService');
 	config 			= require('../config.js');
	common 			= require(config.common.fileCommon);

router.post(common.routes.authentication.postGenerateToken, Autenticacao.GenerateToken.bind(Autenticacao));

module.exports = router;