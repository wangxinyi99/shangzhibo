/**
 * Created by ssHss on 2016/8/22 0022.
 */
var st="#contant";
$(window).scroll(function(){
    if($(window).scrollTop()<$("#contant").offset().top){
        $(".bulletinDate").each(function(i,n){
                $(n).css("position", "static");
        })
    }
    $(".bulletinDate").each(function(i,n){
        var j=i+1;
        if($(window).scrollTop()>=($(st+i).offset().top)&&$(window).scrollTop()<=($(st+j).offset().top)){
            $(n).css("position","fixed");
            //console.log($(n))
            $(".contant").not($(this)).css("position","static");

        }
        else if($(window).scrollTop()<($(st+i).offset().top)){
            $(n).css("position","static");
        }
    })

})