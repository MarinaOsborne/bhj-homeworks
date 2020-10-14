'use strict'
const sliderItems = document.getElementsByClassName('slider__item');
const arrSlides = Array.from(sliderItems);

const sliderArrow = document.getElementsByClassName('slider__arrow');

const sliderDots = document.getElementsByClassName('slider__dot');
const arrDots = Array.from(sliderDots);


let slideIndex = 1;

function showSlides(n) {
  
    if (n > sliderItems.length) {
        slideIndex = 1
      }

    if (n < 1) {
        slideIndex = sliderItems.length
    } 

    let active = arrSlides.findIndex(item => item.classList.contains("slider__item_active"));
    
    arrSlides[slideIndex - 1].classList.toggle("slider__item_active"); 
    arrSlides[active].classList.toggle("slider__item_active");   
    
    arrDots[slideIndex - 1].classList.toggle("slider__dot_active"); 
    arrDots[active].classList.remove("slider__dot_active"); 
 
}



sliderArrow[0].onclick = function() { 

    showSlides(slideIndex -= 1);  
    
}   
 

sliderArrow[1].onclick = function() { 

    showSlides(slideIndex += 1);  
} 


 for (let i = 0; i < sliderDots.length; i++) {
    
     sliderDots[i].onclick = function() { 

        sliderDots[i].classList.toggle("slider__dot_active"); 

        let activeSlide = arrSlides.findIndex(item => item.classList.contains("slider__item_active"));
        
        arrSlides[activeSlide].classList.toggle("slider__item_active");  

        arrSlides[i].classList.toggle("slider__item_active"); 
        
        arrDots[activeSlide].classList.remove("slider__dot_active"); 
   

     } 
 } 
