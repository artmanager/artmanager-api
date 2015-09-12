var express = 		require('express'),
	app = 			express(),
	
	usuarios = 		require('./usuarios'),
	fornecedores = 	require('./fornecedores'),
	pedidos = 		require('./pedidos'),
	producao = 		require('./producao'),
	produtos = 		require('./produtos'),
	usuarios = 		require('./usuarios'),
	vendas = 		require('./vendas'); 

app.use('/', fornecedores);
app.use('/', pedidos);
app.use('/', producao);
app.use('/', produtos);
app.use('/', usuarios);
app.use('/', vendas);


module.exports = app;