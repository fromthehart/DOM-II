// Return a random number from 0 to max
const randomIndex = (max) => {
  return Math.floor(Math.random() * max);
}

// Change H1 color on mouseover / mouseleave
const funHeaders = document.querySelectorAll('h2');
funHeaders.forEach(h2 => {
  h2.addEventListener('mouseover', e => {
    h2.classList.toggle('orange');
  });
  h2.addEventListener('mouseleave', e => {
    h2.classList.toggle('orange');
  });
})

// Change H1 color to a random color when wheeled over
const funnestHeader = document.querySelector('h1');
funnestHeader.addEventListener('wheel', e=> {
  funnestHeader.style.color = ['red', 'green', 'purple', 'orange'][randomIndex(4)];
})

// Our bus is ready to go. If you don't board now, it'll leave without you!
const impatientBus = document.querySelector('header img');
impatientBus.addEventListener('load', e => {
  window.setTimeout(() => {
    console.log('got here');
    impatientBus.src = '../img/impatient-bus.jpg';
    impatientBus.addEventListener('dblclick', e => {
      impatientBus.src = '../img/fun-bus-returns.jpg';
    })
  }, 10000);
})

const focusLinks = document.querySelectorAll('.nav-link');
focusLinks.forEach(link => {
  link.addEventListener('focus', e=> {
    link.classList.toggle('textshadow');
  })
  link.addEventListener('blur', e=> {
    link.classList.toggle('textshadow');
  })
})