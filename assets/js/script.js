$(function () {
   'use strict';

   // Banner Slider Activate
   $('.banner_slider').slick({
      arrows: false,
      dots: true,
      dotsClass: 'banner_slider_dots ',
      autoplay: true,
      autoplaySpeed: 2000
   });

   // New Arrival Product slider Activate
   $('.Product_slider').slick({
      arrows: false,
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 1500,
   });
})