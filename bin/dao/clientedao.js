var appRoot = require('app-root-path');
var pool = require(appRoot + '/bin/connection/connection.js');

//lists clients
function listarClientes(callback){
  var sql = "SELECT * from clientes";
  pool.executaSql(sql,null,callback);

};

function inserirCliente(NOME,ENDERECO,TELEFONE,callback){

	var sql = "INSERT INTO clientes (NOME,ENDERECO,TELEFONE) VALUES(" +
	pool.connection.escape(NOME.toString()) + "," +
	pool.connection.escape(ENDERECO.toString()) + "," +
	pool.connection.escape(TELEFONE.toString()) + ")";
	pool.executaSql(sql,null,callback);
}


function selecionarClienteporID(ID,callback){
  var sql = "SELECT * from clientes where id = " + ID.toString();
  console.log(sql);
  pool.executaSql(sql,null,callback);

};


function alterarCliente(ID,NOME,ENDERECO,TELEFONE,callback){

	var sql = "UPDATE clientes set NOME = " +
	pool.connection.escape(NOME.toString()) + ",ENDERECO = " +
	pool.connection.escape(ENDERECO.toString()) + ",TELEFONE = " +
	pool.connection.escape(TELEFONE.toString()) + " where id = " +
	ID.toString();
	console.log(sql);
	pool.executaSql(sql,null,callback);
}


exports.listarClientes = listarClientes;
exports.inserirCliente = inserirCliente;
exports.alterarCliente = alterarCliente;
exports.selecionarClienteporID = selecionarClienteporID;
