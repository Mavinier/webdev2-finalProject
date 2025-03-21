$(document).ready(function(){
    $("#myForm").validate({
        rules: {
            name: { required: true,minlength: 3},
            email: { required: true,email: true},
            password: { required: true,minlength: 6},
        },
        messages: {
            name: { required: "Please enter your name",minlength: "Name must be at least 3 characters"},
            email: { required: "Email is required",email: "Enter a valid email address"},
            password: { required: "Password is required",minlength: "Password must be at least 6 characters"},
        },
        submitHandler: function(form) {
            alert("Form submitted successfully!");
            form.submit();
        }
    });
});

function fetchWeather() {
    const apiKey = "d284b1e7273792f0707215e5f39037a8";
    const city = "Red Deer";
    const country = "ca";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&units=metric&appid=${apiKey}`;

    $.ajax({
        url: url,
        method: 'GET',
        dataType: 'json',
        success: function(data) {
            if (data.cod === 200) {
                $("#weather").html(`Weather in ${data.name}: ${data.weather[0].description}, ${parseInt(data.main.temp)}°C`);
            } else {
                $("#weather").html("Weather data unavailable.");
            }
        },
        error: function() {
            $("#weather").html("Error fetching weather.");
        }
    });
}

window.onload = fetchWeather;
$(function() {
    $("#about").accordion({
        collapsible: true
    });
    $("#projects").accordion({
        collapsible: true
    });
    $("#draggable").draggable({
        revert: "invalid",
        opacity: 0.5,
        });
    $('.header').stickyHeader();
    $( "#weather-div" ).dialog({
        autoOpen: false,
        show: {
          effect: "blind",
          duration: 300
        },
        width:  400
      });
      $( "#opener" ).on( "click", function() {
        $( "#weather-div" ).dialog( "open" );
      });
});
