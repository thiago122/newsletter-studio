// https://www.sitepoint.com/building-custom-right-click-context-menu-javascript/#:~:text=A%20context%20menu%20is%20a,the%20operating%20system%20or%20application.

$(document).on('contextmenu', "td", contextMenu );
$(document).on('keyup',  hideContextMenu);
$(document).on('click', clickOutlideMenu);

$contextMenu = $('.context-menu');

function contextMenu(e){

    const element = $(this);

    selectElementToEdit(e, element)

    e.preventDefault();

    showContextMenu()

    const $menu = $('.context-menu');
    positionMenu(e)

}

function clickOutlideMenu(e){

    $target = $(e.target);

    if( $target.closest('.context-menu').length >= 1 ){
        hideContextMenu();
        return true;
    }

    hideContextMenu();
    return true;
}

function showContextMenu(){
    const $menu = $('.context-menu');
    $menu.show();
}

function hideContextMenu(){
    const $menu = $('.context-menu');
    $menu.hide();
}

function getPosition(e) {
    var posx = 0;
    var posy = 0;

    if (!e) var e = window.event;

    if (e.pageX || e.pageY) {
        posx = e.pageX;
        posy = e.pageY;
    } else if (e.clientX || e.clientY) {
        posx = e.clientX + document.body.scrollLeft + 
                           document.documentElement.scrollLeft;
        posy = e.clientY + document.body.scrollTop + 
                           document.documentElement.scrollTop;
    }

    return {
        x: posx,
        y: posy
    }
}

// updated positionMenu function
function positionMenu(e) {

    clickCoords = getPosition(e);
    clickCoordsX = clickCoords.x;
    clickCoordsY = clickCoords.y;

    menuWidth = $contextMenu.outerWidth() + 4;
    menuHeight = $contextMenu.outerHeight() + 4;

    windowWidth = window.innerWidth;
    windowHeight = window.innerHeight;

    const menuPosition = {}

    if ( (windowWidth - clickCoordsX) < menuWidth ) {
        menuPosition.left = windowWidth - menuWidth ;
    } else {
        menuPosition.left = clickCoordsX ;
    }

    if ( (windowHeight - clickCoordsY) < menuHeight ) {
        menuPosition.top = windowHeight - menuHeight;
    } else {
        menuPosition.top = clickCoordsY;
    }

    $contextMenu.css({top:menuPosition.top, left:menuPosition.left})
}
