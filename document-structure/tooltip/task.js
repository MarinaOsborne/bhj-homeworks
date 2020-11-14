 `use strict`

let tooltips = [...document.querySelectorAll('.has-tooltip')];
let tip = document.createElement('div');
tip.classList.add('tooltip');

for (let tooltip of tooltips)
tooltip.addEventListener('click', function (e) {

     tooltip.appendChild(tip);
     tip.contains(document.querySelector('.tooltip_active')) && document.querySelector('.tooltip_active').innerText == e.target.title ? 
     tip.classList.remove('tooltip_active') : tip.classList.add('tooltip_active');
    
     tip.style.top = this.style.top;
     tip.style.left = `${this.getBoundingClientRect().left}px`;
     tip.innerText = e.target.title;
    
     e.preventDefault();
})

