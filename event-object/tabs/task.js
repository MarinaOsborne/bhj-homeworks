'use strict'
const tabNavigation = document.getElementsByClassName('tab__navigation');
const tab = document.getElementsByClassName('tab');
const arrTab = Array.from(tab);

const tabContent = document.getElementsByClassName('tab__content');
const arrTabContent = Array.from(tabContent);

for (let i = 0; i < arrTab.length; i++) {

    
    function showMenu() {

        let active = arrTab.findIndex(item => item.classList.contains("tab_active"));  
        arrTab[active].classList.remove("tab_active"); 
        arrTab[i].classList.add("tab_active"); 

        arrTabContent[active].classList.remove("tab__content_active"); 
        arrTabContent[i].classList.add("tab__content_active"); 

    }
      arrTab[i].addEventListener("click", showMenu);


}
