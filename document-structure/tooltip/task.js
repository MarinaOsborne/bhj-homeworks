 `use strict`

const tooltips = [...document.querySelectorAll('.has-tooltip')];
let active;


function showTip(elem) {
  
  if (active = document.querySelector('.tooltip')) {
    if (active === elem.nextElementSibling) {
      active.remove();
      return;
    } else 
    active.remove();
  }


  let tipText = elem.getAttribute('title');
  elem.insertAdjacentHTML("afterEnd", `<div class="tooltip" style="left: 0; top: 0">${tipText}</div>`);
  active = document.querySelector('.tooltip');
  active.style.display = 'block';
  active.style.left = elem.getBoundingClientRect().left + 'px';
  active.style.top = elem.getBoundingClientRect().bottom + 'px'
  
}

tooltips.forEach(item => {
  item.addEventListener('click', e =>{
    e.preventDefault();
    showTip(item);
  });
});

