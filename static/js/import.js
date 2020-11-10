
$('#form-import-news').submit(importar)
$(document).on('change','[name=arquivo]', importar)


function importar(){
       
    var fr=new FileReader(); 
    fr.onload = function(){ 


var html = $('<div>').append($.parseHTML( fr.result ));

        $('body').find('table').eq(0).remove();
        
        var table = html.find('table').eq(0);
        $('body').append(table);
    } 
      
    fr.readAsText(this.files[0]); 

}