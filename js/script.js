//console.log('Ciao mondo');
//console.log('jQuery', jQuery);
$(document).ready(function(){
  // dropdown-menu 

   // referenze
  var dropDown = $('.with-dropdown');
  var dropLinks = dropDown.children('a');
  console.log(dropLinks);
  var listNasc = dropDown.children('.dropdown-menu');
  console.log(listNasc);

  // click
  dropLinks.click(function(e){
    $(this).next('.dropdown-menu').toggle();

    var menuClick = $(this).next('.dropdown-menu');
    listNasc.not(menuClick).hide();

    menuClick.toggle();
    
  });
  
  


// chiusura doc ready
});