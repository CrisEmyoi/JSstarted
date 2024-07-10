const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya'
  ]
  
  const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
  ]

//! Declare an empty array;
const arr = Array()

//! Declare an array with more than 5 number of elements
const arrary = [1,5,8,0,4]

//! Find the length of your array
console.log(arrary.length) // -> 5

//! Get the first item, the middle item and the last item of the array
console.log(arrary[0]) // 1
console.log(arrary[2]) // 8
console.log(arrary[4]) // 4

//! Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. The array size should be greater than 5
const mixedDataTypes = ['HTML','CSS', 'JavaScript', 'React', 'Redux', 'Node',]
console.log(mixedDataTypes.length) // 6

//! Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
const itCompanies = [`Facebook`, `Google`, `Microsoft`, `Apple`, `IBM`, `Oracle`, `Amazon`]

//! Print the array using console.log()
console.log(itCompanies); // 'Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'

//! Print the number of companies in the array
console.log(itCompanies.length) // 7

//! Print the first company, middle and last company    
console.log(itCompanies[0]) // Facebook
console.log(itCompanies[3]) // Apple
console.log(itCompanies[6]) // Amazon

//! Print out each company
console.log(itCompanies) // `Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon`

//! Change each company name to uppercase one by one and print them out
const uppercasedArray = itCompanies.map((company) => company.toUpperCase());
console.log(uppercasedArray)

//! Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.
console.log(`${itCompanies} are big IT companies`)

//! Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found
const company = `Google`
let index = itCompanies.indexOf(company)

if (index === -1){
    console.log(`Company is not found`)
}else{
    console.log(company)
}

//! Filter out companies which have more than one 'o' without the filter method
const indexOfCompanies = itCompanies.toString()

if (indexOfCompanies.includes('o')){
    console.log(itCompanies)
}else{
console.log(`there is not in the array`)
}

//! Sort the array using sort() method
console.log(itCompanies.sort())

//! Reverse the array using reverse() method
console.log(itCompanies.reverse())

//! Slice out the first 3 companies from the array
console.log(itCompanies.slice(3))

//! Slice out the last 3 companies from the array
console.log(itCompanies.slice(0,4))

//! Slice out the middle IT company or companies from the array
console.log(itCompanies.slice(0,2).concat(itCompanies.slice(4)))

//! Remove the first IT company from the array
console.log(itCompanies.slice(1))

//! Remove the middle IT company or companies from the array
console.log(itCompanies.splice(0,3).concat(itCompanies.splice(1,5)))

//! Remove the last IT company from the array
console.log(itCompanies.pop())
//! Remove all IT companies
console.log(itCompanies.splice())