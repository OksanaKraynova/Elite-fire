import Swiper, { Navigation, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination'


const swiper = new Swiper('.swiper', {
    // configure Swiper to use modules
    modules: [Navigation],
    navigation: {
        nextEl: '.button-next',
        prevEl: '.button-prev'
    },
});

const swiperRend = new Swiper('.action__slider', {
    modules: [Navigation, Pagination],
    navigation: {
        nextEl: ".action__next",
        prevEl: ".action__prev",
    },
    pagination: {
        el: '.swiper-pagination',
    },
})