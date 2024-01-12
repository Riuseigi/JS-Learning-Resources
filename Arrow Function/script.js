// arrow function =  a concise way to write function expressions a good for simple functions that you use only once (parameters) => some code

//Example 1
// const hello = (name,age) => {console.log(`Hello ${name}`)
//                         console.log(`You are ${age} years old`)}
// hello("Troy",24)

// Example 2
// setTimeout(() => {console.log("Hello")
  
// },3000)


//example 3

const numbers = [1,2,3,4,5,6,7,8,9]

const squares = numbers.map((elements) => {
    return Math.pow(elements,2)
})
const isEven = numbers.filter((elements) => {
  return elements % 2 == 0
})
const total = numbers.reduce((accumulator,elements) => {
    return accumulator +elements
})

console.log(total)