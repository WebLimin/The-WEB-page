$(function(){

    $("#header_forum").mouseenter(function () {
        $(".header_forum_down").show(0);
    });
    $("#header_forum").mouseleave(function(){
        $(".header_forum_down").hide(0);
    });
    $("#header_service").mouseenter(function () {
        $(".header_service_down").show(0);
    });
    $("#header_service").mouseleave(function(){
        $(".header_service_down").hide(0);
    });
    $("#header_game").mouseenter(function () {
        $(".header_game_down").show(0);
    });
    $("#header_game").mouseleave(function(){
        $(".header_game_down").hide(0);
    });
    $("#header_mobile").mouseenter(function () {
        $(".header_mobile_down").show(0);
    });
    $("#header_mobile").mouseleave(function(){
        $(".header_mobile_down").hide(0);
    });
    $("#header_img").mouseenter(function(){
        $(".header_img_down").show(0);
    });
    $("#header_img").mouseleave(function(){
        $(".header_img_down").hide(0);
    });
    $(".nav_header").mouseenter(function(){
        $(".nav_down").slideDown(100);

    });
    $(".nav_header").mouseleave(function(){
      $(".nav_down").slideUp(100);
    });
});
