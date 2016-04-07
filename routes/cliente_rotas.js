var express = require('express');
var router = express.Router();
var appRoot = require('app-root-path');
var clienteDao = require(appRoot + '/bin/dao/clientedao.js');


router.get('/form_inserir', function(req, res, next) {
  res.render('inserircliente');
});


router.get('/listar', function(req, res) {
	
	clienteDao.listarClientes(function(err, results) {
		if(err) { res.status(400).json(err); return;}
		res.render('clientes', {
			"clientes" : results
		});
	});
});


router.post('/inserir', function(req, res) {
   	clienteDao.inserirCliente(req.body.nome,req.body.endereco,req.body.telefone,function(err, results) {
		if(err) { res.status(400).json(err); return;}
		res.render('index', { title: 'Express' });
	});
});


router.post('/alterar', function(req, res) {
   	clienteDao.alterarCliente(req.query.id,req.body.nome,req.body.endereco,req.body.telefone,function(err, results) {
		if(err) { res.status(400).json(err); return;}
		res.render('index', { title: 'Express' });
	});
});



router.get('/form_alterar', function(req, res) {
  clienteDao.selecionarClienteporID(req.query.id,function(err, result) {
		if(err) { res.status(400).json(err); return;}
		//console.log(results);
		res.render('alterarcliente', {cliente : result[0]});
	});
});


module.exports = router;