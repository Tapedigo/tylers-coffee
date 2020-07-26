// Image Carousel Swiper.js

var swiper = new Swiper('.swiper-container', {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

// Hamburger Menu

const toggleButtton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('main-nav')[0]

toggleButtton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active')
})