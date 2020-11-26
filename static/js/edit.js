$('#form-edit-td').submit( updateTd )
$('#form-edit-table').submit( updateTable )
$('#form-edit-p').submit( updateP )
$('#form-edit-img').submit( updateImg )
$(document).on('click','.get-src-dimension', getSrcDimensions )


function edit(){

	$('#form-edit-td')[0].reset();
	$('#form-edit-table')[0].reset();
	$('#form-edit-p')[0].reset();
	$('#form-edit-img')[0].reset();

	var tag = $('.is-selected').prop('tagName');

	if( tag == 'TD' ){
		editTd();
		editTable();
	}	

	if( tag == 'P' ){
		editP();
	}

	if( tag == 'IMG' ){
		editImg();
	}

}

// ------------------------------------------------------------------------

function editP(){

	var el = $('p.is-selected');
	var style = el.attr('style');
	var content = el.html();

	$('#form-edit-p').find('[name=style]').val(addLineBreakToStyle(style))

	$('#form-edit-p').find('[name=content]').val(content)
	
}

function updateP(e){

	e.preventDefault();

	var style = $('#form-edit-p').find('[name=style]').val();
	var content = $('#form-edit-p').find('[name=content]').val();

	$('p.is-selected').attr('style', removeLineBreakToStyle(style));
	$('p.is-selected').html(content);

	setHistory()
}

// ------------------------------------------------------------------------

function editImg(){

	var el = $('img.is-selected');

	var width 	= el.attr('width');
	var height 	= el.attr('height');
	var src 	= el.attr('src');
	var alt 	= el.attr('alt');
	var style 	= el.attr('style');
	
	// var link 	= el.attr('link');

	var form = $('#form-edit-img');

	form.find('[name=width]').val(width);
	form.find('[name=height]').val(height);
	form.find('[name=src]').val(src);
	form.find('[name=alt]').val(alt);
	form.find('[name=style]').val(addLineBreakToStyle(style));
	
	var parent = el.parent();

	if( parent.prop('tagName') == "A" ){
		var link = parent.prop('href');
		form.find('[name=link]').val(link);
	}

}

function getSrcDimensions(e){

	e.preventDefault();

	var el = $(this)
	var text = el.text()
	var form = el.closest('form');
	var src = form.find('[name=src]').val();
	var width = form.find('[name=width]');
	var height = form.find('[name=height]');

	$(this).text('Loading...');

	getImageSize(src, function(imageObject){

		width.val(imageObject.width);
		height.val(imageObject.height);
		el.text(text);

	})
}

function updateImg(e){

	e.preventDefault();

	var form 	= $('#form-edit-img');
	var width 	= form.find('[name=width]').val()
	var height 	= form.find('[name=height]').val()
	var src 	= form.find('[name=src]').val()
	var alt 	= form.find('[name=alt]').val()
	var style 	= form.find('[name=style]').val()
	var link 	= form.find('[name=link]').val()
	
	var el = $('img.is-selected');
	
	el.attrUpdate('width', width);
	el.attrUpdate('height', height);
	el.attrUpdate('src', src);
	el.attrUpdate('alt', alt);
	el.attrUpdate('style', removeLineBreakToStyle(style));

	var parent = el.parent();

	// se existe link
	if( parent.prop('tagName') == "A" ){
		if(link){
			parent.attr('href', link)
		}else{
			el.unwrap(); // retira o link da imagem
		}
	}else{
		if(link){
			el.wrap( '<a href="'+ link +'" target="_blank"></a>' );
		}
	}

	setHistory()
}

// ------------------------------------------------------------------------

function editTable(){

	var el = $('.is-selected').closest('table');

	var width 	= el.attr('width');
	var height 	= el.attr('height');
	var bgcolor = el.attr('bgcolor');

	$('#form-edit-table').find('input[name=width]').val(width)
	$('#form-edit-table').find('input[name=height]').val(height)
	$('#form-edit-table').find('input[name=bgcolor]').val(bgcolor)

}

function updateTable(e){

	e.preventDefault();

	var el = $('.is-selected').closest('table');

	var width 		= $('#form-edit-table').find('input[name=width]').val();
	var height 		= $('#form-edit-table').find('input[name=height]').val();
	var bgcolor 	= $('#form-edit-table').find('input[name=bgcolor]').val();

	el.attrUpdate('width', width);
	el.attrUpdate('height', height);
	el.attrUpdate('bgcolor', bgcolor);

	setHistory()
}

// ------------------------------------------------------------------------

function editTd(){

	var el = $('.is-selected');
	var width 	= el.attr('width');
	var height 	= el.attr('height');
	var align 	= el.attr('align');
	var valign 	= el.attr('valign');
	var bgcolor = el.attr('bgcolor');
	var style 	= el.attr('style');

	$('#form-edit-td').find('input[name=width]').val(width)
	$('#form-edit-td').find('input[name=height]').val(height)
	$('#form-edit-td').find('input[name=align]').val(align)
	$('#form-edit-td').find('input[name=valign]').val(valign)
	$('#form-edit-td').find('input[name=bgcolor]').val(bgcolor)
	$('#form-edit-td').find('[name=style]').val(addLineBreakToStyle(style))

	setHistory()

}

function updateTd(e){

	e.preventDefault();

	var el = $('.is-selected');
	var form = $('#form-edit-td');

	var width 		= form.find('input[name=width]').val();
	var height 		= form.find('input[name=height]').val();
	var align 		= form.find('input[name=align]').val();
	var valign 		= form.find('input[name=valign]').val();
	var bgcolor 	= form.find('input[name=bgcolor]').val();

	var style 		= form.find('[name=style]').val()

	el.attrUpdate('width', width);
	el.attrUpdate('height', height);
	el.attrUpdate('align', align);
	el.attrUpdate('valign', valign);
	el.attrUpdate('bgcolor', bgcolor);
	el.attrUpdate('style', removeLineBreakToStyle(style));

	setHistory()
}