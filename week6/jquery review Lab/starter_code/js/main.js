
// reset input after the user submits

$(document).ready(function(){
  $('#submit-btn').click(function(){
      event.preventDefault();
      var city = $('#city-type').val();
      $('#city-type').val('');
      //city = city.toLowerCase().trim();
      if(city === 'NYC' || city === 'New York' || city === 'New York City'){
        $('body').attr('class','nyc');
      }
      else if(city === 'LA') {
        $('body').attr('class','la');
      }
      else {
        $('body').attr('class','sydney');
      }
  })
});