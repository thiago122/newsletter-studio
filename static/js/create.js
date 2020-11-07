
function createTdAfter(){
	createTd('after');
}

function createTdBefore(){
	createTd('before');
}

function createTd(positionToInsert){

	var el = $('.is-selected');

	html = '<td></td>';

	if( positionToInsert == 'before' ){
		$('td.is-selected').before(html);
	}else{
		$('td.is-selected').after(html);
	}

}

// ------------------------------------------------------------------------
function createTrBefore(){
	createTr('before');
}

function createTrAfter(){
	createTr('after');
}

function createTr(positionToInsert){

	var tr = $('.is-selected').closest('tr');
	var qtTds = tr.find('td').length;

	html = '<tr>';

	for (var j = qtTds - 1; j >= 0; j--) {
		html += '<td>';
		html += '</td>';
	}

	html += '</tr>';

	if( positionToInsert == 'before' ){
		tr.before(html);
	}else{
		tr.after(html);
	}

}