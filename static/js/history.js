

function getHistory(){
	if( localStorage.getItem("history") == null ){
		return []
	}
	var h = localStorage.getItem("history");

	return JSON.parse(localStorage.getItem("history"))
}

function setHistory(){

	var history = getHistory();

	var historyItem = {
		'table' : $('body > table').outerHTML(),
		'head' : $('[name=head-export]').val()
	}

	history.push(historyItem);

	localStorage.setItem('history', JSON.stringify(history))

}

function replaceByHistory(index){

	var h = getHistory();

	hItem = h[index]

	$('body').find('table').eq(0).remove();

    $('[name=head-export]').val( hItem.head);

    $('body').append(hItem.table);

}
