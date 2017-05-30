// Don't load javascript until the page has loaded

$(document).ready(function() {

// for the id weather-form, upon hitting submit, perform this function

    $('#weather-form').on('submit', function(e) {
        e.preventDefault();

// on the form that was just submitted, (this), take the value from the id input

        var city = $(this).find('#input').val();

        $.getJSON('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=ed136b54c46892c2f08167afd8eae8a3', 
            function(object) {

                $('h3').append("The temperature in " + object.name + " is currently " + convertToFahrenheit(object.main.temp) + " and the current weather is " + object.weather["0"].description + ".")
                
            } 
        )

    })

}) 

function convertToFahrenheit(kelvinTemp) {
    // T(°F) = T(K) × 9/5 - 459.67
    return Math.round(kelvinTemp * (9/5) - 459.67)
}

