'use strict'


function getHole(index) {

   const hole = document.getElementById(`hole${index}`)

   hole.onclick = function() { 

     if (hole.className.includes( 'hole_has-mole' )) {

       dead.textContent = +dead.textContent + 1;

         if (dead.textContent == 10) {

           dead.textContent = 0;
           lost.textContent = 0;
           alert ('Вы выиграли!')

         }

       } else {

           lost.textContent = +lost.textContent + 1; 

           if (lost.textContent == 5) {

            dead.textContent = 0;
            lost.textContent = 0;
            alert ('Игра закончена!')
            
          }

         }
   }
   
   
}


for (let index = 1; index < 10; index++) {

    getHole(index)
    
}

