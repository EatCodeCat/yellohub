$(function() {
    // $('.am-dropdown').on('mouseover',function(){
    //     $(this).addClass('am-active');
    // });
    // $('.am-dropdown').on('mouseout',function(){
    //     $(this).removeClass('am-active');
    // });
    //     if($('.get').width() < 640){
    //     $('.get').height($('.get').width() / ( 1920 / 278 ));
    //     alert($('.get').height());
    // }

    //     var mobile_prtscn_width  = $('.am-max540').width();
    // var mobile_views_width   =  mobile_prtscn_width;
    // var mobile_views_heigth  =  mobile_views_width / (1200 / 220);
    // $('.am-bottom-don2').css({'height':mobile_views_heigth,'width':mobile_views_width});
    $(window).resize(function() {
        $('.am_listimg_info .am_imglist_time').css('display', $('.am_list_block').width() <= 170 ? 'none' : 'block');
    });

    //@首页 图片滑动效果
    $(".am_list_block").on('mouseover', function() {
        $('.am_img_bg').removeClass('am_img_bg');
        $(this).find('.am_img').addClass('bounceIn');
    });
    $('.am_img').on('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
        $('.am_img').removeClass('bounceIn');
    });
    if ($(window).width() < 700) {
        $('.am_list_block').off();
    }

    //@首页 底部下载按钮

    // function mouse_over_out(obj, style, overcss, outcss) {
    //      obj.bind('mouseover', function() {
    //          $(this).css(style, overcss);
    //      });
    //      obj.bind('mouseout', function() {
    //          $(this).css(style, outcss);
    //      });
    //  }



    //@首页 图片列表长宽相等

    $(window).resize(function() {
        $('.am_img_bg').height($('.am_img_bg').width());
    });
    //@首页 用户名截取
    $('.am_imglist_user_font').each(
        function() {
            if ($(this).text().length >= 13) {
                $(this).html($(this).text().substr(0, 13));
            }
        }
    );

    //@懒加载
    $("img.am_img").lazyload();
    $("a.am_img_bg").lazyload({
        effect: 'fadeIn'
    });

});

//动画效果
function OpenDonghua(Chufa, Mubiao, Xiaoguo) {
    Chufa.on('mouseover', function() {
        $(this).find(Mubiao).addClass(Xiaoguo);
    });
}

function CloseDonghua(Chufa, Mubiao, Xiaoguo) {
    Chufa.on('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
        Mubiao.removeClass(Xiaoguo);
    });
}

var browser = {
    versions: function() {
        var u = navigator.userAgent,
            app = navigator.appVersion;
        return { //移动终端浏览器版本信息                                 
            trident: u.indexOf('Trident') > -1, //IE内核                                 
            presto: u.indexOf('Presto') > -1, //opera内核                                 
            webKit: u.indexOf('AppleWebKit') > -1, //苹果、谷歌内核                                 
            gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') == -1, //火狐内核                                
            mobile: !!u.match(/AppleWebKit.*Mobile.*/) ||
                !!u.match(/AppleWebKit/), //是否为移动终端                                 
            ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios终端                 
            android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1, //android终端或者uc浏览器                                 
            iPhone: u.indexOf('iPhone') > -1 || u.indexOf('Mac') > -1, //是否为iPhone或者QQHD浏览器                    
            iPad: u.indexOf('iPad') > -1, //是否iPad       
            webApp: u.indexOf('Safari') == -1, //是否web应该程序，没有头部与底部
            google: u.indexOf('Chrome') > -1
        };
    }(),
    language: (navigator.browserLanguage || navigator.language).toLowerCase()
}