$(".nav_menu").click(function() {
    if($(window).width() > 767) {
        $(".nav").toggleClass("menu-open");
        $(".page").toggleClass("menu-open");        
    }else {
        $(".nav").toggleClass("active");
    }
})

$(".account_pic").click(function() {
    $(".account_nav").slideToggle(300);
})