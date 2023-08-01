function popup(){
    const divPopup = document.createElement("div");
    divPopup.className = "popup-box";
    const ul = document.createElement("ul");
    ul.className = "popup-ul";

    $.each(tabListArr, function( key, val ){
        const li = document.createElement("li");
        li.className = "popup-item"
        $( li ).append( "<p onclick='linkToType("+val.type+")'>"+val.name+"</p>" );
        $( ul ).append( li );
    });
    $( divPopup ).append( ul );

    const divClose = document.createElement("div");
    divClose.setAttribute('onclick','closePopup()')
    divClose.className = "btn-close";
    $( divClose ).append( "<i class='fas fa-times'></i><p>CLOSE</p>" );
    $( divPopup ).append( divClose );

    $( '.popupCol' ).append( divPopup );
    $('#popup').addClass('popup-open');
};

function closePopup(){
    $('#popup').removeClass('popup-open');
    $('.popup-box').remove();
}

function linkToType(type){
    changeType(type);
    closePopup();
    $('.slider-tab').slick('slickGoTo', type - 1);
}