document.addEventListener("DOMContentLoaded", function () {
 
 const resolution = document.querySelector('body').clientWidth;

 const showSub = document.querySelector('.js_submenu');
 const subMenu = document.querySelector('.sub-menu-wrapper');
 const closeSub = document.querySelector('.js_close');

 const countItem = document.querySelector('.js_count');
  const app = {
    // su ly cac su kien
    handleEvent: function () {
      const _this = this;

      if(showSub){
        showSub.onclick  = function() {
          this.classList.toggle('open');
          if(subMenu){
            subMenu.classList.toggle('open')
          }
        }
      }

      if(closeSub){
        closeSub.onclick = function(){
          this.closest('.open').classList.remove('open');
          if(showSub){
            showSub.classList.remove('open')
          }
        }
      }

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
      var swiper = new Swiper(".mySwiperKarma", {
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
        breakpoints: {
          640: {
            slidesPerView: 1,
            slidesPerGroup: 1,
          },
          768: {
            slidesPerView: 1,
            slidesPerGroup: 1,
          },
          1024: {
            slidesPerView: 1,
            slidesPerGroup: 1,
          },
        },
        
      });
    },
    // slider võ thuật
    sliderKungfu: function(){
      var swiper = new Swiper(".mySwiperKungfu", {
        slidesPerView: 1,
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
        breakpoints: {
          640: {
            slidesPerView: 2,
            slidesPerGroup: 1,
          },
          768: {
            slidesPerView: 2,
            slidesPerGroup: 1,
          },
          1024: {
            slidesPerView: 4,
            slidesPerGroup: 1,
          },
        },
      });
    },
    // slider y học
    sliderMedical: function(){
      var swiper = new Swiper(".mySwiperMedical", {
        slidesPerView: 1,
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
        breakpoints: {
          640: {
            slidesPerView: 2,
            slidesPerGroup: 1,
          },
          768: {
            slidesPerView: 2,
            slidesPerGroup: 1,
          },
          1024: {
            slidesPerView: 3,
            slidesPerGroup: 1,
          },
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
        slidesPerView: 1,
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
        breakpoints: {
          640: {
            slidesPerView: 2,
            slidesPerGroup: 1,
          },
          768: {
            slidesPerView: 2,
            slidesPerGroup: 1,
          },
          1024: {
            slidesPerView: 4,
            slidesPerGroup: 1,
          },
        },
      });
    },
    // slider thơ ca
    sliderPoem: function(){
      var swiper = new Swiper(".mySwiperPoem", {
        slidesPerView: 1,
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
        breakpoints: {
          640: {
            slidesPerView: 2,
            slidesPerGroup: 1,
          },
          768: {
            slidesPerView: 2,
            slidesPerGroup: 1,
          },
          1024: {
            slidesPerView: 3,
            slidesPerGroup: 1,
          },
        },
      });
    },
    // slider media mobile
    sliderMediaMb: function(){
      var swiper = new Swiper(".mySwiperMediaMb", {
        slidesPerView: 1,
        slidesPerGroup: 1,
        spaceBetween: 30,
        navigation: {
          nextEl: ".swiper-button-next7",
          prevEl: ".swiper-button-prev7",
        },
        hideOnClick:true,
      });
    },
    // slider cate
    sliderCate: function(){
      if(countItem){
        var count = Math.floor(countItem.children.length /3);
        var swiper = new Swiper(".mySwiperCate", {
          slidesPerView: 1,
          spaceBetween: 30,
          navigation: {
            nextEl: ".swiper-button-next8",
            prevEl: ".swiper-button-prev8",
          },
          hideOnClick:true,
          pagination: {
            el: ".swiper-pagination8",
            clickable: true,
          },
          grid: {
            rows: count,
            fill: 'rows',
          },
          breakpoints: {
            640: {
              slidesPerView: 2,
              grid: {
                rows: count,
                fill: 'rows',
              },
            },
            768: {
              slidesPerView: 2,
              grid: {
                rows: count,
                fill: 'rows',
              },
            },
            1024: {
              slidesPerView: 3,
              grid: {
                rows: count,
                fill: 'rows',
              },
            },
          },
        });
      }
    },
    // slider cate media
    sliderMediaPage: function(){
      if(countItem){
        var count = Math.floor(countItem.children.length /1);
        var swiper = new Swiper(".mySwiperMedia", {
          slidesPerView: 1,
          spaceBetween: 60,
          navigation: {
            nextEl: ".swiper-button-next9",
            prevEl: ".swiper-button-prev9",
          },
          hideOnClick:true,
          pagination: {
            el: ".swiper-pagination9",
            clickable: true,
          },
          grid: {
            rows: count,
            fill: 'rows',
          },
          breakpoints: {
            640: {
              slidesPerView: 1,
              grid: {
                rows: count,
                fill: 'rows',
              },
            },
            768: {
              slidesPerView: 1,
              grid: {
                rows: count,
                fill: 'rows',
              },
            },
            1024: {
              slidesPerView: 1,
              grid: {
                rows: count,
                fill: 'rows',
              },
            },
          },
        });
      }
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
      // slider media mobile
      this.sliderMediaMb();
      // slider cate
      this.sliderCate();
       // slider cate media
      this.sliderMediaPage();
    },
  };

  app.start();
});
