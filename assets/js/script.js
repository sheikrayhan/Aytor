$(function () {
   'use strict';

   // PopUp Hide
   $('.hide_btn').on('click', function () {
         $('#popup').hide(500)
    })

   // Banner Slider Activate...
   $('.banner_slider').slick({
      arrows: false,
      dots: true,
      dotsClass: 'banner_slider_dots',
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
   $('.countdown_container').countdown('2023/10/10', function(event) {
      var $this = $(this).html(event.strftime(''
        + '<div class="deals_item"><span>%D</span><span>Days</span></div>'
        + '<div class="separator">:</div>'
        + '<div class="deals_item"><span>%H</span><span>Hour</span></div>'
        + '<div class="separator">:</div>'
        + '<div class="deals_item"><span>%M</span><span>Minute</span></div>'
        + '<div class="separator">:</div>'
        + '<div class="deals_item"><span>%S</span><span>Sec</span></div>'));
    });

   //  Deals Of The Days Slider Initialize...
   $('.dealsOFthe_day').slick({
      arrows: false,
      dots: true,
      dotsClass: 'discount_slider_dots',
      slidesToShow: 2,
      autoplay: true,
      autoplaySpeed: 1500,
   });

   // Blog Slider Initialize...
   $('.blog_slider').slick({
      arrows: false,
      dots: true,
      dotsClass: 'blog_slider_dots',
      slidesToShow: 3,
      autoplay: true,
      autoplaySpeed: 1500,
   });

   // VenoBox Initialize..
   new VenoBox();

   // Back to top
   $(window).on('scroll', function () {
      var scrollSize = $(window).scrollTop();
      if (scrollSize > 1000) {
         $('#back_to_top').show(500);
      } else {
         $('#back_to_top').hide(500);
      }
   })
   $('#back_to_top').on('click', function () {
      $('html, body').animate({
         scrollTop:0
      })
   })


})


// Tool tip Method 
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))