//Array.every() = method of Array instances tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value.

const isBelowThreshold = (currentValue) => currentValue < 40;

const array1 = [1, 30, 39, 29, 10, 13];

console.log(array1.every(isBelowThreshold));
// Expected output: true

//Problem 1: You are given an array of numbers. Write a function that takes the array and a target number, and returns true if every number in the array is greater than the target number, otherwise false.

const numbers = [10, 20, 30, 40, 50];

function isEveryNumberGreaterThanTarget(arr,target){
     return arr.every((num) => {
      return num > target;
    })
}


console.log(isEveryNumberGreaterThanTarget(numbers, 5)); // Output: true
console.log(isEveryNumberGreaterThanTarget(numbers, 25)); // Output: false



