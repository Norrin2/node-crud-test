	
	$( ".botao_altera_cliente" ).on( "click", function() {
		var id = $(this).data('id');
		$( "#conteudo" ).load( "/clientes/form_alterar?id=" + id);
	});