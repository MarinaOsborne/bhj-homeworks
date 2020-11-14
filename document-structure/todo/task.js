'use strict'
const form = document.getElementById('tasks');
const button = document.getElementById('tasks__add');
const text = document.getElementById('task__input');
const tasksList = document.getElementById('tasks__list'); 

button.addEventListener('click', addTask);
form.addEventListener('keypress', addOnEnter);


function addTask (event) { 

    if (text.value.trim() != "") {

      tasksList.insertAdjacentHTML('afterbegin',  `<div class="task">
                                                 <div class="task__title">
                                                 ${text.value}
                                                 </div>
                                                 <a href="#" class="task__remove">&times;</a>
                                                 </div>`) 
   

    let cross = tasksList.getElementsByClassName('task__remove')[0] 

    cross.addEventListener('click', event => { 

        if (cross = event.target)
         cross.parentElement.remove()  

    })
    
    text.value = "";
    event.preventDefault();    
    }
};

function addOnEnter (event) { 

    if (event.code == "Enter" || event.code == "NumpadEnter") addTask (event)
};

