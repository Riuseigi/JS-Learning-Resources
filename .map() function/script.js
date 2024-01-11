// .map = accepts a callback and applies that function to each element of an array, then return a new array

//1st Example
// const numbers = [1,2,3,4,5]
// const squared = numbers.map(square)
// const cubes = numbers.map(cube)
// console.log(cube)

// function square(element){
//     return Math.pow(element,2)
// }

// function cube(element){
//     return Math.pow(element,4)
// }


//2nd Example

// const stundents = ["Riuseigi", "Diana", "Aoki", "Miyata", "Takamura"]

// const studentUpperCase = stundents.map(uppercase)
// const studentLower = stundents.map(lowercase)
// console.log(studentUpperCase)
// console.log(studentLower)

// function uppercase(element){
//     return element.toUpperCase();
// }

// function lowercase(element){
//     return element.toLowerCase();
// }



//3rd example 

<<<<<<< HEAD
// const dates = ["2010-1-10", "2025-2-20", "2026-3-30"]

// const formats = dates.map(formatDates)
// console.log(formats)
// function formatDates(element){
//     const parts = element.split("-")
//     return `${parts[1]}|${parts[2]}|${parts[0]}`
// }


// Mahchine problem 1 = Filtering Even Numbers

// Create an array of numbers from 1 to 20.
// Use forEach to print only the even numbers in the array.
// Use map to create a new array containing only the even numbers.

let numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]

let evenNumbersArray = numbers.map(evenNumber).filter(Boolean)


evenNumbersArray.forEach(displayConsole)

function evenNumber(element){
    return element % 2 === 0 ? element : null
}
function displayConsole(element){
    console.log(element)
=======
const dates = ["2010-1-10", "2025-2-20", "2026-3-30"]

const formats = dates.map(formatDates)
console.log(formats)
function formatDates(element){
    const parts = element.split("-")
    return `${parts[1]}|${parts[2]}|${parts[0]}`
>>>>>>> 81a7652b5c4dd3f142bb4bb6ab59e62d3a1005b9
}









<<<<<<< HEAD






=======
>>>>>>> 81a7652b5c4dd3f142bb4bb6ab59e62d3a1005b9