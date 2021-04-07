
function createlink(e){
	var linkURL = prompt('Enter a URL:', 'http://');
    var sText = document.getSelection();
    document.execCommand('insertHTML', false, '<a href="' + linkURL + '" target="_blank">' + sText + '</a>');
}

function removeLink(e) {
   document.execCommand("unlink", false, false);
}


function execEditor(e){
	var comando = $(this).attr('data-editor');
    // document.execCommand(comando, false, null);
    var sText = document.getSelection();
    var html = '<'+ comando +'>' + sText + '</'+ comando +'>'
    document.execCommand('insertHTML', false, html);
    $('undefined').remove()
    e.preventDefault(); // prevents selection in all but MSIE
}

function clearWrongNewLines(){

	$("[contenteditable]").each(function(){
		var html = $(this).html();
		html =  html.replaceAll('<div>', '<br>');
		console.log(html)
		html =  html.replaceAll('</div>', '');
		console.log(html)
		$(this).html(html);
	});
	
}


function initTextEditor(){

	$("[contenteditable]").highlighter('destroy');

	$("[contenteditable]").highlighter({"selector": ".holder"});

	$('.holder').mousedown(function(){
	    return false;
	});

	$('.btn-right').click(function(){
	    $('.holder').hide();
	    return false;
	});

}

$('body').on('click', '.create-link', createlink );
$('body').on('click', '.remove-link', removeLink );
$('body').on('click', '.btn-editor', execEditor );
$('body').on('focusout','[contenteditable]', clearWrongNewLines);
initTextEditor()


