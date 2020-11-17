
$('#form-import-news').submit(importar)

$(document).on('change','[name=arquivo]', selectFile)

function selectFile(){
       
    var fr = new FileReader(); 

    fr.readAsText(this.files[0], 'ISO-8859-1'); 

    fr.onload = function(){ 

		var html = $('<content>').append($.parseHTML( fr.result ));
		// console.log( fr.result )

		// reseta a news atual em edição
        $('body').find('table').eq(0).remove();
        
        // pega a tabela do arquivo
        var table = html.find('table').eq(0);

        var headHtml = '';

        headHtml += html.find('title').eq(0).outerHTML();
        headHtml += html.find('link').outerHTML();

		html.find('meta').each(function( index ) {
			headHtml += html.find('meta').eq(index).outerHTML()
		});
        
		$('[name=head-import]').val(html_beautify(headHtml));
        $('[name=body-import]').val(html_beautify(table.outerHTML()));

    }

}


function importar(e){

	e.preventDefault()

    var head = $('[name=head-import]').val();
    var table = $('[name=body-import]').val();

    $('[name=head-export]').val( html_beautify(head));

    $('body').append(table);

    $('#modal-import-local').modal('hide');

    // reseta
    $('#form-import-news')[0].reset();

}