var mysql = require('mysql');

var connection = mysql.createPool({
  connectionLimit : 50,
  host     : 'localhost',
  user     : 'root',
  password : '12345',
  database : 'pizzaria'
});


function executaSql(sql,dados,callback){
	connection.getConnection(function(err, connection) {
		if(err) { console.log(err); callback(true); return; }
		if (dados = null){
			connection.query(sql,function(err, results) {
			connection.release();
			if(err) { console.log(err); callback(true); return; }
			callback(false, results);
			});
		}else{
			connection.query(sql,dados,function(err, results) {
			connection.release();
			if(err) { console.log(err); callback(true); return; }
			callback(false, results);
			});
		}
	});
}

exports.connection = connection;
exports.executaSql = executaSql;
