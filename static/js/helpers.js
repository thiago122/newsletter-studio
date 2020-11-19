
function addLineBreakToStyle(style){
	style = style.split(';')
	return style.join(';\r\n');
}

function removeLineBreakToStyle(style){
	return style.replace(/(\r\n|\n|\r)/gm,"");
}

function getImageSize(src, callback){

	var img = new Image();
	img.onload = function() {
		callback(this)
	}
	img.src = src;
}

