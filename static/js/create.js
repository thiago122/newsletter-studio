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
		attr +=  ' style="' + style + '" '
	}

	var html = '<p '+ attr +'>'+ content +'</p>';

	$('.is-selected').append(html);

	$('#modal-p').modal('toggle');

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
		attr +=  ' style="' + style + '" '
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
	console.log( 'passei' );
	if(width){
		attr +=  ' width="' + width + '" '
	}
	console.log( 'passei' );
	if(bgcolor){
		attr +=  ' bgcolor="' + bgcolor + '" '
	}
	console.log( 'passei' );
	var htmlTable = '<table border="0" cellspacing="0" cellpadding="0" align="center"  '+ attr +'>';
	console.log( 'passei' );
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

	console.log( 'passei' );

	$('.is-selected').append(htmlTable);

	$('#modal-table').modal('toggle');

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