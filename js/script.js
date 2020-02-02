$(document).ready(function ($) {
   let $slider = $('.slider-wrap');
   let $sliderList = $slider.find('ul');
   let $slideCount = $sliderList.find('li').length;
   let $slideWidth = $sliderList.find('li').width();
   let $slideHeight = $sliderList.find('li').height();
   let $sliderUlWidth = $slideCount * $slideWidth;

    $slider.css({width: $slideWidth, height: $slideHeight});
    $sliderList.css({width: $sliderUlWidth, marginLeft: -$slideWidth});
    $sliderList.find('li:last-child').prependTo($sliderList);

    function prevSlide() {
        $sliderList.animate({
            left: +$slideWidth
        }, 400, function() {
            $sliderList.find('li:last-child').prependTo($sliderList);
            $sliderList.css('left', '')
        })
    }

    function nextSlide() {
        $sliderList.animate({
            left: -$slideWidth
        }, 400, function() {
            $sliderList.find('li:first-child').appendTo($sliderList);
            $sliderList.css('left', '');
        });
    }

    $slider.find('.btn__prev').click(prevSlide);
    $slider.find('.btn__next').click(nextSlide);

});