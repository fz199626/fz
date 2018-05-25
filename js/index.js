var mySwiper = new Swiper ('.swiper-container', {
    direction: 'vertical',
    width: window.innerWidth,
    height : window.innerHeight,
    mousewheel: true,
    hashNavigation: {
        watchState: true,
    },

    // 如果需要分页器
    pagination:{
        el: '.swiper-pagination,.nav-menu',
        clickable: true,
        clickableClass : 'my-pagination-clickable',
    },

    // 如果需要前进后退按钮
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    on: {
        slideChange: function(){
            if(this.isEnd){
                this.navigation.$nextEl.css('display','none');
            }else if(screen.width<768){
                this.navigation.$nextEl.css('display','block');
            }
        },
        init: function(){
            swiperAnimateCache(this); //隐藏动画元素
            swiperAnimate(this); //初始化完成开始动画
        },
        slideChangeTransitionEnd: function(){
            swiperAnimate(this); //每个slide切换结束时也运行当前slide动画
        }
    },

})
var mySwiper = new Swiper ('.swiper-container-lunbo', {
    // direction: 'vertical',
    effect : 'cube',
    delay: 1000,//1秒切换一次
    loop : true,
    autoplay: {
        disableOnInteraction: false,
    },
})
$(function () {
    //换一换点击按钮
    $(".pl").click(function () {
        $.each($(".montage a"),function(i){
            $(".montage a:eq("+i+")").animate({opacity:"0"},500);
        });
    })
    //菜单的展开与收缩
    $(".nav .open").click(function(){
        $(".nav-menu").slideToggle("slow");
        $(".fade").slideToggle("slow");
        if($(this).html() == "三"){
            $(this).html("X");
        }else {
            $(this).html("三");
        }
    });
    $(".nav-menu span").mouseover(function(){
        $(this).css("background-color","rgba(0,0,0,0.2)").siblings().css("background-color","rgba(0,0,0,0)");
    });
    $(".nav-menu span").click(function(){
        $(".nav-menu").hide();
        $(".fade").hide();
        $(".nav .open").html("三");
    });
})