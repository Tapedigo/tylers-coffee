
// Hamburger Menu

const toggleButtton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('main-nav')[0]

toggleButtton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active')
})