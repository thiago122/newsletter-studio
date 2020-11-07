
jQuery.fn.attrUpdate = function(attr, value) {

	value = value.trim(value);
    return value == '' ? this.removeAttr(attr) : this.attr(attr, value);
};