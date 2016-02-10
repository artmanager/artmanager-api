var express = require('express');
var router = express.Router();
var Autenticacao = require('../../services/AutenticacaoService');

router.post('/autenticacao/', Autenticacao.GenerateToken.bind(Autenticacao));

module.exports = router;