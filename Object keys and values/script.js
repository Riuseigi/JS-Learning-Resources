//Object.keys, values, entries
// These methods are generic, there is a common agreement to use them for data structures. If we ever create a data structure of our own, we should implement them too.

// They are supported for:

// Map
// Set
// Array
// Plain objects also support similar methods, but the syntax is a bit different.

// Object.keys, values, entries
// For plain objects, the following methods are available:

// Object.keys(obj) – returns an array of keys.
// Object.values(obj) – returns an array of values.
// Object.entries(obj) – returns an array of [key, value] pairs.
// Please note the distinctions (compared to map for example):
let user = {
  name: "John",
  age: 30
};

// loop over values
for (let value of Object.values(user)) {
  alert(value); // John, then 30
}



// coding problem 1
// There is a salaries object with arbitrary number of salaries.

// Write the function sumSalaries(salaries) that returns the sum of all salaries using Object.values and the for..of loop.

// If salaries is empty, then the result must be 0.
let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250


 

 
};
 function sumSalaries(salaries){
  let sum = 0
     for (let salary of Object.values(salaries)){
     sum += salary
    }
      return sum;
  }
 console.log( sumSalaries(salaries) );