/**
 * Created by ssHss on 2016/8/26 0026.
 */
//=================================logo点击=============
$("#logo").click(function () {
    window.location.href="index.html";
});
//========================导航栏点击事件========
$("header nav ul li").each(function(i,n){
    $(n).click(function () {
        //console.log($(this).children("a").css("color"));
        $(this).children("a").css("color","#24B4DD ");
        $(this).siblings().children("a").css("color","white");
        //================点击跳转到新闻列表页============
        window.location.href="shares.html";
    })
});
//=========================登录的点击事件==============
$("#mine").click(function(){
    if($(this).css("color")=="rgb(255, 255, 255)"){
        $(this).css({"background-color":"#000000","color":"#909090","border":"2px solid #909090"});
    }else{
        $(this).css({"background-color":"#24B4DD","color":"white","border":"none"});

    }
    if($("#sociality").css("display")=="none"){
        $("#sociality").css({"display":"block"});
    }else{
        $("#sociality").css({"display":"none"});
    };
});
$("#socialityIcon div").each(function(i,n){
    $(n).click(function(){
        $(this).css({"background-color":"#24B4DD","border":"none"}).siblings().css({"background-color":"#4D4D4D","border":"2px solid white"});
    })
});
$("#searchIcon").click(function(){
    //console.log($(this).css("color"))

    if($(this).css("color")=="rgb(255, 255, 255)"){
        $(this).css({"background-color":"#000000","color":"#909090","border":"2px solid #909090"});
    }else{
        $(this).css({"background-color":"#24B4DD","color":"white","border":"none"});

    }
    window.location.href="../page/search.html";
});
//===========================股市行情的点击部分================
$("#marketNav ul li").each(function (i,n) {
    $(n).click(function () {
        $(this).css("background-color","white").siblings().css("background-color","#F8F8F8");
    })
});
//=================================点击尚直播=================
$("#shangLive").click(function () {
    window.location.href="../page/web_video.html";
});
//======================新闻点击进入到新闻详情=====
$("#newInformation ul li").each(function (i,n) {
    $(n).click(function(){
        window.location.href="comment.html";
    })
});