// console.log('it Works');

// Function Definition
/*
const bill = 100;
const taxRate = 1.13;
*/

function calculateBill(billAmount, taxRate) {
  // This is the funcion body
  console.log(billAmount, taxRate);
  console.log(`Running Calculate Bill!!`);
  const total = billAmount * 1 + taxRate;
  console.log(total);
  return total;
}
const crisTotal = 500;
const crisTaxRate = 0.2;

// Funtion 'Call' or **Run**
const myTotal = calculateBill(crisTotal, crisTaxRate);
// const myTotal2 = calculateBill(200, 0.13);

// bill = 200;
// const myTotal2 = calculateBill();

console.log(`Your total is $${myTotal}`);

function sayHiTo(firstName) {
  return `Hello ${firstName}`;
}

const geeting = sayHiTo(`Laura`);
console.log(geeting);

function init() {
  console.log(`dfjklslkdfs`);
}

console.log(init);
