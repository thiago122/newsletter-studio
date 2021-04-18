

function unit(value){

    const units = [ 'px', '%', 'rem', 'em', 'vh', 'vw', 'vmin', 'vmax', 'ex', 'cm', 'mm', 'in', 'pt', 'pc', 'ch' ];
    
    let valueNum = parseFloat( value );

    value = value.toString();

    const matchUnit = value.match( new RegExp( `${ valueNum }(${ units.join('|') })`, 'i') );

    if(!matchUnit){
        return false
    }

    return matchUnit[1];
}

function updateValue(value, type, $input){

    let valueNum = parseFloat( value );
    let unitValue = unit(value);

    if(isNaN(valueNum) || !unit(value) ){

        valueNum = 0;
    }else{

        if(type == 'minus') {
            valueNum--;
        }else{
            valueNum++;
        }
    }

    if( !unit(value) ){
        unitValue = 'px';
    }

    $input.val(valueNum + unitValue);
}

function updateValueKey(value, $input){

    let valueNum = parseFloat( value );

    if(!value){
        console.log('não exite valor no campo');
        return
    }

    if(isNaN(valueNum) ){
        console.log('não existe valor numérico')
        return
    }

    if( !unit(value) ){
        console.log('tipo de unidade inválida')
        return
    }

    $input.val( valueNum + unit(value));
}

function changeInputValueByArrowUpDownKey(e, $input, callback){

    let value = $input.val();

    switch(e.key) {
        
        case 'ArrowUp':
            updateValue(value, 'plus', $input);
            break;
        case 'ArrowDown':
            updateValue(value, 'minus', $input);
            break;
    }

    if( callback ){
        callback()
    }

    return $input.val();

}

function _changeInputValueByArrowUpDownKey(e, $input, callback){

    let value = $input.val();

    updateValueKey(value, $input);

    if( callback ){
        callback()
    }

    return $input.val();

}


function paddingMarginValue(cssPropertie){

    let paddings = [];

    let hasValue = false;

    $("input[name='"+cssPropertie+"[]']").each(function(){
        let value = $(this).val();

        if(value){
            paddings.push(value);
            hasValue = true;
        }else{
            paddings.push('0px') 
        }
    });

    if( hasValue === true ){
        return paddings.join(' ');
    }

    return null;
}

function padding(){
    return paddingMarginValue('padding')
}

function margin(){
    return paddingMarginValue('margin')
}

function changeStyles(){

    const element = document.querySelector("div");

    if( $('#width').val() ){
        element.style.width =  $('#width').val();
    }

    if( $('#height').val() ){
        element.style.height = $('#height').val()
    }

    if(padding(element)){
        element.style.padding = padding(element)
    }

    if(margin(element)){
        element.style.margin = margin(element)
    }

}

function changeBoxModel(e){
    changeInputValueByArrowUpDownKey(e, $(this), changeStyles)
}

function _changeBoxModel(e){
    _changeInputValueByArrowUpDownKey(e, $(this), changeStyles)
}
//$(document).on('keydown', '.up-down-change:focus',  changeBoxModel);
$(document).on('keyup', '.up-down-change:focus',  _changeBoxModel);
