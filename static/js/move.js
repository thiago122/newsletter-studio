
function moveTdToNext(){
	moveTd('next');
}

function moveTdToPrev(){
	moveTd('prev');
}

function moveTd(positionToMove){
	
	var el = $('.is-selected');

	if( positionToMove == 'prev' ){
		el.after(el.prev());
	}else{
		el.before(el.next());
	}

}

/* ------------------------------------------------------------ */
function moveTrToNext(){
	moveTr('next');
}

function moveTrToPrev(){
	moveTr('prev');
}


function moveTr(positionToMove){
	
	var el = $('.is-selected').closest('tr');

	if( positionToMove == 'prev' ){
		el.after(el.prev());
	}else{
		el.before(el.next());
	}

}

/* ------------------------------------------------------------ */
function movetableToNext(){
	movetable('next');
}

function movetableToPrev(){
	movetable('prev');
}


function moveTable(positionToMove){
	
	var el = $('.is-selected').closest('table');

	if( positionToMove == 'prev' ){
		el.after(el.prev());
	}else{
		el.before(el.next());
	}

}