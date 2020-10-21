'use strict'

    document.addEventListener("scroll", (element) => {

        let isInViewport = function(element) {

          const viewportHeight = window.innerHeight;
          const elementTop = element.getBoundingClientRect().top;
          return elementTop > viewportHeight ? true : false;
        };
        
        const divs = document.getElementsByClassName('reveal');
       
        for ( const div of divs ) {
  
           if (isInViewport(div) === true) {

              div.classList.add("reveal_active"); 
              
            }
        }

    });    

    
