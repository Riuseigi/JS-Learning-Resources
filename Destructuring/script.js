// destructuring - extract values form arrays and objects, then assign them to valiables in a convenient way


// Example 1
// Swap the value of two variables

// let a = 1;
// let b = 2;

// [a, b] = [b, a]

// console.log(a)

// console.log(b)


//Example 2
// Swap 2 elements in array

// const colors = ["red", "green","blue","black", "white"];

// [colors[0],colors[4]] = [colors[4],colors[0]]

// console.log(colors)

// Example 3
// Assign array elements to variables

// const colors = ["red", "green","blue","black", "white"];

// const [firstColor,secondColor,thirdColor, ...extraColors] = colors

// console.log(firstColor) //red
// console.log(secondColor) //green
// console.log(thirdColor) //blue
// console.log(extraColors) //(2) ['black', 'white']


//Example 4
//Extract values from objects

// const person1 ={
//   firstName: "SpongeBob",
//   lastName: "Squarepants",
//   age: 35,
//   job: "fry Cook"
// }
// const person2 ={
//   firstName: "Patrick",
//   lastName: "Star",
//   age: 30,
 
// }

// give a value of that unemployed pr undefined value eg. Default values
// const {firstName,lastName,age,job="Unemployed"} = person1

// console.log(firstName) //SpongeBob
// console.log(lastName) // Squarepants
// console.log(age) // 35
// console.log(job) // fry Cook



//Example 5
// Destructuring function parameters
function displayPerson({firstName,lastName,age,job="Unemployed"}){
  console.log(`Name: ${firstName} ${lastName}`)
  console.log(`Age: ${age}`)
  console.log(`Job: ${job}`)
}

const person1 ={
  firstName: "SpongeBob",
  lastName: "Squarepants",
  age: 35,
  job: "fry Cook"
}
const person2 ={
  firstName: "Patrick",
  lastName: "Star",
  age: 30,
 
}
displayPerson(person1)
// Name: SpongeBob Squarepants
// Age: 35
// 70 Job: fry Cook
displayPerson(person2)
// Name: Patrick Star
// script.js:69 Age: 30
// script.js:70 Job: Unemployed



// Machine Problem 1
// Swapping Variables:

// Write a function that swaps the values of two variables using destructuring.


function swapValues(a,b){
   [a,b] = [b,a]
   console.log(`a: ${a}`)
   console.log(`b: ${b}`)
}

swapValues(8,9)



