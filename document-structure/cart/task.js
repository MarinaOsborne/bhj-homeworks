'use strict'

const productAdds = document.getElementsByClassName('product__add');
const quantity = document.getElementsByClassName('product__quantity-value');
const cartQuantity = document.getElementsByClassName('cart__product-count');
const img = document.getElementsByClassName('product__image');
const id = Array.from(document.getElementsByClassName('product'));
const cartProducts = document.getElementsByClassName('cart__products');
const cartProduct = document.getElementsByClassName('cart__product');

const buttons = document.getElementsByClassName('product__quantity-controls');
// console.log(buttons)


for (let button of buttons) {

  button.addEventListener('click', event => {

    let arrProd = Array.from(cartProduct);

    let findCart = arrProd.find(item => 
      item.dataset.id == event.target.closest('.product').dataset.id)
    
    

    if (event.target.classList.contains("product__quantity-control_dec") && findCart && +findCart.lastElementChild.textContent > 0) {

      findCart.lastElementChild.textContent = +findCart.lastElementChild.textContent - 1 

       } else if (event.target.classList.contains("product__quantity-control_dec") && !findCart && +event.target.nextElementSibling.textContent > 0) {
       
          event.target.nextElementSibling.textContent -= 1;
    }


    if (event.target.classList.contains("product__quantity-control_inc") && findCart) {

      findCart.lastElementChild.textContent = +findCart.lastElementChild.textContent + 1 

      } else if (event.target.classList.contains("product__quantity-control_inc") && !findCart) {

        let currentNumber = +event.target.previousElementSibling.textContent;  
        currentNumber += 1;
        event.target.previousElementSibling.textContent = currentNumber

   } 

  })
}
 

for (let i = 0; i < productAdds.length; i++ ) {

    productAdds[i].addEventListener('click', event => { 

      let cartValue =  +quantity[i].textContent; 
      let src = img[i].getAttribute('src');
      let itemId = id[i].dataset.id;        
           
    for (let cartProduct of cartProducts) {
        cartProduct.innerHTML += 

            `<div class="cart__product" data-id="${itemId}">
            <img class="cart__product-image" src="${src}">
            <div class="cart__product-count">${cartValue}</div>
            </div>`
    }

    });

};
