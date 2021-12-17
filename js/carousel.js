
$(document).ready(function () {
    $(".owl-carousel").owlCarousel(
        {
            items: 3, 
            margin: 12,
            responsiveClass:true,
        

            responsive:{
                0:{
                    items:1,
                    nav:true
                },
                490:{
                    items:2,
                    nav:true,
                    margin:0,
                    

                },
                800:{
                    items:3,
                    nav:true

                },
                1000:{
                    items:3,
                    nav:true
                }
            }
        }
    );
});

$(window).scroll(function () {
        if ($(window).scrollTop() > 1500)
         {
            $(".navbar").addClass("okk");
            $('.scrollup').addClass('scrollup1')

         }
        else 
        {
            $(".navbar").removeClass("okk");
            $('.scrollup').removeClass('scrollup1')

        }

    })
 
//*ooop*//
    $(document).ready(function(){

        $(".filter-button").click(function(){
            var value = $(this).attr('data-filter');
            
            if(value == "all")
            {
                //$('.filter').removeClass('hidden');
                $('.filter').show('1000');
            }
            else
            {
    //            $('.filter[filter-item="'+value+'"]').removeClass('hidden');
    //            $(".filter").not('.filter[filter-item="'+value+'"]').addClass('hidden');
                $(".filter").not('.'+value).hide('3000');
                $('.filter').filter('.'+value).show('3000');
                
            }
        });
        
        if ($(".filter-button").removeClass("active")) {
    $(this).removeClass("active");
    }
    $(this).addClass("active");
    
    });



    AOS.init();