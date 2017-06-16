/**
 * Created by ssHss on 2016/8/27 0027.
 */
$(document).ready(function(){
    $("#commentArea").val(null);
    //$(window).scroll(function () {
    //    if($(window).scrollTop()>)
    //})
})
//=======================右侧栏的点击事件=================
$("#ce_list li").each(function(i,n){
    $(n).click(function(){
        //console.log($(this).css("color"))
        if($(this).css("color")=="rgb(51, 51, 51)"||$(this).css("color")=="rgb(0, 0, 0)"){
            $(this).css({"background-color":"#24B4DD","color":"white"})

        }else{
            $(this).css({"background-color":"white","color":"black"})

        }

    })
});
$("#ce_list li:last-child").click(function(){
    if($("#pop_list").css("display")=="none"){
        $("#pop_list").css("display","block");
    }else{
        $("#pop_list").css("display","none");
    }
});
$("#good").click(function(){
    if($(this).css("color")=="rgb(51, 51, 51)"||$(this).css("color")=="rgb(0, 0, 0)"){
        $(this).css({"background-color":"white","color":"black"});
        $("#goodRed").css({"display":"none","top":"31.5%"});
        //$("#goodRed")
        //alert("fasd")
    }else{
        $(this).css({"background-color":"red","color":"white"});
        $("#goodRed").css("display","block");
        $("#goodRed").animate({top:"30%"},"slow").fadeOut();
    }
});
//===================二维码点击事件===========
$("#money").click(function () {
    if($("#erweima").css("display")=="none"){
        $("#erweima").css("display","block");
    }else{
        $("#erweima").css("display","none");

    }
});
//======================评论的点击事件============
$("#ce_list li:first-child").click(function(){
    //console.log($("#comment").)
    $('body,html').animate({ scrollTop: 400 }, 800);
})