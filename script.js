const buttonOnClick = document.querySelector('button');
const formMovement = document.querySelector('form');
buttonOnClick.addEventListener('click', (event) => {
  event.preventDefault();
  formMovement.classList.add('moveDown');
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
