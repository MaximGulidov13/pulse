'use strict'

//slider
const prev = document.querySelector('.slider__prev');
const next = document.querySelector('.slider__next');
const slide = document.querySelectorAll('.slider__item');
let slideIndex = 1;

showSlides(slideIndex);

function showSlides(n) {
    if(n > slide.length) {
        slideIndex = 1;
    }

    if(n < 1) {
        slideIndex = slide.length;
    }

    slide.forEach(item => item.classList.add('hide'));
    
    slide[slideIndex - 1].classList.toggle('hide');
}

function plusSlides(n) {
    showSlides(slideIndex += n);
}

prev.addEventListener('click', () => {
    plusSlides(-1);
});

next.addEventListener('click', () => {
    plusSlides(1);
});