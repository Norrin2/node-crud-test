var express = require('express');
var appRoot = require('app-root-path');
var clienteDao = require(appRoot + '/bin/dao/clientedao.js');

var app = express();

app.post('/novo-cliente', function(req, res) {
   	//clienteDao.inserirCliente(req.body.nome,req.body.endereco,req.body.telefone,function(err, results) {
	clienteDao.inserirCliente(req,function(err, results) {
		if(err) { res.status(400).json(err); return;}
		res.render('index', { title: 'Express' });
	});
});
