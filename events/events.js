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

function buyItem() {
  console.log(`BUYING ITEM`);
}

console.log(buyButtons);
// buyButtons.addEventListener('click', buyItem);

buyButtons.forEach((buyButton) => {
  console.log(`Binding the buy button`);
  buyButton.addEventListener(`click`, buyItem);
});
