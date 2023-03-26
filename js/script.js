$(document).ready(function(){




    $('.animation-intro').css('display','');
    $('.animation-intro').slideDown(3000);

    $('.nav-item').mouseenter(function(){
        $(this).css('background-color','purple');
        $(this).find('.nav-link').css('color','white');
        $('.nav-link').css('opacity','0.5') ;
        $(this).find('.nav-link').css('opacity','1'); 
    
    })
    
    $('.nav-item').mouseleave(function(){
        $(this).css('background-color','');
        $(this).find('.nav-link').css('color','');
        $('.nav-link').css('opacity','') ;
        $(this).find('.nav-link').css('opacity',''); 
    })

})





