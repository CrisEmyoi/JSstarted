// Arrow funtions
/*
const inchToCm = function (inches) {
  return inches * 2.54;
};

const inchToCm2 = (inches) => inches * 2.54;
*/
/*
const inchToCm = (inches) => inches * 2.54;

function add(a, b = 3) {
  return a + b;
}
  */
/*
const add = function (a, b = 3) {
  return a + b;
};

// si tienes mas de un parametro en tu funcion hay que ponerlos en parentesis
const add2 = (a, b = 3) => a + b;
*/

// Regresando un objeto

function makeABaby(first, last) {
  const baby = {
    name: `${first} ${last}`,
    age: 0,
  };
  return baby;
}

const makeABaby2 = (first, last) => {
  const baby = {
    name: `${first} ${last}`,
    age: 0,
  };
  return baby;
};

const makeABaby3 = (first, last) => ({
  name: `${first} ${last}`,
  age: 0,
});

const makeABaby4 = (first, last) => ({ name: `${first} ${last}`, age: 0 });

// IIFE
// Immediately Invoked Funtion Expression
(function (age) {
  console.log(`It works`);
  return `you are cool and ${age} years old`;
})();

// Metodos!!!
const cris = {
  name: `Cris Emyoi`,
  // Method!
  sayHi() {
    console.log(`Hey ${this.name}`);
    return `Hi criss how you doing`;
  },
  // Short hand method
  yellHi() {
    console.log(`HEY CRIS`);
  },
  // Arow Funtion
  whisperHi: () => {
    console.log(`hey criss i'm a mouse`);
  },
};

// Callback funtions
// Click Callback
const button = document.querySelector(`.clickMe`);

function handleClick() {
  console.log(`Great Clicking`);
}

// button.addEventListener(`click`, handleClick);
button.addEventListener(`click`, () => {
  console.log(`Nice Click`);
});

// Timer Callback
setTimeout(() => {
  console.log(`Done Time to eat`);
}, 1000);
