$(function(){
    $(".menu").on("click",function(){
        $(".menubox").show();
    })
    $("#close_btn").on("click",function(){
        $(".menubox").hide();
    })
})