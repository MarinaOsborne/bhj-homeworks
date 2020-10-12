'use strict'

const cross = document.getElementsByClassName('modal__close modal__close_times');
const main = document.getElementById("modal_main");
const success = document.getElementById("modal_success");
const firstButton = document.getElementsByClassName('btn btn_danger modal__close show-success');


cross[0].onclick = function() { 
      main.className = "modal";    
}

cross[1].onclick = function() { 
    success.className = "modal";  
}

firstButton[0].onclick = function() { 
    main.className = "modal";
    success.className = "modal modal_active"; 
}