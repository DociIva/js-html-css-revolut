//console.log('Ciao mondo');
//console.log('jQuery', jQuery);
$(document).ready(function(){
// dropdown-menu 

// referenze
var dropDown = $('.with-dropdown');
var dropLinks = dropDown.children('a');
var dropMenu = dropDown.children('.dropdown-menu');

// clicca e mostra il menu
dropLinks.click(function(e){

    $(this).next('.dropdown-menu').toggle();
});

// chiusura doc ready
});