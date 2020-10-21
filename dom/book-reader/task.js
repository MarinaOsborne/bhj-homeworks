'use strict'

const buttons = document.getElementsByClassName('font-size');
const arrButtons = Array.from(buttons);
const books = document.getElementsByClassName('book');


let active = arrButtons.findIndex(item => item.classList.contains("font-size_active"));

for (let i = 0; i < arrButtons.length; i++) {
    
  arrButtons[i].addEventListener("click", pressButton)  

  function pressButton(event) {
    for (let i = 0; i < arrButtons.length; i++) {

      arrButtons[i].classList.remove("font-size_active"); 
    } 

    arrButtons[i].classList.add("font-size_active");  

     if (i === 0) {
        books[0].classList.add("book_fs-small"); 

      } else if (i === 1) {
         books[0].classList.remove("book_fs-small"); 
         books[0].classList.remove("book_fs-big"); 

     } else if (i === 2) {
        books[0].classList.remove("book_fs-small"); 
        books[0].classList.add("book_fs-big"); 
     }
    
     event.preventDefault(event);
    } 

}
