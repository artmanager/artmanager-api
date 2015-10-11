var express = require('express');
var router = express.Router();
var Autenticacao = require('../../services/AutenticacaoService');

router.post('/autenticacao/', Autenticacao.auth.bind(Autenticacao));
router.get('/autenticacao/', Autenticacao.auth.bind(Autenticacao));

module.exports = router;