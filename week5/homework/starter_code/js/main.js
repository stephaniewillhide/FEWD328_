// override default a settings

$( "a" ).click(function( event ) {
  event.preventDefault();
});

// user can use "read more" and "read less" in the blog post

$(document).ready(function(){
  $(".readmore").click(function(){
    $(".hide").slideDown();
    $(".readmore").hide();
  });
  $(".readless").click(function(){
    $(".hide").slideUp();
    $(".readmore").show();
  });
});

// user can use the "learn more" on the sidebar

$(document).ready(function(){
  $(".learnmore").click(function(){
    $("#learnmoretext").slideDown();
    $(".learnmore").hide();
  });
});