const swiper = new Swiper('.swiper', {
  slidesPerView:5,

  breakpoints: {
    1100:{
      slidesPerView: 5
    },
    952:{
      slidesPerView: 3
    },
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

});