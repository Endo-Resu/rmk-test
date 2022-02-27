const swiper = new Swiper('.swiper', {
  loop: true,
  slidesPerView: 'auto',
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    320: {
      slidesPerView: 'auto',
    },
    768: {
      slidesPerView: 'auto',
    }
  },
});

console.log('main');
