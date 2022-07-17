$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        margin:15,
        items:3,
        loop:true,
        autoplay:true,
        autoplayTimeout:5000,
        responsiveClass:true,
        responsive:{
            0:{
                items:1
            },
            768:{
                items:2
            },
            1000:{
                items:2
            },
            1200:{
                items:3
            },
            1900:{
                items:3
            }
        }

    });

    //Wow
    new WOW().init();

  });

