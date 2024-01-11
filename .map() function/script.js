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

const dates = ["2010-1-10", "2025-2-20", "2026-3-30"]

const formats = dates.map(formatDates)
console.log(formats)
function formatDates(element){
    const parts = element.split("-")
    return `${parts[1]}|${parts[2]}|${parts[0]}`
}









