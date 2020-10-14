'use strict'

const crosses = document.getElementsByClassName('modal__close modal__close_times');
const main = document.getElementById("modal_main");
const success = document.getElementById("modal_success");
const firstButton = document.getElementsByClassName('btn btn_danger modal__close show-success');

for (let cross of crosses) {
    
    cross.onclick = function() { 

    this.closest("div.modal").classList.remove("modal_active")
      
    }
}


firstButton[0].onclick = function() { 
    main.className = "modal";
    success.className = "modal modal_active"; 
}
