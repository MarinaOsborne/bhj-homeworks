'use strict'
const sliderItems = document.getElementsByClassName('slider__item');

const sliderArrow = document.getElementsByClassName('slider__arrow');

const sliderDots = document.getElementsByClassName('slider__dot');

let slideIndex = 1;

function showSlides(n) {
  
    if (n > sliderItems.length) {
        slideIndex = 1
      }

    if (n < 1) {
        slideIndex = sliderItems.length
    } 

    for (let slide of sliderItems) {
        slide.className = "slider__item";
    }

    sliderItems[slideIndex - 1].className = "slider__item slider__item_active";    

    for (let dot of sliderDots) {
        dot.className = "slider__dot";
    }

    sliderDots[slideIndex - 1].className = "slider__dot slider__dot_active";   
}



sliderArrow[0].onclick = function() { 

    showSlides(slideIndex -= 1);  
    
}   
 

sliderArrow[1].onclick = function() { 

    showSlides(slideIndex += 1);  
} 


for (let dot of sliderDots) {
    
    dot.onclick = function() { 

    showSlides(slideIndex += 1);  
    } 
} 