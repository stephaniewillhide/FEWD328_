

// if a user clicks read more on the primary column, have text in the <p> tag slide down along with a "read less" link in the blog post using $.slideDown() and $.show(), hide the "read more" link using $.hide()

// finally got this to work! don't touch this.

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

$(document).ready(function(){
  $(".learnmore").click(function(){
    $("#learnmoretext").slideDown();
    $(".learnmore").hide();
  });
});