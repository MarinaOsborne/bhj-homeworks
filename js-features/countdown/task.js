'use strict'

const timer = document.getElementById("timer");

let x = 59;

const addText = function() {
  
  if (x > 0) {   
    x -= 1;  
    timer.textContent = "00:" + "00:" + x;
  } 

}
    
setInterval(addText, 1000)

const showGreeting = () => {

  alert ('Вы победили в конкурсе!')
  link.click();
}

setTimeout(showGreeting, (x + 1) * 1000);




