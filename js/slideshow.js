var timeoutId;


$(".header").css("position","fixed");

var slideImage = function( step ) {
    
    if ( step == undefined ) step = 1;
    
    //Clear timeout if any
    clearTimeout ( timeoutId );
    
    //Get current image's index
    var indx = $('.galleryimg-sl:visible').index('.galleryimg-sl');
    
    //If step == 0, we don't need to do any fadein our fadeout
    if ( step != 0 ) {
       //Fadeout this item
       $('.galleryimg-sl:visible').fadeOut();
    }
    
    //Increment for next item
    indx = indx + step ;
    
    //Check bounds for next item
    if ( indx >= $('.galleryimg-sl').length ) {
        indx = 0;
    } else if ( indx < 0 ) {
        indx = $('.galleryimg-sl').length - 1;
    }
    
    //If step == 0, we don't need to do any fadein our fadeout
    if ( step != 0 ) {
       //Fadein next item
       $('.galleryimg-sl:eq(' + indx + ')').fadeIn();
    }
    
    //Set Itmeout
    timeoutId = setTimeout ( slideImage, 2000 );
};

//Start sliding
slideImage(1);

//When clicked on prev
$('#prev').click(function() {

    //slideImage with step = -1
    slideImage ( -1 );   
});
   
//When clicked on next
$('#next').click(function() {
        
     //slideImage with step = 1
     slideImage ( 1 );
});
                 
//When clicked on Pause
$('#pause').click(function() {

   //Clear timeout
   clearTimeout ( timeoutId );    
    
    //Hide Pause and show Play
    $(this).hide();
    $('#play').show();
});

//When clicked on Play
$('#play').click(function() {
   
   //Start slide image
   slideImage(0);

   //Hide Play and show Pause
   $(this).hide();
   $('#pause').show();    
});
function closeSlideshow() {
            $('#items').hide();
            $('#showButton').show();
            $("#button-cl").hide();
        }

        // Event listener for close button
        $('#button-cl').click(closeSlideshow);

        $('#showButton').click(function() {
            $('#items').show();
            $(this).hide();
            $("#button-cl").show();
        });