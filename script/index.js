// Run when the document is fully loaded
$(document).ready(function(){
    // Validate the form using jQuery Validation plugin
    $("#myForm").validate({
        rules: {
            name: { required: true, minlength: 3 },
            email: { required: true, email: true },
            password: { required: true, minlength: 6 },
        },
        messages: {
            name: { required: "Please enter your name", minlength: "Name must be at least 3 characters" },
            email: { required: "Email is required", email: "Enter a valid email address" },
            password: { required: "Password is required", minlength: "Password must be at least 6 characters" },
        },
        submitHandler: function(form) {
            alert("Form submitted successfully!");
            form.submit();
        }
    });
});

// Function to fetch weather data using OpenWeatherMap API
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
                // Display weather info
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

// Call fetchWeather on page load
window.onload = fetchWeather;

$(function() {
    // Enable jQuery UI accordion on these sections
    $("#about").accordion({ collapsible: true });
    $("#achievements").accordion({ collapsible: true });
    $("#projects").accordion({ collapsible: true });

    // Make the contact section draggable
    $("#contact").draggable({
        revert: "invalid",
        opacity: 0.5,
        containment: 'window'
    });

    // Enable sticky header functionality using the custom plugin
    $('.header').stickyHeader();

    // Setup jQuery UI dialog for weather
    $("#weather-div").dialog({
        autoOpen: false,
        show: {
            effect: "blind",
            duration: 300
        },
        width: 400
    });

    // Open the dialog when the "opener" is clicked
    $("#opener").on("click", function() {
        $("#weather-div").dialog("open");
    });

    // Change background color of inputs on hover
    $("input").hover(function(){
        $(this).css("background-color", "rgb(197, 254, 254)");
    }, function(){
        $(this).css("background-color", "white");
    });

    // Toggle between light and dark mode
    $("#dark").on("click", function(){
        if ($("#jquerytheme").attr("href") === "https://code.jquery.com/ui/1.14.1/themes/smoothness/jquery-ui.css") {
            // Switch to dark theme
            $("#jquerytheme").attr("href", "https://code.jquery.com/ui/1.14.1/themes/vader/jquery-ui.css");
            $("#dark").text("Light Mode");
            document.getElementById("head").classList.toggle("header-dark");
            document.getElementById("navig").classList.toggle("nav-dark");
            document.getElementById("weather").classList.toggle("weather-dark");
            document.getElementById("contact").classList.toggle("contact-dark");
            document.getElementById("projects").classList.toggle("project-dark");
            $("body").css("background-color", "rgb(28, 26, 26)");
        } else {
            // Switch back to light theme
            $("#jquerytheme").attr("href", "https://code.jquery.com/ui/1.14.1/themes/smoothness/jquery-ui.css");
            $("#dark").text("Dark Mode");
            document.getElementById("head").classList.toggle("header-dark");
            document.getElementById("navig").classList.toggle("nav-dark");
            document.getElementById("weather").classList.toggle("weather-dark");
            document.getElementById("contact").classList.toggle("contact-dark");
            document.getElementById("projects").classList.toggle("project-dark");
            $("body").css("background-color", "white");
        }
    });
});

// Show the contact section when it scrolls into view
document.addEventListener("DOMContentLoaded", function () {
    const contactBox = document.querySelector("#contact");
    function checkVisibility() {
        if (contact.getBoundingClientRect().top < window.innerHeight * 0.8) {
            contactBox.classList.add("show");
        }
    }
    window.addEventListener("scroll", checkVisibility);
    checkVisibility(); // Run once on load
});
