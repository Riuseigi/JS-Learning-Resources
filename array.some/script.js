//Array Some = instances tests whether at least one element in the array passes the test implemented by the provided function. It returns true if, in the array, it finds an element for which the provided function returns true; otherwise it returns false. It doesn't modify the array.;

//Example 1
const array = [1,2,3,4,5,6,7,8,9,10];

const hasEven = array.some((num) => num % 2 === 0);

console.log(hasEven);



//example 2

const items = [{name:"Bike",price:100},{name:"TV",price:200},{name:"Album",price:10},{name:"Book",price:5},{name:"Phone",price:500},{name:"Computer",price:1000}];

const hasExpensiveItems = items.some((item) => item.price > 100);



//Machine Problem 1
// Problem: Write a function that takes an array of numbers and a target number. The function should return true if there are two numbers in the array that sum up to the target number, and false otherwise. You may not use the same element twice.

/**
 * Check if the given array has a pair of elements that sum up to the target value.
 *
 * @param {array} arr - The input array to search for pairs.
 * @param {number} target - The target sum value to find a pair for.
 * @return {boolean} Whether a pair with the sum is found or not.
 */
function hasPairWithSum(arr, target) {
    let found = false
    array.some((num,index)=>{
        let complement = num - target;

        if(arr.includes(complement)){
            found = true
            return found
        }
    })
    return found;
}

console.log(hasPairWithSum([1, 2, 3, 4, 5], 9)); // true, because 4 + 5 = 9
console.log(hasPairWithSum([1, 2, 3, 4, 5], 10)); // false, no pair sums up to 10
console.log(hasPairWithSum([3, 1, 4, 6], 6)); // true, because 3 + 3 = 6


//Machine Problem 2

// You have an array of numbers, and you want to check if any of the numbers are greater than 10. Use the some method to solve this problem.


function greaterThan10(arr){
    let found = false
    arr.some(num =>{
        if(num > 10){
            found = true
            return found
        }
    })
    return found
   
}
console.log(greaterThan10([1, 2, 3, 4, 5]));
console.log(greaterThan10([1, 2, 3, 45, 5]));
console.log(greaterThan10([3, 1, 4, 6]));




//Machine Problem 3
// You have an array of objects representing people, each with a name and age property. You want to check if any of the people in the array are adults (age 18 or older). Use the some method to solve this problem.

const people = [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 17 },
    { name: 'Charlie', age: 30 },
    { name: 'David', age: 15 }
  ];

function isAdult(arr){
    let found = false
    arr.some(person =>{
        if(person.age>=18){
            found = true
            return found
        }
    })
    return found;
}

console.log(isAdult(people))