'use strict'

const cartProduct = document.getElementsByClassName('cart__product');

const buttons = document.getElementsByClassName('product__quantity-controls');

const products = Array.from(document.getElementsByClassName('product'));


for (let product of products) {

  product.addEventListener('click', event => {

    let arrProd = Array.from(cartProduct);

    let findCart = arrProd.find(item => 

      item.dataset.id == event.target.closest('.product').dataset.id)
       

      if (event.target.classList.contains("product__quantity-control_dec") && findCart && +findCart.lastElementChild.textContent > 1) {

                findCart.lastElementChild.textContent -=1;
          
                 } else if (event.target.classList.contains("product__quantity-control_dec") && !findCart && +event.target.nextElementSibling.textContent > 1) {
                 
                    event.target.nextElementSibling.textContent -= 1;
                  }

      if (event.target.classList.contains("product__quantity-control_inc") && findCart) {

        findCart.lastElementChild.textContent = +findCart.lastElementChild.textContent + 1 

         } else if (event.target.classList.contains("product__quantity-control_inc") && !findCart) {

            let currentNumber = +event.target.previousElementSibling.textContent;  
            currentNumber += 1;
            event.target.previousElementSibling.textContent = currentNumber

      } 


    const cartProd = document.querySelector('.cart__products');
    let quantity = event.target.parentElement.querySelector('.product__quantity-value')

    if (!findCart && event.target.classList.contains("product__add")) {

      cartProd.innerHTML += 
      `<div class="cart__product" data-id=${event.target.closest('.product').dataset.id}>
          <img class="cart__product-image" src=${event.target.closest('.product').firstElementChild.nextElementSibling.getAttribute('src')}>
          <div class="cart__product-count">${quantity.innerText}</div>
      </div>`  } else if (findCart && event.target.classList.contains("product__add")) {

        findCart.lastElementChild.textContent = +findCart.lastElementChild.textContent + 1 
    }

  })

}


