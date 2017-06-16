/**
 * Created by ssHss on 2016/8/30 0030.
 */
var st="#contant";
$(window).scroll(function(){
    if($(window).scrollTop()<$("#contantLeft").offset().top){
        $(".bulletinDate").each(function(i,n){
            $(n).css("position", "static");
        })
    }
    $(".bulletinDate").each(function(i,n){
        var j=i+1;
        //console.log(($(st+5).offset().top))
        if($(st+i).offset()!="undefine"){
        if($(window).scrollTop()>=($(st+i).offset().top-100)&&$(window).scrollTop()<=($(st+j).offset().top-100)){
            $("#contant0 .bulletinDate").css("top","12%");

            $(n).css({"position":"fixed","margin-top":"7%"});
            //$("#contant0 .bulletinDate").css("margin-top","12%");

            //console.log($(n))
            $(".bulletinDate").not($(this)).css("position","static");

        }
        else if($(window).scrollTop()<($(st+i).offset().top)-100){
            $(n).css({"position":"static","margin-top":"8%"});
            $("#contant0 .bulletinDate").css("margin-top","3%");

        }
        }
    })


})