$(document).ready( function() {

	$( "#botao_listar_cliente" ).on( "click", function() {
		( "#conteudo" ).load( "/ajax?file=listarcliente.jade" );
	});
	
});