//Array.includes = method of Array instances determines whether an array includes a certain value among its entries, returning true or false as appropriate.

const array1 = [1, 2, 3];

console.log(array1.includes(2));
// Expected output: true

const pets = ['cat', 'dog', 'bat'];

console.log(pets.includes('cat'));
// Expected output: true

console.log(pets.includes('at'));
// Expected output: false


//Machine Problem 1: Given an array of numbers, write a function that checks if a given number is present in the array using the array.includes() method. If the number is found, return true; otherwise, return false.


const numbers = [1, 2, 3, 4, 5];

function checkNumber(arr, num) {
    // Use array.includes() to check if the number is present in the array
    return arr.includes(num);
}

console.log(checkNumber(numbers, 3)); // Output: true
console.log(checkNumber(numbers, 6)); // Output: false


//what if it is in array
const testNumbers = [3, 6, 1];
function checkNumbersArray(arr,tesArr){
    return tesArr.map(num => arr.includes(num));
}
console.log(checkNumbersArray(numbers, testNumbers));
