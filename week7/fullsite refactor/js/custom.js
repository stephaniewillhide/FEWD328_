// don't do the js until the page loads

$(document).ready(function(){

// for every element with class accordionButton, on click, run the unnamed function that will toggle show/hide for the next dom element with accordionContent class

    $(".accordionButton").click(function(){
        $(this).next('.accordionContent').toggle();
    });
});