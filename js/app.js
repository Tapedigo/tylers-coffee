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

const name = document.querySelector('#f-name');
const password = document.querySelector('#password');
const form = document.querySelector('.form');
const errorElement = document.querySelector('#error');

form.addEventListener('submit' , (e) => {
  let messages = []
  if (password.value.length <= 6) {
    messages.push('Password must be longer than six characters');
}

  if (messages.length > 0) {
    e.preventDefault()
    errorElement.innerText = messages.join(', ')
  }
})