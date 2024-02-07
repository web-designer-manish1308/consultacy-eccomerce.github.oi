$(document).ready(function(){
           $(window).scroll(function(){
             var scroll = $(window).scrollTop();
             if (scroll > 100) {
               $(".navbar").addClass("bg-light");
             } else{
               $(".navbar").removeClass("bg-light");   
             }
           })


           $('.testimonial-slider').owlCarousel({
               loop: true,
               margin: 10,
               autoplay: true,
               responsiveClass: true,
               responsive: {
                 0: {
                   items: 1,
                   nav: false,
                   loop: true
                 },
                 600: {
                   items: 1,
                   nav: false,
                   loop: true
                 },
                 1000: {
                   items: 1,
                   nav: false,
                   dots: true,
                   loop: true
                   }
               }
           })

            $('.owl-carousel-banner').owlCarousel({
               loop: true,
               margin: 10,
               autoplay: true,
               responsiveClass: true,
               // dotsContainer:false,
               responsive: {
                 0: {
                   items: 1,
                   nav: false,
                   loop: true
                   },
                   600: {
                   items: 1,
                   nav: false,
                   loop: true
                 },
                 1000: {
                   items: 1,
                   nav: false,
                   loop: true
                   }
               }
           })

           $('.owl-carousel').owlCarousel({
                loop: true,
                margin: 10,
                autoplay: true,
                responsiveClass: true,
                responsive: {
                  0: {
                    items: 1,
                    nav: true
                  },
                  600: {
                    items: 1,
                    nav: false
                  },
                  1000: {
                    items: 3,
                    nav: false,
                    loop: true,
                    margin: 20,
                    dots:false

                  }
                }
              })
         
        
         
         


         // 

         // $(".navbar").click(function(){
         //    $("#navbar").addClass("bg-primary"); 
         //  });

          // navbar 
           
         })