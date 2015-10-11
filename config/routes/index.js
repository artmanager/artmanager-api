var express = 		require('express'),
	app = 			express(),
	
	usuarios = 		require('./usuarios'),
	fornecedores = 	require('./fornecedores'),
	pedidos = 		require('./pedidos'),
	producao = 		require('./producao'),
	produtos = 		require('./produtos'),
	usuarios = 		require('./usuarios'),
	vendas = 		require('./vendas'),
	autenticacao = 	require('./autenticacao'); 


app.use('/', fornecedores);
app.use('/', pedidos);
app.use('/', producao);
app.use('/', produtos);
app.use('/', usuarios);
app.use('/', vendas);
app.use('/', autenticacao);


module.exports = app;