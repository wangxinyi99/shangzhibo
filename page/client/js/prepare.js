/**
 * Created by ssHss on 2016/8/24 0024.
 */
$(".footerIcon").each(function(i,n){
    $(n).click(function(){
        $(this).css({"color":"#24B4dd"}).siblings().css({"color":"black"})
    })
});
$(".prepareContantRow").click(function () {
    window.location.href="reward.html";
});
$(".prepareMassageImg").click(function () {
    window.location.href="inform.html";

});
$(".prepareMassageText").click(function () {
    window.location.href="inform.html";

});
$(".prepareSetImg").click(function () {
    window.location.href="set.html";

});
$(".prepareSetText").click(function () {
    window.location.href="set.html";

});
$(".beginPlay").click(function () {
    window.location.href="../index.html";

});
$("#information").click(function () {
    window.location.href="information.html";

})