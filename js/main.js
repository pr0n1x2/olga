(function($){
    jQuery.fn.mySlider = function(){
        var make = function(){
            var slider = $(this);
            var items = slider.find('.slider-item');
            var current = 0;
            var total = items.length;
            var bulletContainer = slider.find('.slider-bullets');

            var toLeft = function () {
                changeSlide(current - 1);
            }

            var toRight = function () {
                changeSlide(current + 1);
            }

            var changeSlide = function (index) {
                if (index < 0) {
                    index = total - 1;
                } else if (index == total) {
                    index = 0;
                }

                slider.find('.slider-item:nth-child(' + (current + 1) + ')').fadeOut( "slow", function() {
                    bulletContainer.find('a').removeClass('slider-bullet-fill');
                    bulletContainer.find('a:nth-child(' + (index + 1) + ')').addClass('slider-bullet-fill');
                    slider.find('.slider-item:nth-child(' + (index + 1) + ')').fadeIn('slow');
                });

                current = index;
            }

            slider.find('.to-left a').bind('click', toLeft);
            slider.find('.to-right a').bind('click', toRight);

            items.each(function(index) {
                if (index != 0) {
                    $(this).hide();
                    bulletContainer.append('<a href="javascript:;" data-item="' + (index) + '"></a>');
                } else {
                    bulletContainer.append('<a href="javascript:;" data-item="' + (index) + '" class="slider-bullet-fill"></a>');
                }
            });

            bulletContainer.find('a').bind('click', function () {
                index = parseInt($(this).data('item'));

                if (index != current) {
                    changeSlide(index);
                }
            });
        };

        return this.each(make);
    };
})(jQuery);

$(document).ready(function () {
    $('#testimonials-slider').mySlider();
    $('#videos-slider').mySlider();
});