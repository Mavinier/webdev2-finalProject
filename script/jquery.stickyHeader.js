(function ($) {
    // Define a new jQuery plugin called stickyHeader
    $.fn.stickyHeader = function () {
        var $element = this; // Store the selected element

        // Run this function every time the user scrolls
        $(window).scroll(function () {
            // Add or remove 'fixed' class depending on scroll position
            $element.toggleClass('fixed', $(window).scrollTop() > 50);
        });

        return this; // Allows method chaining
    };
})(jQuery);
