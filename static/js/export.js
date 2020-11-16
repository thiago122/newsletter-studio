$('#form-export-news').on('submit', exportFile);

function exportFile(e){

	// https://gist.github.com/liabru/11263260
	
	e.preventDefault();

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
			text = text.replace("HTML_HEAD", $('[name=head-export]').val());

		var blob = new Blob(["\ufeff", text], {type: "text/plain;" });

		var anchor = document.createElement('a');

		anchor.download = "news.html";
		anchor.href = (window.webkitURL || window.URL).createObjectURL(blob);
		anchor.dataset.downloadurl = ["text/plain;", anchor.download, anchor.href].join(':');
		anchor.click();

		// to do modal close
		// BeautifyHtml
	});

}
