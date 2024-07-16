const cris = document.querySelector(`.cris`);

cris.addEventListener(`click`, (event) => {
  // eslint-disable-next-line no-restricted-globals
  const shouldChangPage = confirm(
    `Este sitio non podria ser seguro seguro que desea continuar`,
  );
  if (!shouldChangPage) {
    event.preventDefault();
  }
  console.log(`You click it`);
});

const signupForm = document.querySelector(`[name="signup"]`);

signupForm.addEventListener(`submit`, (event) => {
  const name = event.currentTarget.name.value;
  if (name.includes('chad')) {
    alert('sorry Bro');
    event.preventDefault();
  }

  /* console.log(event.currentTarget.name.value);
  console.log(event.currentTarget.email.value);
  console.log(event.currentTarget.agree.checked); */
});

function logEvent(event) {
  console.log(event.type);
  console.log(event.currentTarget.value);
}
signupForm.name.addEventListener('keyup', logEvent);
signupForm.name.addEventListener('keydown', logEvent);
signupForm.name.addEventListener('focus', logEvent);
signupForm.name.addEventListener('blur', logEvent);
// keyup
// keydown
// focus
// blur

const photo = document.querySelector('.photo');

/* function handlePhotoClick() {
  console.log('You Click The Photo');
  // eslint-disable-next-line no-restricted-globals
  console.log(event.key);
}
*/

function handlePhotoClick(event) {
  if (event.type === `click` || event.key === 'Enter') {
    console.log('You Click The Photo');
  }
}

photo.addEventListener('click', handlePhotoClick);
photo.addEventListener('keyup', handlePhotoClick);

function suma(a, b) {
  return a + b;
}
