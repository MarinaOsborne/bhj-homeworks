'use strict'

const rotatorCases = document.getElementsByClassName('rotator__case');
const arrotatorCases = Array.from(rotatorCases);


let active = arrotatorCases.findIndex(item => item.classList.contains("rotator__case_active"));

function showLie(n) {
   
    if (n > rotatorCases.length - 1 ) {
        active = 0
      }

    if (n < 0) {
        active = rotatorCases.length -1
    } 
    
    for (let slide of rotatorCases) {
        slide.classList.remove("rotator__case_active"); 
        
      }
      rotatorCases[active].classList.add("rotator__case_active");      
 
}



let timerId = setTimeout(function showNoncense() {

    showLie(active += 1);  

    timerId = setTimeout(showNoncense, 1000); 

}, 1000);  

