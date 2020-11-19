'use strict'

let xhr = new XMLHttpRequest();

xhr.open('GET', 'https://netology-slow-rest.herokuapp.com');

xhr.send();

xhr.onreadystatechange = function () {

    if (xhr.readyState === 4) {

        let data = JSON.parse(this.responseText);
        let currency = data.response.Valute;        

        document.getElementById('loader').classList.remove('loader_active');

      
            for (let prop in currency) {
             
                document.querySelector('#items').innerHTML  += 
                
                `<div class="item">
                   <div class="item__code">
                      ${currency[prop].CharCode}
                   </div>
                   <div class="item__value">
                      ${currency[prop].Value}
                   </div>
                   <div class="item__currency">
                     руб.
                   </div>
                </div>`;                    
              
           }
        
    };
};
