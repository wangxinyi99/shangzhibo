/**
 * Created by ssHss on 2016/8/24 0024.
 */
$(".footerIcon").each(function(i,n){
    $(n).click(function(){
        $(this).css({"color":"#24B4dd"}).siblings().css({"color":"black"})
    })
});
$("input").focus(function(){
    $("#searchIcon").css("display","none");
});
$("input").blur(function(){
    console.log($("input").val());
    if($("input").val()){
        $("#searchIcon").css("display","none");
    }else{
        $("#searchIcon").css("display","block");
    }

});
$("#news .contantMore").click(function () {
    window.location.href="appMore.html";
});
$("#contant .contantMore").click(function () {
    window.location.href="appMore.html";
});
$("#zhibo").click(function () {
    window.location.href="prepare.html";

});
$("information").click(function () {
    window.location.href="information.html";
});
$("#news ul li").click(function () {
    window.location.href="newsDetial.html";
});