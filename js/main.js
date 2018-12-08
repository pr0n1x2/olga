 MySlider = function () {
    var $slider;
    var current = 0;
    var total;
    var bulletContainer;

    var initSlider = function (e) {
        $slider = $('#' + e);
        items = $slider.find('.slider-item');
        total = items.length;
        $slider.find('.to-left a').bind('click', toLeft);
        $slider.find('.to-right a').bind('click', toRight);
        bulletContainer = $slider.find('.slider-bullets');

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
    }

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

        $slider.find('.slider-item:nth-child(' + (current + 1) + ')').fadeOut( "slow", function() {
            bulletContainer.find('a').removeClass('slider-bullet-fill');
            bulletContainer.find('a:nth-child(' + (index + 1) + ')').addClass('slider-bullet-fill');
            $slider.find('.slider-item:nth-child(' + (index + 1) + ')').fadeIn('slow');
        });

        current = index;
    }

    return {
        init: function (e) {
            initSlider(e);
        }
    };
}();

$(document).ready(function () {
    MySlider.init('testimonials-slider');
    MySlider.init('videos-slider');
});