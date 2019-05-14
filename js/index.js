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
funnestHeader.addEventListener('wheel', e => {
  funnestHeader.style.color = ['red', 'green', 'purple', 'orange'][randomIndex(4)];
})

// Our bus is ready to go. If you don't board now, it'll leave without you!
const impatientBus = document.querySelector('header img');
impatientBus.addEventListener('load', e => {
  window.setTimeout(() => {
    impatientBus.src = './img/impatient-bus.jpg';
    impatientBus.addEventListener('dblclick', e => {
      impatientBus.src = './img/fun-bus-returns.jpg';
    })
  }, 10000);
})

// Text shadow on link focus, also disable following of links
const focusLinks = document.querySelectorAll('a');
focusLinks.forEach(link => {
  link.addEventListener('focus', e => {
    link.classList.toggle('textshadow');
  })
  link.addEventListener('blur', e => {
    link.classList.toggle('textshadow');
  })
  link.addEventListener('click', e => {
    e.preventDefault();
    e.stopPropagation();
  })
})

// No refunds
const trollText = document.querySelectorAll('textarea');
trollText.forEach(textBox => {
  textBox.addEventListener('select', e => {
    textBox.textContent = "Haha just kidding. No refunds whatsoever 😜";  
  })
})

// Get angry if the window is resized
const backupParas = [];
const allParas = document.querySelectorAll('p');
allParas.forEach(para => backupParas.push(para.innerHTML));

window.addEventListener('resize', e => {
  allParas.forEach(para => para.innerHTML = "<span class='angryred'>Whoa whoa whoa... hold up, pardner. Extensive user testing showed that this text box is most effective at your previous window size. Clearly you didn't graduate from Lambda School's excellent UX program. Might we suggest you sign up?</span>");
  window.setTimeout(() => {
    allParas.forEach((para, index) => para.innerHTML = backupParas[index]);
  }, 5000);
})