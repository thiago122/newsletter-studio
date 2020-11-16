
function addLineBreakToStyle(style){
	style = style.split(';')
	return style.join(';\r\n');
}

function removeLineBreakToStyle(style){
	return style.replace(/(\r\n|\n|\r)/gm,"");
}
