
function exportFile(){
	
	// https://gist.github.com/liabru/11263260

	var text = $('.nm-table-conainer').outerHTML();

	var blob = new Blob([text], { type: 'text/plain' });
	var anchor = document.createElement('a');

	anchor.download = "news.html";
	anchor.href = (window.webkitURL || window.URL).createObjectURL(blob);
	anchor.dataset.downloadurl = ['text/plain', anchor.download, anchor.href].join(':');
	anchor.click();
	
}
