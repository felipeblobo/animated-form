const buttonOnClick = document.querySelector('button');
const formMovement = document.querySelector('form');


buttonOnClick.addEventListener('click', (event) => {
  event.preventDefault();

  const fields = [...document.querySelectorAll("input")]
  fields.forEach((field) => {
    if(field.value === '') {
      formMovement.classList.add('validate-error')
    }
  });

  const formError = document.querySelector('.validate-error')
  if (formError) {
    formError.addEventListener('animationend', (event) => {
      if(event.animationName === 'nono') {
        formError.classList.remove('validate-error');
      }
    })
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
