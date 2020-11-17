$('#form-export-news').on('submit', exportFile);
// https://gist.github.com/liabru/11263260


function prepareToExportFile(){

	var textHtml = $('[name=head-export]').val()

	textHtml = $.trim(textHtml);

	if( textHtml == "" ){

		textHtml = 	'<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1" />';
		textHtml += '<meta name="x-apple-disable-message-reformatting">';
		textHtml += '<title> MEU TÍTULO </title>';
		textHtml += '<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/viniciusvasc13/globoplay@master/globotipo2.css">';
		textHtml += '<style>body{margin: 0; padding: 0;}</style>';

	}

	$('[name=head-export]').val( html_beautify(textHtml))

}


function exportFile(){

	var form = $('#form-export-news');

	// carrega o modelo
	var request = $.ajax({
		url: form.find('[name=model-export]').val()
	});

	request.done(function(html){

		// pega a tabela editada no app
		var htmlNewsEdited = $('body > table').outerHTML();

		// coloca o html editado no body modelo
		var text = html.replace("HTML_TABLE", htmlNewsEdited);
			text = text.replace("HTML_HEAD", $('[name=head-export]').val() );
			text = html_beautify( text );

		var blob = new Blob(["\ufeff", text], { type: "text/plain;" });

		var anchor = document.createElement('a');

		anchor.download = "news.html";
		anchor.href = (window.webkitURL || window.URL).createObjectURL(blob);
		anchor.dataset.downloadurl = ["text/plain;", anchor.download, anchor.href].join(':');
		anchor.click();

		$('#modal-export').modal('hide');
	});

}
