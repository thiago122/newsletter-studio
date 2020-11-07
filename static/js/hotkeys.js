$(document).keydown(function(event) {

    // [ALT + c] editar células 
    if (event.altKey &&  event.which === 67) {
        selectTd();
    }            

    // [ALT + i] editar células 
    if (event.altKey &&  event.which === 73) {
        selectImg();
    }

    // [ALT + p] editar parágrado 
    if (event.altKey &&  event.which === 80) {
        selectP();
    }

    // [ALT + r] resetar 
    if (event.altKey &&  event.which === 82) {
        reset();
    }

});