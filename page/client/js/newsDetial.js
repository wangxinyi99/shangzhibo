/**
 * Created by ssHss on 2016/8/18 0018.
 */

//===========================点赞================
$("#footerGood").click(function(){
    if($(this).css("color")=="rgb(255, 0, 0)"){
        $(this).css("color","black");
        $("#footerGood span").css("opacity","0");
        $("#footerGood02").css("bottom","20%");
    }else{
        $(this).css("color","red");
        $("#footerGood span").css("opacity","1");
        $("#footerGood02").css("display","block").animate({bottom:'+70%'},"slow").fadeOut("slow");
    }
})
//======================打赏========================
$("#footerMoney").click(function(){
    $("#pay").css("display","block");
    $("footer").css("display","none");
})
//======================取消========================
$(".cancel").click(function(){
    $("#pay").css("display","none");
    $("#money").css("display","none");
    $("footer").css("display","block");
});
//========================确认支付==================
$("#confirm").click(function(){
    $("#pay").css("display","none");
    $("#money").css("display","block");
});
//========================选择金额==================
$(".payMoney").click(function(){
    $(this).css("border","0");
    $(this).css("background-color","#10B3DF");
    $(this).css("color","white")
    $(this).siblings().css({"color":"black","border":"1px solid black","background-color":"white"});
    //$(this).siblings().css("border","1px solid black");
    //$(this).siblings().css("background-color","white");

});
$(".money").focus(function(){
    $(".payMoney").css({"color":"black","border":"1px solid black","background-color":"white"});
})
$(".confirm").click(function(){
    //$("#pay").css("display","none");
    $("#money").css("display","none");
    $("footer").css("display","block");
});
//=====================支付方式====================
$("#payBtn01").click(function(){
    $(this).css("color","#10B3DF");
    $("#payBtn02").css("color","grey");
})
$("#payBtn02").click(function(){
    $(this).css("color","#10B3DF");
    $("#payBtn01").css("color","grey");
})
//=======================跳转到评论==========
$("#footerComment").click(function(){
    window.location.href="Comment.html";
});
