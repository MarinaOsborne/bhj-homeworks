'use strict'
const dropdownValue = document.getElementsByClassName('dropdown__value');
const dropdownList = document.getElementsByClassName('dropdown__list');
const dropdownItem = document.getElementsByClassName('dropdown__item');
const dropdownLink = document.getElementsByClassName('dropdown__link');

for (let i = 0; i < dropdownList.length; i++) {

   function showMenu() {

     dropdownList[i].classList.toggle("dropdown__list_active"); 
     
   }
   
    dropdownValue[i].addEventListener("click", showMenu);

       for (let j = 0; j < dropdownItem.length; j++) {
    
           function changeValue(event) {
        
              dropdownValue[i].textContent = dropdownLink[j].textContent;
              showMenu()
              event.preventDefault();

           }  

           dropdownItem[j].addEventListener("click", changeValue); 
        }
}


   








