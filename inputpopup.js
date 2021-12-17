// Pop Up on Input Click? Needs a new name.

// What does it do? 
// Help users understand what goes into an input box - more comprehensive and customisable than placeholder text. Also set to timeout.

// Version 1.0.0 - Luke Orriss.

function getInputHelp(id) {
    
    // Get Help Text and Anchor ID.
    dataAnchor = $('#'+ id)

    // Get Position of Anchor point (top and left)
    dataAnchorLocTop = $(dataAnchor).offset().top;
    dataAnchorLocLeft = $(dataAnchor).offset().left;
    
    // Get the width of the anchor point (determines the width of the popup)
    dataAnchorWidth = $(dataAnchor).width() + 26;
    
    // Get the text from the attribute
    infoText = $(dataAnchor).attr('data-helpText');
    
    // Add a margin of 15px between the anchor and popup.
    dataAnchorPlacement = parseInt(dataAnchorLocTop) - 75;
    
    // Render the popup window.
    $(dataAnchor).before("<p class='info-text' style='background: #d4edda; border: 1px solid #c3e6cb; border-radius: 10px; min-height: 50px; min-width:" + dataAnchorWidth + "px; position: absolute; top: " + dataAnchorPlacement + "px; display: flex; align-items: center; justify-content:center; color:#155724; z-index:1000'; pointer-events: none; transition: .3s ease;>" + infoText + "</p>")

    isFocused = $('#' + id).is(':focus');

    // Remove the element after x seconds.
    // TODO: Learn how to remove elements whilst outside of the "onclick" function..
    setTimeout(function(){
        $('.info-text').remove();
    }, 15000) // Set Timeout - 1000 = 1 second.


    
    
}