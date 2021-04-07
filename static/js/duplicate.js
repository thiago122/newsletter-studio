
function duplicateTrBefore(){
	duplicateTr('before');
}

function duplicateTrAfter(){
	duplicateTr('after');
}

function duplicateTr(positionToInsert){

	var selected = $('td.is-selected');
	var parent = selected.closest('tr');

	var html = parent.outerHTML();
	
	if( positionToInsert == 'before' ){
		parent.before(html);
	}else{
		parent.after(html);
	}

	$('*').removeClass('is-selected')
	$(selected).addClass('is-selected')
	initTextEditor();
}

// ------------------------------------------------------------------------


function duplicateTdBefore(){
	duplicateTd('before');
}

function duplicateTdAfter(){
	duplicateTd('after');
}

function duplicateTd(positionToInsert){

	var selected = $('td.is-selected');

	var html = selected.outerHTML();
	
	if( positionToInsert == 'before' ){
		selected.before(html);
	}else{
		selected.after(html);
	}

	$('*').removeClass('is-selected')
	$(selected).addClass('is-selected')
	initTextEditor();
}