/**
 * Listen to scroll to change header opacity class
 */
 function checkScroll(){
    var startY = $('.navbar').height() * 2; //The point where the navbar changes in px

    if($(window).scrollTop() > startY){
        $('.navbar').addClass("scrolled");
        $('.nav-link').addClass("navbarFontScrolled");
    }else{
        $('.navbar').removeClass("scrolled");
        $('.nav-link').removeClass("navbarFontScrolled");
    }
}

if($('.navbar').length > 0){
    $(window).on("scroll load resize", function(){
        checkScroll();
    });
}

