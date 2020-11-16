
dragElement('.panel', '.panel__header')

function dragElement(panelSelector, handlerSelector) {
    
    var pos1 = 0;
    var pos2 = 0;
    var pos3 = 0;
    var pos4 = 0;

    $(document).on('mousedown', handlerSelector, dragMouseDown)


    function dragMouseDown(e) {

        var element = $(this);

        e.preventDefault();

        // get the mouse cursor position at startup:
        pos3 = e.clientX;
        pos4 = e.clientY;

        $(document).on('mouseup', closeDragElement)
        $(document).on('mousemove', function(event){
            elementDrag(event, element);
        })

    }

    function elementDrag(e, elementHandler) {
        
        var panel = elementHandler.closest(panelSelector);

        // calculate the new cursor position:
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        // set the element's new position:

        panel.css({
            top: (panel.position().top - pos2), 
            left: (panel.position().left - pos1)
        })

    }

    function closeDragElement() {
        // stop moving when mouse button is released:
        $(document).off('mouseup')
        $(document).off('mousemove')
    }

}