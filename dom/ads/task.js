'use strict'

const rotatorCases = document.getElementsByClassName('rotator__case');
const arrotatorCases = Array.from(rotatorCases);


let active = arrotatorCases.findIndex(item => item.classList.contains("rotator__case_active"));

function showSlides(n) {
   
    if (n > arrotatorCases.length - 1 ) {
        active = 0
      }

    if (n < 0) {
        active = arrotatorCases.length -1
    } 
    
    for (let slide of arrotatorCases) {
        slide.classList.remove("rotator__case_active"); 
        
      }
      arrotatorCases[active].classList.add("rotator__case_active");   
    console.log(active);

    
 
}



let timerId = setTimeout(function showNoncense() {


    showSlides(active += 1);  
    timerId = setTimeout(showNoncense, 1000); // (*)
}, 1000);  

