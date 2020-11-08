
function selectTd(){
	showElements('td');
}

function selectP(){
	showElements('p');
}

function selectImg(){
	showElements('img');
}

function reset(){
	showElements('');
}

function showPanel(){

	var tag = $('.is-selected').prop('tagName');

	$('.editor').addClass('is-selected-td');

	var selector = 'is-selected-'+tag.toLowerCase(); 

	$('body').removeClass('is-selected-td');
	$('body').removeClass('is-selected-p');
	$('body').removeClass('is-selected-img');
	$('body').addClass(selector);

}

function showElements(tag){

	var selector = 'show-'+tag; 

	$('body').removeClass('show-td');
	$('body').removeClass('show-p');
	$('body').removeClass('show-img');
	$('body').addClass(selector);

	$('*').removeClass('is-active');
	unSelect();
}

function unSelect(){
	$('*').removeClass('is-selected');
}

function selectElementToEdit(e){
	e.stopPropagation()
	$('*').removeClass('is-selected');
	$(this).addClass('is-selected');
	showPanel();
	edit();
	
}

$(document).on('mouseenter', '.show-td td, .show-p p, .show-img img', function( event ) {
	$(this).addClass("is-active");
}).on('mouseleave', 'td', function( event ) {
	$(this).removeClass("is-active");
});


$(document).on('click','.is-active', selectElementToEdit);

