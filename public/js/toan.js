$('.owl-carousel').owlCarousel({
    loop:false,
    nav:true,
    dots:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:4
        }
    }
})
$( ".owl-prev").html('<i class="fas fa-chevron-circle-left"></i>');
$( ".owl-next").html('<i class="fas fa-chevron-circle-right"></i>');


// plus minus
$(document).ready(function(){
    $('.count').prop('disabled', true);
       $(document).on('click','.plus',function(){
         if ($('.count').val()>=12) {
            return;
         }else{
            $('.count').val(parseInt($('.count').val()) + 1 );
         } 
      
    });
    $(document).on('click','.minus',function(){
            if ($('.count').val() == 1) {
                return
            }else{
                $('.count').val(parseInt($('.count').val()) - 1 );
            }
          
        });
 });