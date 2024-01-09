// spread operator = ... allows an iterable such as an array or string to be expanded into seperate elements(unpack elements)

let numbers = [1,2,3,4,5]
let addNumber = [5,6,7,8,9]

// numbers.push(...addNumber)

let arr2 = [...numbers, ...addNumber, 9,10]
console.log(arr2)



// let maximum = Math.max(...numbers)
// let minimum  = Math.min(...numbers)
// console.log(arr2)

// console.log(numbers)

// let username ="Riuseigi"
// let letters = [...username]


// for(let letter of letters){
//     console.log(letter)
// 

// let fruits = ["apple", 'orange', "banana"]

// let newFruits = [...fruits]
// console.log(newFruits)

