$(document).ready(function(){

	//menu
    $( "#menu" ).menu();

    //progressbar
    $( "#progressbar" ).progressbar({
      value: 40
    });

    //slider
    $( "#slider" ).slider();

    //tabs
    $( "#tabs" ).tabs({
      collapsible: true
    });

    //Tooltips-form part
    var tooltips = $( "[title]" ).tooltip({
      position: {
        my: "left top",
        at: "right+5 top-5",
        collision: "none"
      }
    });
    $( "<button>" )
      .text( "Show help" )
      .button()
      .on( "click", function() {
        tooltips.tooltip( "open" );
      })
      .insertAfter( "form" );
 });