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

$(function() {
    $("#accordion").accordion({
        collapsible: true
    });
});