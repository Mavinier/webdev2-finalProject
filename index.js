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

async function fetchWeather() {
    const apiKey = "d284b1e7273792f0707215e5f39037a8";
    const city = "Red Deer";
    const country = "ca";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&units=metric&appid=${apiKey}`;


    try {
        const response = await fetch(url);
        const data = await response.json();
        
        if (data.cod === 200) {
            document.getElementById("weather").innerHTML = 
                `Weather in ${data.name}: ${data.weather[0].description}, ${data.main.temp}°C`;
        } else {
            document.getElementById("weather").innerHTML = "Weather data unavailable.";
        }
    } catch (error) {
        document.getElementById("weather").innerHTML = "Error fetching weather.";
    }
}

window.onload = fetchWeather;
$(function() {
    $("#accordion").accordion({
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
});
