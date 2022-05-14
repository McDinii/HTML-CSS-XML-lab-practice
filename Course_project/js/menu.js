$(document).ready(function(){
    $( '.header_burger' ).click( function () {
        $( '.header_burger,.header_menu' ).toggleClass( 'active' );
        $('body').toggleClass( 'lock' )
    } );
    /*после клика добавляем нашему значку "бургеру" класс "active", который реализует выпадающий список*/
} );
