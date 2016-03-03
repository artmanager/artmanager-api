var express = 			require('express'),
	app = 				express(),	
	pedidos = 			require('./pedidos'),
	producao = 			require('./producao'),
	product = 			require('./product'),
	productCategory= 	require('./productCategory'),
	user = 				require('./user'),
	vendas = 			require('./vendas'),
	authentication = 	require('./authentication'),
	fornecedor = 		require('./supplier'),
	cliente =			require('./cliente');


app.use('/', pedidos);
app.use('/', producao);
app.use('/', product);
app.use('/', user);
app.use('/', vendas);
app.use('/', authentication);
app.use('/', fornecedor);
app.use('/', cliente);
app.use('/', productCategory);


module.exports = app;