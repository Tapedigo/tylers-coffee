//Carousel

const carouselSlide = document.querySelector('.carousel');
const carouselImages = document.querySelectorAll('c-img');

// Buttons
const prevBtn = document.querySelector('#prev');
const nextBtn = document.querySelector('#next');

// Counter

let Counter = 1;
const size = carouselImages[0].clientWidth;

carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';