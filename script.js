const buttonOnClick = document.querySelector('button');
const formMovement = document.querySelector('form');

buttonOnClick.addEventListener('click', (event) => {
  event.preventDefault();

  const fields = [...document.querySelectorAll('input')];
  fields.forEach((field) => {
    if (field.value === '') {
      formMovement.classList.add('validate-error');
    }
  });

  const formError = document.querySelector('.validate-error');
  if (formError) {
    formError.addEventListener('animationend', (event) => {
      if (event.animationName === 'nono') {
        formError.classList.remove('validate-error');
      }
    });
  } else {
    formMovement.classList.add('moveDown');
  }
});

formMovement.addEventListener('animationstart', (event) => {
  if (event.animationName === 'move') {
    document.querySelector('body').style.overflow = 'hidden';
  }
});

formMovement.addEventListener('animationend', (event) => {
  if (event.animationName === 'move') {
    formMovement.style.display = 'none';
    document.querySelector('body').style.overflow = 'none';
  }
});


// squares

const ulSquares = document.querySelector('ul.squares')
for (let i = 0; i < 11; i++) {
  const li = document.createElement('li');

  const size = Math.floor(Math.random() * (120-5) + 5);
  const position = Math.random() * (99-70) + 70;
  const delay = Math.floor(Math.random() * (5-0.1) + 0.1);
  const duration = Math.floor(Math.random() * (24-12) + 12);

  li.style.width = `${size}px`;
  li.style.height = `${size}px`;
  li.style.bottom = `-${size}px`;  
  li.style.left = `${position}%`;
  li.style.animationDelay = `${delay}s`;
  li.style.animationDuration = `${duration}s`;


  ulSquares.appendChild(li);
}