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
    // $("#modal-edit").fadeIn(300);
    $(this).find(".btn-func_list").fadeToggle(300);
})

$(document).click(function (event) {
    var btnFunc = $(".btn-func");
    if (!btnFunc.is(event.target) && btnFunc.has(event.target).length === 0) {
        $(".btn-func_list").fadeOut(300);
    }
});

$(".btn-loading").click(function() {
    $(".loading").fadeIn(300);
})

$(window).on("resize scroll",function(){
    chatBoxHeight();
})
chatBoxHeight();
function chatBoxHeight() {
    // if(window().width() < 768) {
        let height = parseInt($(".chat_bottom_inner").css("height"));
        let chatPadding = height + 20;
        $(".chat_inner").css("padding-bottom", chatPadding);
    // }
}