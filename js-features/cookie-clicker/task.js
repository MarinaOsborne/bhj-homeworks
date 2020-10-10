const clicker__counter = document.getElementById("clicker__counter");
const cookie = document.getElementById("cookie");
const speed__counter = document.getElementById("speed__counter");

let previousClick = 0;

cookie.onclick = function() {
   
    clicker__counter.textContent = +clicker__counter.textContent + 1;
    
    let clickTime = new Date();
    speed__counter.textContent = Math.floor(((1 /  (clickTime.getTime() - previousClick)) * 1000)* 100) / 100 
    previousClick = clickTime;

     if (+clicker__counter.textContent % 2 == 0) {
        cookie.width = 220;
        cookie.height = 130;
        
     } else {
        cookie.width = 200;
        cookie.height = 100;
      
     }
    
};







