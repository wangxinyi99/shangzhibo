/**
 * Created by ssHss on 2016/8/23 0023.
 */
$(".indexName").each(function(i,n){
    $(n).click(function(){
        $(this).css({"background":"#24B4DD","color":"white"}).siblings().css({"background":"white","color":"#9C9C9C"})
    })
});
$(".footerIcon").each(function(i,n){
    $(n).click(function(){
        $(this).css({"color":"#24B4dd"}).siblings().css({"color":"black"})

    })
});
//==============��ʾ����ѡ�����=========
$("#directionConfirm").click(function(){
    $("#direction").css("display","none");
    $("footer").css("display","block");
});
$("footer div:last-child").click(function(){
    $("#direction").css("display","block");
    $("footer").css("display","none");
})
//===================ѡ�����Ȥ�����===========
$(".choseItem").each(function(i,n){
    $(this).click(function(){
        if($(this).css("color")=="rgb(57, 57, 57)"){
            $(this).css({"background-color":"#10B3DF","color":"white"});
        }else{
            $(this).css({"background-color":"#f5f5f5","color":"rgb(57, 57, 57)"});
            console.log($(this).css("color"))
        }

    })

});
$("#headerTitle").click(function () {
    window.location.href="hour.html";
});

$("#news ul li").click(function () {
    window.location.href="newsDetial.html";
});
$("#zhibo").click(function () {
    window.location.href="prepare.html";

});
$("#information").click(function () {
    window.location.href="information.html";

})