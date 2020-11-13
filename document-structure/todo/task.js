'use strict'
const form = document.getElementById('tasks');
const button = document.getElementById('tasks__add');
const text = document.getElementById('task__input');
const tasksList = document.getElementById('tasks__list'); 

form.addEventListener('keypress', event => { 

    if (event.code == "Enter" && text.value != "") {

      tasksList.insertAdjacentHTML('afterend',  `<div class="task">
                                                 <div class="task__title">
                                                 ${text.value}
                                                 </div>
                                                 <a href="#" class="task__remove">&times;</a>
                                                 </div>`) 
   

    let crosses = document.getElementsByClassName('task__remove') 

    for (let cross of crosses) {

      cross.addEventListener('click', event => { 
        if (cross = event.target)
        cross.parentElement.remove()

     })
    }

    event.preventDefault();    
}

});
