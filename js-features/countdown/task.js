'use strict'

const timer = document.getElementById("timer");

let x = 59;

const addText = function() {
  
  if (x > 0) {   
    x -= 1;  
    timer.textContent = "00:" + "00:" + x;
  } else {
    clearInterval(intervalID);
    alert ('Вы победили в конкурсе!')
    link.click();
    
    
  }

}
    
let intervalID = setInterval(addText, 1000)
