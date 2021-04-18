$(document).keydown(function(event) {


    // [ALT + CTRL + c] editar células 
    if (event.altKey &&  event.ctrlKey && event.which === 80) {
        var tagName = $('.is-selected').prop('tagName');

        if(tagName == 'TD'){
            // $('#modal-p').modal('show')
            var html = '<p contenteditable="true">TEXT</p>';
            $('.is-selected').append(html);
        }
       
    } 

   

});