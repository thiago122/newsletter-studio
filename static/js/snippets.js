

function snippetAtrubutosP( formSelector, snippetName ){

	var form = $(formSelector).closest('form');

	var value = '';

	if( snippetName == 'gp-black' ){
		value = "font-weight: 800; font-family: 'globotipo_textoblack', -apple-system,system-ui, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Helvetica, Arial, sans-serif; font-size: 14px; line-height: 1; color: #525252; text-align: center; margin: 1px 1px 1px 1px; ";

	}

	if( snippetName == 'gp-regular' ){
		value = " font-family: 'globotipo_textoregular', -apple-system,system-ui, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Helvetica, Arial, sans-serif; font-size: 14px; line-height: 10px; color: #525252; text-align: center; margin: 1px 1px 1px 1px; ";
	}

	if( snippetName == 'padrao' ){
		value = " font-family: -apple-system,system-ui, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Helvetica, Arial, sans-serif; font-size: 14px; line-height: 10px; color: #525252; text-align: center; margin: 1px 1px 1px 1px; ";
	}

	if( snippetName == 'espacamento' ){
		value = ' margin: 0; padding: 0; font-size: 1px; line-height: 15px; ';
		form.find('[name=content]').val('&nbsp;')
	}

	form.find('[name=style]').val(addLineBreakToStyle(value))

}