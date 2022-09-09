document.addEventListener("DOMContentLoaded", function () {
 
 const resolution = document.querySelector('body').clientWidth;
 var mySwiper;
  const app = {
    // su ly cac su kien
    handleEvent: function () {
      const _this = this;

      

      // hide cac element khi click ra ngoai
      document.addEventListener("click", function (e) {});
    },
    // window scroll
    windowScroll: function () {
      var _this = this;
      window.onscroll = function () {
        // scroll top
        
      };
    },
    // slider người & nghiệp
    sliderKarma: function(){
      if(resolution > 768){
        mySwiper = new Swiper(".mySwiperKarma", {
          slidesPerView: 1,
          slidesPerGroup: 1,
          spaceBetween: 30,
          navigation: {
            nextEl: ".swiper-button-next1",
            prevEl: ".swiper-button-prev1",
          },
          hideOnClick:true,
          pagination: {
            el: ".swiper-pagination1",
            clickable: true,
          },
        });
      }else {
        document.querySelector('.swiper-wrapper').removeAttribute('class');
      }
      
    },
    // slider võ thuật
    sliderKungfu: function(){
      var swiper = new Swiper(".mySwiperKungfu", {
        slidesPerView: 4,
        slidesPerGroup: 1,
        spaceBetween: 30,
        navigation: {
          nextEl: ".swiper-button-next2",
          prevEl: ".swiper-button-prev2",
        },
        hideOnClick:true,
        pagination: {
          el: ".swiper-pagination2",
          clickable: true,
        },
      });
    },
    // slider y học
    sliderMedical: function(){
      var swiper = new Swiper(".mySwiperMedical", {
        slidesPerView: 3,
        slidesPerGroup: 1,
        spaceBetween: 30,
        navigation: {
          nextEl: ".swiper-button-next3",
          prevEl: ".swiper-button-prev3",
        },
        hideOnClick:true,
        pagination: {
          el: ".swiper-pagination3",
          clickable: true,
        },
      });
    },
    // slider điêu khắc
    sliderSculpture: function(){
      var swiper = new Swiper(".mySwiperSculpture", {
        slidesPerView: 1,
        slidesPerGroup: 1,
        spaceBetween: 30,
        navigation: {
          nextEl: ".swiper-button-next4",
          prevEl: ".swiper-button-prev4",
        },
        hideOnClick:true,
        pagination: {
          el: ".swiper-pagination4",
          clickable: true,
        },
      });
    },
    // slider hội họa
    sliderArt: function(){
      var swiper = new Swiper(".mySwiperArt", {
        slidesPerView: 4,
        slidesPerGroup: 1,
        spaceBetween: 30,
        navigation: {
          nextEl: ".swiper-button-next5",
          prevEl: ".swiper-button-prev5",
        },
        hideOnClick:true,
        pagination: {
          el: ".swiper-pagination5",
          clickable: true,
        },
      });
    },
    // slider thơ ca
    sliderPoem: function(){
      var swiper = new Swiper(".mySwiperPoem", {
        slidesPerView: 3,
        slidesPerGroup: 1,
        spaceBetween: 30,
        navigation: {
          nextEl: ".swiper-button-next6",
          prevEl: ".swiper-button-prev6",
        },
        hideOnClick:true,
        pagination: {
          el: ".swiper-pagination6",
          clickable: true,
        },
      });
    },
    // khoi tao function start
    start: function () {
      // su ly cac su kien
      this.handleEvent();
      // window scroll
      this.windowScroll();
      // slider người & nghiệp
      this.sliderKarma();
      // slider võ thuật
      this.sliderKungfu();
      // slider y học
      this.sliderMedical();
      // slider điêu khắc
      this.sliderSculpture();
      // slider hội họa
      this.sliderArt();
      // slider thơ ca
      this.sliderPoem();
    },
  };

  app.start();
});
