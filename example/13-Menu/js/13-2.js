$(function(){
    $(".menu").on("click",function(){
        $(".menubox").fadeIn();
    })
    $("#close_btn").on("click",function(){
        $(".menubox").fadeOut();
    })
})