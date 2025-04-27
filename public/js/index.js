$(".nav_menu").click(function() {
    if($(window).width() > 992) {
        $(".nav").toggleClass("menu-open");
        $(".page").toggleClass("menu-open");  
        chatBoxHeight();      
    }else {
        $(".nav").toggleClass("active");
    }
})

$(".account_pic").click(function() {
    $(".account_nav").slideToggle(300);
})

$(".form-item__main").focus(function() {
    $(this).parents(".form-item").addClass("focus");
})

$(".form-item__main").focusout(function() {
    $(this).parents(".form-item").removeClass("focus");
})

$(".form-item--password").find(".form-item__icon").click(function() {
    $(this).parents(".form-item__wrapper").find("input").attr("type","text");
})

$(".modal-account__verify-clear").click(function() {
    $(this).parents(".modal-account__verify").find("input").each(function() {
        $(this).val("");
    })
})

$(".btn-back").click(function() {
    console.log("click btn-back");
    if(!$(this).hasClass("btn-back--modal")) {
        console.log("not modal");
        history.back();
    }
})