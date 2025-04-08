(function ($) {
    $.fn.stickyHeader = function () {
        var $element = this;
        $(window).scroll(function () {
            $element.toggleClass('fixed', $(window).scrollTop() > 50);
        });

        return this;
    };
})(jQuery);
