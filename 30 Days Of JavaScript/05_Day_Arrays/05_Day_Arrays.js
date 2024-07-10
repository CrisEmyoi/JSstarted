

// TODO:****** Uso del constructor array ******


// syntax
const arr = Array();
// or
let ary = new Array();

console.log(arr); // []


// TODO:****** Uso de corchetes([]) ******

// syntax
// This the most recommended way to create an empty list
const ar = [];
console.log(arr);



// TODO:****** Como crear una matriz con valores******

const numbers = [0, 3.14, 9.81, 37, 98.6, 100] // array of numbers
const fruits = ['banana', 'orange', 'mango', 'lemon'] // array of strings, fruits
const vegetables = ['Tomato', 'Potato', 'Cabbage', 'Onion', 'Carrot'] // array of strings, vegetables
const animalProducts = ['milk', 'meat', 'butter', 'yoghurt'] // array of strings, products
const webTechs = ['HTML', 'CSS', 'JS', 'React', 'Redux', 'Node', 'MongoDB'] // array of web technologies
const countries = ['Finland', 'Denmark', 'Sweden', 'Norway', 'Iceland'] // array of strings, countries

// Print the array and its length
console.log(`Numbers:`, numbers);
console.log(`Numbre of  numbers:`, numbers.length);

console.log(`Fruits:`, fruits);
console.log(`Number of fruits`, fruits.length);

console.log(`Vegetables:`, vegetables);
console.log(`Number of vegetables`, vegetables.length);

console.log(`Animal Products:`, animalProducts);
console.log(`Number of animalProducts`, animalProducts.length);

console.log(`Web Techs:`, webTechs);
console.log(`Number of webTechs`, webTechs.length);

console.log(`Countries:`, countries);
console.log(`Number of countries`, countries.length);

// La matriz puede tener elementos de diferentes tipos de datos

const aray = [
    `Asabeneh`,
    250,
    {country: 'Finland', city: 'Helsinki'},
    {skills: [`HTML`, `CSS`, `JS`, `React`, `Python`]}
] // aray contiene diferentes tipos de datos
console.log(aray)

// Creación de una matriz mediante split

let js = `JavaScript`
const charsInJavaScript = js.split('')

console.log(charsInJavaScript) // ['J', 'a', 'v', 'a', 'S', 'c', 'r', 'i', 'p', 't']

let companiesString = `Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon`
const companies = companiesString.split(`,`)

console.log(companies) // ['Facebook', ' Google', ' Microsoft', ' Apple', ' IBM', ' Oracle', ' Amazon']

let txt = `Estoy aprendiendo con 309 days of JavaScript`
const words = txt.split(` `)

console.log(words)

// Acceso a elementos de matriz mediante index

// const fruits = ['banana', 'orange', 'mango', 'lemon']
let firstFruit = fruits[0]

console.log(firstFruit) // banana

secondFruit = fruits[1]
console.log(secondFruit) // orange

lastFruit = fruits[3]
console.log(lastFruit) // lemon

let lastIndex = fruits.length - 1
lastFruit = fruits[lastIndex]

console.log(lastFruit) // lemon

// With Numbers

console.log(numbers.length) // => to know the size of the array, which is 6
console.log(numbers) // [0, 3.14, 9.81, 37, 98.6, 100]
console.log(numbers[0]) // -> 0
console.log(numbers[5]) // -> 100

let numberslastIndex = numbers.length - 1
console.log(numbers[numberslastIndex]) // -> 100

// With Web Techs

console.log(webTechs)        // all the array items
console.log(webTechs.length) // => to know the size of the array, which is 7
console.log(webTechs[0])     //  -> HTML
console.log(webTechs[6])     //  -> MongoDB

let webTechslastIndex = webTechs.length - 1
console.log(webTechs[webTechslastIndex]) // -> MongoDB

// With Countries

console.log(countries)      // -> all countries in array
console.log(countries[0])   //  -> Albania
console.log(countries[10])  //  -> Kenya

let countrieslastIndex = countries.length - 1;
console.log(countries[countrieslastIndex]) //  -> Kenya


//  TODO:****** Modificación de un elemento de matrizModificación de un elemento de matriz ******


const numbers2 = [1,2,3,4,5]
numbers2[0] = 10
numbers2[1] = 20

console.log(numbers2) // [10, 20, 3, 4, 5]

countries[0] = `Afghanistan` // Replacing Albania by Afghanistan
let countrieslastIndex2 = countries.length -1
countries[countrieslastIndex2] = `Korea`

console.log(countries) // ['Afghanistan', 'Denmark', 'Sweden', 'Norway', 'Korea']


// TODO:****** Métodos para manipular matrices ****** 


// !Constructor de matrices (Array:To create an array.)
const array = Array() // creates an an empty array
console.log(array)

const eightEmptyValues = Array(8) // it creates eight empty values
console.log(eightEmptyValues) // [empty x 8]

// !Creación de valores estáticos con relleno (fill: Fill all the array elements with a static value)
const eightXvalues = Array(8).fill(`X`)
console.log(eightXvalues)

const eight0values = Array(8).fill(`0`)
console.log(eight0values)

const four4values = Array(8).fill(`4`)
console.log(four4values)

// !Concatenación de matrices mediante concat (concat:To concatenate two arrays.)
const firstList = [1,2,3]
const secondList = [4,5,6]
const thirdList = firstList.concat(secondList)

console.log(thirdList) // [1, 2, 3, 4, 5, 6]

const fruitsAndVegetables = fruits.concat(vegetables)

console.log(fruitsAndVegetables) // ['banana', 'orange', 'mango', 'lemon', 'Tomato', 'Potato', 'Cabbage', 'Onion', 'Carrot']

// !Obtención de indexar un elemento en la matriz array (indexOf:To check if an item exist in an array. If it exists it returns the index else it returns -1.)
const numbers3 = [1, 2, 3, 4, 5]

console.log(numbers3.indexOf(5)) // -> 4
console.log(numbers3.indexOf(0)) // -> -1
console.log(numbers3.indexOf(1)) // -> 0
console.log(numbers3.indexOf(6)) // -> -1


// !Compruebe si un elemento existe en una matriz. (Comprobar elementos en una lista)
// let us check if a banana exist in the array
let index = fruits.indexOf(`banana`) // -> 0

if (index === -1){
    console.log(`This fruit does not exist in the array`)
}else{
    console.log('This fruit does exist in the array')
}

// This fruit does exist in the array

// we can use also ternary here

index === -1 ? console.log('This fruit does not exist in the array'): console.log('This fruit does exist in the array')

// let us check if an avocado exist in the array

let indexOfAvocado = fruits.indexOf(`avocado`)
if (indexOfAvocado === -1){
    console.log(`This fruit does not exist in the array`)
}else{
    console.log('This fruit does exist in the array')
}
// *This fruit does not exist in the array

//! Obtener el último índice de un elemento en la matriz

//    lastIndexOf: Da la posición del último elemento de la matriz. Si existe, devuelve el índice, de lo contrario devuelve -1.
console.log(webTechs.lastIndexOf(2)) //* -> -1

//    includes:Para comprobar si existe un elemento en una matriz. Si existe, devuelve el verdadero, de lo contrario, devuelve falso.
console.log(webTechs.includes(`Node`)) //* true

//! Comprobación de la matriz
//   Array.isArray:Para comprobar si el tipo de datos es una matriz
console.log(Array.isArray(numbers)) //* true

//! Conversión de matriz en cadena
//    toString:Convierte la matriz en cadena
const numbers1 = [1, 2, 3, 4, 5]
console.log(numbers1.toString())
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
console.log(names.toString())

//! Unión de elementos de matriz
//    join: It is used to join the elements of the array, the argument we passed in the join method will be joined in the array and return as a string. By default, it joins with a comma, but we can pass different string parameter which can be joined between the items.
console.log(numbers1.join())

console.log(names.join()) //* -> console.log(names.join())
console.log(names.join(``)) //* -> AsabenehMathiasEliasBrook
console.log(names.join(` `)) //* -> Asabeneh Mathias Elias Brook
console.log(names.join(`, `)) //* -> Asabeneh, Mathias, Elias, Brook
console.log(names.join(` # `)) //* -> Asabeneh # Mathias # Elias # Brook

/* Using webTechs */

console.log(webTechs.join()) //* -> HTML,CSS,JS,React,Redux,Node,MongoDB
console.log(webTechs.join(` # `)) //* -> HTML # CSS # JS # React # Redux # Node # MongoDB

//! Elementos de matriz de sectores
// Slice: To cut out a multiple items in range. It takes two parameters:starting and ending position. It doesn't include the ending position.
console.log(numbers.slice()) //* -> it copies all  item
console.log(numbers.slice(0)) //* -> it copies all  item
console.log(numbers.slice(0, numbers.length)) //* it copies all  item
console.log(numbers.slice(1,4)) //* -> [2,3,4] // it doesn't include the ending position

// ! Método de empalme en matriz
// Splice: It takes three parameters:Starting position, number of times to be removed and number of items to be added.
const numbers4 = [1,2,3,4]

numbers4.splice()
console.log(numbers4) //* -> remove all items

numbers4.splice(0,1)
console.log(numbers4)  //* remove the first item

numbers4.splice(3, 3, 7, 8, 9)
console.log(numbers4) //* -> [1, 2, 3, 7, 8, 9] //it removes three item and replace three items

//! Adición de un elemento a una matriz mediante push
// Push: adding item in the end. To add item to the end of an existing array we use the push method

const array1 = [`item1`, `item2`, `item3`]
array1.push(`new item`)
console.log(array1) //* ['item1', 'item2', 'item3', 'new item']

const numbersPush = [1, 2, 3, 4, 5]
numbersPush.push(6)
console.log(numbersPush) //* [1,2,3,4,5,6]

numbersPush.pop() //* -> remove one item from the end
console.log(numbersPush) //* [1,2,3,4,5]

let fruitsPush = ['banana', 'orange', 'mango', 'lemon']
fruitsPush.push(`apple`)
console.log(fruitsPush) //* ['banana', 'orange', 'mango', 'lemon', 'apple']

fruitsPush.push(`lime`)
console.log(fruitsPush) //* ['banana', 'orange', 'mango', 'lemon', 'apple', 'lime']

//! Eliminación de un elemento desde el principio
// shift: Removing one array element in the beginning of the array.

const numbersShift = [1, 2, 3, 4, 5]
numbersShift.shift() //* -> remove one item from the beginning
console.log(numbersShift) //* -> [2,3,4,5]

//! Agregar un elemento desde el principio
// unshift: Adding array element in the beginning of the array.

const numbersUnshift = [1, 2, 3, 4, 5]
numbersUnshift.shift(0) //* -> add one item from the beginning
console.log(numbersUnshift) //* -> [0,1,2,3,4,5]

//! Invertir el orden de la matriz
// reverse: reverse the order of an array.

const numbersReverse = [1, 2, 3, 4, 5]
numbersReverse.reverse() // -> reverse array order
console.log(numbersReverse) // [5, 4, 3, 2, 1]

numbersReverse.reverse()
console.log(numbersReverse) // [1, 2, 3, 4, 5]

//! Ordenar elementos en una matriz
// sort: arrange array elements in ascending order. Sort takes a call back function, we will see how we use sort with a call back function in the coming sections.

const webTechsSort = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
  ]

webTechsSort.sort()
console.log(webTechsSort) 

webTechsSort.reverse()
console.log(webTechsSort)

//! Array of arrays
// Array can store different data types including an array itself. Let us create an array of arrays

const firstNums = [1,2,3]
const secondNums = [1.4,9]

const arrayOfArray = [[1,2,3], [1,2,3]]
console.log(arrayOfArray)

const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node','Express', 'MongoDB']
const fullStack = [frontEnd, backEnd]

console.log(fullStack)
console.log(fullStack.length)
console.log(fullStack[0])
console.log(fullStack[1])