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

$(".modal_bg").click(function() {
    $(this).parents(".modal").fadeOut(300);
})

$(".btn-func").click(function() {
    $("#modal-edit").fadeIn(300);
})

$(".btn-loading").click(function() {
    $(".loading").fadeIn(300);
})