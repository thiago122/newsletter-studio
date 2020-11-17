$('#form-add-table').submit(createTable);
$('#form-add-img').submit(createImg);
$('#form-add-p').submit(createP);



// ------------------------------------------------------------------------

function createP(e){

	e.preventDefault();

	var form 	= $('#form-add-p');
	var style 	= form.find('[name=style]').val()
	var content = form.find('[name=content]').val()

	var attr = '';

	if(style){
		attr +=  ' style="' + removeLineBreakToStyle(style) + '" '
	}

	var html = '<p '+ attr +'>'+ content +'</p>';

	$('.is-selected').append(html);

	$('#modal-p').modal('toggle');

	$('#form-add-p')[0].reset();

}
// ------------------------------------------------------------------------

function createImg(e){

	e.preventDefault();

	var form 	= $('#form-add-img');
	var width 	= form.find('[name=width]').val()
	var height 	= form.find('[name=height]').val()
	var src 	= form.find('[name=src]').val()
	var alt 	= form.find('[name=alt]').val()
	var style 	= form.find('[name=style]').val()
	var link 	= form.find('[name=link]').val()

	var attr = '';

	if(width){
		attr +=  ' width="' + width + '" '
	}

	if(height){
		attr +=  ' height="' + height + '" '
	}

	if(src){
		attr +=  ' src="' + src + '" '
	}

	if(alt){
		attr +=  ' alt="' + alt + '" '
	}

	if(style){
		attr +=  ' style="' + removeLineBreakToStyle(style) + '" '
	}

	if( link ){
		var html  = '<a href="'+ link +'" target="_blank">';
			html += '<img '+ attr +'>';
			html += '</a>';
	}else{
		var html = '<img '+ attr +'>';
	}
	
	$('.is-selected').append(html);

	$('#modal-img').modal('toggle');

	$('#form-add-img')[0].reset();

}



// ------------------------------------------------------------------------

function createTable(e){

	e.preventDefault();

	var form 	= $('#form-add-table');
	var width 	= form.find('[name=width]').val()
	var trs 	= form.find('[name=trs]').val()
	var tds 	= form.find('[name=tds]').val()
	var bgcolor = form.find('[name=bgcolor]').val()
	var widthTd = Math.round( width/tds );

	var attr = '';

	if(width){
		attr +=  ' width="' + width + '" '
	}

	if(bgcolor){
		attr +=  ' bgcolor="' + bgcolor + '" '
	}

	var htmlTable = '<table border="0" cellspacing="0" cellpadding="0" align="center"  '+ attr +'>';

	for (var i = trs - 1; i >= 0; i--) {
		htmlTable += '<tr>';

		for (var j = tds - 1; j >= 0; j--) {
			htmlTable += '<td width="'+(widthTd)+'">';
			htmlTable += '';
			htmlTable += '</td>';
		}

		htmlTable += '</tr>';
	}

	htmlTable += '</table>';

	$('.is-selected').append(htmlTable);

	$('#modal-table').modal('toggle');

	$('#form-add-table')[0].reset();

}


// ------------------------------------------------------------------------

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
	var qtTds = tr.find(' > td').length;

	console.log(qtTds)

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