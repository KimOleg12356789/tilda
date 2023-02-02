$(document).ready(function(){


$('.cart').slick({
                      slidesToShow: 1,
                      slidesToScroll: 1,
                      fade: true,
                      autoplay:false,
                      arrows:true,
                      dots:false,
                      asNavFor: '.iss'
                    });

                    $('.iss').slick({
                      slidesToShow:5,
                      slidesToScroll: 1,
                      asNavFor: '.cart',
                      active:true,
                      autoplay:false,
                      dots: false,
                      arrows:false,
                      centerPadding: '5px',
                      focusOnSelect: true,
                      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 5,
            slidesToScroll: 1,
            dots: false
          }
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 5,
            arrows:false,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 640,
          settings: {
            slidesToShow: 4,
            dots:false,
            arrows:false,
            slidesToScroll: 1
          }
        },


          {
            breakpoint: 565,
            settings: {
              slidesToShow: 4,
              dots:false,
              arrows:false,
              slidesToScroll: 1
            }
          }
      ]

                    });


});