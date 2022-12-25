$(function () {
   'use strict';

   // Banner Slider Activate...
   $('.banner_slider').slick({
      arrows: false,
      dots: true,
      dotsClass: 'banner_slider_dots ',
      autoplay: true,
      autoplaySpeed: 2000
   });

   // New Arrival Product slider Activate...
   $('.Product_slider').slick({
      arrows: false,
      slidesToShow: 4,
      slidesToScroll: 4,
      autoplay: true,
      autoplaySpeed: 1500,
   });

   // Countdown Initialize....
   $('.clock').countdown('2023/01/01', function(event) {
      $('.clock_a').html(event.strftime('%d Days'));
      $('.clock_b').html(event.strftime('%H Hours'));
      $('.clock_c').html(event.strftime('%M Minutes'));
      $('.clock_d').html(event.strftime('%S Seconds'));
      // $('.clock_dots').html(event.strftime(':'));
    });


})