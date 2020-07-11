//Carousel

const carouselSlide = document.querySelector('.carousel');
const carouselImages = document.querySelectorAll('.carousel-slide img');

// Buttons
const prevBtn = document.querySelector('#prev');
const nextBtn = document.querySelector('#next');

// Counter

let counter = 1;
const size = carouselImages[0].clientWidth;

carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';

// Button Listeners

nextBtn.addEventListener('click',()=>{    
    
    carouselSlide.style.transition = "transform 0.4s ease-in-out"
    counter++;
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';

});

prevBtn.addEventListener('click',()=>{
    carouselSlide.style.transition = "transform 0.4s ease-in-out"
    counter--;
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    
});

carouselSlide.addEventListener('transitionend', ()=>{
    if (carouselImages[counter].id === 'lastClone') {
        carouselSlide.style.transform = 'none';  
        counter = carouselImages.length -2;
        carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }
    carouselSlide.addEventListener('transitionend', ()=>{
        if (carouselImages[counter].id === 'firstClone') {
            carouselSlide.style.transform = 'none';  
            counter = carouselImages.length - counter;
            carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
        }
    });
});