var express = 		require('express'),
	app = 			express(),
	
	usuarios = 			require('./usuarios'),
	pedidos = 			require('./pedidos'),
	producao = 			require('./producao'),
	product = 			require('./product'),
	productCategory= 	require('./productCategory'),
	usuarios = 			require('./usuarios'),
	vendas = 			require('./vendas'),
	autenticacao = 		require('./autenticacao'),
	fornecedor = 		require('./fornecedores'),
	cliente =			require('./cliente');


app.use('/', pedidos);
app.use('/', producao);
app.use('/', product);
app.use('/', usuarios);
app.use('/', vendas);
app.use('/', autenticacao);
app.use('/', fornecedor);
app.use('/', cliente);
app.use('/', productCategory);


module.exports = app;