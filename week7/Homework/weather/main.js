// text box - cityName

// submit button

// create a submit listener using jquery

// Get the city name from the form and storage in a variable

// In the submit listener, retrieve the data with AJAX. the data is at this url:

// 1. http://api.openweathermap.org/data/2.5/weather?q=<CITYNAME>

// 2. Print out that data using console.log() and append it as a list to your html

// http://api.openweathermap.org/data/2.5/weather?q=harlem&appid=ed136b54c46892c2f08167afd8eae8a3


  // var url = 'http://api.openweathermap.org/data/2.5/weather?zip=45140,us&appid=ed136b54c46892c2f08167afd8eae8a3';


$(function (){

  $('#test').submit(function(){
    var city = $(this).find('#input').val();

    $.get('http://api.openweathermap.org/data/2.5/weather?q=cincinnati&appid=ed136b54c46892c2f08167afd8eae8a3')
    //var url = 'http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=ed136b54c46892c2f08167afd8eae8a3';
    //$.ajax({
    //  dataType: 'json',
    //  url: 'http://api.openweathermap.org/data/2.5/weather?q=cincinnati&appid=ed136b54c46892c2f08167afd8eae8a3',
    //  success: function(json) {
    //    console.log(json.weather);
    //    $('.response').text(JSON.stringify(json));
    //  },
    //  error: function(e){
    //    console.log(e.message);
    //  }
    //})
  })

})