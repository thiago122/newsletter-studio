$('#form-edit-td').submit( updateTd )
$('#form-edit-table').submit( updateTable )


function edit(){

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

function editP(){}
function saveP(){}

// ------------------------------------------------------------------------

function editImg(){}
function saveImg(){}

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
}

// ------------------------------------------------------------------------

function editTd(){

	var el = $('.is-selected');
	var width 	= el.attr('width');
	var height 	= el.attr('height');
	var align 	= el.attr('align');
	var valign 	= el.attr('valign');
	var bgcolor = el.attr('bgcolor');

	$('#form-edit-td').find('input[name=width]').val(width)
	$('#form-edit-td').find('input[name=height]').val(height)
	$('#form-edit-td').find('input[name=align]').val(align)
	$('#form-edit-td').find('input[name=valign]').val(valign)
	$('#form-edit-td').find('input[name=bgcolor]').val(bgcolor)

}

function updateTd(e){

	e.preventDefault();

	var el = $('.is-selected');

	var width 		= $('#form-edit-td').find('input[name=width]').val();
	var height 		= $('#form-edit-td').find('input[name=height]').val();
	var align 		= $('#form-edit-td').find('input[name=align]').val();
	var valign 		= $('#form-edit-td').find('input[name=valign]').val();
	var bgcolor 	= $('#form-edit-td').find('input[name=bgcolor]').val();


	el.attrUpdate('width', width);
	el.attrUpdate('height', height);
	el.attrUpdate('align', align);
	el.attrUpdate('valign', valign);
	el.attrUpdate('bgcolor', bgcolor);

}