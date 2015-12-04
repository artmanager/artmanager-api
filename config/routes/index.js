var express = 		require('express'),
	app = 			express(),
	
	usuarios = 		require('./usuarios'),
	pedidos = 		require('./pedidos'),
	producao = 		require('./producao'),
	produtos = 		require('./produtos'),
	usuarios = 		require('./usuarios'),
	vendas = 		require('./vendas'),
	autenticacao = 	require('./autenticacao'),
	fornecedor = 	require('./fornecedores'),
	cliente =		require('./cliente'); 




app.use('/', pedidos);
app.use('/', producao);
app.use('/', produtos);
app.use('/', usuarios);
app.use('/', vendas);
app.use('/', autenticacao);
app.use('/', fornecedor);
app.use('/', cliente);


module.exports = app;