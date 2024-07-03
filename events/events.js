const butts = document.querySelector('.butts');
const coolButts = document.querySelector('.cool');

function handleClick() {
  console.log(`🐛It got Slap!!`);
}

const hooray = () => console.log(`HORRAY`);

butts.addEventListener('click', () => {
  console.log(`Im an anon`);
});

coolButts.addEventListener(`click`, hooray);

butts.removeEventListener(`click`, handleClick);

// Listen on multiple items
const buyButtons = document.querySelectorAll(`button.buy`);

function handleBuyButtonClick(evento) {
  console.log('You clicked a button!');
  const button = evento.target;
  // console.log(button.textContent);
  // console.log(parseFloat(evento.target.dataset.price));
  console.log(evento.target);
  console.log(evento.currentTarget);
  console.log(evento.target === evento.currentTarget);
  // Stop this event from bubbling up
  evento.stopPropagation();
}

buyButtons.forEach((buyButton) => {
  buyButton.addEventListener(`click`, handleBuyButtonClick);
});

window.addEventListener(
  `click`,
  (buyButton) => {
    console.log(`Clickeaste la pantalla`);
    console.log(event.target);
  },
  { capture: true },
);

/*
function buyItem() {
  console.log(`BUYING ITEM`);
}

function handleBuyButtonClick(oprah) {
  console.log(`Buying the buy button`);
  oprah.addEventListener(`click`, buyItem);
}

console.log(buyButtons);
// buyButtons.addEventListener('click', buyItem);

// buyButtons.forEach(handleBuyButtonClick);

buyButtons.forEach((button) => {
  button.addEventListener(`click`, () => {
    console.log(`You Click IT`);
  });
});
*/

const photoEl = document.querySelector(`.photo`);

photoEl.addEventListener(`mouseenter`, (e) => {
  console.log(e.currentTarget);
  console.log(this);
});
