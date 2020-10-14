'use strict'
const menuLink = document.getElementsByClassName('menu__link');
  let arr = Array.from(menuLink);
  
  
for (let i = 0; i < arr.length; i++) {
    
    menuLink[i].onclick = function() { 
        
       menuLink[i].nextElementSibling.classList.toggle("menu_active"); 
      
      return false;
    }  
  
   
}
