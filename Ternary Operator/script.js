// Ternary operator = a shorcut to if{} and else{} statements helps to assign a variable based on a codition. condition ? codeIfTrue : codeIfFalse;

// let age = 23;
// let message = age >=18 ? "You are an adult": "You are a minor"

// console.log(message)



// let time = 16;
// let greeting = time<12 ? "Good Morning": "Good Afertnoon"
// console.log(greeting);


// let isStudent = true;
// let message = isStudent? "You're a student": "You're NOT a student";
// console.log(message)

let purchaseAmount = 125;
let discount = purchaseAmount>100 ? 10: 0;
let message = `Your total amount is $${purchaseAmount-purchaseAmount*(discount/100)}`

console.log(message)