/**
 * Created by song on 2016/7/20.
 */
$(document).ready(function(){
    var index = {
        //the init of swiper
      swipeInit : function(){
          var swiperV = new Swiper('.swiper-container-v', {
              direction: 'vertical',
              onInit: function(swiper){ //Swiper2.x的初始化是onFirstInit
                  swiperAnimateCache(swiper); //隐藏动画元素
                  swiperAnimate(swiper); //初始化完成开始动画
              },
              onSlideChangeEnd: function(swiper){
                  swiperAnimate(swiper); //每个slide切换结束时也运行当前slide动画
              }
          });
          var swiperh=new Swiper('.swiper-container-h',{
              pagination: '.swiper-pagination-h',
              paginationClickable: true,
              spaceBetween: 50,
              nextButton: '.swiper-button-next',
              prevButton: '.swiper-button-prev',
          })
          var swiperh2=new Swiper('.swiper-container-h2',{
              pagination: '.swiper-pagination-h2',
              paginationClickable: true,
              slidesPerView: 3,
              spaceBetween: 50,
              breakpoints: {
                  1024: {
                      slidesPerView: 3,
                      spaceBetween: 40
                  },
                  768: {
                      slidesPerView: 1,
                      spaceBetween: 30
                  },
                  640: {
                      slidesPerView: 1,
                      spaceBetween: 20
                  },
                  320: {
                      slidesPerView: 1,
                      spaceBetween: 10
                  }
              }
          })
      },
      hoverEvent : function(){
          $(".one-third").hover(function(){
             $(this).find(".texi-info").animate({
                 opacity:0
             },300);
          },function(){
             $(this).find(".texi-info").animate({
                 opacity:1
             },300);
          });
      },
      clickEvent : function(){
          $(".nav-icon").click(function() {
              $(".top-nav").slideToggle("slow");
          });
      },
      clickHref : function(){
          var sUserAgent = navigator.userAgent.toLowerCase();
          var bIsIpad = sUserAgent.match(/ipad/i) == 'ipad';
          var bIsIphone = sUserAgent.match(/iphone os/i) == 'iphone os';
          var bIsMidp = sUserAgent.match(/midp/i) == 'midp';
          var bIsUc7 = sUserAgent.match(/rv:1.2.3.4/i) == 'rv:1.2.3.4';
          var bIsUc = sUserAgent.match(/ucweb/i) == 'web';
          var bIsCE = sUserAgent.match(/windows ce/i) == 'windows ce';
          var bIsWM = sUserAgent.match(/windows mobile/i) == 'windows mobile';

          if(bIsIpad || bIsIphone || bIsMidp || bIsUc7 || bIsUc || bIsCE || bIsWM){
              return;
          }else{
              $('a[href*=#],area[href*=#]').click(function() {
                  console.log(this.pathname);
                  if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                      var $target = $(this.hash);
                      var padding=parseInt($("#slide1").css("padding-top"));
                      console.log(padding);
                      $target = $target.length && $target || $('[name=' + this.hash.slice(1) + ']');
                      if ($target.length) {
                          var targetOffset = $target.offset().top-padding;
                          $('html,body').animate({
                                  scrollTop: targetOffset
                              },
                              1000);
                          return false;
                      }
                  }
              });
          }

      },
      init : function(){
          this.clickEvent();
          this.swipeInit();
          this.hoverEvent();
          this.clickHref();
      }
    };
    index.init();
});