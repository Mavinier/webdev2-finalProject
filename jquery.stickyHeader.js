(function ($) {
    $.fn.stickyHeader = function () {
        var $element = this;
        console.log("aaa")
        $(window).scroll(function () {
            $element.toggleClass('fixed', $(window).scrollTop() > 50);
        });

        return this;
    };
})(jQuery);
