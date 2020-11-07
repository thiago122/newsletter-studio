function removeAllAtributtes(){

	$('.is-selected').each(function() {
		
		var attributes = $.map(this.attributes, function(item) {
			return item.name;
		});

		var element = $(this);
		$.each(attributes, function(i, item) {
			element.removeAttr(item);
		});
	});

}
