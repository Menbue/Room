import Swiper, { Navigation, Pagination } from 'swiper';

const promoSlider = new Swiper('.swiper__slider', {
    modules: [Navigation, Pagination],
    loop: true,
    pagination: {
        el: '.swiper-pagination',
      },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
     
})
