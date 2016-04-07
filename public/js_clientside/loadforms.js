$(document).ready( function() {

	$( "#botao_listar_cliente" ).on( "click", function() {
		$( "#conteudo" ).load( "/clientes/listar",function onCompletar(){
			$.getScript("js_clientside/botoes_cliente.js");
		});
	});
	
	
	$( "#botao_novo_cliente" ).on( "click", function() {
		$( "#conteudo" ).load( "/clientes/form_inserir" );
	});
	
	
});