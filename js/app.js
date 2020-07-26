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

function myFunction() {
  const x = document.querySelectorAll(".main-nav");
  if (x.style.display === "block") {
    x.style.display === "none";
  } else {
    x.style.display = "block";
  }
}