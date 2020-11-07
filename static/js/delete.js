
function deleteTd(){

	var el = $('.is-selected').remove();

	if( el.siblings().length == 0 ){
		alert('Última célula: remova a linha ou a tabela');
		return false;
	}

	el.remove();
	unSelect()
}

function deleteTr(){

	var el = $('.is-selected').closest('tr')

	if( el.siblings().length == 0 ){
		alert('Última linha: remova a tabela');
		return false;
	}

	el.remove();
	unSelect()
}

function deleteTable(){

	var el = $('.is-selected').closest('table');

	if( el.parents('table').length == 0 ){
		alert('A tabela mãe não pode ser removida');
		return false;
	}

	el.remove();
	unSelect()
}