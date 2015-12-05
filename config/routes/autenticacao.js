var express = require('express');
var router = express.Router();
var Autenticacao = require('../../services/AutenticacaoService');

router.post('/autenticacao/', Autenticacao.geraToken.bind(Autenticacao));
router.get('/autenticacao/',  function(req, res){res.json({'test': 'success'}); });
module.exports = router;