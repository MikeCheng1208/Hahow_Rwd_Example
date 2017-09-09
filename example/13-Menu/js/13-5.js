$(function(){
    $(".menuopem").on("click",function(){
        $("#menu").addClass("open");
    })
    $("#close_btn").on("click",function(){
        $("#menu").removeClass("open");
    })
})