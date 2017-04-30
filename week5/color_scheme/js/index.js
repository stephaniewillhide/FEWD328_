function switchTheme () {
  var theme = $(this).attr('class');
  console.log(theme);
  $('body').attr('class', theme);
}

$(document).ready(function(){
  $('#switcher li').on('click', switchTheme);
});

// What's the selector that's calling the function?